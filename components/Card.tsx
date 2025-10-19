import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'feature' | 'stat';
  ariaLabel?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  ariaLabel,
}) => {
  const baseStyles = 'rounded-lg transition-shadow';
  
  const variantStyles = {
    default: 'bg-white p-6 shadow-md hover:shadow-lg',
    feature: 'bg-olive-dark p-8 text-white',
    stat: 'bg-green-lighter p-6 border-2 border-green-light',
  };
  
  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      role="article"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};
