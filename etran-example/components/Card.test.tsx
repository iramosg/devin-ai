import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children content', () => {
    render(<Card>Test content</Card>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default variant styles', () => {
    render(<Card>Default</Card>);
    const card = screen.getByRole('article');
    expect(card).toHaveClass('bg-white');
  });

  it('applies feature variant styles', () => {
    render(<Card variant="feature">Feature</Card>);
    const card = screen.getByRole('article');
    expect(card).toHaveClass('bg-olive-dark');
  });

  it('applies stat variant styles', () => {
    render(<Card variant="stat">Stat</Card>);
    const card = screen.getByRole('article');
    expect(card).toHaveClass('bg-green-lighter');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom</Card>);
    const card = screen.getByRole('article');
    expect(card).toHaveClass('custom-class');
  });

  it('uses ariaLabel when provided', () => {
    render(<Card ariaLabel="Test card">Content</Card>);
    expect(screen.getByRole('article', { name: /test card/i })).toBeInTheDocument();
  });

  it('renders complex children', () => {
    render(
      <Card>
        <h3>Title</h3>
        <p>Description</p>
      </Card>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
