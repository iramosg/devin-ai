import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SoftwareFeatures } from './SoftwareFeatures';

describe('SoftwareFeatures', () => {
  it('renders the main heading', () => {
    render(<SoftwareFeatures />);
    expect(screen.getByText('First Class Software')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<SoftwareFeatures />);
    expect(screen.getByText(/powerful tools built for modern businesses/i)).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    render(<SoftwareFeatures />);
    expect(screen.getByText('Safe Storage')).toBeInTheDocument();
    expect(screen.getByText('Secure')).toBeInTheDocument();
    expect(screen.getByText('Easy Interest')).toBeInTheDocument();
    expect(screen.getByText('Family Plans')).toBeInTheDocument();
  });

  it('renders cards with proper aria-labels', () => {
    render(<SoftwareFeatures />);
    expect(screen.getByRole('article', { name: /safe storage/i })).toBeInTheDocument();
    expect(screen.getByRole('article', { name: /secure/i })).toBeInTheDocument();
    expect(screen.getByRole('article', { name: /easy interest/i })).toBeInTheDocument();
    expect(screen.getByRole('article', { name: /family plans/i })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<SoftwareFeatures className="custom-class" />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });
});
