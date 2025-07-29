// src/components/Footer.tsx
import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => (
  <footer className="w-full bg-primary text-secondary pt-8 pb-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:flex-row md:justify-between">
      <p className="text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} Luxe3D. Alle rechten voorbehouden.
      </p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <Link href="#"><a className="text-secondary hover:text-accent transition">Instagram</a></Link>
        <Link href="#"><a className="text-secondary hover:text-accent transition">LinkedIn</a></Link>
        <Link href="#"><a className="text-secondary hover:text-accent transition">Dribbble</a></Link>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Alle rechten voorbehouden.
      <br />
      Website gemaakt door:{' '}
      <a
        href="https://www.voswebdesigns.nl"
        className="text-accent hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vos Web Designs
      </a>
    </div>
  </footer>
)

export default Footer
