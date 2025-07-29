// src/components/Footer.tsx
import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => (
  <footer className="bg-secondary text-primary pt-8 pb-6">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} Luxe3D. Alle rechten voorbehouden.
      </p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <Link href="#">
          <a className="text-primary hover:text-accent transition">Instagram</a>
        </Link>
        <Link href="#">
          <a className="text-primary hover:text-accent transition">LinkedIn</a>
        </Link>
        <Link href="#">
          <a className="text-primary hover:text-accent transition">Dribbble</a>
        </Link>
      </div>
    </div>
    <div className="border-t border-neutral-light mt-6 pt-4">
      <p className="text-center text-xs text-gray-500">
        Website gemaakt door{' '}
        <a
          href="https://www.voswebdesigns.nl"
          className="text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vos Web Designs
        </a>
      </p>
    </div>
  </footer>
)

export default Footer