import React, { useState } from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-secondary/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo met juiste class */}
        <Link href="/">
          <a className="logo text-2xl font-playfair uppercase tracking-wide text-primary">
            Luxe3D
          </a>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/about">
            <a className="nav-item text-base hover:text-accent transition">
              Over ons
            </a>
          </Link>
          <Link href="/contact">
            <a className="nav-item text-base hover:text-accent transition">
              Contact
            </a>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            /* kruisje icon */
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* hamburger icon */
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-secondary shadow-lg">
          <Link href="/">
            <a className="block px-6 py-4 hover:bg-neutral-light transition" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="block px-6 py-4 hover:bg-neutral-light transition" onClick={() => setMenuOpen(false)}>
              Over ons
            </a>
          </Link>
          <Link href="/contact">
            <a className="block px-6 py-4 hover:bg-neutral-light transition" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
