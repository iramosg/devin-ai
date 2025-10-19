import React from 'react';
import { Card } from './Card';

export interface StatisticsProps {
  className?: string;
}

export const Statistics: React.FC<StatisticsProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gray-50 py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get More Done In A Week
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Maximize your productivity with secure transactions designed to streamline your business to save even more time, regardless
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card variant="stat" ariaLabel="Productivity statistic">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-olive-dark mb-4">2x</div>
              <p className="text-lg font-medium text-gray-700">Double Your Productivity</p>
            </div>
          </Card>
          
          <Card variant="stat" ariaLabel="Efficiency statistic">
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-24 h-24 mx-auto text-olive-dark"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {[...Array(12)].map((_, i) => (
                    <rect
                      key={i}
                      x={10 + i * 7}
                      y={90 - (i + 1) * 6}
                      width="5"
                      height={(i + 1) * 6}
                      fill="currentColor"
                      opacity={0.7 + i * 0.025}
                    />
                  ))}
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-700">Efficiency Increases Per Transfer</p>
            </div>
          </Card>
          
          <Card variant="stat" ariaLabel="Finance statistic">
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="w-24 h-24 mx-auto text-olive-dark"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" />
                  <path
                    d="M50 15 L50 50 L70 60"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="50" cy="50" r="3" fill="currentColor" />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-700">Centralize Your Finances</p>
            </div>
          </Card>
          
          <Card variant="stat" ariaLabel="Activity statistic">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-olive-dark mb-4">130%</div>
              <p className="text-lg font-medium text-gray-700">More Activity</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
