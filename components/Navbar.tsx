
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  navigateTo: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-sm transform rotate-45"></div>
          <span className="font-heading font-bold text-xl tracking-tighter uppercase">RONOHILLS</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide uppercase">
          <button onClick={() => navigateTo('training')} className="hover:text-cyan-400 transition-colors">Training</button>
          <button onClick={() => navigateTo('research')} className="hover:text-cyan-400 transition-colors">Science</button>
          <button onClick={() => navigateTo('about')} className="hover:text-cyan-400 transition-colors">About</button>
          <button className="px-5 py-2.5 bg-white text-black font-bold rounded-none hover:bg-cyan-400 transition-all">
            GET STARTED
          </button>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
