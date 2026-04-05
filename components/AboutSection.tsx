"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ sectionRef }
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Inverted background image */ }
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        {/* Dark overlay for readability */ }
        <div className="absolute inset-0" style={ { backgroundColor: "rgba(248, 246, 251, 0.82)" } } />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* Image — slides in from the left, matches bio height */ }
          <div
            className="relative hidden lg:block transition-all duration-700 ease-out"
            style={ {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-60px)",
            } }
          >
            <Image
              src="/doctor.png"
              alt={ t.common.doctorName }
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>

          {/* Mobile image */ }
          <div
            className="flex justify-center lg:hidden transition-all duration-700 ease-out"
            style={ {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-60px)",
            } }
          >
            <Image
              src="/doctor.png"
              alt={ t.common.doctorName }
              width={320}
              height={400}
              className="object-cover object-top"
            />
          </div>

          {/* Text — slides in from the right */ }
          <div
            className="flex flex-col gap-6 transition-all duration-700 ease-out delay-150"
            style={ {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(60px)",
            } }
          >
            <div
              className="rounded-2xl bg-white/30 border border-white/40 shadow-sm px-6 py-5 flex flex-col gap-4 text-gray-700 text-base leading-relaxed">

              {/* Name & credential */ }
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
                  { t.common.doctorName }
                </h2>
                <p className="mt-1 text-brand-lavender font-medium">{ t.about.credentials }</p>
              </div>

              {/* Gradient divider */ }
              <div
                className="w-16 h-1 rounded-full"
                style={ { background: "linear-gradient(to right, #E8A4C8, #C4A8DE, #A4C8E0)" } }
              />

              {/* Bio paragraphs */ }
              <p>{ t.about.bio1 }</p>
              <p>{ t.about.bio2 }</p>
              <p>{ t.about.bio3 }</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
