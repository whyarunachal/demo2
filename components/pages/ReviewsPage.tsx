
import React from 'react';

const ReviewsPage: React.FC = () => {
  const reviews = [
    { name: "Ray Kurzweil", role: "Google", content: "Welcome to the future of human performance. The work Ronohills is doing with flow is revolutionary." },
    { name: "Elon Musk", role: "Tesla/SpaceX", content: "Essential for anyone looking for a better tomorrow. High-performance protocols that actually work." },
    { name: "Michael Dell", role: "Dell Computers", content: "A practical how-to game plan for going big. These methods changed how we approach leadership." },
    { name: "Anousheh Ansari", role: "XPrize", content: "Mindblowing... extraordinary opportunities before us. The neurobiology of flow is the ultimate competitive advantage." },
    { name: "Admiral McRaven", role: "U.S. Navy", content: "Unmatched clarity under pressure. This is the gold standard for high-stakes operational readiness." },
    { name: "Reid Hoffman", role: "LinkedIn", content: "The scaling of wisdom. Ronohills has turned the 'art' of excellence into a hard science." }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="font-heading text-6xl md:text-8xl font-black uppercase mb-12 tracking-tighter">THE <span className="text-purple-500">VOICES</span></h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="glass-card p-10 flex flex-col justify-between border-white/10 hover:border-cyan-500/30 transition-all">
              <p className="text-lg text-gray-300 italic mb-8 font-light">"{r.content}"</p>
              <div>
                <div className="font-bold uppercase tracking-tighter text-cyan-400">{r.name}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">{r.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white/5 border border-white/10 text-center">
          <h3 className="text-2xl font-bold uppercase mb-4 tracking-tighter">Join the 450,000+</h3>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">Our newsletter subscribers include leaders from 90% of the Fortune 500. See why high-performers never miss an update.</p>
          <button className="px-10 py-4 bg-cyan-600 font-black uppercase tracking-widest">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
