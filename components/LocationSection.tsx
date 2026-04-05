'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6!2d-103.3850!3d20.6737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae2a4a8b0001%3A0x1!2sCalle+Luis+P%C3%A9rez+Verd%C3%ADa+475%2C+Ladr%C3%B3n+de+Guevara%2C+44650+Guadalajara%2C+Jal.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx';

const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Calle+Luis+P%C3%A9rez+Verd%C3%ADa+475%2C+Ladr%C3%B3n+de+Guevara%2C+44650+Guadalajara%2C+Jalisco';

export default function LocationSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 overflow-hidden"
      style={{ backgroundColor: '#F8F6FB' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className="mb-14 text-center transition-all duration-700 ease-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-lavender">
            {t.footer.locationTitle}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-dark">
            {t.footer.locationHeading}
          </h2>
          <div
            className="mx-auto mt-4 w-16 h-1 rounded-full"
            style={{ background: 'linear-gradient(to right, #E8A4C8, #C4A8DE, #A4C8E0)' }}
          />
        </div>

        {/* Map + info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          {/* Map */}
          <div
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-md transition-all duration-700 ease-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)', minHeight: '360px' }}
          >
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Consultorio Dra. Valeria Valle"
            />
          </div>

          {/* Info card */}
          <div
            className="lg:col-span-2 flex flex-col justify-center gap-6 transition-all duration-700 ease-out delay-150"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}
          >
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 flex flex-col gap-6">

              {/* Address */}
              <div className="flex gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #E8A4C8, #C4A8DE)' }}
                >
                  <PinIcon />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-lavender mb-1">
                    {t.footer.locationTitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.footer.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #C4A8DE, #A4C8E0)' }}
                >
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-lavender mb-1">
                    {t.footer.phone}
                  </p>
                  <a
                    href="tel:+523334010497"
                    className="text-sm text-gray-600 hover:text-brand-lavender transition-colors duration-200"
                  >
                    33 3401 0497
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #A4C8E0, #C4A8DE)' }}
                >
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-lavender mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:dra.valeriavalle@gmail.com"
                    className="text-sm text-gray-600 hover:text-brand-lavender transition-colors duration-200"
                  >
                    dra.valeriavalle@gmail.com
                  </a>
                </div>
              </div>

              {/* Directions button */}
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow duration-200"
                style={{ background: 'linear-gradient(135deg, #E8A4C8, #C4A8DE, #A4C8E0)' }}
              >
                <PinIcon />
                {t.footer.getDirections}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
