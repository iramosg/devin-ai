import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the Etran logo', () => {
    render(<Footer />);
    const logos = screen.getAllByText('Etran');
    expect(logos.length).toBeGreaterThan(0);
  });

  it('renders all navigation links', () => {
    render(<Footer />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('Linkedin')).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('renders copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}.*Etran Money Transfer`))).toBeInTheDocument();
  });

  it('has proper navigation aria-labels', () => {
    render(<Footer />);
    expect(screen.getByRole('navigation', { name: /footer navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /legal navigation/i })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Footer className="custom-class" />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('custom-class');
  });
});
