"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage, localized } from "@/components/LanguageProvider";
import { Actor } from "@/data/actors";
import { fetchActors, toErkazActor } from "@/lib/api";

function ActorCard({ actor }: { actor: Actor }) {
  const { t, locale } = useLanguage();
  const name = localized(actor, "name", locale);
  const city = localized(actor, "city", locale);
  const skills = localized(actor, "skills", locale) as unknown as string[];

  return (
    <Link href={`/actors/${actor.id}`} className="glass-card-glow p-5 group block">
      <div className="flex items-start gap-4">
        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${actor.avatar} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-lg`}>
          <span className="text-white font-bold text-lg">{actor.name.charAt(0)}</span>
          {actor.available && (
            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold truncate group-hover:text-primary-500 transition-colors">{name}</h3>
            <span className="text-xs font-bold text-primary-500 bg-primary-500/10 px-1.5 py-0.5 rounded">&#9733; {actor.rating}</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{actor.age} {t("actors.age")}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            <span>{city}</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-xs text-zinc-400">
            <span>{actor.experience} {t("actors.years")} exp</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            <span>{actor.filmsCount} {t("actors.films")}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {(skills as unknown as string[]).slice(0, 3).map((skill: string) => (
              <span key={skill} className="badge-primary text-[10px]">{skill}</span>
            ))}
            {actor.languages.includes("Английский") && (
              <span className="badge-accent text-[10px]">EN</span>
            )}
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
  const [actorsList, setActorsList] = useState<Actor[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 24;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const gender = genderFilter === "all" ? undefined : genderFilter === "child" ? undefined : genderFilter;
      fetchActors({
        page,
        per_page: perPage,
        search: search || undefined,
        gender,
      })
        .then((res) => {
          let actors = res.actors.map(toErkazActor) as Actor[];
          // Client-side child filter (age < 16)
          if (genderFilter === "child") {
            actors = actors.filter((a) => a.age < 16);
          }
          setActorsList(actors);
          setTotal(res.total);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }, 300);
    return () => clearTimeout(timer);
  }, [page, search, genderFilter]);

  const totalPages = Math.ceil(total / perPage);

  const filters: { key: "all" | "male" | "female" | "child"; label: string }[] = [
    { key: "all", label: t("actors.filter.all") },
    { key: "male", label: t("actors.filter.male") },
    { key: "female", label: t("actors.filter.female") },
    { key: "child", label: t("actors.filter.child") },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="mb-10">
        <span className="badge-primary mb-3">{actorsList.length} / {total}</span>
        <h1 className="section-title">{t("actors.title")}</h1>
        <p className="section-subtitle">{t("actors.subtitle")}</p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder={t("actors.search")} className="input-field pl-12" />
        </div>
        <div className="flex gap-2">
          {filters.map((f) => (
            <button key={f.key} onClick={() => { setGenderFilter(f.key); setPage(1); }}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                genderFilter === f.key
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 border border-transparent dark:border-white/5"
              }`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="text-center py-20">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full border-4 border-primary-500/30 border-t-primary-500 animate-spin" />
          <p className="text-zinc-400">{t("ai.loading") || "Loading..."}</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actorsList.map((actor, i) => (
            <div key={actor.id} className={`animate-slide-up stagger-${Math.min(i + 1, 8)}`}>
              <ActorCard actor={actor} />
            </div>
          ))}
        </div>
      )}

      {!loading && actorsList.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center">
            <svg className="w-8 h-8 text-zinc-300 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <p className="text-zinc-400 font-medium">{t("ai.noResults")}</p>
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="px-5 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-white/10 disabled:opacity-30 transition-all"
          >
            &larr; {t("common.back") || "Назад"}
          </button>
          <span className="text-sm text-zinc-400">{page} / {totalPages}</span>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
            className="px-5 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-white/10 disabled:opacity-30 transition-all"
          >
            {t("common.next") || "Далее"} &rarr;
          </button>
        </div>
      )}

      {/* AI CTA */}
      <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-accent-500/10 dark:from-primary-500/5 dark:via-transparent dark:to-accent-500/5 border border-primary-500/20 dark:border-primary-500/10 p-10 text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px]" />
        <h3 className="text-2xl font-bold mb-3 relative">{t("features.ai.title")}</h3>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6 max-w-lg mx-auto relative">{t("features.ai.desc")}</p>
        <Link href="/ai-casting" className="btn-primary inline-flex items-center gap-2.5 relative">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          {t("ai.send")}
        </Link>
      </div>
    </div>
  );
}
