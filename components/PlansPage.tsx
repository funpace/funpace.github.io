import React from 'react';
import { ArrowLeft, Check, Zap, Crown, Star } from 'lucide-react';

interface Props {
  onBack: () => void;
  onSelectPlan: (plan: 'run' | 'pro') => void;
}

const PlansPage: React.FC<Props> = ({ onBack, onSelectPlan }) => {
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
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Escolha seu Plano</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-3 py-1 border border-white/30 bg-white/5 rounded text-[10px] font-mono uppercase text-white tracking-widest">
            [ MEMBERSHIP ]
          </div>
          <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none">
            Entre para o <br/>
            <span className="text-transparent stroke-text">Movimento.</span>
          </h1>
        <p className="text-neutral-400 max-w-xl mx-auto font-light">
          Escolha como você quer evoluir. Seja para sentir o pertencimento ou para buscar sua melhor versão.
          Valores de lançamento, com reajuste previsto no médio prazo.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* FUNPACE RUN */}
          <div className="relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 group flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-800 border border-white/10 px-4 py-1 rounded-full">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">🥈 FunPace Run</span>
            </div>
            
            <div className="text-center mb-8 mt-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm text-neutral-400">R$</span>
                <span className="text-5xl font-display tracking-tight">119</span>
                <span className="text-xl font-display tracking-tight">,97</span>
                <span className="text-sm text-neutral-400">/mês</span>
              </div>
              <p className="text-sm text-neutral-400 mt-4 font-light">
                Para quem quer correr em comunidade e viver o lifestyle FUNPACE.
              </p>
            </div>

            <div className="space-y-4 mb-8 flex-1">
              {[
                "Kit de boas-vindas + camiseta do clube",
                "Long Run mensal",
                "Grupo fechado Run",
                "Missões semanais",
                "Challenges mensais",
                "Desconto Pré Venda Coffee Party Club",
                "Prioridade na compra de drops",
                "Planilhas de treino por nível",
                "Medalhas digitais de performance",
                "Ranking interno"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-neutral-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <button
                onClick={() => onSelectPlan('run')}
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors rounded-sm"
              >
                Selecionar Run
              </button>
              
              <p className="text-[10px] text-center text-neutral-500 mt-4 font-mono uppercase tracking-wider">
                Perfeito para sentir pertencimento
              </p>
            </div>
          </div>

          {/* FUNPACE PRO */}
          <div className="relative bg-neutral-900/80 border border-neon-volt/30 rounded-2xl p-8 hover:border-neon-volt transition-all duration-300 group shadow-[0_0_30px_rgba(204,255,0,0.05)] flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-volt text-black px-4 py-1 rounded-full shadow-[0_0_15px_rgba(204,255,0,0.4)]">
              <span className="text-xs font-bold font-mono uppercase tracking-widest flex items-center gap-2">
                <Crown className="w-3 h-3" />
                🥇 FunPace Pro
              </span>
            </div>
            
            <div className="text-center mb-8 mt-4">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm text-neutral-400">R$</span>
                <span className="text-5xl font-display tracking-tight text-white">149</span>
                <span className="text-sm text-neutral-400">/mês</span>
              </div>
              <p className="text-sm text-neutral-400 mt-4 font-light">
                Para quem quer performance, estilo e acesso completo à experiência.
              </p>
            </div>

            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-center gap-2 text-neon-volt text-xs font-mono uppercase tracking-widest mb-2">
                <Zap className="w-3 h-3" />
                Tudo do plano RUN +
              </div>
              {[
                "Acesso aos workshops mensais",
                "Descontos em eventos pagos",
                "Acesso antecipado aos lançamentos",
                "Prioridade máxima em drops",
                "Conteúdo exclusivo de performance"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-neon-volt/10 p-0.5 rounded-full">
                    <Check className="w-3 h-3 text-neon-volt shrink-0" />
                  </div>
                  <span className="text-sm text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <button
                onClick={() => onSelectPlan('pro')}
                className="w-full py-4 bg-neon-volt text-black font-bold uppercase tracking-widest text-xs hover:bg-neon-volt/90 transition-colors rounded-sm shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
              >
                Quero Ser Pro
              </button>
              
              <p className="text-[10px] text-center text-neutral-500 mt-4 font-mono uppercase tracking-wider">
                A experiência definitiva
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-neutral-600 mt-8 font-mono tracking-wide">
          Valores de lançamento, com reajuste previsto no médio prazo.
        </p>
      </main>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </div>
  );
};

export default PlansPage;
