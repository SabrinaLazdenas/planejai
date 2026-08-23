import { useEffect, useRef, useState } from 'react'
import { Send } from 'lucide-react'

import { buildChatPrompt, type ChatMessage } from '@/data/aiPrompt'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { getChatResponse } from '@/services/aiService'

interface MyChatProps {
  simulationId: string
}

const getStorageKey = (simulationId: string) =>
  `simulation-chat-${simulationId}`

export function MyChat({ simulationId }: MyChatProps) {
  const { getFormData } = useSimulationStorage()

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem(getStorageKey(simulationId))

    if (!saved) {
      return []
    }

    try {
      return JSON.parse(saved) as ChatMessage[]
    } catch {
      return []
    }
  })

  const [question, setQuestion] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    localStorage.setItem(
      getStorageKey(simulationId),
      JSON.stringify(messages),
    )
  }, [messages, simulationId])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages, isLoading])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedQuestion = question.trim()

    if (!trimmedQuestion || isLoading) {
      return
    }

    const simulation = getFormData(simulationId)

    if (!simulation) {
      setError('Simulação não encontrada.')
      return
    }

    const userMessage: ChatMessage = {
      role: 'user',
      content: trimmedQuestion,
    }

    const updatedMessages = [...messages, userMessage]

    setMessages(updatedMessages)
    setQuestion('')
    setError(null)
    setIsLoading(true)

    try {
      const prompt = buildChatPrompt(
        simulation,
        messages,
        trimmedQuestion,
      )

      const response = await getChatResponse(prompt)

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response,
      }

      setMessages([...updatedMessages, assistantMessage])
    } catch {
      setError(
        'Não foi possível obter uma resposta agora. Tente novamente.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-6 border-t border-border pt-5">
      <div className="mb-3 flex items-center gap-1.5">
        <span>💬</span>

        <span className="text-primary text-xs font-semibold tracking-widest uppercase">
          Converse com seu Educador Financeiro
        </span>
      </div>

      <div className="mb-4 max-h-80 space-y-3 overflow-y-auto pr-1">
        {messages.length === 0 && (
          <p className="text-muted-foreground text-sm">
            Faça uma pergunta sobre sua simulação financeira.
          </p>
        )}

        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex ${
              message.role === 'user'
                ? 'justify-end'
                : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary-button text-foreground'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-secondary-button text-muted-foreground rounded-2xl px-4 py-3 text-sm">
              Pensando...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {error && (
        <p className="mb-3 text-sm text-red-500">
          ⚠️ {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Digite sua pergunta..."
          disabled={isLoading}
          className="bg-input text-foreground placeholder:text-muted-foreground min-w-0 flex-1 rounded-xl border border-border px-4 py-3 text-sm outline-none transition focus:border-primary disabled:cursor-not-allowed disabled:opacity-60"
        />

        <button
          type="submit"
          disabled={!question.trim() || isLoading}
          aria-label="Enviar pergunta"
          className="bg-primary text-primary-foreground flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  )
}