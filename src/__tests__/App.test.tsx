import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Test Dual Agent'
    )
  })

  it('renders the counter button starting at 0', () => {
    render(<App />)
    expect(screen.getByRole('button')).toHaveTextContent('Count is 0')
  })

  it('increments counter on click', () => {
    render(<App />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(button).toHaveTextContent('Count is 1')
    fireEvent.click(button)
    expect(button).toHaveTextContent('Count is 2')
  })

  it('counter button has accessible aria-label', () => {
    render(<App />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', expect.stringContaining('counter'))
  })

  it('renders documentation links with security attributes', () => {
    render(<App />)
    const links = screen.getAllByRole('link')
    const externalLinks = links.filter(
      (link) => link.getAttribute('target') === '_blank'
    )
    expect(externalLinks.length).toBeGreaterThan(0)
    for (const link of externalLinks) {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('renders doc section with Vite and React links', () => {
    render(<App />)
    expect(screen.getByText('Explore Vite')).toBeInTheDocument()
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<App />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('Discord')).toBeInTheDocument()
    expect(screen.getByText('X.com')).toBeInTheDocument()
    expect(screen.getByText('Bluesky')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the workflow note', () => {
    render(<App />)
    expect(
      screen.getByText(/one agent edits while another reviews/)
    ).toBeInTheDocument()
  })
})
