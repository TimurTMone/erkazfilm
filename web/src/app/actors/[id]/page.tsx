"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage, localized } from "@/components/LanguageProvider";
import { Actor } from "@/data/actors";
import { fetchActor, toErkazActor } from "@/lib/api";

export default function ActorProfilePage() {
  const { t, locale } = useLanguage();
  const params = useParams();
  const [actor, setActor] = useState<(Actor & Record<string, unknown>) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = Number(params.id);
    if (!id) { setLoading(false); return; }
    fetchActor(id)
      .then((a) => setActor(toErkazActor(a) as Actor & Record<string, unknown>))
      .catch(() => setActor(null))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full border-4 border-primary-500/30 border-t-primary-500 animate-spin" />
      </div>
    );
  }

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
              {actor.languages.map((lang: string) => (
                <span key={lang} className="badge-accent text-sm px-4 py-1.5">{lang}</span>
              ))}
            </div>
          </div>

          {actor.portfolio && (
            <div className="glass-card-glow p-7 animate-slide-up stagger-5">
              <h2 className="font-bold text-lg mb-3">Portfolio</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-[15px]">{actor.portfolio as string}</p>
            </div>
          )}

          {actor.theater && (
            <div className="glass-card-glow p-7 animate-slide-up stagger-6">
              <h2 className="font-bold text-lg mb-3">{t("nav.projects") || "Theater"}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-[15px]">{actor.theater as string}</p>
            </div>
          )}

          {(actor.phone || actor.email || actor.socialLinks) && (
            <div className="glass-card-glow p-7 animate-slide-up stagger-7">
              <h2 className="font-bold text-lg mb-3">{t("actors.contact")}</h2>
              <div className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                {actor.phone && <p>Tel: {actor.phone as string}</p>}
                {actor.email && <p>Email: {actor.email as string}</p>}
                {actor.socialLinks && <p>Social: {actor.socialLinks as string}</p>}
                {actor.videoShowreel && (
                  <a href={actor.videoShowreel as string} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline block">
                    Showreel / Video
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
