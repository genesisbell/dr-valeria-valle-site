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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

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

          {/* Follow us */}
          <div>
            <h3 className="text-brand-rose font-semibold mb-5 text-sm uppercase tracking-wider">
              {t.footer.followUs}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/neuropediatra.dra.valeriavalle/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-brand-rose transition-colors duration-200"
              >
                <InstagramIcon />
                Instagram
              </a>
              <a
                href="https://www.doctoralia.com.mx/sandra-valeria-valle-suarez/neurologo-infantil-pediatra/guadalajara?utm_campaign=428215&utm_medium=link&utm_source=widget&utm_term=instagram-profile-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-brand-sky transition-colors duration-200"
              >
                <Image src="/doctoralia.png" alt="Doctoralia" width={16} height={16} className="shrink-0" />
                Doctoralia
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

function InstagramIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
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
