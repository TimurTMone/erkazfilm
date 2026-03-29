"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage, localized } from "@/components/LanguageProvider";
import { actors, Actor } from "@/data/actors";

interface AICastingResult {
  actor: Actor;
  matchPercent: number;
  reason: string;
  reasonKk: string;
  reasonEn: string;
}

function simulateAICasting(query: string): AICastingResult[] {
  const q = query.toLowerCase();
  const scored: AICastingResult[] = [];

  for (const actor of actors) {
    let score = 0;
    const reasons: string[] = [];
    const reasonsKk: string[] = [];
    const reasonsEn: string[] = [];

    // Age matching
    const ageMatch = q.match(/(\d+)\s*[-–]\s*(\d+)/);
    if (ageMatch) {
      const [, min, max] = ageMatch.map(Number);
      if (actor.age >= min && actor.age <= max) {
        score += 30;
        reasons.push(`Возраст ${actor.age} лет подходит`);
        reasonsKk.push(`${actor.age} жас сәйкес`);
        reasonsEn.push(`Age ${actor.age} matches`);
      }
    }

    // Gender matching
    if ((q.includes("мужч") || q.includes("парен") || q.includes("казах") || q.includes("man") || q.includes("male") || q.includes("ер")) && actor.gender === "male") {
      score += 15;
    }
    if ((q.includes("женщ") || q.includes("девуш") || q.includes("woman") || q.includes("female") || q.includes("әйел")) && actor.gender === "female") {
      score += 15;
    }
    if ((q.includes("ребён") || q.includes("ребенок") || q.includes("child") || q.includes("бала") || q.includes("дет")) && actor.gender === "child") {
      score += 25;
    }

    // Skills matching
    const allSkills = [...actor.skills, ...actor.skillsEn, ...actor.skillsKk].map(s => s.toLowerCase());
    for (const skill of allSkills) {
      if (q.includes(skill.toLowerCase())) {
        score += 20;
        reasons.push(`Навык: ${skill}`);
        reasonsKk.push(`Дағды: ${skill}`);
        reasonsEn.push(`Skill: ${skill}`);
      }
    }

    // Genre matching
    for (const genre of actor.genres) {
      if (q.includes(genre.toLowerCase())) {
        score += 15;
      }
    }

    // Keyword matching
    const keywords = [
      { words: ["спорт", "атлет", "athletic", "бокс", "бой", "fight", "action", "экшн", "каскад", "stunt"], skills: ["Боевик", "Бокс", "Каскадёрство"] },
      { words: ["танц", "danc", "би", "балет", "ballet"], skills: ["Танцы", "Балет"] },
      { words: ["вокал", "пе", "sing", "vocal", "ән"], skills: ["Вокал"] },
      { words: ["комед", "comed", "весёл", "смешн", "funny", "көңілді"], skills: ["Комедия"] },
      { words: ["драм", "drama", "серьёзн", "глубок"], skills: ["Драма"] },
      { words: ["истор", "histor", "тарих", "эпо", "epic"], skills: ["Исторический"] },
      { words: ["семей", "family", "отбасы", "дет", "child"], skills: ["Семейное кино"] },
      { words: ["военн", "militar", "солдат", "офицер", "әскер"], skills: ["Боевик"] },
      { words: ["режисс", "direct"], skills: ["Режиссура"] },
    ];

    for (const kw of keywords) {
      if (kw.words.some((w) => q.includes(w))) {
        if (actor.skills.some((s) => kw.skills.some((ks) => s.toLowerCase().includes(ks.toLowerCase()))) ||
            actor.skillsEn.some((s) => kw.skills.some((ks) => s.toLowerCase().includes(ks.toLowerCase())))) {
          score += 10;
        }
      }
    }

    // Language matching
    if (q.includes("казах") || q.includes("қазақ") || q.includes("kazakh")) {
      if (actor.languages.includes("Казахский")) score += 10;
    }
    if (q.includes("англ") || q.includes("english") || q.includes("ағылшын")) {
      if (actor.languages.includes("Английский")) {
        score += 10;
        reasons.push("Владеет английским");
        reasonsKk.push("Ағылшын тілін біледі");
        reasonsEn.push("Speaks English");
      }
    }

    // Experience bonus
    if (q.includes("опыт") || q.includes("experienc") || q.includes("тәжірибе")) {
      if (actor.experience >= 5) {
        score += 10;
        reasons.push(`${actor.experience} лет опыта`);
        reasonsKk.push(`${actor.experience} жыл тәжірибе`);
        reasonsEn.push(`${actor.experience} years of experience`);
      }
    }

    // Availability bonus
    if (actor.available) score += 5;

    if (score > 10) {
      if (reasons.length === 0) {
        reasons.push("Подходит по общим параметрам");
        reasonsKk.push("Жалпы параметрлер бойынша сәйкес");
        reasonsEn.push("Matches general parameters");
      }
      scored.push({
        actor,
        matchPercent: Math.min(98, score),
        reason: reasons.join(". "),
        reasonKk: reasonsKk.join(". "),
        reasonEn: reasonsEn.join(". "),
      });
    }
  }

  return scored.sort((a, b) => b.matchPercent - a.matchPercent).slice(0, 5);
}

