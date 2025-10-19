import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Partners } from './Partners';

describe('Partners', () => {
  it('renders the main heading', () => {
    render(<Partners />);
    expect(screen.getByText(/we calculate transfer efficiency/i)).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Partners />);
    expect(screen.getByText(/integrate with leading platforms/i)).toBeInTheDocument();
  });

  it('renders all partner names', () => {
    render(<Partners />);
    expect(screen.getByText('Moneying')).toBeInTheDocument();
    expect(screen.getByText('Buildingpro')).toBeInTheDocument();
    expect(screen.getByText('Flexbot')).toBeInTheDocument();
    expect(screen.getByText('EXPOR')).toBeInTheDocument();
    expect(screen.getByText('Redo')).toBeInTheDocument();
  });

  it('renders partner icons with proper aria-labels', () => {
    render(<Partners />);
    expect(screen.getByRole('img', { name: /moneying integration/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /buildingpro integration/i })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Partners className="custom-class" />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });
});
