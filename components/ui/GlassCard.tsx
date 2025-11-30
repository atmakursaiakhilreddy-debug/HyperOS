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
  const hoverStyles = hoverEffect ? 'transition-all duration-500 ease-out hover:!bg-white/95 hover:shadow-xl hover:scale-[1.02]' : '';

  return (
    <div className={`rounded-2xl ${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;