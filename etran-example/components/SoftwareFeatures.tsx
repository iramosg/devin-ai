import React from 'react';
import { Card } from './Card';

export interface SoftwareFeaturesProps {
  className?: string;
}

export const SoftwareFeatures: React.FC<SoftwareFeaturesProps> = ({ className = '' }) => {
  const features = [
    {
      title: 'Safe Storage',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="12" y="16" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M20 24H44M20 32H44M20 40H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Secure',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M32 8L16 16V32C16 42 24 50 32 56C40 50 48 42 48 32V16L32 8Z" stroke="currentColor" strokeWidth="2" />
          <path d="M26 32L30 36L38 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Easy Interest',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="16" y="20" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M24 28V36M32 24V36M40 30V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Family Plans',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="44" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
          <path d="M32 28C38 28 42 32 42 38V44H22V38C22 32 26 28 32 28Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className={`bg-gray-50 py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          First Class Software
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Powerful tools built for modern businesses, with features designed to help you manage your wealth effortlessly
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} variant="feature" ariaLabel={feature.title}>
              <div className="text-center">
                <div className="mb-4 text-green-light flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
