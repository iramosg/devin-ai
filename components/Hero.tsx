import React from 'react';
import { Button } from './Button';
import { Card } from './Card';

export interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  return (
    <section className={`bg-olive-dark text-white ${className}`}>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Money Transfers Made Simple
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              No personal credit checks or founder guarantee
            </p>
            
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">Our offerings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card variant="feature" className="text-center">
                  <div className="mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M24 4L4 14L24 24L44 14L24 4Z"
                        fill="currentColor"
                        opacity="0.5"
                      />
                      <path
                        d="M4 34L24 44L44 34"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Instant productivity</h3>
                </Card>
                
                <Card variant="feature" className="text-center">
                  <div className="mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" />
                      <circle cx="24" cy="24" r="12" fill="currentColor" opacity="0.5" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Automatic expense management</h3>
                </Card>
                
                <Card variant="feature" className="text-center">
                  <div className="mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect x="8" y="12" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="3" />
                      <path d="M16 20H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Automated accounting technology</h3>
                </Card>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="text-sm hover:text-green-light transition-colors">
                Contact
              </a>
              <a href="#about" className="text-sm hover:text-green-light transition-colors">
                About
              </a>
              <a href="#address" className="text-sm hover:text-green-light transition-colors">
                Address
              </a>
              <a href="#legal" className="text-sm hover:text-green-light transition-colors">
                Legal Terms
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
                <div className="absolute top-4 left-4 bg-green-light text-olive-dark px-3 py-1 rounded-full text-sm font-semibold">
                  Money sent
                </div>
                <div className="absolute top-12 left-4 bg-green-light text-olive-dark px-3 py-1 rounded-full text-sm font-semibold">
                  Instant service
                </div>
                <div className="absolute bottom-4 right-4 bg-green-light text-olive-dark px-3 py-1 rounded-full text-sm font-semibold">
                  Payment received
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-olive-medium rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-16 h-16 text-white"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18 24L22 28L30 20"
                        stroke="#4a5a2a"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
