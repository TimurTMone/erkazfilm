"use client";

import Link from "next/link";
import { useLanguage, localized } from "@/components/LanguageProvider";
import { movies } from "@/data/movies";

const statusColors = {
  pre: "badge-primary",
  production: "badge-accent",
  post: "badge-primary",
  completed: "badge-success",
};

export default function ProjectsPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 animate-fade-in">
      {/* Header Section */}
      <div className="mb-14 text-center relative">
        <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />
        <h1 className="section-title gradient-text">{t("projects.title")}</h1>
        <p className="section-subtitle">{t("projects.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {movies.map((movie, index) => {
          const title = localized(movie, "title", locale);
          const desc = localized(movie, "description", locale);
          const genre = localized(movie, "genre", locale);
          const director = localized(movie, "director", locale);

          return (
            <Link
              key={movie.id}
              href={`/projects/${movie.id}`}
              className={`glass-card-glow overflow-hidden group block animate-slide-up stagger-${index + 1}`}
            >
              {/* Header Gradient */}
              <div className={`h-40 bg-gradient-to-br ${movie.gradient} p-8 flex items-end relative noise`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <span className={`${statusColors[movie.status]} text-xs`}>
                    {t(`projects.status.${movie.status}`)}
                  </span>
                  <h3 className="text-white font-extrabold text-2xl mt-2 drop-shadow-lg">{title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-5">{desc}</p>

                <div className="grid grid-cols-2 gap-4 text-sm mb-5">
                  <div>
                    <span className="text-zinc-400 dark:text-zinc-500 text-xs uppercase tracking-wide">{t("projects.director")}</span>
                    <div className="font-semibold mt-0.5">{director}</div>
                  </div>
                  <div>
                    <span className="text-zinc-400 dark:text-zinc-500 text-xs uppercase tracking-wide">{genre}</span>
                    <div className="font-semibold mt-0.5">{movie.budget}</div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-5">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-zinc-500 dark:text-zinc-400">{t("projects.progress")}</span>
                    <span className="font-bold gradient-text">{movie.progress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500 rounded-full transition-all"
                      style={{ width: `${movie.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5 pt-5 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                    {t("projects.team")}: {movie.teamSize}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {t("projects.tasks")}: {movie.tasks.length}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                    {t("projects.deadline")}: {movie.deadline}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
