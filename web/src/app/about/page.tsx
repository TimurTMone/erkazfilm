"use client";

import { useLanguage, localized } from "@/components/LanguageProvider";
import { companies } from "@/data/movies";

export default function AboutPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="section-title">{t("about.title")}</h1>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="glass-card p-8">
          <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3">{t("about.mission.title")}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{t("about.mission.desc")}</p>
        </div>

        <div className="glass-card p-8">
          <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-3">{t("about.vision.title")}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{t("about.vision.desc")}</p>
        </div>
      </div>

      {/* Companies */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t("about.companies")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company) => {
            const desc = localized(company, "description", locale);
            return (
              <div key={company.id} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">EK</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{company.name}</h3>
                    <span className="badge-accent text-xs">{company.focus}</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Platform Advantages */}
      <div className="glass-card p-8 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 border-primary-200 dark:border-primary-800">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">AI + Film Industry</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            {t("features.ai.desc")}
          </p>
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "< 1 min", label: "AI Casting" },
              { value: "98%", label: "Accuracy" },
              { value: "24/7", label: "Available" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-bold gradient-text">{item.value}</div>
                <div className="text-xs text-zinc-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
