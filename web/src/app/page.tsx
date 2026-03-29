"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { actors } from "@/data/actors";

const features = [
  { key: "ai", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z", gradient: "from-amber-500 to-orange-500" },
  { key: "db", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z", gradient: "from-cyan-500 to-blue-500" },
  { key: "pm", icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z", gradient: "from-violet-500 to-purple-500" },
  { key: "connect", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z", gradient: "from-emerald-500 to-teal-500" },
];

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  return <span className="tabular-nums">{value}{suffix}</span>;
}

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white dark:from-[#09090b] dark:via-[#09090b] dark:to-[#09090b]" />
        <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-20" />

        {/* Floating orbs */}
        <div className="absolute top-20 right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary-500/20 to-orange-500/10 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-accent-500/15 to-blue-500/10 blur-[80px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-500/5 to-transparent blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05]">
                {t("hero.title")}{" "}
                <span className="gradient-text">{t("hero.titleHighlight")}</span>
              </h1>

              <p className="mt-7 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
                {t("hero.subtitle")}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/ai-casting" className="btn-primary flex items-center gap-2.5 text-base">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  {t("ai.send")}
                </Link>
                <Link href="/actors" className="btn-secondary flex items-center gap-2.5 text-base">
                  {t("hero.cta.actors")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* Social proof */}
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {actors.slice(0, 5).map((a) => (
                    <div key={a.id} className={`w-10 h-10 rounded-full bg-gradient-to-br ${a.avatar} border-2 border-white dark:border-zinc-950 flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{a.name.charAt(0)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold">5,000+ {t("nav.actors").toLowerCase()}</div>
                  <div className="text-xs text-zinc-400">Almaty, Astana, Shymkent & more</div>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="hidden lg:block animate-slide-up stagger-3">
              <div className="relative">
                {/* Main card stack */}
                <div className="relative z-10 glass-card-glow p-6 rounded-3xl">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-orange-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t("features.ai.title")}</div>
                      <div className="text-xs text-zinc-400">AI-Powered Casting</div>
                    </div>
                    <span className="ml-auto badge-primary text-[10px]">LIVE</span>
                  </div>

                  {/* Fake AI result */}
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 text-sm text-zinc-500 dark:text-zinc-400 italic">
                      &ldquo;{t("ai.example1")}&rdquo;
                    </div>
                    {actors.slice(0, 3).map((a, i) => (
                      <div key={a.id} className={`flex items-center gap-3 p-3 rounded-xl bg-zinc-50/50 dark:bg-white/[0.02] border border-zinc-100 dark:border-white/5 animate-slide-up stagger-${i + 4}`}>
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${a.avatar} flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white text-sm font-bold">{a.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{a.name}</div>
                          <div className="text-xs text-zinc-400">{a.age} {t("actors.age")} &middot; {a.city}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary-500">{98 - i * 5}%</div>
                          <div className="text-[10px] text-zinc-400">{t("ai.match")}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative floating cards */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-400 to-blue-500 opacity-80 animate-float blur-sm" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 opacity-60 animate-float-slow blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="relative py-20 border-y border-zinc-100 dark:border-white/5 noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "5,000", suffix: "+", label: t("stats.actors"), color: "from-primary-400 to-orange-400" },
              { value: "50", suffix: "+", label: t("stats.movies"), color: "from-cyan-400 to-blue-400" },
              { value: "5", suffix: "", label: t("stats.companies"), color: "from-violet-400 to-purple-400" },
              { value: "14", suffix: "", label: t("stats.cities"), color: "from-emerald-400 to-teal-400" },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center animate-slide-up stagger-${i + 1}`}>
                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES ═══════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4">{t("footer.platform")}</span>
            <h2 className="section-title">{t("features.title")}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">{t("features.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <div key={feature.key} className={`glass-card-glow p-7 group animate-slide-up stagger-${i + 1}`}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{t(`features.${feature.key}.title`)}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{t(`features.${feature.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ AI CTA ═══════════════ */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-orange-600 dark:from-primary-700 dark:via-primary-800 dark:to-orange-900" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-300/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-semibold mb-8 border border-white/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Powered by AI
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            {t("features.ai.title")}
          </h2>
          <p className="text-white/75 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("features.ai.desc")}
          </p>

          <Link href="/ai-casting" className="inline-flex items-center gap-3 bg-white text-primary-700 font-bold px-10 py-5 rounded-2xl hover:bg-white/95 transition-all duration-300 text-lg shadow-2xl shadow-primary-900/30 hover:shadow-primary-900/40 hover:-translate-y-0.5">
            {t("ai.send")}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ═══════════════ JOIN CTA ═══════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-5">{t("register.title")}</h2>
          <p className="section-subtitle max-w-xl mx-auto mb-10">{t("register.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary text-lg px-10 py-4">
              {t("register.submit")}
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-10 py-4">
              {t("common.more")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
