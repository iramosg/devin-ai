import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders the Etran logo', () => {
    render(<Header />)
    expect(screen.getByText('Etran')).toBeDefined()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Services')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Contact')).toBeDefined()
  })

  it('renders Send Money button', () => {
    render(<Header />)
    const buttons = screen.getAllByText('Send Money')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('has proper ARIA labels', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeDefined()
    expect(screen.getByRole('navigation')).toBeDefined()
  })
})
