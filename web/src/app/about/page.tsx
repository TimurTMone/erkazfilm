"use client";

import { useLanguage, localized } from "@/components/LanguageProvider";
import { companies } from "@/data/movies";

export default function AboutPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 animate-fade-in relative">
      <div className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="text-center mb-20 relative z-10 animate-slide-up stagger-1">
        <h1 className="section-title gradient-text">{t("about.title")}</h1>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-20 relative z-10">
        <div className="glass-card-glow p-10 animate-slide-up stagger-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-6 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold mb-4 gradient-text">{t("about.mission.title")}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">{t("about.mission.desc")}</p>
        </div>

        <div className="glass-card-glow p-10 animate-slide-up stagger-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-6 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold mb-4 gradient-text">{t("about.vision.title")}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">{t("about.vision.desc")}</p>
        </div>
      </div>

      {/* Companies */}
      <div className="mb-20 relative z-10">
        <h2 className="text-3xl font-extrabold text-center mb-10 gradient-text animate-slide-up stagger-4">{t("about.companies")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((company, i) => {
            const desc = localized(company, "description", locale);
            return (
              <div key={company.id} className={`glass-card-glow p-7 animate-slide-up stagger-${Math.min(i + 5, 8)}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">EK</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{company.name}</h3>
                    <span className="badge-accent text-xs">{company.focus}</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Platform Advantages */}
      <div className="glass-card-glow p-10 md:p-12 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 border-primary-200 dark:border-primary-800 relative z-10 noise animate-slide-up stagger-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6 gradient-text">AI + Film Industry</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 text-lg">
            {t("features.ai.desc")}
          </p>
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "< 1 min", label: "AI Casting" },
              { value: "98%", label: "Accuracy" },
              { value: "24/7", label: "Available" },
            ].map((item) => (
              <div key={item.label} className="animate-float-slow">
                <div className="text-3xl md:text-4xl font-extrabold gradient-text animate-pulse-glow">{item.value}</div>
                <div className="text-sm text-zinc-400 mt-2 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
