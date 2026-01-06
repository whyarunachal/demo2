
import React, { useState } from 'react';

const faqs = [
  {
    q: "What is the relationship between Ronohills and Flow Research Collective?",
    a: "Ronohills is the applied training arm of the Flow Research Collective. While the Collective focuses on decoding the neurobiology of flow, Ronohills builds those insights into scalable training protocols for elite performance."
  },
  {
    q: "Who does Ronohills work with?",
    a: "We have worked with top-tier organizations including Google, Meta, Audi, and the U.S. Navy, as well as thousands of individual elite performers across various high-stakes domains."
  },
  {
    q: "Is flow training scientifically validated?",
    a: "Absolutely. Our protocols are grounded in neuroscience and have been tested in partnership with universities like USC, Stanford, and the University of Western Australia."
  },
  {
    q: "How can I get started?",
    a: "Depending on your needs, you can enroll in our public workshops, book a keynote for your organization, or apply for the invitation-only Alliance mastermind."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-heading text-4xl font-bold text-center mb-16 uppercase tracking-tighter">FREQUENTLY ASKED</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg uppercase tracking-tight">{faq.q}</span>
                <span className={`text-cyan-400 transform transition-transform ${openIdx === idx ? 'rotate-45' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIdx === idx && (
                <div className="p-6 bg-white/5 text-gray-400 leading-relaxed border-t border-white/10">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
