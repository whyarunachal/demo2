
import React from 'react';

const NarrativeSection: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-sm mb-6">The Attention Crisis</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
            The world is louder than ever. Your brain wasn't built for this noise.
          </h3>
          <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">
            <p>
              Fragmented attention and fading motivation are the silent killers of peak performance. 
              In an era of perpetual distraction, burnout isn't a possibility—it's a certainty for 
              those without the right neurological protocols.
            </p>
            <p>
              We position <span className="text-white font-semibold">Flow</span> as the built-in brain upgrade. 
              It's not just a feeling; it's a physiological state that sharpens focus and fuels 
              the massive-scale innovation required to thrive in the 21st century.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
