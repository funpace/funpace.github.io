import React from 'react';
import { ArrowLeft, Zap } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const ManifestoView: React.FC<Props> = ({ onBack }) => {
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
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Manifesto FunPace</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-display uppercase tracking-tighter leading-[0.85] mb-12 text-white mix-blend-difference">
          Muito Mais <br/>
          <span className="text-transparent stroke-text">Que Um Clube.</span>
        </h1>

        <div className="space-y-12 text-lg md:text-2xl font-light leading-relaxed text-neutral-300 border-l-2 border-neon-volt pl-8 md:pl-12">
          <p>
            Dizem que correr é um esporte solitário. <strong className="text-white">Nós discordamos.</strong>
          </p>
          <p>
            Acreditamos que cada quilômetro fica mais leve quando compartilhado. Na FunPace, performance não é sobre sofrimento. É sobre evolução constante, celebrada em grupo.
          </p>
          <p>
            Os dados nos guiam, mas é a <span className="text-neon-volt font-mono uppercase">Diversão</span> que nos move.
            Não corremos apenas para cruzar a linha de chegada. Corremos pela resenha pós-treino, pelo "kudos" sincero, pela energia de pertencer.
          </p>
          <p>
            Você corre por você, mas nunca corre sozinho.
            Bem-vindo ao seu novo ritmo.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
           {[
             { title: "Diversão Séria", desc: "Levamos a diversão tão a sério quanto o pace." },
             { title: "Performance Coletiva", desc: "Nós vamos mais longe quando vamos juntos." },
             { title: "Dados com Propósito", desc: "Números para evoluir, não para punir." }
           ].map((item, i) => (
             <div key={i} className="space-y-4">
               <h3 className="text-xl font-display uppercase tracking-tight">{item.title}</h3>
               <p className="text-sm text-neutral-500 font-mono">{item.desc}</p>
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

export default ManifestoView;
