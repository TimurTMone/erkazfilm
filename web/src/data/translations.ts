export type Locale = "ru" | "kk" | "en";

export const translations: Record<Locale, Record<string, string>> = {
  ru: {
    // Nav
    "nav.home": "Главная",
    "nav.actors": "База актёров",
    "nav.projects": "Проекты",
    "nav.aiCasting": "AI Кастинг",
    "nav.register": "Регистрация",
    "nav.dashboard": "Кабинет",
    "nav.about": "О платформе",
    "nav.language": "Язык",
    "nav.theme": "Тема",

    // Hero
    "hero.badge": "Платформа для кино Казахстана",
    "hero.title": "Создаём будущее",
    "hero.titleHighlight": "казахстанского кино",
    "hero.subtitle":
      "ErKaz — единая платформа для актёров, режиссёров и продюсеров. Находите таланты с помощью ИИ, управляйте проектами и участвуйте в создании фильмов.",
    "hero.cta.actors": "Найти актёров",
    "hero.cta.register": "Присоединиться",

    // Features
    "features.title": "Возможности платформы",
    "features.subtitle": "Всё для кинопроизводства в одном месте",
    "features.ai.title": "AI Кастинг",
    "features.ai.desc":
      "Искусственный интеллект анализирует базу актёров и подбирает идеальных кандидатов для каждой роли.",
    "features.db.title": "База талантов",
    "features.db.desc":
      "Более 5000 актёров, режиссёров и специалистов кино. Поиск по навыкам, опыту и типажу.",
    "features.pm.title": "Управление проектами",
    "features.pm.desc":
      "Планируйте съёмки, управляйте кастингом и отслеживайте прогресс — всё в одном приложении.",
    "features.connect.title": "Нетворкинг",
    "features.connect.desc":
      "Объединяем всех участников киноиндустрии Казахстана: от актёров до инвесторов.",

    // Stats
    "stats.actors": "Актёров в базе",
    "stats.movies": "Фильмов в год",
    "stats.companies": "Компаний",
    "stats.cities": "Городов",

    // Actors page
    "actors.title": "База актёров",
    "actors.subtitle": "Найдите идеального актёра для вашего проекта",
    "actors.search": "Поиск по имени, навыкам...",
    "actors.filter.all": "Все",
    "actors.filter.male": "Мужчины",
    "actors.filter.female": "Женщины",
    "actors.filter.child": "Дети",
    "actors.age": "лет",
    "actors.experience": "Опыт",
    "actors.years": "лет",
    "actors.films": "фильмов",
    "actors.viewProfile": "Профиль",
    "actors.languages": "Языки",
    "actors.skills": "Навыки",
    "actors.height": "Рост",
    "actors.contact": "Связаться",
    "actors.invite": "Пригласить на кастинг",

    // Projects
    "projects.title": "Проекты",
    "projects.subtitle": "Текущие кинопроекты и продакшн",
    "projects.status.pre": "Пре-продакшн",
    "projects.status.production": "Съёмки",
    "projects.status.post": "Пост-продакшн",
    "projects.status.completed": "Завершён",
    "projects.director": "Режиссёр",
    "projects.budget": "Бюджет",
    "projects.deadline": "Дедлайн",
    "projects.team": "Команда",
    "projects.tasks": "Задачи",
    "projects.cast": "Каст",
    "projects.progress": "Прогресс",
    "projects.viewDetails": "Подробнее",
    "projects.addTask": "Добавить задачу",
    "projects.taskName": "Название задачи",

    // AI Casting
    "ai.title": "AI Кастинг",
    "ai.subtitle":
      "Опишите роль, и ИИ подберёт лучших кандидатов из базы актёров",
    "ai.placeholder":
      "Опишите роль: возраст, внешность, характер персонажа, языки, навыки...",
    "ai.send": "Подобрать актёров",
    "ai.thinking": "ИИ анализирует базу актёров...",
    "ai.results": "Рекомендованные актёры",
    "ai.match": "Совпадение",
    "ai.reason": "Почему подходит",
    "ai.noResults": "Попробуйте описать роль подробнее",
    "ai.examples": "Примеры запросов",
    "ai.example1":
      "Молодой казах, 25-30 лет, спортивного телосложения, для роли военного",
    "ai.example2":
      "Женщина 35-45 лет, владеет казахским и русским, драматическая роль матери",
    "ai.example3":
      "Ребёнок 8-12 лет, весёлый, для семейной комедии, желательно с опытом",

    // Register
    "register.title": "Присоединитесь к ErKaz",
    "register.subtitle":
      "Зарегистрируйтесь и станьте частью крупнейшей кинопплатформы Казахстана",
    "register.role": "Я хочу быть",
    "register.role.actor": "Актёр / Актриса",
    "register.role.director": "Режиссёр",
    "register.role.producer": "Продюсер",
    "register.role.crew": "Съёмочная группа",
    "register.role.extra": "Массовка",
    "register.name": "Полное имя",
    "register.email": "Email",
    "register.phone": "Телефон",
    "register.city": "Город",
    "register.experience": "Опыт работы",
    "register.about": "О себе",
    "register.submit": "Зарегистрироваться",
    "register.success": "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",

    // Dashboard
    "dashboard.title": "Личный кабинет",
    "dashboard.welcome": "Добро пожаловать",
    "dashboard.myProjects": "Мои проекты",
    "dashboard.myCastings": "Мои кастинги",
    "dashboard.messages": "Сообщения",
    "dashboard.profile": "Профиль",
    "dashboard.notifications": "Уведомления",
    "dashboard.upcoming": "Ближайшие события",
    "dashboard.stats": "Статистика",

    // About
    "about.title": "О платформе ErKaz",
    "about.mission.title": "Наша миссия",
    "about.mission.desc":
      "Объединить и цифровизировать киноиндустрию Казахстана, сделав процесс кинопроизводства прозрачным, эффективным и доступным для всех участников.",
    "about.vision.title": "Видение",
    "about.vision.desc":
      "ErKaz стремится стать главной цифровой платформой для кинопроизводства в Центральной Азии, объединяя таланты, технологии и возможности.",
    "about.companies": "Компании-основатели",

    // Footer
    "footer.desc":
      "Цифровая платформа для киноиндустрии Казахстана. Объединяем таланты, технологии и возможности.",
    "footer.platform": "Платформа",
    "footer.company": "Компания",
    "footer.contacts": "Контакты",
    "footer.rights": "Все права защищены",
    "footer.address": "Алматы, Казахстан",

    // Common
    "common.loading": "Загрузка...",
    "common.more": "Подробнее",
    "common.back": "Назад",
    "common.save": "Сохранить",
    "common.cancel": "Отмена",
    "common.delete": "Удалить",
    "common.edit": "Редактировать",
    "common.search": "Поиск",
    "common.filter": "Фильтр",
    "common.sort": "Сортировка",
    "common.all": "Все",
  },

  kk: {
    // Nav
    "nav.home": "Басты бет",
    "nav.actors": "Актёрлер базасы",
    "nav.projects": "Жобалар",
    "nav.aiCasting": "AI Кастинг",
    "nav.register": "Тіркелу",
    "nav.dashboard": "Кабинет",
    "nav.about": "Платформа туралы",
    "nav.language": "Тіл",
    "nav.theme": "Тақырып",

    // Hero
    "hero.badge": "Қазақстан кинопроизводствосы үшін платформа",
    "hero.title": "Қазақстан киносының",
    "hero.titleHighlight": "болашағын жасаймыз",
    "hero.subtitle":
      "ErKaz — актёрлер, режиссёрлер және продюсерлер үшін бірыңғай платформа. AI көмегімен таланттарды табыңыз, жобаларды басқарыңыз.",
    "hero.cta.actors": "Актёрлерді табу",
    "hero.cta.register": "Қосылу",

    // Features
    "features.title": "Платформа мүмкіндіктері",
    "features.subtitle": "Кинопроизводство үшін барлығы бір жерде",
    "features.ai.title": "AI Кастинг",
    "features.ai.desc":
      "Жасанды интеллект актёрлер базасын талдап, әр рөлге тамаша үміткерлерді таңдайды.",
    "features.db.title": "Таланттар базасы",
    "features.db.desc":
      "5000-нан астам актёр, режиссёр және кино мамандары. Дағдылар, тәжірибе бойынша іздеу.",
    "features.pm.title": "Жоба басқару",
    "features.pm.desc":
      "Түсірілімдерді жоспарлаңыз, кастингті басқарыңыз және прогресті бақылаңыз.",
    "features.connect.title": "Нетворкинг",
    "features.connect.desc":
      "Қазақстан киноиндустриясының барлық қатысушыларын біріктіреміз.",

    // Stats
    "stats.actors": "Актёрлер базада",
    "stats.movies": "Жылына фильмдер",
    "stats.companies": "Компаниялар",
    "stats.cities": "Қалалар",

    // Actors
    "actors.title": "Актёрлер базасы",
    "actors.subtitle": "Жобаңыз үшін тамаша актёрді табыңыз",
    "actors.search": "Аты, дағдылары бойынша іздеу...",
    "actors.filter.all": "Барлығы",
    "actors.filter.male": "Ерлер",
    "actors.filter.female": "Әйелдер",
    "actors.filter.child": "Балалар",
    "actors.age": "жас",
    "actors.experience": "Тәжірибе",
    "actors.years": "жыл",
    "actors.films": "фильм",
    "actors.viewProfile": "Профиль",
    "actors.languages": "Тілдер",
    "actors.skills": "Дағдылар",
    "actors.height": "Бойы",
    "actors.contact": "Байланысу",
    "actors.invite": "Кастингке шақыру",

    // Projects
    "projects.title": "Жобалар",
    "projects.subtitle": "Ағымдағы кинопроекттер",
    "projects.status.pre": "Пре-продакшн",
    "projects.status.production": "Түсірілім",
    "projects.status.post": "Пост-продакшн",
    "projects.status.completed": "Аяқталды",
    "projects.director": "Режиссёр",
    "projects.budget": "Бюджет",
    "projects.deadline": "Мерзім",
    "projects.team": "Команда",
    "projects.tasks": "Тапсырмалар",
    "projects.cast": "Каст",
    "projects.progress": "Прогресс",
    "projects.viewDetails": "Толығырақ",
    "projects.addTask": "Тапсырма қосу",
    "projects.taskName": "Тапсырма атауы",

    // AI Casting
    "ai.title": "AI Кастинг",
    "ai.subtitle":
      "Рөлді сипаттаңыз, AI актёрлер базасынан үздік үміткерлерді таңдайды",
    "ai.placeholder":
      "Рөлді сипаттаңыз: жасы, сыртқы түрі, кейіпкер мінезі, тілдері...",
    "ai.send": "Актёрлерді табу",
    "ai.thinking": "AI актёрлер базасын талдауда...",
    "ai.results": "Ұсынылған актёрлер",
    "ai.match": "Сәйкестік",
    "ai.reason": "Неге сәйкес келеді",
    "ai.noResults": "Рөлді толығырақ сипаттап көріңіз",
    "ai.examples": "Сұрау мысалдары",
    "ai.example1":
      "Жас қазақ, 25-30 жас, спорттық дене бітімді, әскери рөлі үшін",
    "ai.example2":
      "35-45 жас аралығындағы әйел, қазақ және орыс тілдерін біледі, драмалық ана рөлі",
    "ai.example3":
      "8-12 жастағы бала, көңілді, отбасылық комедия үшін, тәжірибесі бар болса жақсы",

    // Register
    "register.title": "ErKaz-ға қосылыңыз",
    "register.subtitle":
      "Тіркеліңіз және Қазақстанның ең ірі киноплатформасының бөлігі болыңыз",
    "register.role": "Мен болғым келеді",
    "register.role.actor": "Актёр / Актриса",
    "register.role.director": "Режиссёр",
    "register.role.producer": "Продюсер",
    "register.role.crew": "Түсіру тобы",
    "register.role.extra": "Массовка",
    "register.name": "Толық аты-жөні",
    "register.email": "Email",
    "register.phone": "Телефон",
    "register.city": "Қала",
    "register.experience": "Жұмыс тәжірибесі",
    "register.about": "Өзі туралы",
    "register.submit": "Тіркелу",
    "register.success":
      "Өтінім жіберілді! Жақын арада сізбен байланысамыз.",

    // Dashboard
    "dashboard.title": "Жеке кабинет",
    "dashboard.welcome": "Қош келдіңіз",
    "dashboard.myProjects": "Менің жобаларым",
    "dashboard.myCastings": "Менің кастингтерім",
    "dashboard.messages": "Хабарламалар",
    "dashboard.profile": "Профиль",
    "dashboard.notifications": "Хабарландырулар",
    "dashboard.upcoming": "Жақындағы оқиғалар",
    "dashboard.stats": "Статистика",

    // About
    "about.title": "ErKaz платформасы туралы",
    "about.mission.title": "Біздің миссиямыз",
    "about.mission.desc":
      "Қазақстан киноиндустриясын біріктіру және цифрландыру, кинопроизводство процесін ашық, тиімді және барлық қатысушылар үшін қолжетімді ету.",
    "about.vision.title": "Көзқарас",
    "about.vision.desc":
      "ErKaz Орталық Азиядағы кинопроизводство үшін басты цифрлық платформа болуға ұмтылады.",
    "about.companies": "Құрылтайшы компаниялар",

    // Footer
    "footer.desc":
      "Қазақстан киноиндустриясы үшін цифрлық платформа. Таланттарды, технологияларды және мүмкіндіктерді біріктіреміз.",
    "footer.platform": "Платформа",
    "footer.company": "Компания",
    "footer.contacts": "Байланыс",
    "footer.rights": "Барлық құқықтар қорғалған",
    "footer.address": "Алматы, Қазақстан",

    // Common
    "common.loading": "Жүктелуде...",
    "common.more": "Толығырақ",
    "common.back": "Артқа",
    "common.save": "Сақтау",
    "common.cancel": "Бас тарту",
    "common.delete": "Жою",
    "common.edit": "Өңдеу",
    "common.search": "Іздеу",
    "common.filter": "Сүзгі",
    "common.sort": "Сұрыптау",
    "common.all": "Барлығы",
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.actors": "Actor Database",
    "nav.projects": "Projects",
    "nav.aiCasting": "AI Casting",
    "nav.register": "Register",
    "nav.dashboard": "Dashboard",
    "nav.about": "About",
    "nav.language": "Language",
    "nav.theme": "Theme",

    // Hero
    "hero.badge": "Kazakhstan Film Industry Platform",
    "hero.title": "Building the future of",
    "hero.titleHighlight": "Kazakh cinema",
    "hero.subtitle":
      "ErKaz — the unified platform for actors, directors, and producers. Find talents with AI, manage projects, and participate in filmmaking.",
    "hero.cta.actors": "Find Actors",
    "hero.cta.register": "Join Now",

    // Features
    "features.title": "Platform Features",
    "features.subtitle": "Everything for film production in one place",
    "features.ai.title": "AI Casting",
    "features.ai.desc":
      "Artificial intelligence analyzes the actor database and selects ideal candidates for every role.",
    "features.db.title": "Talent Database",
    "features.db.desc":
      "Over 5,000 actors, directors, and film specialists. Search by skills, experience, and type.",
    "features.pm.title": "Project Management",
    "features.pm.desc":
      "Plan shoots, manage castings, and track progress — all in one application.",
    "features.connect.title": "Networking",
    "features.connect.desc":
      "Connecting all participants of Kazakhstan's film industry: from actors to investors.",

    // Stats
    "stats.actors": "Actors in database",
    "stats.movies": "Films per year",
    "stats.companies": "Companies",
    "stats.cities": "Cities",

    // Actors
    "actors.title": "Actor Database",
    "actors.subtitle": "Find the perfect actor for your project",
    "actors.search": "Search by name, skills...",
    "actors.filter.all": "All",
    "actors.filter.male": "Male",
    "actors.filter.female": "Female",
    "actors.filter.child": "Children",
    "actors.age": "years old",
    "actors.experience": "Experience",
    "actors.years": "years",
    "actors.films": "films",
    "actors.viewProfile": "Profile",
    "actors.languages": "Languages",
    "actors.skills": "Skills",
    "actors.height": "Height",
    "actors.contact": "Contact",
    "actors.invite": "Invite to casting",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "Current film productions",
    "projects.status.pre": "Pre-production",
    "projects.status.production": "In Production",
    "projects.status.post": "Post-production",
    "projects.status.completed": "Completed",
    "projects.director": "Director",
    "projects.budget": "Budget",
    "projects.deadline": "Deadline",
    "projects.team": "Team",
    "projects.tasks": "Tasks",
    "projects.cast": "Cast",
    "projects.progress": "Progress",
    "projects.viewDetails": "View Details",
    "projects.addTask": "Add Task",
    "projects.taskName": "Task name",

    // AI Casting
    "ai.title": "AI Casting",
    "ai.subtitle":
      "Describe the role, and AI will find the best candidates from the actor database",
    "ai.placeholder":
      "Describe the role: age, appearance, character traits, languages, skills...",
    "ai.send": "Find Actors",
    "ai.thinking": "AI is analyzing the actor database...",
    "ai.results": "Recommended Actors",
    "ai.match": "Match",
    "ai.reason": "Why they fit",
    "ai.noResults": "Try describing the role in more detail",
    "ai.examples": "Example queries",
    "ai.example1":
      "Young Kazakh man, 25-30 years old, athletic build, for a military role",
    "ai.example2":
      "Woman 35-45 years old, speaks Kazakh and Russian, dramatic mother role",
    "ai.example3":
      "Child 8-12 years old, cheerful, for a family comedy, preferably with experience",

    // Register
    "register.title": "Join ErKaz",
    "register.subtitle":
      "Register and become part of Kazakhstan's largest film platform",
    "register.role": "I want to be",
    "register.role.actor": "Actor / Actress",
    "register.role.director": "Director",
    "register.role.producer": "Producer",
    "register.role.crew": "Film Crew",
    "register.role.extra": "Extra",
    "register.name": "Full Name",
    "register.email": "Email",
    "register.phone": "Phone",
    "register.city": "City",
    "register.experience": "Work Experience",
    "register.about": "About You",
    "register.submit": "Register",
    "register.success": "Application submitted! We'll contact you soon.",

    // Dashboard
    "dashboard.title": "Dashboard",
    "dashboard.welcome": "Welcome",
    "dashboard.myProjects": "My Projects",
    "dashboard.myCastings": "My Castings",
    "dashboard.messages": "Messages",
    "dashboard.profile": "Profile",
    "dashboard.notifications": "Notifications",
    "dashboard.upcoming": "Upcoming Events",
    "dashboard.stats": "Statistics",

    // About
    "about.title": "About ErKaz Platform",
    "about.mission.title": "Our Mission",
    "about.mission.desc":
      "To unite and digitize Kazakhstan's film industry, making the filmmaking process transparent, efficient, and accessible to all participants.",
    "about.vision.title": "Vision",
    "about.vision.desc":
      "ErKaz strives to become the leading digital platform for film production in Central Asia, connecting talents, technology, and opportunities.",
    "about.companies": "Founding Companies",

    // Footer
    "footer.desc":
      "Digital platform for Kazakhstan's film industry. Connecting talents, technology, and opportunities.",
    "footer.platform": "Platform",
    "footer.company": "Company",
    "footer.contacts": "Contacts",
    "footer.rights": "All rights reserved",
    "footer.address": "Almaty, Kazakhstan",

    // Common
    "common.loading": "Loading...",
    "common.more": "Learn More",
    "common.back": "Back",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.sort": "Sort",
    "common.all": "All",
  },
};
