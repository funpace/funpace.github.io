import React from 'react';
import { ArrowLeft, ArrowRight, Activity, Users, Zap, Hexagon, Triangle } from 'lucide-react';

interface Props {
  onBack: () => void;
  onApply: () => void;
}

const MethodologyView: React.FC<Props> = ({ onBack, onApply }) => {
  return (
    <div className="min-h-screen bg-off-black text-white font-sans selection:bg-neon-volt selection:text-black overflow-x-hidden animate-in fade-in duration-500">
      
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-off-black/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            VOLTAR
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-volt rounded-full animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Convergence Protocol // v1.0</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 border border-neon-volt/30 bg-neon-volt/5 rounded text-[10px] font-mono uppercase text-neon-volt tracking-widest">
                [ A METODOLOGIA: CONVERGENCE PROTOCOL ]
              </div>
              
              <h1 className="text-2xl md:text-4xl font-display uppercase tracking-tighter leading-none">
                "Correr é um ato mecânico. <br/>
                <span className="text-transparent stroke-text">Treinar no FunPace é um</span> <br/>
                 ato de engenharia."
              </h1>
              
              <p className="text-lg text-neutral-400 font-light leading-relaxed border-l-2 border-white/10 pl-6">
                Nossa metodologia não se baseia apenas em volume de quilometragem. Ela se baseia na sincronia de três vetores que, isolados, são apenas esforço, mas juntos, tornam-se inevitabilidade de progresso.
              </p>
            </div>

            {/* Triad Visual */}
            <div className="relative flex justify-center items-center h-[400px]">
              <div className="absolute inset-0 bg-neon-volt/5 blur-[100px] rounded-full" />
              <div className="relative w-64 h-64 group">
                <div className="absolute inset-0 border-2 border-white/20 rotate-0 transition-all duration-1000 group-hover:rotate-180" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                <div className="absolute inset-0 border-2 border-neon-volt/50 rotate-0 scale-90 transition-all duration-1000 group-hover:rotate-[-180deg]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-4 h-4 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-pulse" />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-neon-volt">
                  [ COMMUNITY ]
                </div>
                <div className="absolute -bottom-8 -left-10 text-[10px] font-mono uppercase tracking-widest text-cobalt-blue">
                  [ PERFORMANCE ]
                </div>
                <div className="absolute -bottom-8 -right-10 text-[10px] font-mono uppercase tracking-widest text-pink-500">
                  [ GAMIFICATION ]
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {/* Pillar 1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-neon-volt transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-neon-volt/10 rounded-sm">
                  <Activity className="w-6 h-6 text-neon-volt" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-neon-volt transition-colors">
                  [ DATA-DRIVEN ]
                </span>
              </div>
              <h3 className="text-xl font-display uppercase tracking-tight mb-4">
                1. Mecânica Adaptativa
              </h3>
              <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
                <p>
                  <strong className="text-white uppercase text-xs tracking-wider block mb-1">A Entrega:</strong>
                  Treinos baseados em zonas de esforço real e feedback de dados.
                </p>
                <p>
                  <strong className="text-white uppercase text-xs tracking-wider block mb-1">O Diferencial:</strong>
                  O treino não termina quando o GPS para. Analisamos o rastro de performance para ajustar o próximo bloco em tempo real. Você não está apenas correndo; você está afinando uma máquina.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-cobalt-blue transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-cobalt-blue/10 rounded-sm">
                  <Users className="w-6 h-6 text-cobalt-blue" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-cobalt-blue transition-colors">
                  [ COMMUNITY-POWERED ]
                </span>
              </div>
              <h3 className="text-xl font-display uppercase tracking-tight mb-4">
                2. Momentum Coletivo
              </h3>
              <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
                <p>
                  <strong className="text-white uppercase text-xs tracking-wider block mb-1">A Entrega:</strong>
                  Sincronização com o PaceFun. Onde o seu treino individual alimenta o ranking do grupo.
                </p>
                <p>
                  <strong className="text-white uppercase text-xs tracking-wider block mb-1">O Diferencial:</strong>
                  Eliminamos a solidão do asfalto. Na FunPace, o seu "eu" é sustentado pelo "nós". Se o grupo acelera, você acelera. É a pressão social usada como combustível.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-pink-500 transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-pink-500/10 rounded-sm">
                  <Zap className="w-6 h-6 text-pink-500" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-pink-500 transition-colors">
                  [ TOKENIZED-SWEAT ]
                </span>
              </div>
              <h3 className="text-xl font-display uppercase tracking-tight mb-4">
                3. Mineração de Esforço
              </h3>
              <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
                <p>
                  <strong className="text-white uppercase text-xs tracking-wider block mb-1">A Entrega:</strong>
                  O sistema de Funnits. Cada KM não é apenas um registro no Strava; é um depósito na sua conta de ativos digitais.
                </p>
                <p>
                  <strong className="text-white uppercase text-xs tracking-wider block mb-1">O Diferencial:</strong>
                  Transformamos a disciplina em um jogo de recompensa imediata. Você não corre "para um dia chegar lá". Você corre porque hoje você minerou valor.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center border-t border-white/10 pt-20">
            <button 
              onClick={onApply}
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black overflow-hidden rounded-sm hover:bg-neon-volt transition-colors duration-300"
            >
              <span className="text-sm font-bold uppercase tracking-[0.2em]">
                [ Aplicar Metodologia ]
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-6 text-[10px] font-mono uppercase text-neutral-500 tracking-widest">
              Vagas limitadas para o próximo ciclo
            </p>
          </div>

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

export default MethodologyView;