
import React from 'react';

interface ServicesProps {
  navigateTo: (view: string) => void;
}

const Services: React.FC<ServicesProps> = ({ navigateTo }) => {
  const services = [
    {
      title: 'Workshops',
      description: 'Bespoke training for teams to think faster, recover quicker, and build burnout-proof, high-flow cultures.',
      tag: 'Corporate Elite'
    },
    {
      title: 'Keynotes',
      description: 'High-voltage talks by Steven Kotler decoding the neurobiology of peak performance for global audiences.',
      tag: 'High Voltage'
    },
    {
      title: 'The Alliance',
      description: 'An invitation-only, year-long mastermind for elite leaders and innovators who demand sustained excellence.',
      tag: 'Mastermind'
    }
  ];

  return (
    <section id="training" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-5xl font-black uppercase mb-4 tracking-tighter">OUR TRAININGS</h2>
            <p className="text-gray-400 text-lg">Applied neuroscience for the world's most demanding environments.</p>
          </div>
          <button onClick={() => navigateTo('training')} className="text-cyan-400 font-bold flex items-center gap-2 group">
            VIEW ALL PROTOCOLS <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="flex flex-col p-10 glass-card group hover:bg-cyan-900/10 transition-all border-l-4 border-l-cyan-500/0 hover:border-l-cyan-500">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6 opacity-60">{s.tag}</div>
              <h3 className="font-heading text-3xl font-bold mb-6 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-10 flex-grow">
                {s.description}
              </p>
              <button onClick={() => navigateTo('training')} className="self-start px-6 py-3 border border-white/20 group-hover:border-cyan-500 group-hover:bg-cyan-500 text-xs font-black uppercase tracking-[0.2em] transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
