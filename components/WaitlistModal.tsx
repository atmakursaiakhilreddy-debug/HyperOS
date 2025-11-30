import React, { useState } from 'react';
import { X, Loader2, Check } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { submitToWaitlist } from '../services/waitlist';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await submitToWaitlist({ email });
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
              <h2 className="font-serif text-3xl text-slate-900 mb-2">Join the Future</h2>
              <p className="text-slate-500 text-sm">Be the first to experience the OS designed for AI.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-500 mb-1 ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-900 text-white font-semibold rounded-xl py-3 mt-2 hover:bg-indigo-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20"
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
            <p className="mt-6 text-center text-[10px] text-slate-400">
              By joining, you agree to our Terms of Service and Privacy Policy.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 border border-green-100">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-slate-900 mb-2">You're on the list!</h3>
            <p className="text-slate-500 text-sm mb-8">We'll notify you as soon as a spot opens up.</p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all text-sm"
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