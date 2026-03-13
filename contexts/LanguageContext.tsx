'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { en, es, type Translations } from '@/lib/i18n';

type Locale = 'en' | 'es';

const messages = { en, es };

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  const toggleLocale = () => setLocale((prev) => (prev === 'en' ? 'es' : 'en'));

  return (
    <LanguageContext.Provider value={{ locale, t: messages[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
