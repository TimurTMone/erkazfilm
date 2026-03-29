"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage, localized } from "@/components/LanguageProvider";
import { actors } from "@/data/actors";
import { movies } from "@/data/movies";

export default function ActorProfilePage() {
  const { t, locale } = useLanguage();
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

  const name = localized(actor, "name", locale);
  const city = localized(actor, "city", locale);
  const bio = localized(actor, "bio", locale);
  const skills = localized(actor, "skills", locale) as unknown as string[];
  const actorMovies = movies.filter((m) => m.castIds.includes(actor.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <Link href="/actors" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-primary-500 mb-8 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {t("common.back")}
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1 animate-slide-up stagger-1">
          <div className="glass-card-glow p-7 sticky top-24">
            <div className={`relative w-full aspect-square rounded-2xl bg-gradient-to-br ${actor.avatar} flex items-center justify-center mb-6 shadow-2xl overflow-hidden`}>
              <span className="text-white font-black text-7xl drop-shadow-lg">{actor.name.charAt(0)}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {actor.available && (
                <div className="absolute top-4 right-4 badge-success">Available</div>
              )}
            </div>

            <h1 className="text-2xl font-extrabold">{name}</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">{city}</p>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-lg font-bold text-primary-500">&#9733; {actor.rating}</span>
              <span className="text-sm text-zinc-400">&middot; {actor.filmsCount} {t("actors.films")}</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: t("actors.age"), value: `${actor.age}` },
                { label: t("actors.height"), value: `${actor.height} cm` },
                { label: t("actors.experience"), value: `${actor.experience} ${t("actors.years")}` },
                { label: t("actors.films"), value: `${actor.filmsCount}` },
              ].map((stat) => (
                <div key={stat.label} className="p-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 text-center">
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                {t("actors.invite")}
              </button>
              <button className="btn-secondary w-full">{t("actors.contact")}</button>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card-glow p-7 animate-slide-up stagger-2">
            <h2 className="font-bold text-lg mb-3">Bio</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-[15px]">{bio}</p>
          </div>

          <div className="glass-card-glow p-7 animate-slide-up stagger-3">
            <h2 className="font-bold text-lg mb-4">{t("actors.skills")}</h2>
            <div className="flex flex-wrap gap-2">
              {(skills as unknown as string[]).map((skill: string) => (
                <span key={skill} className="badge-primary text-sm px-4 py-1.5">{skill}</span>
              ))}
            </div>
          </div>

          <div className="glass-card-glow p-7 animate-slide-up stagger-4">
            <h2 className="font-bold text-lg mb-4">{t("actors.languages")}</h2>
            <div className="flex flex-wrap gap-2">
              {actor.languages.map((lang) => (
                <span key={lang} className="badge-accent text-sm px-4 py-1.5">{lang}</span>
              ))}
            </div>
          </div>

          {actorMovies.length > 0 && (
            <div className="glass-card-glow p-7 animate-slide-up stagger-5">
              <h2 className="font-bold text-lg mb-5">{t("nav.projects")} ({actorMovies.length})</h2>
              <div className="space-y-3">
                {actorMovies.map((movie) => {
                  const movieTitle = localized(movie, "title", locale);
                  const movieGenre = localized(movie, "genre", locale);
                  return (
                    <Link key={movie.id} href={`/projects/${movie.id}`}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition-all border border-transparent hover:border-zinc-100 dark:hover:border-white/5 group">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${movie.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.375 19.5h17.25" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold group-hover:text-primary-500 transition-colors">{movieTitle}</div>
                        <div className="text-sm text-zinc-400">{movieGenre} &middot; {movie.year}</div>
                      </div>
                      <svg className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
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
