"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage, localized } from "@/components/LanguageProvider";
import { movies, MovieTask } from "@/data/movies";
import { actors } from "@/data/actors";

const statusBadges = {
  pre: "badge-primary",
  production: "badge-accent",
  post: "badge-primary",
  completed: "badge-success",
};

const taskStatusLabels: Record<string, Record<string, string>> = {
  todo: { ru: "К выполнению", kk: "Орындалуы керек", en: "To Do" },
  in_progress: { ru: "В работе", kk: "Жұмыста", en: "In Progress" },
  done: { ru: "Готово", kk: "Дайын", en: "Done" },
};

export default function ProjectDetailPage() {
  const { t, locale } = useLanguage();
  const params = useParams();
  const movie = movies.find((m) => m.id === params.id);
  const [localTasks, setLocalTasks] = useState<MovieTask[]>(movie?.tasks || []);
  const [newTaskName, setNewTaskName] = useState("");

  if (!movie) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="text-zinc-400">Project not found</p>
        <Link href="/projects" className="btn-primary mt-4 inline-block">{t("common.back")}</Link>
      </div>
    );
  }

  const title = localized(movie, "title", locale);
  const desc = localized(movie, "description", locale);
  const genre = localized(movie, "genre", locale);
  const director = localized(movie, "director", locale);
  const castMembers = actors.filter((a) => movie.castIds.includes(a.id));

  const addTask = () => {
    if (!newTaskName.trim()) return;
    const task: MovieTask = {
      id: `t-new-${Date.now()}`,
      title: newTaskName,
      titleKk: newTaskName,
      titleEn: newTaskName,
      status: "todo",
      assignee: "—",
      dueDate: "—",
    };
    setLocalTasks([...localTasks, task]);
    setNewTaskName("");
  };

  const toggleTask = (taskId: string) => {
    setLocalTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task;
        const order: MovieTask["status"][] = ["todo", "in_progress", "done"];
        const nextIdx = (order.indexOf(task.status) + 1) % 3;
        return { ...task, status: order[nextIdx] };
      })
    );
  };

  const columns: MovieTask["status"][] = ["todo", "in_progress", "done"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 animate-fade-in">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-primary-500 mb-10 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {t("common.back")}
      </Link>

      {/* Header */}
      <div className={`rounded-3xl bg-gradient-to-br ${movie.gradient} p-10 md:p-12 mb-10 relative overflow-hidden noise animate-slide-up stagger-1`}>
        <div className="absolute inset-0 bg-black/5" />
        <div className="relative z-10">
          <span className={`${statusBadges[movie.status]}`}>
            {t(`projects.status.${movie.status}`)}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 drop-shadow-lg">{title}</h1>
          <p className="text-white/80 mt-3 max-w-2xl text-lg">{desc}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: t("projects.director"), value: director },
              { label: genre, value: movie.budget },
              { label: t("projects.deadline"), value: movie.deadline },
              { label: t("projects.team"), value: `${movie.teamSize} people` },
            ].map((item, i) => (
              <div key={item.label} className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 animate-slide-up stagger-${i + 2}`}>
                <div className="text-white/60 text-xs uppercase tracking-wide">{item.label}</div>
                <div className="text-white font-bold mt-1 text-lg">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="flex justify-between text-sm text-white/80 mb-2">
              <span>{t("projects.progress")}</span>
              <span className="font-bold text-white text-lg">{movie.progress}%</span>
            </div>
            <div className="w-full h-3.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full bg-white rounded-full transition-all animate-pulse-glow"
                style={{ width: `${movie.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Kanban Board */}
        <div className="lg:col-span-2 animate-slide-up stagger-3">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold gradient-text">{t("projects.tasks")}</h2>
          </div>

          {/* Add task */}
          <div className="flex gap-3 mb-8">
            <input
              type="text"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              placeholder={t("projects.taskName")}
              className="input-field flex-1"
            />
            <button onClick={addTask} className="btn-primary">
              {t("projects.addTask")}
            </button>
          </div>

          {/* Kanban */}
          <div className="grid md:grid-cols-3 gap-5">
            {columns.map((col, colIdx) => {
              const colTasks = localTasks.filter((task) => task.status === col);
              return (
                <div key={col} className={`kanban-column animate-slide-up stagger-${colIdx + 4}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-3 h-3 rounded-full ${
                      col === "todo" ? "bg-zinc-400" : col === "in_progress" ? "bg-amber-500 animate-pulse-glow" : "bg-emerald-500"
                    }`} />
                    <h3 className="font-bold text-sm">
                      {taskStatusLabels[col][locale]}
                    </h3>
                    <span className="text-xs text-zinc-400 ml-auto badge-primary">{colTasks.length}</span>
                  </div>

                  <div className="space-y-3">
                    {colTasks.map((task) => {
                      const taskTitle = localized(task, "title", locale);
                      return (
                        <div
                          key={task.id}
                          onClick={() => toggleTask(task.id)}
                          className="kanban-card"
                        >
                          <p className="text-sm font-semibold">{taskTitle}</p>
                          <div className="flex items-center justify-between mt-2.5 text-xs text-zinc-400">
                            <span>{task.assignee}</span>
                            <span>{task.dueDate}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cast Sidebar */}
        <div className="animate-slide-up stagger-5">
          <h2 className="text-2xl font-extrabold mb-6 gradient-text">{t("projects.cast")}</h2>
          <div className="space-y-3">
            {castMembers.map((actor, i) => {
              const actorName = localized(actor, "name", locale);
              return (
                <Link
                  key={actor.id}
                  href={`/actors/${actor.id}`}
                  className={`glass-card-glow p-4 flex items-center gap-4 group block animate-slide-up stagger-${Math.min(i + 6, 8)}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${actor.avatar} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-white font-bold text-sm">{actor.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm group-hover:text-primary-500 transition-colors">{actorName}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{actor.experience} {t("actors.years")} exp</div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* AI Casting CTA */}
          <Link
            href="/ai-casting"
            className="mt-6 glass-card-glow p-5 flex items-center gap-4 border-dashed border-primary-300 dark:border-primary-700 hover:border-primary-500 block animate-scale-in"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center animate-pulse-glow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-sm gradient-text">{t("features.ai.title")}</div>
              <div className="text-xs text-zinc-400 mt-0.5">{t("ai.subtitle")}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
