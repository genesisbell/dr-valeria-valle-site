'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t, locale, toggleLocale } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer style={{ backgroundColor: '#2D2849' }} className="text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Dra. Valeria Valle"
                width={64}
                height={64}
                className="rounded-full opacity-90"
              />
              <div>
                <p className="font-semibold text-lg leading-tight text-white">
                  {t.common.doctorName}
                </p>
                <p className="text-brand-sky text-sm">{t.common.specialty}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-rose font-semibold mb-5 text-sm uppercase tracking-wider">
              {t.footer.quickLinks}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-brand-sky transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-rose font-semibold mb-5 text-sm uppercase tracking-wider">
              {t.footer.contact}
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a
                href="tel:+523334010497"
                className="flex items-center gap-2.5 hover:text-brand-sky transition-colors duration-200"
              >
                <PhoneIcon />
                33 3401 0497
              </a>
              <a
                href="mailto:dra.valeriavalle@gmail.com"
                className="flex items-center gap-2.5 hover:text-brand-sky transition-colors duration-200"
              >
                <EmailIcon />
                dra.valeriavalle@gmail.com
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+Luis+P%C3%A9rez+Verd%C3%ADa+475%2C+Ladr%C3%B3n+de+Guevara%2C+44650+Guadalajara%2C+Jalisco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-brand-sky transition-colors duration-200"
              >
                <LocationIcon />
                <span>{t.footer.address}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Gradient divider */}
        <div
          className="mt-12 mb-6 h-px w-full"
          style={{ background: 'linear-gradient(to right, #E8A4C8, #C4A8DE, #A4C8E0)' }}
        />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>
            © {year} {t.common.doctorName}. {t.footer.rights}
          </p>
          <button
            onClick={toggleLocale}
            className="text-xs font-semibold text-brand-lavender border border-brand-lavender rounded-full px-3 py-1.5 hover:bg-brand-lavender hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {locale === 'en' ? 'Español' : 'English'}
          </button>
          <a
            href="https://margaretsoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-brand-rose transition-colors duration-200"
          >
            Made with ♥ by Margaret Software
          </a>
        </div>
      </div>
    </footer>
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

function LocationIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