export default function AICastingPage() {
  const { t, locale } = useLanguage();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AICastingResult[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const examples = [t("ai.example1"), t("ai.example2"), t("ai.example3")];

  const handleSearch = async (q?: string) => {
    const searchQuery = q || query;
    if (!searchQuery.trim()) return;

    setQuery(searchQuery);
    setIsThinking(true);
    setHasSearched(true);

    // Simulate AI thinking delay
    await new Promise((r) => setTimeout(r, 1500));
    const matches = simulateAICasting(searchQuery);
    setResults(matches);
    setIsThinking(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 badge-primary mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          AI-Powered
        </div>
        <h1 className="section-title">{t("ai.title")}</h1>
        <p className="section-subtitle max-w-xl mx-auto">{t("ai.subtitle")}</p>
      </div>

      {/* Search Input */}
      <div className="glass-card p-6 mb-6">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSearch();
                }
              }}
              placeholder={t("ai.placeholder")}
              rows={3}
              className="input-field resize-none"
            />
          </div>
          <button
            onClick={() => handleSearch()}
            disabled={isThinking || !query.trim()}
            className="btn-primary self-end disabled:opacity-50 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            {t("ai.send")}
          </button>
        </div>

        {/* Examples */}
        {!hasSearched && (
          <div className="mt-4">
            <p className="text-xs text-zinc-400 mb-2">{t("ai.examples")}:</p>
            <div className="flex flex-wrap gap-2">
              {examples.map((ex, i) => (
                <button
                  key={i}
                  onClick={() => handleSearch(ex)}
                  className="text-xs text-left px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  &ldquo;{ex}&rdquo;
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Thinking Animation */}
      {isThinking && (
        <div className="glass-card p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
          <p className="text-zinc-500 dark:text-zinc-400">{t("ai.thinking")}</p>
        </div>
      )}

      {/* Results */}
      {!isThinking && hasSearched && (
        <div className="space-y-4">
          {results.length > 0 && (
            <h2 className="font-semibold text-lg">{t("ai.results")} ({results.length})</h2>
          )}

          {results.map((result) => {
            const name = localized(result.actor, "name", locale);
            const city = localized(result.actor, "city", locale);
            const reason = locale === "kk" ? result.reasonKk : locale === "en" ? result.reasonEn : result.reason;

            return (
              <div key={result.actor.id} className="glass-card p-5">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${result.actor.avatar} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-lg">{result.actor.name.charAt(0)}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{name}</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {result.actor.age} {t("actors.age")} &middot; {city}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-500">
                          {result.matchPercent}%
                        </div>
                        <div className="text-xs text-zinc-400">{t("ai.match")}</div>
                      </div>
                    </div>

                    <div className="mt-3 p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
                      <p className="text-sm text-primary-700 dark:text-primary-300">
                        <span className="font-medium">{t("ai.reason")}:</span> {reason}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <Link
                        href={`/actors/${result.actor.id}`}
                        className="text-sm font-medium text-primary-500 hover:text-primary-600"
                      >
                        {t("actors.viewProfile")} &rarr;
                      </Link>
                      <button className="text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
                        {t("actors.invite")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {results.length === 0 && (
            <div className="glass-card p-12 text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-zinc-300 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <p className="text-zinc-400">{t("ai.noResults")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
