
import React from 'react';

const ResearchPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="font-heading text-6xl md:text-8xl font-black uppercase mb-12 tracking-tighter">OUR <span className="text-blue-500">SCIENCE</span></h1>
        
        <div className="mb-20">
          <h2 className="text-3xl font-bold uppercase mb-8 border-b border-white/10 pb-4">The Ronohills Standard</h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
            Every protocol we deploy is tested at the Flow Research Collective. We track over 25 biological markers to ensure our training moves the needle where it matters most: the prefrontal cortex.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 bg-white/5">
              <h3 className="text-cyan-400 font-black text-4xl mb-2">230%</h3>
              <p className="text-xs uppercase tracking-widest font-bold mb-4">DARPA Benchmark</p>
              <p className="text-sm text-gray-500">Accelerated learning cycles in high-stakes environments using neurostimulation and flow triggers.</p>
            </div>
            <div className="p-8 border border-white/5 bg-white/5">
              <h3 className="text-blue-400 font-black text-4xl mb-2">500%</h3>
              <p className="text-xs uppercase tracking-widest font-bold mb-4">McKinsey Metric</p>
              <p className="text-sm text-gray-500">Productivity gains observed in top-tier executives during peak flow states.</p>
            </div>
            <div className="p-8 border border-white/5 bg-white/5">
              <h3 className="text-purple-400 font-black text-4xl mb-2">40%</h3>
              <p className="text-xs uppercase tracking-widest font-bold mb-4">Stress Reduction</p>
              <p className="text-sm text-gray-500">Long-term cortisol reduction in program participants across 15,000+ data points.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold uppercase mb-8 border-b border-white/10 pb-4">Core Research Partners</h2>
          <div className="flex flex-wrap gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black italic">STANFORD</span>
            <span className="text-2xl font-black italic">USC</span>
            <span className="text-2xl font-black italic">DARPA</span>
            <span className="text-2xl font-black italic">HARVARD</span>
            <span className="text-2xl font-black italic">WESTERN AUSTRALIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
