import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('Fast, Secure Money Transfers Worldwide')).toBeDefined()
  })

  it('renders the subheading', () => {
    render(<Hero />)
    expect(screen.getByText(/Send money to your loved ones/i)).toBeDefined()
  })

  it('renders Get Started button', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started')).toBeDefined()
  })

  it('renders Learn More button', () => {
    render(<Hero />)
    expect(screen.getByText('Learn More')).toBeDefined()
  })

  it('has proper ARIA region', () => {
    render(<Hero />)
    expect(screen.getByRole('region')).toBeDefined()
  })
})
