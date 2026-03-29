"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-400 via-primary-500 to-orange-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
                <span className="text-white font-black text-sm">EK</span>
              </div>
              <span className="font-extrabold text-xl">Er<span className="gradient-text">Kaz</span></span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{t("footer.desc")}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">{t("footer.platform")}</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/actors", label: t("nav.actors") },
                { href: "/projects", label: t("nav.projects") },
                { href: "/ai-casting", label: t("nav.aiCasting") },
                { href: "/register", label: t("nav.register") },
              ].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-zinc-500 dark:text-zinc-400 hover:text-primary-500 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-primary-500 transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/dashboard" className="text-zinc-500 dark:text-zinc-400 hover:text-primary-500 transition-colors">{t("nav.dashboard")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">{t("footer.contacts")}</h4>
            <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
              <li>{t("footer.address")}</li>
              <li>info@erkaz.kz</li>
              <li>+7 (727) 331-10-00</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">&copy; 2026 ErKaz. {t("footer.rights")}</p>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span>Powered by AI</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span>Made in Kazakhstan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
