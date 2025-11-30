import React, { useState } from 'react';
import { ArrowRight, Sparkles, Command, Mail, FolderOpen, Table2 } from 'lucide-react';
import GlassCard from './ui/GlassCard';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Typography */}
      <div className="text-center max-w-4xl mx-auto z-20 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6 opacity-0 animate-fade-in-up shadow-sm">
          <Sparkles className="w-3 h-3 text-indigo-500" />
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Public Beta Access Soon</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[1.1] text-slate-900 drop-shadow-sm mb-8 opacity-0 animate-fade-in-up delay-100">
          The Natural Language <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 italic">Command Line</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10 font-normal opacity-0 animate-fade-in-up delay-200">
          Stop clicking through menus. Tell your computer what to do, and watch HyperOS execute complex workflows across your apps in real-time.
        </p>

        <button 
          onClick={onJoinClick}
          className="opacity-0 animate-fade-in-up delay-300 group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 hover:bg-indigo-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20"
        >
          <span>Request Access</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 3D Mockup Container */}
      <div className="w-full max-w-5xl h-[600px] perspective-[2000px] relative z-10 flex items-center justify-center opacity-0 animate-fade-in-up delay-500">
        <div className="relative w-full h-full transform-style-3d rotate-x-[12deg] rotate-y-0 scale-90 md:scale-100 animate-float">
          
          {/* Main Glass Plane - The Agent Interface (Dark for contrast) */}
          <div className="absolute inset-0 z-20 transform translate-z-[40px]">
            <GlassCard variant="high" className="w-full h-[500px] flex flex-col overflow-hidden !border-white/60 shadow-2xl shadow-indigo-500/10 !bg-slate-900/95 backdrop-blur-3xl text-white">
              {/* Fake Window Controls */}
              <div className="h-12 border-b border-white/10 flex items-center px-5 gap-2 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <div className="mx-auto text-xs font-medium text-white/30 tracking-widest font-mono">HYPER_OS_AGENT</div>
              </div>

              {/* Chat Interface */}
              <div className="flex-1 p-8 flex flex-col justify-end">
                {/* Previous interaction */}
                <div className="flex flex-col gap-4 mb-8 opacity-70">
                   <div className="self-end max-w-sm p-4 rounded-2xl bg-indigo-500/20 border border-indigo-400/20 text-sm text-indigo-100">
                    Find the Q3 spreadsheet and email a summary to Sarah.
                   </div>
                   <div className="self-start max-w-sm p-4 rounded-2xl bg-white/10 border border-white/10 text-sm text-white/90">
                    <span className="flex items-center gap-2">
                       <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                       Analyzing 'Q3_Financials.xlsx'...
                    </span>
                   </div>
                </div>

                {/* Active Input */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                    <Command className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    disabled 
                    placeholder="Ask HyperOS to do something..." 
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <div className="h-6 w-6 rounded border border-white/20 flex items-center justify-center">
                      <span className="text-[10px] text-white/50">⏎</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Background App: Finder (Left Back - Light Mode) */}
          <div className="absolute top-10 -left-12 w-[300px] h-[400px] z-10 transform translate-z-[-50px] rotate-y-[15deg]">
            <GlassCard className="w-full h-full bg-white/90 !border-slate-200 flex flex-col shadow-xl">
              <div className="h-8 border-b border-slate-100 flex items-center px-3 bg-slate-50/50">
                <FolderOpen className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-[10px] text-slate-500">Finder</span>
              </div>
              <div className="p-4 space-y-3">
                 <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                 <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                 <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                 <div className="mt-6 p-3 bg-indigo-50 rounded border border-indigo-100">
                    <div className="h-2 w-1/2 bg-indigo-200 rounded"></div>
                 </div>
              </div>
            </GlassCard>
          </div>

          {/* Background App: Spreadsheet (Right Back - Light Mode) */}
          <div className="absolute top-20 -right-20 w-[400px] h-[300px] z-10 transform translate-z-[-80px] rotate-y-[-10deg]">
            <GlassCard className="w-full h-full bg-white/90 !border-slate-200 flex flex-col shadow-xl">
              <div className="h-8 border-b border-slate-100 flex items-center px-3 bg-slate-50/50">
                <Table2 className="w-4 h-4 text-emerald-500 mr-2" />
                <span className="text-[10px] text-slate-500">Sheets</span>
              </div>
              <div className="p-4 grid grid-cols-4 gap-3">
                 {[...Array(12)].map((_, i) => (
                   <div key={i} className="h-6 bg-slate-100 rounded border border-slate-200/50"></div>
                 ))}
              </div>
            </GlassCard>
          </div>

          {/* Background App: Email (Bottom Center - Light Mode) */}
          <div className="absolute -bottom-12 left-1/4 w-[350px] h-[200px] z-30 transform translate-z-[80px]">
            <GlassCard className="w-full h-full bg-white/95 !border-slate-200 flex flex-col shadow-2xl shadow-blue-900/10">
              <div className="h-8 border-b border-slate-100 flex items-center px-3 bg-slate-50/50">
                <Mail className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-[10px] text-slate-500">Compose: Summary</span>
              </div>
              <div className="p-4">
                 <div className="h-3 w-20 bg-slate-200 rounded mb-3"></div>
                 <div className="h-px w-full bg-slate-100 mb-4"></div>
                 <div className="space-y-3">
                   <div className="h-2 w-full bg-slate-100 rounded"></div>
                   <div className="h-2 w-full bg-slate-100 rounded"></div>
                   <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                 </div>
              </div>
            </GlassCard>
          </div>

          {/* Connectors (SVG Overlay) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-15" style={{ transform: 'translateZ(0px)' }}>
             {/* Simple lines connecting center to background apps */}
             <path d="M 200 200 L 400 300" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
             <path d="M 800 200 L 600 300" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
          </svg>

        </div>
      </div>
    </section>
  );
};

export default Hero;