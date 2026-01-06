
import React, { useState } from 'react';

interface NewsletterPopupProps {
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(onClose, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative glass-card border-cyan-500/50 max-w-lg w-full p-12 overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!submitted ? (
          <>
            <div className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">The Flow Protocol</div>
            <h3 className="font-heading text-4xl font-black mb-6 uppercase tracking-tighter">READY TO LEVEL UP?</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Join 450,000+ elite performers receiving zero-cost flow protocols, 
              peak performance neuroscience, and advanced training updates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR WORK EMAIL"
                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:border-cyan-500 outline-none transition-all uppercase tracking-widest text-xs"
              />
              <button 
                type="submit"
                className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase tracking-[0.2em] transition-all"
              >
                JOIN THE 450K
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold uppercase mb-2">YOU'RE IN.</h3>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Prepare for takeoff.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;
