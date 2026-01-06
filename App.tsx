
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NarrativeSection from './components/NarrativeSection';
import ScienceStats from './components/ScienceStats';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup';
import FlowAssistant from './components/FlowAssistant';

// Static Page Components
import AboutPage from './components/pages/AboutPage';
import TrainingPage from './components/pages/TrainingPage';
import ResearchPage from './components/pages/ResearchPage';
import ReviewsPage from './components/pages/ReviewsPage';
import LegalPage from './components/pages/LegalPage';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <NarrativeSection />
            <ScienceStats />
            <Testimonials />
            <Services navigateTo={navigateTo} />
            <Team />
            <FAQ />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'training':
        return <TrainingPage />;
      case 'research':
        return <ResearchPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'privacy':
        return <LegalPage title="Privacy Policy" />;
      case 'terms':
        return <LegalPage title="Terms of Service" />;
      case 'cookies':
        return <LegalPage title="Cookie Policy" />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navbar navigateTo={navigateTo} />
        <main>{renderView()}</main>
        <Footer navigateTo={navigateTo} />
      </div>

      <FlowAssistant />
      {showPopup && <NewsletterPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default App;
