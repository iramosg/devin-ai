import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the Etran brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Etran')).toBeDefined()
  })

  it('renders company tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/Fast, secure, and reliable/i)).toBeDefined()
  })

  it('renders Services section', () => {
    render(<Footer />)
    expect(screen.getByText('Services')).toBeDefined()
    expect(screen.getByText('Send Money')).toBeDefined()
    expect(screen.getByText('Track Transfer')).toBeDefined()
  })

  it('renders Company section', () => {
    render(<Footer />)
    expect(screen.getByText('Company')).toBeDefined()
    expect(screen.getByText('About Us')).toBeDefined()
  })

  it('renders Contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Contact')).toBeDefined()
    expect(screen.getByText(/support@etran.com/i)).toBeDefined()
  })

  it('renders copyright notice', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${currentYear}.*Etran Money Transfer`))).toBeDefined()
  })

  it('has proper contentinfo role', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeDefined()
  })
})
