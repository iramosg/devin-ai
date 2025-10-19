import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Reliability } from './Reliability';

describe('Reliability', () => {
  it('renders the main heading', () => {
    render(<Reliability />);
    expect(screen.getByText('The Most Reliable App')).toBeInTheDocument();
  });

  it('renders card features section', () => {
    render(<Reliability />);
    expect(screen.getByText(/scale your team/i)).toBeInTheDocument();
    expect(screen.getByText(/easily control all of your team cards/i)).toBeInTheDocument();
  });

  it('renders repair tracking section', () => {
    render(<Reliability />);
    expect(screen.getByText(/effortless repair tracking/i)).toBeInTheDocument();
    expect(screen.getByText(/get your team on board in 30 seconds/i)).toBeInTheDocument();
  });

  it('renders cards with proper aria-labels', () => {
    render(<Reliability />);
    expect(screen.getByRole('article', { name: /card features/i })).toBeInTheDocument();
    expect(screen.getByRole('article', { name: /effortless repair tracking/i })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Reliability className="custom-class" />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });
});
