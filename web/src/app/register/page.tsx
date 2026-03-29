"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const roles = [
  { key: "actor", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
  { key: "director", icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5" },
  { key: "producer", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { key: "crew", icon: "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" },
  { key: "extra", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
];

const cities = [
  "Алматы", "Астана", "Шымкент", "Караганда", "Актау", "Атырау",
  "Павлодар", "Семей", "Тараз", "Костанай", "Актобе", "Уральск",
  "Кызылорда", "Петропавловск",
];

export default function RegisterPage() {
  const { t } = useLanguage();
  const [selectedRole, setSelectedRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center animate-fade-in">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
          <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">{t("register.success")}</h1>
        <button onClick={() => setSubmitted(false)} className="btn-primary mt-4">
          {t("common.back")}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="section-title">{t("register.title")}</h1>
        <p className="section-subtitle">{t("register.subtitle")}</p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-8">
        {/* Role Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-3">{t("register.role")}</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {roles.map((role) => (
              <button
                key={role.key}
                type="button"
                onClick={() => setSelectedRole(role.key)}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  selectedRole === role.key
                    ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20"
                    : "border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600"
                }`}
              >
                <svg
                  className={`w-6 h-6 mx-auto mb-2 ${
                    selectedRole === role.key ? "text-primary-500" : "text-zinc-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={role.icon} />
                </svg>
                <span className={`text-xs font-medium ${
                  selectedRole === role.key ? "text-primary-600 dark:text-primary-400" : "text-zinc-500 dark:text-zinc-400"
                }`}>
                  {t(`register.role.${role.key}`)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1.5">{t("register.name")}</label>
            <input type="text" required className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">{t("register.email")}</label>
            <input type="email" required className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">{t("register.phone")}</label>
            <input type="tel" className="input-field" placeholder="+7 (___) ___-__-__" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">{t("register.city")}</label>
            <select className="input-field" required>
              <option value="">—</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1.5">{t("register.experience")}</label>
          <input type="text" className="input-field" />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-1.5">{t("register.about")}</label>
          <textarea rows={4} className="input-field resize-none" />
        </div>

        <button type="submit" className="btn-primary w-full text-lg py-4">
          {t("register.submit")}
        </button>
      </form>
    </div>
  );
}
