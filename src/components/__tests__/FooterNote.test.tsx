import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FooterNote from '../FooterNote'

describe('FooterNote', () => {
  it('renders default text', () => {
    render(<FooterNote />)
    expect(
      screen.getByText(/one agent edits while another reviews/)
    ).toBeInTheDocument()
  })

  it('renders custom text', () => {
    render(<FooterNote text="Custom note" />)
    expect(screen.getByText('Custom note')).toBeInTheDocument()
  })

  it('renders as a paragraph element', () => {
    const { container } = render(<FooterNote />)
    expect(container.querySelector('p')).toBeInTheDocument()
  })
})
