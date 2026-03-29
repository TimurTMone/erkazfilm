"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { translations, Locale } from "@/data/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "ru",
  setLocale: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");

  const t = useCallback(
    (key: string) => {
      return translations[locale][key] || key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function localized(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any,
  field: string,
  locale: Locale
): string {
  if (locale === "kk" && `${field}Kk` in item) return item[`${field}Kk`] as string;
  if (locale === "en" && `${field}En` in item) return item[`${field}En`] as string;
  return item[field] as string;
}

export function useLocalized(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any,
  field: string
): string {
  const { locale } = useLanguage();
  return localized(item, field, locale);
}
