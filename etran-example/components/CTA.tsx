import React from 'react';
import { Button } from './Button';

export interface CTAProps {
  className?: string;
}

export const CTA: React.FC<CTAProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gradient-to-br from-olive-dark to-olive-medium py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden mb-8 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
                    <circle cx="24" cy="24" r="6" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-lg font-semibold">Managing everything from your phone</p>
              </div>
            </div>
          </div>
          
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Etran and manage everything from your phone
            </h2>
            <Button variant="primary" size="large" className="mt-6">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
