import React from 'react';
import { ArrowLeft, Zap, Trophy, ShoppingBag } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const CurrencyView: React.FC<Props> = ({ onBack }) => {
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
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Protocolo de Moeda // v2.4</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 border border-pink-500/30 bg-pink-500/5 rounded text-[10px] font-mono uppercase text-pink-500 tracking-widest">
              [ SUOR COMO ATIVO ]
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-none">
              Esforço <br/>
              <span className="text-transparent stroke-text">Tokenizado.</span>
            </h1>
            
            <p className="text-lg text-neutral-400 font-light leading-relaxed border-l-2 border-pink-500 pl-6">
              Tratamos sua disciplina como um ativo financeiro. Cada quilômetro corrido é minerado em Funnits, nossa moeda digital nativa.
            </p>
          </div>

          <div className="relative bg-neutral-900 border border-white/5 p-10 rounded-[2rem] space-y-10">
            <div className="flex justify-between items-center border-b border-white/5 pb-8">
              <p className="text-[10px] font-bold uppercase text-neutral-500 tracking-[0.2em]">Saldo da Carteira</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase text-white tracking-widest">Ao Vivo</span>
              </div>
            </div>
            <div className="text-center py-10">
               <span className="text-7xl font-display text-white tracking-tighter">12,450</span>
               <span className="block text-sm font-mono text-pink-500 uppercase tracking-widest mt-2">Funnits Disponíveis</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <button className="bg-white text-black py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-pink-500 transition-colors">Marketplace</button>
               <button className="border border-white/20 text-white py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors">Histórico</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Taxa de Mineração", desc: "Ganhe mais por KM conforme sua sequência aumenta.", icon: Zap },
            { title: "Drops Exclusivos", desc: "Use Funnits para comprar equipamentos de edição limitada.", icon: ShoppingBag },
            { title: "Níveis de Status", desc: "Desbloqueie eventos e benefícios de elite.", icon: Trophy }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-pink-500 transition-colors duration-300 group">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-pink-500/10 rounded-sm">
                  <item.icon className="w-6 h-6 text-pink-500" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-pink-500 transition-colors">
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

export default CurrencyView;
