import React from 'react';
import { ArrowLeft, Activity, Cpu, BarChart3 } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const PerformanceView: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-off-black text-white font-sans selection:bg-neon-volt selection:text-black animate-in fade-in duration-500">
      <nav className="fixed top-0 w-full z-50 bg-off-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-volt rounded-full animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Protocolo de Performance // v2.4</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 border border-neon-volt/30 bg-neon-volt/5 rounded text-[10px] font-mono uppercase text-neon-volt tracking-widest">
              [ ALTA PERFORMANCE ]
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-none">
              Engenharia <br/>
              <span className="text-transparent stroke-text">de Precisão.</span>
            </h1>
            
            <p className="text-lg text-neutral-400 font-light leading-relaxed border-l-2 border-neon-volt pl-6">
              Nós não adivinhamos. Nós medimos. Nossos planos de treino adaptativos são construídos com dados biométricos em tempo real, garantindo que cada passo tenha um propósito.
            </p>
          </div>

          <div className="relative bg-neutral-900 border border-white/5 p-10 rounded-[2rem] space-y-10">
            <div className="flex justify-between items-center border-b border-white/5 pb-8">
              <p className="text-[10px] font-bold uppercase text-neutral-500 tracking-[0.2em]">Fluxo de Treino</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-volt animate-pulse" />
                <span className="text-[10px] font-bold uppercase text-white tracking-widest">Sincronização Ao Vivo</span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Activity, label: 'Ingestão de Dados', status: 'SYNCED', desc: 'Integração Garmin / Apple Health' },
                { icon: Cpu, label: 'Análise de IA', status: 'PROCESSING', desc: 'Cálculo de Esforço e Recuperação' },
                { icon: BarChart3, label: 'Adaptação do Plano', status: 'GENERATING', desc: 'Ajuste Dinâmico de Cronograma' },
              ].map((step, i) => (
                <div key={i} className={`flex flex-col p-6 rounded-xl border transition-all ${
                  i === 1 
                    ? 'bg-white text-black border-white' 
                    : 'bg-black/40 border-white/5 text-neutral-500'
                }`}>
                  <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                          <step.icon className="w-4 h-4" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">{step.label}</span>
                      </div>
                  </div>
                  <p className={`text-xs ${i === 1 ? 'text-neutral-600' : 'text-neutral-600'}`}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Auditoria Biométrica", desc: "Mergulho profundo em sua cadência, passada e variabilidade da frequência cardíaca." },
            { title: "Agendamento Adaptativo", desc: "Planos que mudam com base no seu sono e pontuações de recuperação." },
            { title: "Previsão de Corrida", desc: "Previsões impulsionadas por IA para seu próximo grande evento." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-neon-volt transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-neon-volt/10 rounded-sm">
                  <Activity className="w-6 h-6 text-neon-volt" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-neon-volt transition-colors">
                  [ RECURSO ]
                </span>
              </div>
              <h3 className="text-xl font-display uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </div>
  );
};

export default PerformanceView;
