
'use client';

import React, { useEffect, useState } from 'react';
import { navLinks } from '@/texts/navbar';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowNavbar(heroBottom <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} bg-white/80 dark:bg-black/80 backdrop-blur shadow-md`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-bold text-3xl bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-transparent">Thanagorn</span>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-7 h-0.5 bg-gray-900 dark:bg-gray-100 mb-1.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-gray-900 dark:bg-gray-100 mb-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-xl font-medium text-gray-900 dark:text-gray-100">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${link.className} transition-colors pt-sans-bold`}
                onClick={handleNavClick(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile nav menu */}
      <ul className={`md:hidden flex flex-col gap-4 text-lg font-medium text-gray-900 dark:text-gray-100 bg-white/95 dark:bg-black/95 px-8 py-6 absolute w-full left-0 top-full shadow-lg transition-all duration-300 z-40 ${menuOpen ? 'max-h-96 opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'}`}>
        {navLinks.map(link => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`${link.className} transition-colors pt-sans-bold`}
              onClick={handleNavClick(link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
