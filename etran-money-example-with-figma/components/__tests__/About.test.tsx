import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from '../About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('About Etran Money Transfer')).toBeDefined()
  })

  it('renders company description', () => {
    render(<About />)
    expect(screen.getByText(/For over 15 years/i)).toBeDefined()
  })

  it('renders statistics', () => {
    render(<About />)
    expect(screen.getByText('200+')).toBeDefined()
    expect(screen.getByText('5M+')).toBeDefined()
    expect(screen.getByText('15+')).toBeDefined()
  })

  it('renders statistic labels', () => {
    render(<About />)
    expect(screen.getByText('Countries')).toBeDefined()
    expect(screen.getByText('Customers')).toBeDefined()
    expect(screen.getByText('Years')).toBeDefined()
  })

  it('has proper ARIA labelledby', () => {
    render(<About />)
    const region = screen.getByRole('region')
    expect(region).toBeDefined()
  })
})
