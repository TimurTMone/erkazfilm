"use client";

import Link from "next/link";
import { useLanguage, localized } from "@/components/LanguageProvider";
import { movies } from "@/data/movies";

const statusColors = {
  pre: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  production: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
  post: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  completed: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
};

export default function ProjectsPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="mb-10">
        <h1 className="section-title">{t("projects.title")}</h1>
        <p className="section-subtitle">{t("projects.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {movies.map((movie) => {
          const title = localized(movie, "title", locale);
          const desc = localized(movie, "description", locale);
          const genre = localized(movie, "genre", locale);
          const director = localized(movie, "director", locale);

          return (
            <Link
              key={movie.id}
              href={`/projects/${movie.id}`}
              className="glass-card overflow-hidden group block"
            >
              {/* Header Gradient */}
              <div className={`h-32 bg-gradient-to-br ${movie.gradient} p-6 flex items-end`}>
                <div>
                  <span className={`badge ${statusColors[movie.status]} text-xs`}>
                    {t(`projects.status.${movie.status}`)}
                  </span>
                  <h3 className="text-white font-bold text-xl mt-2 drop-shadow">{title}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-4">{desc}</p>

                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div>
                    <span className="text-zinc-400 text-xs">{t("projects.director")}</span>
                    <div className="font-medium">{director}</div>
                  </div>
                  <div>
                    <span className="text-zinc-400 text-xs">{genre}</span>
                    <div className="font-medium">{movie.budget}</div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-zinc-500 dark:text-zinc-400">{t("projects.progress")}</span>
                    <span className="font-semibold">{movie.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all"
                      style={{ width: `${movie.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400">
                  <span>{t("projects.team")}: {movie.teamSize}</span>
                  <span>{t("projects.tasks")}: {movie.tasks.length}</span>
                  <span>{t("projects.deadline")}: {movie.deadline}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
