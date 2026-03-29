"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage, localized } from "@/components/LanguageProvider";
import { actors, Actor } from "@/data/actors";

function ActorCard({ actor }: { actor: Actor }) {
  const { t } = useLanguage();
  const { locale } = useLanguage();
  const name = localized(actor, "name", locale);
  const city = localized(actor, "city", locale);
  const skills = localized(actor, "skills", locale) as unknown as string[];

  return (
    <Link href={`/actors/${actor.id}`} className="glass-card p-5 group block">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${actor.avatar} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
        >
          <span className="text-white font-bold text-lg">
            {actor.name.charAt(0)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold truncate">{name}</h3>
            {actor.available ? (
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" title="Available" />
            ) : (
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 flex-shrink-0" title="Busy" />
            )}
          </div>

          <div className="flex items-center gap-3 mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{actor.age} {t("actors.age")}</span>
            <span>&middot;</span>
            <span>{city}</span>
          </div>

          <div className="flex items-center gap-3 mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">
            <span>{actor.experience} {t("actors.years")} {t("actors.experience").toLowerCase()}</span>
            <span>&middot;</span>
            <span>{actor.filmsCount} {t("actors.films")}</span>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {(skills as unknown as string[]).slice(0, 3).map((skill: string) => (
              <span key={skill} className="badge-primary text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ActorsPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState<"all" | "male" | "female" | "child">("all");

  const filtered = useMemo(() => {
    return actors.filter((actor) => {
      const matchesSearch =
        !search ||
        actor.name.toLowerCase().includes(search.toLowerCase()) ||
        actor.nameEn.toLowerCase().includes(search.toLowerCase()) ||
        actor.nameKk.toLowerCase().includes(search.toLowerCase()) ||
        actor.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
        actor.skillsEn.some((s) => s.toLowerCase().includes(search.toLowerCase()));
      const matchesGender = genderFilter === "all" || actor.gender === genderFilter;
      return matchesSearch && matchesGender;
    });
  }, [search, genderFilter]);

  const filters: { key: "all" | "male" | "female" | "child"; label: string }[] = [
    { key: "all", label: t("actors.filter.all") },
    { key: "male", label: t("actors.filter.male") },
    { key: "female", label: t("actors.filter.female") },
    { key: "child", label: t("actors.filter.child") },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="mb-10">
        <h1 className="section-title">{t("actors.title")}</h1>
        <p className="section-subtitle">{t("actors.subtitle")}</p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("actors.search")}
            className="input-field pl-11"
          />
        </div>

        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setGenderFilter(f.key)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                genderFilter === f.key
                  ? "bg-primary-500 text-white"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
        {filtered.length} / {actors.length}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-zinc-400">
          <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
          <p>{t("ai.noResults")}</p>
        </div>
      )}

      {/* AI CTA */}
      <div className="mt-12 glass-card p-8 text-center bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border-primary-200 dark:border-primary-800">
        <h3 className="text-xl font-bold mb-2">{t("features.ai.title")}</h3>
        <p className="text-zinc-500 dark:text-zinc-400 mb-4">{t("features.ai.desc")}</p>
        <Link href="/ai-casting" className="btn-primary inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          {t("ai.send")}
        </Link>
      </div>
    </div>
  );
}
