import React from 'react';
import { ArrowLeft, Globe, Shield, Star } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const PartnershipView: React.FC<Props> = ({ onBack }) => {
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
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Parcerias FunPace</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 border border-white/30 bg-white/5 rounded text-[10px] font-mono uppercase text-white tracking-widest">
              [ CONEXÕES REAIS ]
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-none">
              Marcas que <br/>
              <span className="text-transparent stroke-text">Correm Junto.</span>
            </h1>
            
            <p className="text-lg text-neutral-400 font-light leading-relaxed border-l-2 border-white pl-6">
              Não buscamos apenas logotipos. Buscamos parceiros que entendem nosso ritmo. 
              Trazemos benefícios reais para quem faz a comunidade acontecer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             {['Nike', 'Strava', 'Garmin', 'Hyperice'].map((brand, i) => (
               <div key={i} className="aspect-video bg-neutral-900 flex items-center justify-center border border-white/5 hover:border-neon-volt/50 transition-colors cursor-pointer group rounded-lg">
                  <span className="text-xl font-display uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">{brand}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Experiências Exclusivas", desc: "Testes de produtos e ativações especiais nos nossos treinos." },
            { title: "Vagas & Descontos", desc: "Facilidade para garantir seu lugar nas melhores provas." },
            { title: "Conteúdo & Workshops", desc: "Aprenda com especialistas para evoluir seu corre com saúde." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-neon-volt/30 transition-colors duration-300 group hover:-translate-y-1">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-neon-volt/20 transition-colors">
                  <Star className="w-6 h-6 text-white group-hover:text-neon-volt transition-colors" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                  [ BENEFÍCIO ]
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

export default PartnershipView;
