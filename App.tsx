import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import WaitlistModal from './components/WaitlistModal';

const App: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-indigo-500/30 font-sans font-medium">
      
      {/* Dynamic Background - Light Mode */}
      <div className="fixed inset-0 z-0 bg-white">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200/50 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000 delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000 delay-1000"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.3] pointer-events-none mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar onJoinClick={openWaitlist} />
        
        <main className="w-full flex flex-col items-center">
          <Hero onJoinClick={openWaitlist} />
          <Features />
          <Steps />
        </main>

        <footer className="w-full max-w-7xl mx-auto px-6 py-12 mt-20 border-t border-slate-200/50 flex justify-center items-center opacity-0 animate-fade-in-up delay-700">
          <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
            <span className="font-sans text-lg text-slate-900 tracking-wide font-medium">HyperOS</span>
          </div>
        </footer>
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
};

export default App;