import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../Header'

describe('Header', () => {
  it('renders the title as an h1 by default', () => {
    render(<Header title="Hello World" />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Hello World')
  })

  it('renders inside a header element', () => {
    render(<Header title="Test" />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('supports custom heading levels', () => {
    render(<Header title="Sub Heading" level={2} />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Sub Heading')
  })

  it('renders level 3 heading when specified', () => {
    render(<Header title="Deep" level={3} />)
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })
})
