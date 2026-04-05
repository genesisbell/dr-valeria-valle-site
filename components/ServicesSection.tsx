'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const MOBILE_LIMIT = 5;

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
      id="services"
      ref={sectionRef}
      className="py-24 overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div
          className="mb-14 text-center transition-all duration-700 ease-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-lavender">
            {t.services.title}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-dark">
            {t.services.pricingTitle}
          </h2>
          <div
            className="mx-auto mt-4 w-16 h-1 rounded-full"
            style={{ background: 'linear-gradient(to right, #E8A4C8, #C4A8DE, #A4C8E0)' }}
          />
        </div>

        {/* Pricing list */}
        <div
          className="mx-auto max-w-2xl mb-20 transition-all duration-700 ease-out delay-100"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {t.services.pricing.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: 'linear-gradient(135deg, #E8A4C8, #C4A8DE)' }}
                  />
                  <span className="text-sm font-medium text-brand-dark">{item.name}</span>
                </div>
                <span
                  className="text-sm font-bold tabular-nums"
                  style={{ color: '#7A5A9E' }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Conditions sub-heading */}
        <div
          className="mb-8 text-center transition-all duration-700 ease-out delay-150"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
            {t.services.heading}
          </h3>
        </div>

        {/* Conditions grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {t.services.conditions.map((condition, i) => {
            const hiddenOnMobile = !expanded && i >= MOBILE_LIMIT;
            return (
              <div
                key={i}
                className={`transition-all duration-500 ease-out ${hiddenOnMobile ? 'hidden sm:block' : ''}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
                  transitionDelay: visible ? `${200 + i * 40}ms` : '0ms',
                }}
              >
                <ConditionPill label={condition} index={i} />
              </div>
            );
          })}
        </div>

        {/* Show more/less — mobile only */}
        <div className="mt-6 flex justify-center sm:hidden">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold border transition-colors duration-200"
            style={{ borderColor: '#C4A8DE', color: '#7A5A9E' }}
          >
            {expanded ? t.services.showLess : t.services.showMore}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

function ConditionPill({ label, index }: { label: string; index: number }) {
  const palettes = [
    { bg: '#FDF0F7', border: '#E8A4C8', text: '#9D5780' },
    { bg: '#F5F0FD', border: '#C4A8DE', text: '#7A5A9E' },
    { bg: '#EFF6FB', border: '#A4C8E0', text: '#3A7A9E' },
  ];
  const p = palettes[index % 3];

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200 hover:shadow-md hover:scale-105 cursor-default"
      style={{ backgroundColor: p.bg, borderColor: p.border, color: p.text }}
    >
      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </span>
  );
}
