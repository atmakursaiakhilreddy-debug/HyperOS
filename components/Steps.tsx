import React, { useEffect, useRef, useState } from 'react';
import { Check, Play, Pause, X, MousePointer2 } from 'lucide-react';

// Reusable component for scroll-triggered animations
const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: string; className?: string }> = ({ 
  children, 
  delay = '0ms', 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.3,1)] transform will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

const Steps: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full max-w-5xl px-4 md:px-6 py-16 z-10 flex flex-col items-center">
      <ScrollReveal className="w-full mb-10">
        <h2 className="text-3xl md:text-4xl text-slate-900 mb-8 text-center">From Thought to Action</h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12 border-t border-slate-200 pt-8">
          <h3 className="text-xl md:text-2xl text-slate-900 font-medium shrink-0">Execution in 3 steps</h3>
          <p className="text-slate-500 text-base leading-relaxed max-w-lg text-center md:text-left">
            The easiest way to get things done without lifting a finger. HyperOS handles the complexity while you focus on the outcome.
          </p>
        </div>
      </ScrollReveal>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative items-start">
        
        {/* Step 1: Command */}
        <ScrollReveal delay="100ms" className="relative group">
          {/* Card Visual */}
          <div className="bg-white rounded-[20px] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-200/60 p-2.5 aspect-[4/3] flex flex-col transition-transform hover:scale-[1.02] duration-500">
            <div className="h-full w-full bg-slate-50/50 rounded-xl border border-slate-100 p-5 md:p-6 flex flex-col relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">START HYPEROS</span>
              </div>
              
              {/* Input Bubble */}
              <div className="bg-indigo-50/80 rounded-lg rounded-tl-sm p-3 md:p-4 border border-indigo-100/50 shadow-sm relative z-10 max-w-[95%]">
                <p className="text-indigo-600 font-medium text-xs md:text-sm leading-relaxed">
                  "Organize my downloads folder by date"
                </p>
              </div>

              {/* Mouse Cursor */}
              <div className="absolute bottom-6 right-6 text-slate-900 drop-shadow-xl animate-float">
                <MousePointer2 className="w-5 h-5 md:w-6 md:h-6 fill-slate-900 stroke-white stroke-[1.5px]" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-6 text-center px-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-slate-300 text-xl font-bold">1</span>
              <h4 className="text-lg font-bold text-slate-900">Command</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[240px] mx-auto">
              Simply click Start or use the hotkey. Speak or type your intent naturally.
            </p>
          </div>

          {/* Desktop Arrow 1 -> 2 */}
          <div className="hidden md:block absolute -right-6 top-[35%] w-8 opacity-30 z-10">
            <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" className="w-full text-slate-400">
              <path d="M0,20 C30,20 40,20 95,20" strokeWidth="4" markerEnd="url(#arrowhead)" strokeDasharray="8 8" />
            </svg>
          </div>
        </ScrollReveal>

        {/* Step 2: Interpret */}
        <ScrollReveal delay="300ms" className="relative group">
          {/* Card Visual - Dark */}
          <div className="bg-slate-800 rounded-[20px] shadow-[0_25px_50px_-12px_rgba(30,41,59,0.3)] border border-slate-700 p-2.5 aspect-[4/3] flex flex-col transition-transform hover:scale-[1.02] duration-500">
            <div className="h-full w-full bg-slate-900 rounded-xl border border-slate-800 p-5 md:p-6 flex flex-col justify-center items-center relative overflow-hidden">
              
              {/* Abstract UI Elements */}
              <div className="absolute top-4 left-4 w-24 h-16 bg-slate-800/50 rounded-lg border border-white/5"></div>
              <div className="absolute bottom-4 right-4 w-32 h-20 bg-blue-900/20 rounded-lg border border-white/5"></div>
              
              {/* Processing Pill */}
              <div className="relative z-10 bg-slate-950/90 backdrop-blur-md border border-slate-700/50 rounded-full px-4 py-2 flex items-center gap-3 shadow-xl">
                <span className="text-[10px] font-semibold text-slate-200 tracking-wide whitespace-nowrap">Processing (Files)</span>
                <div className="h-3 w-px bg-slate-800"></div>
                <div className="flex gap-2.5 text-slate-400">
                  <Play size={8} fill="currentColor" className="hover:text-white transition-colors cursor-pointer" />
                  <Pause size={8} fill="currentColor" className="hover:text-white transition-colors cursor-pointer" />
                  <X size={10} className="hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-6 text-center px-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-slate-300 text-xl font-bold">2</span>
              <h4 className="text-lg font-bold text-slate-900">Interpret</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[240px] mx-auto">
              HyperOS analyzes your screen context and files to understand the task.
            </p>
          </div>

          {/* Desktop Arrow 2 -> 3 */}
          <div className="hidden md:block absolute -right-6 top-[35%] w-8 opacity-30 z-10">
            <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" className="w-full text-slate-400">
              <path d="M0,20 C30,20 40,20 95,20" strokeWidth="4" markerEnd="url(#arrowhead)" strokeDasharray="8 8" />
            </svg>
          </div>
        </ScrollReveal>

        {/* Step 3: Execute */}
        <ScrollReveal delay="500ms" className="relative group">
          {/* Card Visual */}
          <div className="bg-white rounded-[20px] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-200/60 p-2.5 aspect-[4/3] flex flex-col transition-transform hover:scale-[1.02] duration-500">
            <div className="h-full w-full bg-slate-50/50 rounded-xl border border-slate-100 p-5 md:p-6 flex flex-col justify-center items-center relative overflow-hidden">
              
              {/* Skeleton Lines */}
              <div className="w-full space-y-2.5 mb-8 opacity-40 px-3">
                <div className="h-1.5 bg-slate-200 rounded-full w-full"></div>
                <div className="h-1.5 bg-slate-200 rounded-full w-3/4"></div>
                <div className="h-1.5 bg-slate-200 rounded-full w-1/2"></div>
              </div>
              
              {/* Success Toast */}
              <div className="w-full bg-green-50/80 backdrop-blur-sm border border-green-100/80 rounded-lg p-2.5 flex items-center justify-center gap-2.5 shadow-sm transform translate-y-2">
                <div className="w-4 h-4 rounded-full border-[1.5px] border-green-500 flex items-center justify-center shrink-0">
                  <Check size={10} className="text-green-500 stroke-[3px]" />
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-green-700">Task Completed</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-6 text-center px-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-slate-300 text-xl font-bold">3</span>
              <h4 className="text-lg font-bold text-slate-900">Execute</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[240px] mx-auto">
              The agent performs actions autonomously. You get the result instantly.
            </p>
          </div>
        </ScrollReveal>

        {/* SVG Defs for Arrows */}
        <svg className="absolute w-0 h-0">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
            </marker>
          </defs>
        </svg>

      </div>
    </section>
  );
};

export default Steps;