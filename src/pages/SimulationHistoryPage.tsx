import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ou 'next/navigation' se for Next.js
import { useSimulationStorage } from '@/hooks/useSimulationStorage';
import type { SimulationRecord } from '@/data/simulation';
import { Trash2, FileText, ChevronRight } from 'lucide-react';

export function SimulationHistoryPage() {
  const [simulations, setSimulations] = useState<SimulationRecord[]>([]);
  const { getAllFormData } = useSimulationStorage();
  const navigate = useNavigate(); // Hook de navegação

  useEffect(() => {
    const data = getAllFormData();
    setSimulations(data);
  }, []);

  const handleDelete = (id: string) => {
    const storage = localStorage.getItem('simulation-data');
    if (!storage) return;
    const data = JSON.parse(storage) as SimulationRecord[];
    const updated = data.filter((item) => item.id !== id);
    localStorage.setItem('simulation-data', JSON.stringify(updated));
    setSimulations(updated);
  };

  const parseCurrency = (value: string | number | undefined) => {
    if (!value) return 0;
    if (typeof value === 'number') return value;
    const cleanValue = value.replace(/\./g, '').replace(',', '.');
    const number = parseFloat(cleanValue);
    return isNaN(number) ? 0 : number;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Histórico de simulações
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Acompanhe o histórico de seus planos financeiros.
        </p>
      </div>

      {simulations.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-12 text-center shadow-sm">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Nenhuma simulação encontrada no histórico.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {simulations.map((sim) => {
            const cost = parseCurrency(sim.goalAmount);
            const months = Number(sim.goalDeadline || 1);
            const monthlySavings = months > 0 ? cost / months : 0;

            return (
              <div
                key={sim.id}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex items-center justify-between shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
                      {sim.goalName || "Meta Financeira"}
                    </h3>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                      12/05/2026
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-8 text-xs">
                  <div>
                    <span className="block text-zinc-400 uppercase tracking-wider font-medium">Custo da Meta</span>
                    <strong className="text-zinc-800 dark:text-zinc-200 text-sm">
                      R$ {cost.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </strong>
                  </div>
                  <div>
                    <span className="block text-zinc-400 uppercase tracking-wider font-medium">Prazo</span>
                    <strong className="text-zinc-800 dark:text-zinc-200 text-sm">
                      {months} meses
                    </strong>
                  </div>
                  <div>
                    <span className="block text-zinc-400 uppercase tracking-wider font-medium">Economia Mensal</span>
                    <strong className="text-zinc-800 dark:text-zinc-200 text-sm">
                      R$ {monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </strong>
                  </div>
                </div>

                {/* Ações: Excluir e Ver Detalhes */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDelete(sim.id)}
                    className="p-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition"
                    title="Excluir simulação"
                  >
                    <Trash2 size={18} />
                  </button>

                  <button
                    onClick={() => navigate(`/resultado/${sim.id}`)} // Ajuste a rota se necessário conforme as rotas da professora
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl transition"
                  >
                    Ver detalhes
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}