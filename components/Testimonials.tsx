
import React from 'react';

const quotes = [
  { name: 'Ray Kurzweil', role: 'Google', quote: 'Welcome to the future of human performance.' },
  { name: 'Elon Musk', role: 'Tesla/SpaceX', quote: 'Essential for anyone looking for a better tomorrow.' },
  { name: 'Michael Dell', role: 'Dell Computers', quote: 'A practical how-to game plan for going big.' },
  { name: 'Anousheh Ansari', role: 'XPrize', quote: 'Mindblowing... extraordinary opportunities before us.' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-heading text-3xl md:text-4xl font-bold mb-16 uppercase tracking-widest text-gray-500 opacity-50">Trusted by Global Visionaries</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((q, idx) => (
            <div key={idx} className="relative p-10 border border-white/5 hover:border-cyan-500/30 transition-all bg-gradient-to-br from-white/5 to-transparent">
              <span className="absolute top-4 right-8 text-8xl font-serif text-white/5 leading-none">"</span>
              <p className="text-xl md:text-2xl text-white mb-8 relative z-10 font-light leading-snug">
                “{q.quote}”
              </p>
              <div>
                <div className="font-bold text-lg text-cyan-400 uppercase tracking-tighter">{q.name}</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest">{q.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
