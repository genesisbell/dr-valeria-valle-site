'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      {/* Inverted background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(248, 246, 251, 0.82)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image — slides in from the left */}
          <div
            className="flex justify-center lg:justify-end transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-60px)',
            }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/doctor.png"
                alt={t.common.doctorName}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 288px, 384px"
              />
              {/* Gradient overlay at the bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-24"
                style={{ background: 'linear-gradient(to top, rgba(45,40,73,0.4), transparent)' }}
              />
            </div>
          </div>

          {/* Text — slides in from the right */}
          <div
            className="flex flex-col gap-6 transition-all duration-700 ease-out delay-150"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(60px)',
            }}
          >
            {/* Section label */}
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#C4A8DE' }}
            >
              {t.about.title}
            </span>

            {/* Name & credential */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
                {t.common.doctorName}
              </h2>
              <p className="mt-1 text-brand-lavender font-medium">{t.about.credentials}</p>
            </div>

            {/* Gradient divider */}
            <div
              className="w-16 h-1 rounded-full"
              style={{ background: 'linear-gradient(to right, #E8A4C8, #C4A8DE, #A4C8E0)' }}
            />

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
