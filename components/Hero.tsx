
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-cyan-500/30 bg-cyan-500/5 rounded-full">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">The Applied Training Arm of FRC</span>
        </div>
        
        <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-[10rem] leading-none mb-8 tracking-tighter uppercase">
          WE TRAIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 glow-text">FLOW.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
          Offered by the Flow Research Collective—neuroscience-based training for leaders and teams, 
          elevated by AI, biometrics, and the latest in performance science.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="w-full sm:w-auto px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black text-sm uppercase tracking-widest transition-all transform hover:-translate-y-1">
            Explore Training
          </button>
          <button className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:border-white text-white font-black text-sm uppercase tracking-widest transition-all">
            View Research
          </button>
        </div>
      </div>

      {/* Decorative pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/20 rounded-full animate-[ping_10s_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full animate-[ping_8s_infinite]"></div>
      </div>
    </section>
  );
};

export default Hero;
