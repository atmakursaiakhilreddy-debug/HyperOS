import React, { useEffect, useState } from 'react';
import { Navigation } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-0' : 'pt-4'}`}>
      <nav 
        className={`
          flex items-center justify-between px-6 
          transition-all duration-500 ease-in-out
          ${scrolled 
            ? 'w-full rounded-none py-3 liquid-glass-high border-x-0 border-t-0 shadow-sm' 
            : 'w-[90%] max-w-4xl rounded-full py-2.5 liquid-glass'
          }
        `}
      >
        <div className="flex items-center">
          <span className="font-sans text-xl font-medium tracking-tight text-slate-900 flex items-center gap-1">
            Hyper 
            <Navigation className="w-3.5 h-3.5 text-slate-900 fill-transparent stroke-[2.5px]" /> 
            OS
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600 font-medium">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it works</a>
          </div>
          
          <button 
            onClick={onJoinClick}
            className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-900/20"
          >
            Join Waitlist
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;