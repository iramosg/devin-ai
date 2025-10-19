import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByText('Money Transfers Made Simple')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Hero />);
    expect(screen.getByText(/no personal credit checks/i)).toBeInTheDocument();
  });

  it('renders the offerings section', () => {
    render(<Hero />);
    expect(screen.getByText('Our offerings')).toBeInTheDocument();
  });

  it('renders all three feature cards', () => {
    render(<Hero />);
    expect(screen.getByText('Instant productivity')).toBeInTheDocument();
    expect(screen.getByText('Automatic expense management')).toBeInTheDocument();
    expect(screen.getByText('Automated accounting technology')).toBeInTheDocument();
  });

  it('renders footer links', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /address/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /legal terms/i })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Hero className="custom-class" />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });
});
