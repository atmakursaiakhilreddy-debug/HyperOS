import React from 'react';
import { Mic, Layers, Cpu, Command, ArrowUpRight } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Natural Language Control",
    description: "Don't memorize shortcuts. Just say 'Organize my desktop by file type' or 'Turn on dark mode'.",
    icon: Command,
    variant: 'primary'
  },
  {
    title: "Cross-App Integration",
    description: "HyperOS bridges the gap between silos. Pull data from Notion, format in Excel, and send via Slack.",
    icon: Layers,
  },
  {
    title: "Local Automations",
    description: "Build complex workflows on the fly. No code required, just describe the repetitive task you want gone.",
    icon: Cpu,
  },
  {
    title: "Voice Input",
    description: "Speak to your computer like a colleague. High-fidelity voice recognition optimized for technical commands.",
    icon: Mic,
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="w-full max-w-7xl px-6 py-24 z-10">
      <div className="mb-16 text-center opacity-0 animate-fade-in-up">
        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6 font-normal">Your OS, Reimagined.</h2>
        <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium">HyperOS sits above your operating system, providing a unified intelligence layer that controls your applications.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Main Large Card */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 opacity-0 animate-fade-in-up delay-200">
          <GlassCard 
            variant="high" 
            hoverEffect 
            className="h-full p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group !bg-white/80"
          >
            <div className="absolute top-0 right-0 p-32 bg-indigo-100 blur-[80px] rounded-full group-hover:bg-indigo-200 transition-colors opacity-60"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                <Command className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-3xl text-slate-900 mb-4 font-normal">Natural Language Control</h3>
              <p className="text-slate-600 text-lg max-w-md leading-relaxed font-medium">
                The command line was powerful but cryptic. The GUI was intuitive but slow. HyperOS combines the power of terminal with the ease of conversation.
              </p>
            </div>
            
            <div className="relative z-10 flex items-center gap-2 text-indigo-600 mt-6 group-hover:text-indigo-700 transition-colors cursor-pointer font-semibold">
              <span>See demonstrations</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </GlassCard>
        </div>

        {/* Other Cards */}
        {features.slice(1).map((feature, idx) => (
          <div key={idx} className={`opacity-0 animate-fade-in-up delay-${(idx + 3) * 100}`}>
            <GlassCard hoverEffect className="h-full p-8 flex flex-col justify-between group !bg-white/60">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                  <feature.icon className="w-5 h-5 text-slate-600 group-hover:text-indigo-600" />
                </div>
                <h3 className="font-serif text-2xl text-slate-900 mb-3 font-normal">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.description}</p>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;