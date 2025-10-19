import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Services from '../Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeDefined()
  })

  it('renders all service cards', () => {
    render(<Services />)
    expect(screen.getByText('International Transfers')).toBeDefined()
    expect(screen.getByText('Fast Processing')).toBeDefined()
    expect(screen.getByText('Secure Transactions')).toBeDefined()
    expect(screen.getByText('24/7 Support')).toBeDefined()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Send money to over 200 countries/i)).toBeDefined()
    expect(screen.getByText(/Most transfers complete within minutes/i)).toBeDefined()
  })

  it('has proper ARIA labelledby', () => {
    render(<Services />)
    const region = screen.getByRole('region')
    expect(region).toBeDefined()
  })
})
