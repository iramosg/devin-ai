import React from 'react';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-white border-t border-gray-200 py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="#4a5a2a"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#4a5a2a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-2xl font-bold text-olive-dark">Etran</span>
            </div>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-olive-dark transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 hover:text-olive-dark transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#address" className="text-gray-600 hover:text-olive-dark transition-colors">
                    Address
                  </a>
                </li>
                <li>
                  <a href="#legal" className="text-gray-600 hover:text-olive-dark transition-colors">
                    Linkedin
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-olive-dark mb-4">Etran</h3>
            <nav aria-label="Legal navigation">
              <ul className="space-y-2">
                <li>
                  <a href="#terms" className="text-gray-600 hover:text-olive-dark transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-gray-600 hover:text-olive-dark transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Etran Money Transfer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
