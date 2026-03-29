# ErKaz — Digital Platform for Kazakhstan's Film Industry

<div align="center">

**ErKaz** is a unified digital platform connecting actors, directors, producers, and film professionals across Kazakhstan. Powered by AI casting, project management tools, and a talent database of 5,000+ professionals.

[Web App](#web-app) | [Mobile App](#mobile-app-flutter) | [Features](#features) | [Deploy](#deployment)

</div>

---

## Overview

ErKaz was built for a Fortune 500 film production holding that operates 5 companies across Kazakhstan's cinema industry — from production and VFX to talent management, distribution, and education. The platform digitizes the entire filmmaking workflow:

- **Actors & Crew** can register, build profiles, and get discovered for roles
- **Directors & Producers** can search talent, run AI-powered casting, and manage projects
- **Film Projects** have built-in Kanban boards, task management, cast tracking, and progress dashboards

### The 5 Founding Companies

| Company | Focus |
|---|---|
| **ErKaz Productions** | Feature films and series |
| **ErKaz Digital** | VFX and post-production |
| **ErKaz Talent** | Casting and talent management |
| **ErKaz Distribution** | Film distribution in Kazakhstan & Central Asia |
| **ErKaz Academy** | Film education platform |

---

## Features

### AI Casting Engine
Describe a role in natural language (in Russian, Kazakh, or English) and the AI engine analyzes the actor database to find the best matches — scored by age, gender, skills, languages, experience, and availability.

### Talent Database
Browse and search 5,000+ actors, directors, and crew members. Filter by gender, skills, city, and experience. Each profile includes bio, filmography, skills, languages, and availability status.

### Project Management
Every film project gets a Kanban board with drag-between columns (To Do / In Progress / Done), task creation, team tracking, budget info, and progress visualization.

### Multilingual (3 languages)
Full UI translation in:
- **Russian** (default)
- **Kazakh** (Қазақша)
- **English**

### Light & Dark Theme
Both web and mobile apps support light and dark mode with persistent preference.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Web Frontend** | Next.js 14, TypeScript, Tailwind CSS, next-themes |
| **Mobile** | Flutter 3.x, Material 3, Provider |
| **AI Engine** | NLP keyword-matching casting algorithm (extensible to Claude API) |
| **Styling** | Glassmorphism, amber/gold (#F59E0B) + cyan (#06B6D4) palette |
| **Deployment** | Render (web), Flutter build (iOS/Android/Web) |

---

## Project Structure

```
erkazfilm/
├── README.md
├── render.yaml          # Render deployment config
├── .gitignore
├── web/                 # Next.js web application
│   ├── src/
│   │   ├── app/         # 10 routes (pages)
│   │   ├── components/  # Shared UI components
│   │   ├── data/        # Mock data + translations
│   │   └── lib/         # Utilities
│   ├── package.json
│   └── tailwind.config.ts
└── mobile/              # Flutter mobile application
    ├── lib/
    │   ├── screens/     # 5 screens
    │   ├── widgets/     # Reusable widgets
    │   ├── models.dart  # Data models + AI engine
    │   ├── l10n.dart    # Translations (3 languages)
    │   ├── theme.dart   # Light/Dark themes
    │   └── main.dart    # App entry
    └── pubspec.yaml
```

---

## Web App

### Routes

| Route | Description |
|---|---|
| `/` | Landing page — hero, stats, feature cards, AI CTA |
| `/actors` | Actor database — search, filter, browse profiles |
| `/actors/[id]` | Actor profile — full bio, skills, filmography |
| `/projects` | Film projects — status, progress, team info |
| `/projects/[id]` | Project detail — Kanban board, tasks, cast sidebar |
| `/ai-casting` | AI Casting — describe role, get matched actors |
| `/register` | Registration — actors, directors, producers, crew, extras |
| `/dashboard` | Producer dashboard — stats, projects, notifications |
| `/about` | Platform info — mission, vision, 5 companies |

### Run Locally

```bash
cd web
npm install
npm run dev
# Open http://localhost:3000
```

### Build for Production

```bash
cd web
npm run build
npm start
```

---

## Mobile App (Flutter)

### Screens

| Screen | Description |
|---|---|
| **Splash** | Animated ErKaz logo with amber gradient |
| **Home** | Dashboard with stats, recent projects, quick actions |
| **Actors** | Searchable list with gender filter chips |
| **AI Casting** | Natural language input → matched actors with % |
| **Profile** | Settings — language, theme, notifications |
| **Actor Detail** | Full profile with gradient header and filmography |

### Run Locally

```bash
cd mobile
flutter pub get

# Run on Chrome
flutter run -d chrome

# Run on iOS simulator
flutter run -d ios

# Run on Android emulator
flutter run -d android

# Build APK
flutter build apk --release
```

---

## Deployment

### Render (Web App)

This repo includes a `render.yaml` for one-click deployment:

1. Connect this repo to [Render](https://render.com)
2. Render auto-detects `render.yaml` and deploys the web app from `web/`
3. Build: `npm install && npm run build`
4. Start: `npm start`

Or deploy manually:
- **Root Directory**: `web`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Environment**: Node

### Flutter Web (Optional)

```bash
cd mobile
flutter build web --release
# Output in mobile/build/web/
```

---

## AI Integration Roadmap

The current AI casting engine uses keyword-matching NLP. The architecture is designed to integrate with **Claude API** for:

- **Smart Casting**: Full natural language understanding of role descriptions
- **Actor Recommendations**: AI-driven suggestions based on past casting decisions
- **Script Analysis**: Automatic character extraction from screenplays
- **Schedule Optimization**: AI-powered shooting schedule generation
- **Market Analysis**: Predictive analytics for box office performance

---

## Localization

All UI strings are externalized into translation files:

- **Web**: `web/src/data/translations.ts` — 100+ keys per language
- **Mobile**: `mobile/lib/l10n.dart` — 70+ keys per language

To add a new language, add a new locale entry to the translation files.

---

## License

Proprietary. All rights reserved by ErKaz Holdings.

---

<div align="center">

**ErKaz** — Building the future of Kazakh cinema

Almaty, Kazakhstan | info@erkaz.kz | +7 (727) 331-10-00

</div>
