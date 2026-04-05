'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AVATAR_COLORS = [
  { bg: '#FDF0F7', border: '#E8A4C8', text: '#9D5780' },
  { bg: '#F5F0FD', border: '#C4A8DE', text: '#7A5A9E' },
  { bg: '#EFF6FB', border: '#A4C8E0', text: '#3A7A9E' },
  { bg: '#FDF0F7', border: '#E8A4C8', text: '#9D5780' },
  { bg: '#F5F0FD', border: '#C4A8DE', text: '#7A5A9E' },
  { bg: '#EFF6FB', border: '#A4C8E0', text: '#3A7A9E' },
];

export default function ReviewsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const reviews = t.reviews.reviews;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = useCallback(() => setCurrent(c => (c - 1 + reviews.length) % reviews.length), [reviews.length]);
  const next = useCallback(() => setCurrent(c => (c + 1) % reviews.length), [reviews.length]);


  const review = reviews[current];
  const color = AVATAR_COLORS[current];

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-24 overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className="mb-14 text-center transition-all duration-700 ease-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-lavender">
            {t.reviews.title}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-dark">
            {t.reviews.heading}
          </h2>
          <div
            className="mx-auto mt-4 w-16 h-1 rounded-full"
            style={{ background: 'linear-gradient(to right, #E8A4C8, #C4A8DE, #A4C8E0)' }}
          />
        </div>

        {/* Card */}
        <div
          className="transition-all duration-700 ease-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div
            key={current}
            className="relative rounded-3xl border border-gray-100 bg-white shadow-lg px-8 py-10 sm:px-12 sm:py-12 animate-fadein"
          >
            {/* Quote mark */}
            <span
              className="absolute top-6 right-8 text-7xl leading-none font-serif select-none opacity-10"
              style={{ color: '#C4A8DE' }}
              aria-hidden="true"
            >
              "
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            {/* Review text */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              "{review.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold border-2 shrink-0"
                style={{ backgroundColor: color.bg, borderColor: color.border, color: color.text }}
              >
                {review.name[0]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-brand-dark text-sm">{review.name}</p>
                  <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                    <VerifiedIcon />
                    {t.reviews.verified}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{review.date} · {review.service}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-lavender hover:border-brand-lavender transition-colors duration-200"
            >
              <ChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir a opinión ${i + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current
                      ? 'linear-gradient(to right, #E8A4C8, #C4A8DE)'
                      : '#D1D5DB',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Siguiente"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-lavender hover:border-brand-lavender transition-colors duration-200"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
