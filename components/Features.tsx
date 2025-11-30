import React from 'react';
import { Mic, Layers, Cpu, Command } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Natural Language Control",
    description: "The command line was powerful but cryptic. The GUI was intuitive but slow. HyperOS combines the power of terminal with the ease of conversation.",
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
    <section id="features" className="w-full max-w-5xl px-6 py-16 z-10">
      <div className="mb-10 text-center opacity-0 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl text-slate-900 mb-6 font-normal">Your OS, Reimagined.</h2>
        <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium">HyperOS sits above your operating system, providing a unified intelligence layer that controls your applications.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {features.map((feature, idx) => (
          <div key={idx} className={`opacity-0 animate-fade-in-up delay-${(idx + 1) * 100}`}>
            <GlassCard hoverEffect className="h-full p-8 flex flex-col justify-between group !bg-white/60 min-h-[280px]">
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all ${feature.variant === 'primary' ? 'bg-indigo-600 shadow-lg shadow-indigo-500/30 text-white' : 'bg-slate-100 border border-slate-200 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
                  <feature.icon className={`w-6 h-6 ${feature.variant === 'primary' ? 'text-white' : ''}`} />
                </div>
                <h3 className="text-2xl text-slate-900 mb-4 font-normal">{feature.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">{feature.description}</p>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;