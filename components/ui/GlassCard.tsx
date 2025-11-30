import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'low' | 'high';
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  variant = 'low',
  hoverEffect = false
}) => {
  const baseStyles = variant === 'high' ? 'liquid-glass-high' : 'liquid-glass';
  
  // Refined hover styles with a custom cubic-bezier for a "premium" feel (fast start, smooth end)
  // Added will-change-transform for performance optimization on scale
  const hoverStyles = hoverEffect 
    ? 'transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:!bg-white/95 hover:shadow-2xl hover:scale-[1.02] will-change-transform' 
    : '';

  return (
    <div className={`rounded-2xl ${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;