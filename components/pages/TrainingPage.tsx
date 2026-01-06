
import React from 'react';

const TrainingPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="font-heading text-6xl md:text-8xl font-black uppercase mb-12 tracking-tighter">THE <span className="text-cyan-500">PROTOCOLS</span></h1>
        
        <div className="space-y-24">
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent"></div>
               <img src="https://picsum.photos/800/600?grayscale&v=10" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform" alt="Workshops" />
            </div>
            <div>
              <div className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Phase 01</div>
              <h2 className="font-heading text-4xl font-bold uppercase mb-6">Corporate Workshops</h2>
              <p className="text-gray-400 text-lg mb-8">
                Designed for teams at the edge of burnout. We train your staff to think faster, recover quicker, and build cultures that support deep work and cognitive flow.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 uppercase tracking-widest font-medium">
                <li>• 3-Day Intensive Bootcamps</li>
                <li>• Custom Performance Dashboards</li>
                <li>• Burnout-Proof Methodology</li>
              </ul>
              <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest">Book Your Team</button>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
             <div className="md:order-2 aspect-video bg-white/5 border border-white/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
                <img src="https://picsum.photos/800/600?grayscale&v=11" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform" alt="Keynotes" />
            </div>
            <div className="md:order-1">
              <div className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Phase 02</div>
              <h2 className="font-heading text-4xl font-bold uppercase mb-6">High-Voltage Keynotes</h2>
              <p className="text-gray-400 text-lg mb-8">
                Steven Kotler decodes the neurobiology of peak performance for global audiences. From the main stage at Google to specialized military forums.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 uppercase tracking-widest font-medium">
                <li>• 60-90 Minute Deep Dives</li>
                <li>• Live Biological Demonstrations</li>
                <li>• Immediate Performance Shifts</li>
              </ul>
              <button className="px-8 py-4 bg-blue-600 text-white font-black uppercase tracking-widest">Inquire Now</button>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
               <img src="https://picsum.photos/800/600?grayscale&v=12" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform" alt="The Alliance" />
            </div>
            <div>
              <div className="text-purple-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Phase 03</div>
              <h2 className="font-heading text-4xl font-bold uppercase mb-6">The Alliance</h2>
              <p className="text-gray-400 text-lg mb-8">
                An invitation-only, year-long mastermind for elite leaders and innovators who demand sustained excellence. Limited to 20 participants annually.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-8 uppercase tracking-widest font-medium">
                <li>• Bi-Monthly Strategic Offsites</li>
                <li>• 1-on-1 Neuroscience Coaching</li>
                <li>• Access to FRC Data Sandbox</li>
              </ul>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all">Apply for Entry</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
