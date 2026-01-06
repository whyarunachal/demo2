
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="font-heading text-6xl md:text-8xl font-black uppercase mb-12 tracking-tighter">ABOUT <span className="text-cyan-500">RONOHILLS</span></h1>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
            <p className="text-white font-bold text-2xl font-heading leading-snug">
              We are the applied arm of the Flow Research Collective. While the laboratory draws the blueprints, we build the reality.
            </p>
            <p>
              Ronohills was founded by Steven Kotler to solve a singular challenge: high performance is no longer a luxury—it's a survival requirement. In an era of cognitive overload, traditional training methods fail because they don't account for neurobiology.
            </p>
            <p>
              Our mission is to make peak performance scalable. We use the latest in neuroscience, AI, and biometrics to help leaders and teams access "Flow" on demand, turning the most elusive state of human performance into a repeatable protocol.
            </p>
          </div>
          <div className="glass-card p-10 border-cyan-500/20">
            <h3 className="font-heading font-bold text-2xl uppercase mb-6 tracking-tight">Our Core Vision</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-1 h-12 bg-cyan-500 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm tracking-widest">Science-First</h4>
                  <p className="text-sm text-gray-500">No bio-hacking fads. Only peer-reviewed protocols verified in the lab.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1 h-12 bg-blue-500 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm tracking-widest">Scalable Impact</h4>
                  <p className="text-sm text-gray-500">From individual elite athletes to global Fortune 100 teams.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1 h-12 bg-purple-500 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-bold uppercase text-sm tracking-widest">Anti-Burnout</h4>
                  <p className="text-sm text-gray-500">Flow isn't just about speed; it's about sustainable excellence.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
