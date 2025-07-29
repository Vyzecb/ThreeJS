import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="w-full fixed top-0 left-0 z-50 bg-transparent py-6 px-8 flex justify-between items-center">
    <Link href="/">
      <a className="text-2xl font-playfair uppercase tracking-wide hover:opacity-80 transition">
        Luxe3D
      </a>
    </Link>
    <nav className="space-x-8">
      <Link href="/about">
        <a className="nav-item text-lg hover:underline">Over ons</a>
      </Link>
      <Link href="/contact">
        <a className="nav-item text-lg hover:underline">Contact</a>
      </Link>
    </nav>
  </header>
);

export default Header;
