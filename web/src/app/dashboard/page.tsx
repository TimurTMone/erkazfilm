"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { movies } from "@/data/movies";

const mockUser = {
  name: "Алмас Тлеубердиев",
  role: "Продюсер",
  avatar: "from-primary-400 to-primary-600",
};

const notifications = [
  { id: 1, text: "Новая заявка на кастинг «Степной ветер»", textKk: "«Дала жели» кастингіне жаңа өтінім", textEn: "New casting application for 'Steppe Wind'", time: "2 ч назад", type: "casting" },
  { id: 2, text: "Тимур Ж. обновил статус задачи", textKk: "Тимур Ж. тапсырма мәртебесін жаңартты", textEn: "Timur Zh. updated task status", time: "5 ч назад", type: "task" },
  { id: 3, text: "AI подобрал 3 кандидатов для роли", textKk: "AI рөл үшін 3 үміткерді таңдады", textEn: "AI found 3 candidates for the role", time: "1 д назад", type: "ai" },
  { id: 4, text: "Бюджет проекта «Код Астаны» утверждён", textKk: "«Астана коды» жобасының бюджеті бекітілді", textEn: "Budget for 'Astana Code' project approved", time: "2 д назад", type: "budget" },
];

export default function DashboardPage() {
  const { t, locale } = useLanguage();

  const activeProjects = movies.filter((m) => m.status !== "completed");
  const totalTasks = movies.reduce((sum, m) => sum + m.tasks.length, 0);
  const doneTasks = movies.reduce(
    (sum, m) => sum + m.tasks.filter((t) => t.status === "done").length,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 animate-fade-in">
      {/* Welcome */}
      <div className="flex items-center gap-5 mb-14 animate-slide-up stagger-1">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mockUser.avatar} flex items-center justify-center shadow-lg animate-float-slow`}>
          <span className="text-white font-bold text-2xl">А</span>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">{t("dashboard.welcome")}, <span className="gradient-text">{mockUser.name}</span></h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-lg">{mockUser.role}</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
        {[
          {
            label: t("dashboard.myProjects"),
            value: activeProjects.length,
            icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375",
            gradient: "from-blue-400 to-blue-600",
          },
          {
            label: t("projects.tasks"),
            value: `${doneTasks}/${totalTasks}`,
            icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            gradient: "from-emerald-400 to-emerald-600",
          },
          {
            label: t("dashboard.myCastings"),
            value: 7,
            icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
            gradient: "from-purple-400 to-purple-600",
          },
          {
            label: t("dashboard.messages"),
            value: 12,
            icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
            gradient: "from-amber-400 to-amber-600",
          },
        ].map((stat, i) => (
          <div key={stat.label} className={`glass-card-glow p-6 animate-slide-up stagger-${i + 2}`}>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-lg`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
              </svg>
            </div>
            <div className="text-3xl font-extrabold gradient-text">{stat.value}</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Projects */}
        <div className="lg:col-span-2 animate-slide-up stagger-6">
          <h2 className="font-extrabold text-2xl mb-6 gradient-text">{t("dashboard.myProjects")}</h2>
          <div className="space-y-4">
            {activeProjects.map((movie, i) => {
              const title = locale === "kk" ? movie.titleKk : locale === "en" ? movie.titleEn : movie.title;
              return (
                <Link
                  key={movie.id}
                  href={`/projects/${movie.id}`}
                  className={`glass-card-glow p-5 flex items-center gap-5 block animate-slide-up stagger-${Math.min(i + 7, 8)}`}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${movie.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-base">{title}</div>
                    <div className="text-xs text-zinc-400 mt-1">
                      <span className="badge-accent mr-2">{t(`projects.status.${movie.status}`)}</span>
                      {movie.teamSize} {t("projects.team").toLowerCase()}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xl font-extrabold gradient-text">{movie.progress}%</div>
                    <div className="w-24 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full mt-1.5">
                      <div
                        className="h-full bg-gradient-to-r from-primary-400 to-accent-500 rounded-full"
                        style={{ width: `${movie.progress}%` }}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Notifications */}
        <div className="animate-slide-up stagger-7">
          <h2 className="font-extrabold text-2xl mb-6 gradient-text">{t("dashboard.notifications")}</h2>
          <div className="space-y-3">
            {notifications.map((notif, i) => {
              const text = locale === "kk" ? notif.textKk : locale === "en" ? notif.textEn : notif.text;
              const iconGradient = {
                casting: "from-blue-400 to-blue-600",
                task: "from-amber-400 to-amber-600",
                ai: "from-purple-400 to-purple-600",
                budget: "from-emerald-400 to-emerald-600",
              }[notif.type];

              return (
                <div key={notif.id} className={`glass-card-glow p-4 flex items-start gap-4 animate-slide-up stagger-${Math.min(i + 1, 8)}`}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconGradient} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{text}</p>
                    <p className="text-xs text-zinc-400 mt-1.5">{notif.time}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h3 className="font-bold text-sm text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wide">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/ai-casting" className="glass-card-glow p-4 text-center hover:border-primary-500 transition-all block">
                <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-2 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <span className="text-xs font-bold">{t("nav.aiCasting")}</span>
              </Link>
              <Link href="/actors" className="glass-card-glow p-4 text-center hover:border-accent-500 transition-all block">
                <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-2 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <span className="text-xs font-bold">{t("nav.actors")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
