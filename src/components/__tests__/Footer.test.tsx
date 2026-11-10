import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders default text', () => {
    render(<Footer />)
    expect(
      screen.getByText('Built with Claude Code and Codex on separate branches.')
    ).toBeInTheDocument()
  })

  it('renders custom text', () => {
    render(<Footer text="Custom footer" />)
    expect(screen.getByText('Custom footer')).toBeInTheDocument()
  })

  it('renders inside a footer element', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
