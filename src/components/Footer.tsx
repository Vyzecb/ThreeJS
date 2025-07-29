import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full bg-primary text-secondary py-8 px-6 mt-16">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Luxe3D. Alle rechten voorbehouden.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">Instagram</a>
        <a href="#" aria-label="LinkedIn"  className="hover:opacity-80 transition">LinkedIn</a>
        <a href="#" aria-label="Dribbble"  className="hover:opacity-80 transition">Dribbble</a>
      </div>
    </div>
  </footer>
);

export default Footer;
