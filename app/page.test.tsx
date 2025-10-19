import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('renders the Header component', () => {
    render(<Home />);
    const etranElements = screen.getAllByText('Etran');
    expect(etranElements.length).toBeGreaterThan(0);
  });

  it('renders the Hero section', () => {
    render(<Home />);
    expect(screen.getByText('Money Transfers Made Simple')).toBeInTheDocument();
  });

  it('renders the Partners section', () => {
    render(<Home />);
    expect(screen.getByText(/we calculate transfer efficiency/i)).toBeInTheDocument();
  });

  it('renders the Statistics section', () => {
    render(<Home />);
    expect(screen.getByText('Get More Done In A Week')).toBeInTheDocument();
  });

  it('renders the Reliability section', () => {
    render(<Home />);
    expect(screen.getByText('The Most Reliable App')).toBeInTheDocument();
  });

  it('renders the SoftwareFeatures section', () => {
    render(<Home />);
    expect(screen.getByText('First Class Software')).toBeInTheDocument();
  });

  it('renders the CTA section', () => {
    render(<Home />);
    expect(screen.getByText(/download etran and manage everything/i)).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(<Home />);
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
  });
});
