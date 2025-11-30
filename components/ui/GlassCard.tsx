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
  const hoverStyles = hoverEffect ? 'transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1' : '';

  return (
    <div className={`rounded-2xl ${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;