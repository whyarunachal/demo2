
import React from 'react';

interface FooterProps {
  navigateTo: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-8 cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="w-8 h-8 bg-cyan-600 transform rotate-45"></div>
              <span className="font-heading font-bold text-xl tracking-tighter uppercase">RONOHILLS</span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-xs uppercase text-xs tracking-[0.15em] font-medium">
              Scaling human performance through the neurobiology of flow.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-white/40">EXPLORE</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><button onClick={() => navigateTo('about')} className="hover:text-cyan-400 transition-colors uppercase">About Us</button></li>
              <li><button onClick={() => navigateTo('training')} className="hover:text-cyan-400 transition-colors uppercase">Training</button></li>
              <li><button onClick={() => navigateTo('research')} className="hover:text-cyan-400 transition-colors uppercase">Our Research</button></li>
              <li><button onClick={() => navigateTo('reviews')} className="hover:text-cyan-400 transition-colors uppercase">Reviews</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-white/40">LEGAL</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><button onClick={() => navigateTo('privacy')} className="hover:text-cyan-400 transition-colors uppercase">Privacy Policy</button></li>
              <li><button onClick={() => navigateTo('terms')} className="hover:text-cyan-400 transition-colors uppercase">Terms of Service</button></li>
              <li><button onClick={() => navigateTo('cookies')} className="hover:text-cyan-400 transition-colors uppercase">Cookie Policy</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-white/40">CONNECT</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">INSTAGRAM</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">YOUTUBE</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">LINKEDIN</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">CONTACT</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} RONOHILLS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <span className="text-sm font-black italic">GOOGLE</span>
            <span className="text-sm font-black italic">META</span>
            <span className="text-sm font-black italic">AUDI</span>
            <span className="text-sm font-black italic">NAVY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
