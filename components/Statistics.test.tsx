import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Statistics } from './Statistics';

describe('Statistics', () => {
  it('renders the main heading', () => {
    render(<Statistics />);
    expect(screen.getByText('Get More Done In A Week')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Statistics />);
    expect(screen.getByText(/maximize your productivity/i)).toBeInTheDocument();
  });

  it('renders all statistic cards', () => {
    render(<Statistics />);
    expect(screen.getByText('2x')).toBeInTheDocument();
    expect(screen.getByText('Double Your Productivity')).toBeInTheDocument();
    expect(screen.getByText('Efficiency Increases Per Transfer')).toBeInTheDocument();
    expect(screen.getByText('Centralize Your Finances')).toBeInTheDocument();
    expect(screen.getByText('130%')).toBeInTheDocument();
    expect(screen.getByText('More Activity')).toBeInTheDocument();
  });

  it('renders cards with proper aria-labels', () => {
    render(<Statistics />);
    expect(screen.getByRole('article', { name: /productivity statistic/i })).toBeInTheDocument();
    expect(screen.getByRole('article', { name: /efficiency statistic/i })).toBeInTheDocument();
    expect(screen.getByRole('article', { name: /finance statistic/i })).toBeInTheDocument();
    expect(screen.getByRole('article', { name: /activity statistic/i })).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Statistics className="custom-class" />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });
});
