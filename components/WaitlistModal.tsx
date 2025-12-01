import React, { useState } from 'react';
import { X, Loader2, Check, ExternalLink } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { submitToWaitlist } from '../services/waitlist';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await submitToWaitlist(formData);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <GlassCard variant="high" className="relative w-full max-w-md p-8 animate-float shadow-2xl !bg-white">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl text-slate-900 mb-2 font-normal font-sans">Join the Future</h2>
              <p className="text-slate-500 text-sm font-sans">Be the first to experience the OS designed for AI.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-500 mb-1 ml-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="contactNumber" className="block text-xs font-medium text-slate-500 mb-1 ml-1">Contact Number</label>
                <input
                  type="tel"
                  id="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-500 mb-1 ml-1">Gmail Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@gmail.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-900 text-white font-semibold rounded-xl py-3 mt-4 hover:bg-indigo-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>
            <p className="mt-6 text-center text-[10px] text-slate-400 font-sans">
              By joining, you agree to our Terms of Service.
            </p>
          </>
        ) : (
          <div className="text-center py-6 font-sans">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 border border-green-100">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl text-slate-900 mb-2 font-medium">You're on the list!</h3>
            <p className="text-slate-500 text-sm mb-8">Join our Discord community to get the latest updates.</p>
            
            <a
              href="https://discord.gg/CuqwwBttNP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#5865F2] text-white font-semibold rounded-xl py-3 mb-4 hover:bg-[#4752C4] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#5865F2]/20"
            >
              Join Discord
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full text-slate-400 hover:text-slate-600 transition-all text-xs font-medium"
            >
              Close
            </button>
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default WaitlistModal;