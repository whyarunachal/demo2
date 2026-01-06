
import React from 'react';

interface LegalPageProps {
  title: string;
}

const LegalPage: React.FC<LegalPageProps> = ({ title }) => {
  return (
    <div className="pt-32 pb-24 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-heading text-4xl font-black uppercase mb-12 tracking-widest">{title}</h1>
        
        <div className="prose prose-invert prose-cyan space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-white font-bold uppercase text-lg mb-4">1. Overview</h2>
            <p>This document governs your relationship with Ronohills. By accessing our training protocols, digital platforms, and advisory services, you agree to the conditions outlined herein. Our commitment is to transparency and the ethical application of performance neuroscience.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase text-lg mb-4">2. Data Governance</h2>
            <p>At Ronohills, we process biometrics and cognitive performance data with extreme rigor. Any data collected during workshops or via our AI assistant is encrypted and used solely for the purpose of improving individual and team performance outcomes. We do not sell participant data to third-party advertisers.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase text-lg mb-4">3. Intellectual Property</h2>
            <p>All flow protocols, proprietary neurobiological frameworks, and "The Alliance" curriculum are the intellectual property of Ronohills and the Flow Research Collective. Unauthorized distribution is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-white font-bold uppercase text-lg mb-4">4. Liability & Health</h2>
            <p>Our trainings involve cognitive intensives. Participants should consult with medical professionals before engaging in extreme performance protocols. Ronohills assumes no liability for individual biological responses to flow training.</p>
          </section>

          <div className="pt-12 border-t border-white/10 text-xs uppercase tracking-widest text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
