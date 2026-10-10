
export interface InsightData {
  feasibility: {
    status: 'viable' | 'needs_adjustment' | 'unfeasible'
    content: string
  }
  diagnosis: {
    content: string
  }
  suggestions: {
    items: string[]
  }
  extraIncome: {
    items: string[]
  }
  investment: {
    items: string[]
  }
  motivation: {
    content: string
  }
}

const GEMINI_API_URL = '/api/chat'

const callGeminiAPI = async (prompt: string): Promise<string> => {
  const response = await fetch(GEMINI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  })

  const data: { text?: string; error?: string } = await response.json()

  if (!response.ok) {
    throw new Error(data.error ?? `Erro na requisição: ${response.status}`)
  }

  if (!data.text) {
    throw new Error('O servidor não retornou uma resposta.')
  }

  return data.text
}

export const getInsight = async (prompt: string): Promise<InsightData> => {
  const json = await callGeminiAPI(prompt)

  return JSON.parse(json) as InsightData
}

export const getChatResponse = async (prompt: string): Promise<string> => {
  return callGeminiAPI(prompt)
}
