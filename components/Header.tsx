'use client';

import React, { useState } from 'react';
import { Button } from './Button';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Contact', href: '#contact' },
    { label: 'About', href: '#about' },
    { label: 'Address', href: '#address' },
    { label: 'Legal Terms', href: '#legal' },
  ];

  return (
    <header className={`bg-olive-dark text-white ${className}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main navigation">
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              fill="currentColor"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-bold">Etran</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-green-light transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" size="small">
            Get started
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <>
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-olive-dark md:hidden z-50 shadow-lg">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-green-light transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" size="small" className="w-full">
                Get started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
