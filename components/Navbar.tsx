'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Dra. Valeria Valle"
              width={52}
              height={52}
              className="rounded-full"
              priority
            />
            <div>
              <p className="font-semibold text-brand-dark text-sm leading-tight">
                {t.common.doctorName}
              </p>
              <p className="text-brand-lavender text-xs">{t.common.specialty}</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-brand-lavender transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Call button — icon only on mobile, full on desktop */}
            <a
              href="tel:+523334010497"
              className="flex items-center gap-2 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow duration-200 p-2.5 md:px-5 md:py-2.5"
              style={{ background: 'linear-gradient(135deg, #E8A4C8, #C4A8DE, #A4C8E0)' }}
              aria-label={t.nav.callNow}
            >
              <PhoneIcon />
              <span className="hidden md:inline">{t.nav.callNow}</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-brand-lavender transition-colors cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 pb-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-2 py-2 text-sm font-medium text-gray-600 hover:text-brand-lavender hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
