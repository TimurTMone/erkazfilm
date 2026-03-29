"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useLanguage } from "./LanguageProvider";
import { Locale } from "@/data/translations";

const localeLabels: Record<Locale, string> = { ru: "RU", kk: "KZ", en: "EN" };

export default function Header() {
  const { t, locale, setLocale } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/actors", label: t("nav.actors") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/ai-casting", label: t("nav.aiCasting"), highlight: true },
    { href: "/dashboard", label: t("nav.dashboard") },
  ];

  const cycleLocale = () => {
    const order: Locale[] = ["ru", "kk", "en"];
    setLocale(order[(order.indexOf(locale) + 1) % 3]);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary-400 via-primary-500 to-orange-500 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-black text-sm">EK</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight">Er<span className="gradient-text">Kaz</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href) ? "text-primary-600 dark:text-primary-400" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                } ${item.highlight ? "flex items-center gap-1.5" : ""}`}>
                {item.highlight && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                  </span>
                )}
                {item.label}
                {isActive(item.href) && <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary-500" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <Link href="/register" className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-primary-500/10 text-primary-600 dark:text-primary-400 hover:bg-primary-500/20 transition-colors border border-primary-500/20">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" /></svg>
              {t("nav.register")}
            </Link>
            <div className="hidden md:block w-px h-5 bg-zinc-200 dark:bg-zinc-700 mx-1" />
            <button onClick={cycleLocale} className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold tracking-wider text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-all">{localeLabels[locale]}</button>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-all">
              <svg className="w-4 h-4 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
              <svg className="w-4 h-4 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 9h16.5m-16.5 6.75h16.5" />}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(item.href) ? "text-primary-600 dark:text-primary-400 bg-primary-500/5" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"}`}>
                  {item.label}
                </Link>
              ))}
              <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="mt-2 btn-primary text-center text-sm">{t("nav.register")}</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
