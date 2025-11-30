import React from 'react';
import { Command, FileSpreadsheet, FileText, Check, Loader2 } from 'lucide-react';
import { Reveal } from './Reveal';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 flex flex-col items-center justify-center">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        
        <Reveal>
          {/* H1 Title - Updated to Geist Sans Medium */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-slate-900 tracking-tight font-sans mb-6 drop-shadow-sm leading-[1.1] md:leading-[1]">
            HyperOS - The Natural Language Command Line for Your Computer.
          </h1>
          
          {/* Subtext */}
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 font-sans font-medium leading-relaxed">
            Run your entire OS and apps through natural language — no clicking, no scripts, just execution.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Join Waitlist Only */}
            <button 
              onClick={onJoinClick}
              className="px-8 py-3.5 rounded-lg bg-white/80 border border-white/60 text-slate-800 font-semibold hover:bg-white hover:scale-105 transition-all shadow-lg shadow-blue-900/5 backdrop-blur-md min-w-[200px]"
            >
              Join Waitlist
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-500 font-medium">
             v0.9 Beta available for Windows. macOS & Linux coming soon.
          </p>
        </Reveal>

        {/* Complex Mockup - Bigger & Multi-App */}
        <div className="mt-24 relative w-full max-w-[90rem] mx-auto perspective-[2000px]">
           <Reveal width="100%">
             <div className="relative transform-style-3d rotate-x-2 scale-105 md:scale-110 origin-top">
                
                {/* Main "Monitor" Container */}
                <div className="relative rounded-[24px] bg-slate-900/80 backdrop-blur-md p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] ring-1 ring-white/20">
                   <div className="relative rounded-[16px] overflow-hidden aspect-[21/9] md:aspect-[16/9] bg-slate-900">
                      
                      {/* Desktop Wallpaper */}
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>

                      {/* Window 1: File Explorer (Left) */}
                      <div className="absolute top-[15%] left-[5%] w-[30%] h-[55%] liquid-glass rounded-xl shadow-2xl border border-white/40 overflow-hidden transition-transform duration-700 hover:scale-[1.01] z-10">
                         {/* Header */}
                         <div className="h-8 bg-white/10 backdrop-blur flex items-center px-3 gap-2 border-b border-white/10">
                            <div className="flex gap-1.5">
                               <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                               <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                               <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                            </div>
                            <span className="text-[10px] text-white/70 font-medium ml-2 font-sans">Finder - /Documents/Q3</span>
                         </div>
                         {/* Content */}
                         <div className="p-3 grid grid-cols-1 gap-2">
                            <div className="flex items-center gap-2 p-2 rounded bg-blue-500/20 border border-blue-500/30">
                               <FileText size={16} className="text-blue-300" />
                               <div className="flex-1">
                                  <div className="text-[10px] text-white/90 font-medium">Q3_Report.pdf</div>
                                  <div className="text-[8px] text-white/50">2.4 MB</div>
                               </div>
                               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded hover:bg-white/5">
                               <div className="w-4 h-5 bg-yellow-400/80 rounded-[2px] opacity-50"></div>
                               <div className="flex-1">
                                  <div className="w-20 h-2 bg-white/10 rounded mb-1"></div>
                               </div>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded hover:bg-white/5">
                               <div className="w-4 h-5 bg-blue-400/80 rounded-[2px] opacity-50"></div>
                               <div className="flex-1">
                                  <div className="w-16 h-2 bg-white/10 rounded mb-1"></div>
                               </div>
                            </div>
                         </div>
                      </div>

                      {/* Window 2: Data/Spreadsheet (Bottom Center/Right) */}
                      <div className="absolute bottom-[10%] right-[15%] w-[40%] h-[45%] liquid-glass rounded-xl shadow-2xl border border-white/40 overflow-hidden transition-transform duration-700 hover:scale-[1.01] z-0 blur-[1px]">
                         <div className="h-8 bg-[#1D6F42]/80 backdrop-blur flex items-center px-3 justify-between">
                            <div className="flex items-center gap-2">
                               <FileSpreadsheet size={12} className="text-white" />
                               <span className="text-[10px] text-white font-medium">Financials_2024.xlsx</span>
                            </div>
                         </div>
                         <div className="p-0 bg-white/90 h-full grid grid-cols-4 gap-[1px] bg-slate-200">
                            {Array.from({length: 24}).map((_, i) => (
                               <div key={i} className="bg-white p-1 flex items-center justify-center">
                                  <div className="w-full h-1.5 bg-slate-100 rounded"></div>
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Window 3: Email Client (Right Top) */}
                      <div className="absolute top-[8%] right-[5%] w-[35%] h-[65%] liquid-glass rounded-xl shadow-2xl border border-white/40 overflow-hidden transition-transform duration-700 hover:scale-[1.01] z-10">
                         <div className="h-9 bg-white/20 backdrop-blur border-b border-white/10 flex items-center px-4 justify-between">
                            <span className="text-[10px] text-white/90 font-medium">Draft: Summary</span>
                            <div className="px-2 py-0.5 bg-blue-500 rounded text-[9px] text-white font-medium shadow-sm">Send</div>
                         </div>
                         <div className="p-4 bg-white/80 h-full backdrop-blur-md">
                            <div className="flex gap-2 mb-2 items-center">
                               <span className="text-[10px] text-slate-400 font-bold">To:</span>
                               <div className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[10px] border border-blue-100 font-medium">exec-team@acme.com</div>
                            </div>
                            <div className="flex gap-2 mb-4 items-center border-b border-slate-100 pb-2">
                               <span className="text-[10px] text-slate-400 font-bold">Sub:</span>
                               <span className="text-[10px] text-slate-800 font-medium">Q3 Overview</span>
                            </div>
                            <div className="space-y-2">
                               <div className="w-full h-2 bg-slate-200 rounded animate-pulse"></div>
                               <div className="w-full h-2 bg-slate-200 rounded animate-pulse delay-75"></div>
                               <div className="w-2/3 h-2 bg-slate-200 rounded animate-pulse delay-150"></div>
                               
                               {/* Attachment chip */}
                               <div className="mt-4 inline-flex px-3 py-2 bg-white rounded-lg border border-slate-200 items-center gap-2 shadow-sm">
                                  <div className="p-1 bg-red-100 rounded">
                                    <FileText size={10} className="text-red-500" />
                                  </div>
                                  <div className="text-[9px] text-slate-600 font-medium">Q3_Report.pdf</div>
                               </div>
                            </div>
                         </div>
                      </div>

                      {/* Visual Connectors */}
                      <svg className="absolute inset-0 pointer-events-none z-20 overflow-visible">
                        <defs>
                          <marker id="arrowhead-blue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                            <polygon points="0 0, 8 3, 0 6" fill="#60A5FA" />
                          </marker>
                          <marker id="arrowhead-purple" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                            <polygon points="0 0, 8 3, 0 6" fill="#A78BFA" />
                          </marker>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        {/* File to Agent */}
                        <path d="M 350 250 C 450 250, 480 320, 580 380" stroke="#60A5FA" strokeWidth="2" fill="none" strokeDasharray="6,4" className="animate-[dash_3s_linear_infinite]" opacity="0.8" markerEnd="url(#arrowhead-blue)" filter="url(#glow)" />
                        
                        {/* Spreadsheet to Agent */}
                        <path d="M 850 550 C 750 550, 700 450, 650 450" stroke="#34D399" strokeWidth="2" fill="none" strokeDasharray="6,4" className="animate-[dash_4s_linear_infinite]" opacity="0.6" filter="url(#glow)" />
                        
                        {/* Agent to Email */}
                        <path d="M 750 350 C 850 300, 880 250, 950 200" stroke="#A78BFA" strokeWidth="2" fill="none" strokeDasharray="6,4" className="animate-[dash_2s_linear_infinite]" opacity="0.8" markerEnd="url(#arrowhead-purple)" filter="url(#glow)" />
                      </svg>

                      {/* Main Agent Interface (Center Foreground) */}
                      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                         <div className="w-[500px] md:w-[600px] bg-slate-900/70 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden animate-float-slow ring-1 ring-white/10">
                            
                            {/* Header */}
                            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between bg-white/5">
                               <div className="flex items-center gap-2.5">
                                  <div className="relative flex items-center justify-center w-3 h-3">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                                  </div>
                                  <span className="text-white/90 text-xs font-semibold font-sans tracking-wide uppercase">HyperOS Agent</span>
                               </div>
                               <div className="flex gap-1.5 opacity-50">
                                  <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
                               </div>
                            </div>

                            {/* Interaction Area */}
                            <div className="p-6 md:p-8">
                               {/* User Command */}
                               <div className="flex gap-4 mb-8">
                                  <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
                                     <span className="text-xs text-white font-bold">You</span>
                                  </div>
                                  <div className="bg-white/10 rounded-2xl rounded-tl-sm px-5 py-3 border border-white/5 backdrop-blur-sm max-w-[85%]">
                                     <p className="text-white text-sm font-normal leading-relaxed">
                                       Find the Q3 report PDF in my documents, extract the key metrics, and email a summary to the exec team.
                                     </p>
                                  </div>
                               </div>

                               {/* Agent Response/Actions */}
                               <div className="flex gap-4">
                                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 border border-white/10 ring-2 ring-blue-500/20">
                                    <Command size={16} className="text-white" />
                                  </div>
                                  <div className="flex-1 space-y-4">
                                     <div className="flex items-center gap-2 text-xs text-blue-200/70 font-medium mb-1">
                                        <Loader2 size={12} className="animate-spin" />
                                        <span>Executing workflow...</span>
                                     </div>

                                     {/* Action Steps Card */}
                                     <div className="bg-slate-950/50 rounded-xl border border-white/10 p-1 divide-y divide-white/5 overflow-hidden">
                                        <div className="flex items-center gap-3 px-3 py-2.5 bg-green-500/5">
                                           <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                                              <Check size={10} className="text-green-400" strokeWidth={3} />
                                           </div>
                                           <span className="text-xs text-slate-300">Found <span className="text-white font-medium">Q3_Report.pdf</span> in /Documents</span>
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2.5 bg-green-500/5">
                                           <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30">
                                              <Check size={10} className="text-green-400" strokeWidth={3} />
                                           </div>
                                           <span className="text-xs text-slate-300">Extracted financial tables from spreadsheet</span>
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2.5 bg-blue-500/10 relative overflow-hidden">
                                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                                           <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                                              <Loader2 size={10} className="text-blue-400 animate-spin" />
                                           </div>
                                           <span className="text-xs text-white font-medium">Drafting email in Outlook...</span>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>

                   </div>
                </div>
             </div>
           </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Hero;