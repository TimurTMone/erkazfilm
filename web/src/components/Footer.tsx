"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">EK</span>
              </div>
              <span className="font-bold text-xl">
                Er<span className="text-primary-500">Kaz</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.platform")}</h4>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/actors" className="hover:text-primary-500 transition-colors">{t("nav.actors")}</Link></li>
              <li><Link href="/projects" className="hover:text-primary-500 transition-colors">{t("nav.projects")}</Link></li>
              <li><Link href="/ai-casting" className="hover:text-primary-500 transition-colors">{t("nav.aiCasting")}</Link></li>
              <li><Link href="/register" className="hover:text-primary-500 transition-colors">{t("nav.register")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/about" className="hover:text-primary-500 transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary-500 transition-colors">{t("nav.dashboard")}</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contacts")}</h4>
            <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li>{t("footer.address")}</li>
              <li>info@erkaz.kz</li>
              <li>+7 (727) 331-10-00</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400">
            &copy; 2026 ErKaz. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-400">Powered by AI</span>
            <div className="flex gap-2">
              {["facebook", "instagram", "youtube"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
