import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('Header', () => {
  it('renders the Etran logo', () => {
    render(<Header />);
    expect(screen.getByText('Etran')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('Legal Terms')).toBeInTheDocument();
  });

  it('renders Get started button', () => {
    render(<Header />);
    const buttons = screen.getAllByRole('button', { name: /get started/i });
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('has proper navigation aria-label', () => {
    render(<Header />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);
    
    const menuButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    
    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('applies custom className', () => {
    const { container } = render(<Header className="custom-class" />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('custom-class');
  });
});
