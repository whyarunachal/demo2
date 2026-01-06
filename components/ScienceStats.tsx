
import React from 'react';

const stats = [
  { value: '230%', label: 'Faster Learning', source: 'Advanced Brain Monitoring & DARPA' },
  { value: '500%', label: 'More Productivity', source: 'McKinsey’s findings on executives' },
  { value: '40%', label: 'Less Stress', source: '15,000+ Participants at FRC' },
  { value: '80%', label: 'More Performance', source: 'University of Western Australia' },
  { value: 'Heightened', label: 'Creativity', source: '1–2 days post-flow (Harvard)' },
  { value: 'Increased', label: 'Drive', source: 'Happiness & Motivation (Deloitte)' },
];

const ScienceStats: React.FC = () => {
  return (
    <section id="science" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tighter">BEHIND OUR TRAINING</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-8 group hover:border-cyan-500/50 transition-all">
              <div className="text-cyan-400 font-heading text-5xl font-black mb-2 group-hover:scale-110 transition-transform origin-left">
                {stat.value}
              </div>
              <div className="text-xl font-bold mb-4 uppercase tracking-wide">{stat.label}</div>
              <p className="text-gray-500 text-sm italic">{stat.source}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 glass-card border-cyan-500/20 text-center">
          <p className="text-2xl italic text-gray-300 font-light leading-relaxed">
            "If the Flow Research Collective is the laboratory where the complex 'blueprints' of human performance are drawn, 
            the <span className="text-cyan-400 font-bold">Ronohills</span> is the construction crew that builds them into your daily professional life."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScienceStats;
