// src/components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => (
  <footer className="w-full bg-primary text-secondary pt-8 pb-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:flex-row md:justify-between">
      <p className="text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} Luxe3D. Alle rechten voorbehouden.
      </p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="#"
          aria-label="Instagram"
          className="text-secondary hover:text-accent transition"
        >
          Instagram
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-secondary hover:text-accent transition"
        >
          LinkedIn
        </a>
        <a
          href="#"
          aria-label="Dribbble"
          className="text-secondary hover:text-accent transition"
        >
          Dribbble
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
