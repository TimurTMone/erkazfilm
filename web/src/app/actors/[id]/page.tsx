"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage, localized } from "@/components/LanguageProvider";
import { actors } from "@/data/actors";
import { movies } from "@/data/movies";

export default function ActorProfilePage() {
  const { t } = useLanguage();
  const params = useParams();
  const actor = actors.find((a) => a.id === params.id);

  if (!actor) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="text-zinc-400">Actor not found</p>
        <Link href="/actors" className="btn-primary mt-4 inline-block">{t("common.back")}</Link>
      </div>
    );
  }

  const { locale } = useLanguage();
  const name = localized(actor, "name", locale);
  const city = localized(actor, "city", locale);
  const bio = localized(actor, "bio", locale);
  const skills = localized(actor, "skills", locale) as unknown as string[];

  const actorMovies = movies.filter((m) => m.castIds.includes(actor.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <Link href="/actors" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-primary-500 mb-8">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {t("common.back")}
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6">
            <div className={`w-full aspect-square rounded-xl bg-gradient-to-br ${actor.avatar} flex items-center justify-center mb-6`}>
              <span className="text-white font-black text-6xl">{actor.name.charAt(0)}</span>
            </div>

            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">{city}</p>

            <div className="flex items-center gap-2 mt-3">
              {actor.available ? (
                <span className="badge bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
                  Available
                </span>
              ) : (
                <span className="badge bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                  <span className="w-2 h-2 rounded-full bg-zinc-400 mr-1.5" />
                  Busy
                </span>
              )}
              <span className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400">
                &#9733; {actor.rating}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">{t("actors.age")}</span>
                <span className="font-medium">{actor.age}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">{t("actors.height")}</span>
                <span className="font-medium">{actor.height} cm</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">{t("actors.experience")}</span>
                <span className="font-medium">{actor.experience} {t("actors.years")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">{t("actors.films")}</span>
                <span className="font-medium">{actor.filmsCount}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <button className="btn-primary w-full">{t("actors.invite")}</button>
              <button className="btn-secondary w-full">{t("actors.contact")}</button>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio */}
          <div className="glass-card p-6">
            <h2 className="font-semibold text-lg mb-3">Bio</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{bio}</p>
          </div>

          {/* Skills */}
          <div className="glass-card p-6">
            <h2 className="font-semibold text-lg mb-3">{t("actors.skills")}</h2>
            <div className="flex flex-wrap gap-2">
              {(skills as unknown as string[]).map((skill: string) => (
                <span key={skill} className="badge-primary">{skill}</span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="glass-card p-6">
            <h2 className="font-semibold text-lg mb-3">{t("actors.languages")}</h2>
            <div className="flex flex-wrap gap-2">
              {actor.languages.map((lang) => (
                <span key={lang} className="badge-accent">{lang}</span>
              ))}
            </div>
          </div>

          {/* Filmography */}
          {actorMovies.length > 0 && (
            <div className="glass-card p-6">
              <h2 className="font-semibold text-lg mb-4">
                {t("nav.projects")} ({actorMovies.length})
              </h2>
              <div className="space-y-3">
                {actorMovies.map((movie) => {
                  const movieTitle = localized(movie, "title", locale);
                  const movieGenre = localized(movie, "genre", locale);
                  return (
                    <Link
                      key={movie.id}
                      href={`/projects/${movie.id}`}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${movie.gradient} flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">{movieTitle}</div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400">{movieGenre} &middot; {movie.year}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
