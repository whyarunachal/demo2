
import React from 'react';

const teamMembers = [
  { name: 'Steven Kotler', role: 'Founder & CEO', image: 'https://picsum.photos/400/500?grayscale&v=1' },
  { name: 'Chase Adams', role: 'Managing Director & CGO', image: 'https://picsum.photos/400/500?grayscale&v=2' },
  { name: 'Dr. Michael Mannino', role: 'Chief Science Officer', image: 'https://picsum.photos/400/500?grayscale&v=3' },
  { name: 'Ryan Wickes', role: 'Chief of Staff', image: 'https://picsum.photos/400/500?grayscale&v=4' },
  { name: 'Kelsey Wyman', role: 'Head of Operations', image: 'https://picsum.photos/400/500?grayscale&v=5' },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter mb-4">LEADERSHIP TEAM</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((m, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-4 relative">
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-bold text-lg tracking-tighter uppercase">{m.name}</h4>
              <p className="text-gray-500 text-xs uppercase tracking-widest">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
