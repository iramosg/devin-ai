import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CTA } from './CTA';

describe('CTA', () => {
  it('renders the main heading', () => {
    render(<CTA />);
    expect(screen.getByText(/download etran and manage everything/i)).toBeInTheDocument();
  });

  it('renders the Get started button', () => {
    render(<CTA />);
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });

  it('renders the image description', () => {
    render(<CTA />);
    expect(screen.getByText(/managing everything from your phone/i)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<CTA className="custom-class" />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });
});
