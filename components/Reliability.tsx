import React from 'react';
import { Card } from './Card';

export interface ReliabilityProps {
  className?: string;
}

export const Reliability: React.FC<ReliabilityProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          The Most Reliable App
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card variant="default" ariaLabel="Card features">
            <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <div className="w-48 h-32 bg-olive-dark rounded-lg transform rotate-12 shadow-xl flex items-center justify-center">
                <div className="w-8 h-8 bg-green-light rounded"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Scale Your Team, Not Your Card Expenses</h3>
            <p className="text-gray-600">
              Easily control all of your team cards in one additional card to support all of your team
            </p>
          </Card>
          
          <Card variant="default" ariaLabel="Effortless repair tracking">
            <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-xs">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-olive-dark">20</div>
                  <div className="text-sm text-gray-600">Form 1040-ES</div>
                </div>
                <div className="space-y-2 text-xs text-gray-600">
                  <p>Estimated Tax for Individuals</p>
                  <p>Department of the Treasury</p>
                  <p>Internal Revenue Service</p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Effortless Repair Tracking, Mobile Convenience</h3>
            <p className="text-gray-600">
              Get your team on board in 30 seconds with the ability to track and verify all transactions any time
            </p>
          </Card>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
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
                <p className="text-lg font-semibold">User managing transactions on mobile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
