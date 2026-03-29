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

    const ageMatch = q.match(/(\d+)\s*[-–]\s*(\d+)/);
    if (ageMatch) {
      const [, min, max] = ageMatch.map(Number);
      if (actor.age >= min && actor.age <= max) {
        score += 30;
        reasons.push(`Возраст ${actor.age} подходит`);
        reasonsKk.push(`${actor.age} жас сәйкес`);
        reasonsEn.push(`Age ${actor.age} matches`);
      }
    }

    if ((q.includes("мужч") || q.includes("парен") || q.includes("казах") || q.includes("man") || q.includes("male") || q.includes("ер")) && actor.gender === "male") score += 15;
    if ((q.includes("женщ") || q.includes("девуш") || q.includes("woman") || q.includes("female") || q.includes("әйел")) && actor.gender === "female") score += 15;
    if ((q.includes("ребён") || q.includes("ребенок") || q.includes("child") || q.includes("бала") || q.includes("дет")) && actor.gender === "child") score += 25;

    const allSkills = [...actor.skills, ...actor.skillsEn, ...actor.skillsKk].map(s => s.toLowerCase());
    for (const skill of allSkills) {
      if (q.includes(skill.toLowerCase())) {
        score += 20;
        reasons.push(`Навык: ${skill}`);
        reasonsKk.push(`Дағды: ${skill}`);
        reasonsEn.push(`Skill: ${skill}`);
      }
    }

    for (const genre of actor.genres) { if (q.includes(genre.toLowerCase())) score += 15; }

    const keywords = [
      { words: ["спорт", "атлет", "athletic", "бокс", "бой", "fight", "action", "экшн", "каскад"], skills: ["Боевик", "Бокс", "Каскадёрство"] },
      { words: ["танц", "danc", "би", "балет"], skills: ["Танцы", "Балет"] },
      { words: ["вокал", "sing", "vocal", "ән"], skills: ["Вокал"] },
      { words: ["комед", "comed", "весёл", "funny", "көңілді"], skills: ["Комедия"] },
      { words: ["драм", "drama", "серьёзн"], skills: ["Драма"] },
      { words: ["истор", "histor", "тарих", "эпо", "epic"], skills: ["Исторический"] },
      { words: ["семей", "family", "отбасы"], skills: ["Семейное кино"] },
      { words: ["военн", "militar", "солдат", "әскер"], skills: ["Боевик"] },
    ];

    for (const kw of keywords) {
      if (kw.words.some((w) => q.includes(w))) {
        if (actor.skills.some((s) => kw.skills.some((ks) => s.toLowerCase().includes(ks.toLowerCase()))) ||
            actor.skillsEn.some((s) => kw.skills.some((ks) => s.toLowerCase().includes(ks.toLowerCase())))) score += 10;
      }
    }

    if ((q.includes("англ") || q.includes("english")) && actor.languages.includes("Английский")) { score += 10; reasonsEn.push("Speaks English"); reasons.push("Владеет английским"); reasonsKk.push("Ағылшын тілін біледі"); }
    if ((q.includes("опыт") || q.includes("experienc") || q.includes("тәжірибе")) && actor.experience >= 5) { score += 10; reasons.push(`${actor.experience} лет опыта`); reasonsKk.push(`${actor.experience} жыл тәжірибе`); reasonsEn.push(`${actor.experience} years exp`); }
    if (actor.available) score += 5;

    if (score > 10) {
      if (reasons.length === 0) { reasons.push("Подходит по параметрам"); reasonsKk.push("Параметрлер бойынша сәйкес"); reasonsEn.push("Matches parameters"); }
      scored.push({ actor, matchPercent: Math.min(98, score), reason: reasons.join(". "), reasonKk: reasonsKk.join(". "), reasonEn: reasonsEn.join(". ") });
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
    await new Promise((r) => setTimeout(r, 2000));
    setResults(simulateAICasting(searchQuery));
    setIsThinking(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
          </span>
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">AI-Powered Casting</span>
        </div>
        <h1 className="section-title">{t("ai.title")}</h1>
        <p className="section-subtitle max-w-xl mx-auto">{t("ai.subtitle")}</p>
      </div>

      {/* Search Box */}
      <div className="glass-card-glow p-6 md:p-8 mb-8">
        <div className="flex gap-3">
          <div className="flex-1">
            <textarea value={query} onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSearch(); } }}
              placeholder={t("ai.placeholder")} rows={3}
              className="input-field resize-none text-base" />
          </div>
          <button onClick={() => handleSearch()} disabled={isThinking || !query.trim()}
            className="btn-primary self-end disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            {t("ai.send")}
          </button>
        </div>

        {!hasSearched && (
          <div className="mt-5 pt-5 border-t border-zinc-100 dark:border-white/5">
            <p className="text-xs text-zinc-400 mb-3 font-medium uppercase tracking-wider">{t("ai.examples")}</p>
            <div className="flex flex-wrap gap-2">
              {examples.map((ex, i) => (
                <button key={i} onClick={() => handleSearch(ex)}
                  className="text-xs text-left px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 border border-zinc-100 dark:border-white/5 hover:border-primary-200 dark:hover:border-primary-500/20">
                  &ldquo;{ex}&rdquo;
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Thinking State */}
      {isThinking && (
        <div className="glass-card p-12 text-center animate-scale-in">
          <div className="relative w-16 h-16 mx-auto mb-5">
            <div className="absolute inset-0 rounded-full bg-primary-500/20 animate-ping" />
            <div className="absolute inset-2 rounded-full bg-primary-500/30 animate-ping" style={{ animationDelay: "0.2s" }} />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-400 to-orange-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">{t("ai.thinking")}</p>
          <div className="flex justify-center gap-1.5 mt-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {!isThinking && hasSearched && (
        <div className="space-y-4">
          {results.length > 0 && (
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-bold text-xl">{t("ai.results")}</h2>
              <span className="badge-success">{results.length} found</span>
            </div>
          )}

          {results.map((result, i) => {
            const name = localized(result.actor, "name", locale);
            const city = localized(result.actor, "city", locale);
            const reason = locale === "kk" ? result.reasonKk : locale === "en" ? result.reasonEn : result.reason;

            return (
              <div key={result.actor.id} className={`glass-card-glow p-6 animate-slide-up stagger-${i + 1}`}>
                <div className="flex items-start gap-5">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${result.actor.avatar} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-white font-bold text-xl">{result.actor.name.charAt(0)}</span>
                    {/* Rank badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-zinc-900 shadow-md flex items-center justify-center">
                      <span className="text-xs font-black text-primary-500">#{i + 1}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{result.actor.age} {t("actors.age")} &middot; {city} &middot; {result.actor.experience} {t("actors.years")} exp</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-3xl font-black gradient-text">{result.matchPercent}%</div>
                        <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">{t("ai.match")}</div>
                      </div>
                    </div>

                    {/* Match progress bar */}
                    <div className="mt-3 w-full h-1.5 bg-zinc-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-1000" style={{ width: `${result.matchPercent}%` }} />
                    </div>

                    <div className="mt-3 p-3 rounded-xl bg-primary-500/5 border border-primary-500/10">
                      <p className="text-sm text-primary-700 dark:text-primary-300">
                        <span className="font-semibold">{t("ai.reason")}:</span> {reason}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <Link href={`/actors/${result.actor.id}`} className="text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors flex items-center gap-1">
                        {t("actors.viewProfile")}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                      </Link>
                      <button className="text-sm font-medium text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">{t("actors.invite")}</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {results.length === 0 && (
            <div className="glass-card p-16 text-center">
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center">
                <svg className="w-8 h-8 text-zinc-300 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <p className="text-zinc-400 font-medium">{t("ai.noResults")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
