import React from 'react';

export interface PartnersProps {
  className?: string;
}

export const Partners: React.FC<PartnersProps> = ({ className = '' }) => {
  const partners = [
    { name: 'Moneying', icon: '💰' },
    { name: 'Buildingpro', icon: '🏗️' },
    { name: 'Flexbot', icon: '🤖' },
    { name: 'EXPOR', icon: '📦' },
    { name: 'Redo', icon: '🔄' },
  ];

  return (
    <section className={`bg-white py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          We calculate transfer efficiency and productivity
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Integrate with leading platforms to streamline your money transfer operations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-olive-dark hover:text-olive-light transition-colors"
              role="img"
              aria-label={`${partner.name} integration`}
            >
              <span className="text-2xl" aria-hidden="true">{partner.icon}</span>
              <span className="font-semibold text-lg">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
