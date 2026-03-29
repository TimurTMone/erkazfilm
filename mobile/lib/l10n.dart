class AppLocalizations {
  final String locale;

  AppLocalizations(this.locale);

  static const Map<String, Map<String, String>> _translations = {
    // ============ APP GENERAL ============
    'appName': {
      'ru': 'ErKaz',
      'kk': 'ErKaz',
      'en': 'ErKaz',
    },
    'appSubtitle': {
      'ru': 'Киноиндустрия Казахстана',
      'kk': 'Қазақстан киноиндустриясы',
      'en': 'Kazakhstan Film Industry',
    },
    'splashLoading': {
      'ru': 'Загрузка...',
      'kk': 'Жүктелуде...',
      'en': 'Loading...',
    },

    // ============ NAVIGATION ============
    'navHome': {
      'ru': 'Главная',
      'kk': 'Басты бет',
      'en': 'Home',
    },
    'navActors': {
      'ru': 'Актёры',
      'kk': 'Актёрлер',
      'en': 'Actors',
    },
    'navAiCasting': {
      'ru': 'AI Кастинг',
      'kk': 'AI Кастинг',
      'en': 'AI Casting',
    },
    'navProfile': {
      'ru': 'Профиль',
      'kk': 'Профиль',
      'en': 'Profile',
    },

    // ============ HOME SCREEN ============
    'homeTitle': {
      'ru': 'Панель управления',
      'kk': 'Басқару тақтасы',
      'en': 'Dashboard',
    },
    'homeWelcome': {
      'ru': 'Добро пожаловать в ErKaz',
      'kk': 'ErKaz-ға қош келдіңіз',
      'en': 'Welcome to ErKaz',
    },
    'homeSubtitle': {
      'ru': 'Единая платформа кинопроизводства Казахстана',
      'kk': 'Қазақстанның бірыңғай кино платформасы',
      'en': 'Unified Film Production Platform of Kazakhstan',
    },
    'statActors': {
      'ru': 'Актёров',
      'kk': 'Актёрлер',
      'en': 'Actors',
    },
    'statActorsValue': {
      'ru': '5000+',
      'kk': '5000+',
      'en': '5000+',
    },
    'statFilms': {
      'ru': 'Фильмов/год',
      'kk': 'Фильм/жыл',
      'en': 'Films/year',
    },
    'statFilmsValue': {
      'ru': '50+',
      'kk': '50+',
      'en': '50+',
    },
    'statCompanies': {
      'ru': 'Компаний',
      'kk': 'Компаниялар',
      'en': 'Companies',
    },
    'statCompaniesValue': {
      'ru': '5',
      'kk': '5',
      'en': '5',
    },
    'recentProjects': {
      'ru': 'Текущие проекты',
      'kk': 'Ағымдағы жобалар',
      'en': 'Current Projects',
    },
    'quickActions': {
      'ru': 'Быстрые действия',
      'kk': 'Жылдам әрекеттер',
      'en': 'Quick Actions',
    },
    'actionFindActor': {
      'ru': 'Найти актёра',
      'kk': 'Актёр табу',
      'en': 'Find Actor',
    },
    'actionAiCasting': {
      'ru': 'AI Кастинг',
      'kk': 'AI Кастинг',
      'en': 'AI Casting',
    },
    'actionNewProject': {
      'ru': 'Новый проект',
      'kk': 'Жаңа жоба',
      'en': 'New Project',
    },

    // ============ ACTORS SCREEN ============
    'actorsTitle': {
      'ru': 'База актёров',
      'kk': 'Актёрлер базасы',
      'en': 'Actor Database',
    },
    'actorsSearch': {
      'ru': 'Поиск актёров...',
      'kk': 'Актёрлерді іздеу...',
      'en': 'Search actors...',
    },
    'filterAll': {
      'ru': 'Все',
      'kk': 'Барлығы',
      'en': 'All',
    },
    'filterMale': {
      'ru': 'Мужчины',
      'kk': 'Ерлер',
      'en': 'Male',
    },
    'filterFemale': {
      'ru': 'Женщины',
      'kk': 'Әйелдер',
      'en': 'Female',
    },
    'filterChildren': {
      'ru': 'Дети',
      'kk': 'Балалар',
      'en': 'Children',
    },
    'actorAge': {
      'ru': 'лет',
      'kk': 'жас',
      'en': 'y.o.',
    },
    'actorRating': {
      'ru': 'Рейтинг',
      'kk': 'Рейтинг',
      'en': 'Rating',
    },
    'actorFilms': {
      'ru': 'Фильмов',
      'kk': 'Фильмдер',
      'en': 'Films',
    },
    'actorAwards': {
      'ru': 'Наград',
      'kk': 'Марапаттар',
      'en': 'Awards',
    },
    'actorExperience': {
      'ru': 'Опыт (лет)',
      'kk': 'Тәжірибе (жыл)',
      'en': 'Experience (yrs)',
    },
    'actorSkills': {
      'ru': 'Навыки',
      'kk': 'Дағдылар',
      'en': 'Skills',
    },
    'actorFilmography': {
      'ru': 'Фильмография',
      'kk': 'Фильмография',
      'en': 'Filmography',
    },
    'actorAbout': {
      'ru': 'О себе',
      'kk': 'Өзі туралы',
      'en': 'About',
    },
    'actorContact': {
      'ru': 'Связаться',
      'kk': 'Байланысу',
      'en': 'Contact',
    },
    'actorInvite': {
      'ru': 'Пригласить на кастинг',
      'kk': 'Кастингке шақыру',
      'en': 'Invite to Casting',
    },
    'noActorsFound': {
      'ru': 'Актёры не найдены',
      'kk': 'Актёрлер табылмады',
      'en': 'No actors found',
    },
    'actorsFound': {
      'ru': 'Найдено актёров',
      'kk': 'Актёрлер табылды',
      'en': 'Actors found',
    },

    // ============ AI CASTING SCREEN ============
    'aiCastingTitle': {
      'ru': 'AI Кастинг',
      'kk': 'AI Кастинг',
      'en': 'AI Casting',
    },
    'aiCastingSubtitle': {
      'ru': 'Опишите роль, и AI подберёт актёров',
      'kk': 'Рөлді сипаттаңыз, AI актёрлерді таңдайды',
      'en': 'Describe a role and AI will match actors',
    },
    'aiCastingHint': {
      'ru': 'Например: Молодая женщина 25-30 лет для драматической роли, Алматы...',
      'kk': 'Мысалы: 25-30 жас аралығындағы жас әйел, драма рөлі үшін, Алматы...',
      'en': 'E.g.: Young woman 25-30 years old for a dramatic role, Almaty...',
    },
    'aiCastingButton': {
      'ru': 'Подобрать актёров',
      'kk': 'Актёрлерді таңдау',
      'en': 'Find Actors',
    },
    'aiCastingThinking': {
      'ru': 'AI анализирует запрос...',
      'kk': 'AI сұранысты талдауда...',
      'en': 'AI is analyzing the request...',
    },
    'aiCastingResults': {
      'ru': 'Результаты подбора',
      'kk': 'Таңдау нәтижелері',
      'en': 'Matching Results',
    },
    'aiCastingMatch': {
      'ru': 'Совпадение',
      'kk': 'Сәйкестік',
      'en': 'Match',
    },
    'aiCastingNoResults': {
      'ru': 'Актёры не найдены. Попробуйте изменить запрос.',
      'kk': 'Актёрлер табылмады. Сұранысты өзгертіп көріңіз.',
      'en': 'No actors found. Try changing the query.',
    },
    'aiCastingEmpty': {
      'ru': 'Введите описание роли для начала поиска',
      'kk': 'Іздеуді бастау үшін рөл сипаттамасын енгізіңіз',
      'en': 'Enter a role description to start searching',
    },

    // ============ PROFILE SCREEN ============
    'profileTitle': {
      'ru': 'Профиль',
      'kk': 'Профиль',
      'en': 'Profile',
    },
    'profileName': {
      'ru': 'Кастинг-директор',
      'kk': 'Кастинг-директор',
      'en': 'Casting Director',
    },
    'profileRole': {
      'ru': 'Менеджер проектов',
      'kk': 'Жоба менеджері',
      'en': 'Project Manager',
    },
    'profileEmail': {
      'ru': 'director@erkaz.kz',
      'kk': 'director@erkaz.kz',
      'en': 'director@erkaz.kz',
    },
    'profileLanguage': {
      'ru': 'Язык',
      'kk': 'Тіл',
      'en': 'Language',
    },
    'profileTheme': {
      'ru': 'Тёмная тема',
      'kk': 'Қараңғы тақырып',
      'en': 'Dark Theme',
    },
    'profileNotifications': {
      'ru': 'Уведомления',
      'kk': 'Хабарландырулар',
      'en': 'Notifications',
    },
    'profileAboutApp': {
      'ru': 'О приложении',
      'kk': 'Қосымша туралы',
      'en': 'About App',
    },
    'profileVersion': {
      'ru': 'Версия 1.0.0',
      'kk': 'Нұсқа 1.0.0',
      'en': 'Version 1.0.0',
    },
    'profileLogout': {
      'ru': 'Выйти',
      'kk': 'Шығу',
      'en': 'Log Out',
    },
    'profileSettings': {
      'ru': 'Настройки',
      'kk': 'Баптаулар',
      'en': 'Settings',
    },
    'profileAccount': {
      'ru': 'Аккаунт',
      'kk': 'Аккаунт',
      'en': 'Account',
    },
    'profileProjects': {
      'ru': 'Мои проекты',
      'kk': 'Менің жобаларым',
      'en': 'My Projects',
    },
    'profileFavorites': {
      'ru': 'Избранное',
      'kk': 'Таңдаулылар',
      'en': 'Favorites',
    },

    // ============ MOVIE CARD ============
    'movieProgress': {
      'ru': 'Прогресс',
      'kk': 'Прогресс',
      'en': 'Progress',
    },
    'movieInProduction': {
      'ru': 'В производстве',
      'kk': 'Өндірісте',
      'en': 'In Production',
    },
    'moviePreProduction': {
      'ru': 'Пре-продакшн',
      'kk': 'Пре-продакшн',
      'en': 'Pre-production',
    },
    'moviePostProduction': {
      'ru': 'Пост-продакшн',
      'kk': 'Пост-продакшн',
      'en': 'Post-production',
    },
    'movieCompleted': {
      'ru': 'Завершён',
      'kk': 'Аяқталды',
      'en': 'Completed',
    },

    // ============ COMMON ============
    'cancel': {
      'ru': 'Отмена',
      'kk': 'Бас тарту',
      'en': 'Cancel',
    },
    'ok': {
      'ru': 'ОК',
      'kk': 'ОК',
      'en': 'OK',
    },
    'save': {
      'ru': 'Сохранить',
      'kk': 'Сақтау',
      'en': 'Save',
    },
    'viewAll': {
      'ru': 'Смотреть все',
      'kk': 'Барлығын көру',
      'en': 'View All',
    },
    'male': {
      'ru': 'Мужской',
      'kk': 'Ер',
      'en': 'Male',
    },
    'female': {
      'ru': 'Женский',
      'kk': 'Әйел',
      'en': 'Female',
    },

    // ============ SKILL NAMES (translatable) ============
    'skillDrama': {
      'ru': 'Драма',
      'kk': 'Драма',
      'en': 'Drama',
    },
    'skillAction': {
      'ru': 'Экшн',
      'kk': 'Экшн',
      'en': 'Action',
    },
    'skillComedy': {
      'ru': 'Комедия',
      'kk': 'Комедия',
      'en': 'Comedy',
    },
    'skillHistorical': {
      'ru': 'Исторический',
      'kk': 'Тарихи',
      'en': 'Historical',
    },
    'skillMusical': {
      'ru': 'Мюзикл',
      'kk': 'Мюзикл',
      'en': 'Musical',
    },
    'skillThriller': {
      'ru': 'Триллер',
      'kk': 'Триллер',
      'en': 'Thriller',
    },
    'skillFantasy': {
      'ru': 'Фэнтези',
      'kk': 'Фэнтези',
      'en': 'Fantasy',
    },
    'skillSciFi': {
      'ru': 'Фантастика',
      'kk': 'Фантастика',
      'en': 'Sci-Fi',
    },
  };

  String t(String key) {
    final map = _translations[key];
    if (map == null) return key;
    return map[locale] ?? map['ru'] ?? key;
  }

  static List<String> get supportedLocales => ['ru', 'kk', 'en'];

  static String localeName(String code) {
    switch (code) {
      case 'ru':
        return 'Русский';
      case 'kk':
        return 'Қазақша';
      case 'en':
        return 'English';
      default:
        return code;
    }
  }
}
