import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Footer from './components/Footer'
import FooterNote from './components/FooterNote'
import Header from './components/Header'
import './App.css'

const DOC_LINKS = [
  { href: 'https://vite.dev/', icon: viteLogo, label: 'Explore Vite', isImage: true },
  { href: 'https://react.dev/', icon: reactLogo, label: 'Learn more', isImage: true },
] as const

const SOCIAL_LINKS = [
  { href: 'https://github.com/vitejs/vite', iconId: 'github-icon', label: 'GitHub' },
  { href: 'https://chat.vite.dev/', iconId: 'discord-icon', label: 'Discord' },
  { href: 'https://x.com/vite_js', iconId: 'x-icon', label: 'X.com' },
  { href: 'https://bsky.app/profile/vite.dev', iconId: 'bluesky-icon', label: 'Bluesky' },
] as const

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <Header title="Test Dual Agent" />
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
          aria-label={`Increment counter, current count is ${count}`}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            {DOC_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <img className="logo" src={link.icon} alt="" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href={`/icons.svg#${link.iconId}`}></use>
                  </svg>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <div id="footer-note" role="note" aria-label="Workflow note">
        <FooterNote />
      </div>
      <Footer />
    </>
  )
}

export default App
