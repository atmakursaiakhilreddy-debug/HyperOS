import React from 'react';
import GlassCard from './ui/GlassCard';
import { MessageSquare, Cpu, CheckCircle2 } from 'lucide-react';

const Steps: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full max-w-6xl px-6 py-24 z-10 flex flex-col items-center">
      <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-20 text-center opacity-0 animate-fade-in-up">From Thought to Action</h2>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0 opacity-0 animate-fade-in-up delay-200"></div>

        {/* Step 1 */}
        <div className="relative z-10 flex flex-col items-center text-center opacity-0 animate-fade-in-up delay-300">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl shadow-indigo-100 border border-slate-100">
            <MessageSquare className="w-8 h-8 text-indigo-500" />
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-serif text-white font-bold shadow-lg">1</div>
          </div>
          <h3 className="text-xl text-slate-900 font-medium mb-3">Command</h3>
          <p className="text-sm text-slate-500 px-4">Use your voice or text to state your intent naturally.</p>
          
          <div className="mt-8 w-full">
            <GlassCard className="p-4 !rounded-xl !bg-slate-900 text-left shadow-lg">
              <p className="text-xs text-indigo-300 font-mono mb-2">$ input</p>
              <p className="text-sm text-white/90">"Sort my downloads folder by date"</p>
            </GlassCard>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative z-10 flex flex-col items-center text-center opacity-0 animate-fade-in-up delay-400">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl shadow-purple-100 border border-slate-100">
            <Cpu className="w-8 h-8 text-purple-500" />
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-serif text-white font-bold shadow-lg">2</div>
          </div>
          <h3 className="text-xl text-slate-900 font-medium mb-3">Interpret</h3>
          <p className="text-sm text-slate-500 px-4">Agent analyzes intent and maps it to system capabilities.</p>

          <div className="mt-8 w-full">
             <GlassCard className="p-4 !rounded-xl !bg-slate-900 text-left space-y-2 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <div className="h-1.5 w-2/3 bg-white/10 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <div className="h-1.5 w-1/2 bg-white/10 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative z-10 flex flex-col items-center text-center opacity-0 animate-fade-in-up delay-500">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl shadow-emerald-100 border border-slate-100">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-serif text-white font-bold shadow-lg">3</div>
          </div>
          <h3 className="text-xl text-slate-900 font-medium mb-3">Execute</h3>
          <p className="text-sm text-slate-500 px-4">HyperOS performs the actions across multiple apps instantly.</p>

          <div className="mt-8 w-full">
             <GlassCard className="p-4 !rounded-xl !bg-slate-900 text-left border-l-2 !border-l-emerald-500 shadow-lg">
              <p className="text-xs text-emerald-400 font-mono mb-1">SUCCESS</p>
              <p className="text-sm text-white/80">Sorted 142 files in /Downloads</p>
            </GlassCard>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Steps;