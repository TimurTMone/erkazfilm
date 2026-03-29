export interface Movie {
  id: string;
  title: string;
  titleKk: string;
  titleEn: string;
  description: string;
  descriptionKk: string;
  descriptionEn: string;
  genre: string;
  genreKk: string;
  genreEn: string;
  director: string;
  directorKk: string;
  directorEn: string;
  status: "pre" | "production" | "post" | "completed";
  budget: string;
  deadline: string;
  progress: number;
  teamSize: number;
  castIds: string[];
  gradient: string;
  year: number;
  tasks: MovieTask[];
}

export interface MovieTask {
  id: string;
  title: string;
  titleKk: string;
  titleEn: string;
  status: "todo" | "in_progress" | "done";
  assignee: string;
  dueDate: string;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Степной ветер",
    titleKk: "Дала жели",
    titleEn: "Steppe Wind",
    description:
      "Эпическая драма о кочевниках, которые борются за свою землю в XVIII веке. Масштабные батальные сцены и глубокие человеческие истории.",
    descriptionKk:
      "XVIII ғасырда жерлері үшін күрескен көшпенділер туралы эпикалық драма.",
    descriptionEn:
      "An epic drama about nomads fighting for their land in the 18th century. Grand battle scenes and deep human stories.",
    genre: "Исторический / Драма",
    genreKk: "Тарихи / Драма",
    genreEn: "Historical / Drama",
    director: "Ерболат Кудайбергенов",
    directorKk: "Ерболат Құдайбергенов",
    directorEn: "Yerbolat Kudaibergenov",
    status: "production",
    budget: "₸850,000,000",
    deadline: "2026-09-15",
    progress: 45,
    teamSize: 120,
    castIds: ["1", "3", "5", "9"],
    gradient: "from-amber-600 to-orange-800",
    year: 2026,
    tasks: [
      {
        id: "t1",
        title: "Завершить съёмки в Мангистау",
        titleKk: "Маңғыстаудағы түсірілімді аяқтау",
        titleEn: "Complete filming in Mangystau",
        status: "in_progress",
        assignee: "Ерболат К.",
        dueDate: "2026-04-15",
      },
      {
        id: "t2",
        title: "Кастинг массовки (200 чел)",
        titleKk: "Массовка кастингі (200 адам)",
        titleEn: "Extras casting (200 people)",
        status: "todo",
        assignee: "Сауле М.",
        dueDate: "2026-04-01",
      },
      {
        id: "t3",
        title: "Согласовать локации в Туркестане",
        titleKk: "Түркістандағы локацияларды келісу",
        titleEn: "Approve locations in Turkestan",
        status: "done",
        assignee: "Алмас Б.",
        dueDate: "2026-03-20",
      },
      {
        id: "t4",
        title: "Костюмы — финальная примерка",
        titleKk: "Костюмдер — соңғы сынау",
        titleEn: "Costumes — final fitting",
        status: "in_progress",
        assignee: "Гульнар Т.",
        dueDate: "2026-04-05",
      },
    ],
  },
  {
    id: "2",
    title: "Алматы навсегда",
    titleKk: "Алматы мәңгілік",
    titleEn: "Almaty Forever",
    description:
      "Романтическая комедия о трёх друзьях, которые пытаются спасти старый кинотеатр в центре Алматы от сноса.",
    descriptionKk:
      "Алматы орталығындағы ескі кинотеатрды құлатудан сақтауға тырысатын үш дос туралы романтикалық комедия.",
    descriptionEn:
      "A romantic comedy about three friends trying to save an old cinema in central Almaty from demolition.",
    genre: "Комедия / Мелодрама",
    genreKk: "Комедия / Мелодрама",
    genreEn: "Comedy / Romance",
    director: "Тимур Жансеитов",
    directorKk: "Тимур Жансейітов",
    directorEn: "Timur Zhanseitov",
    status: "pre",
    budget: "₸320,000,000",
    deadline: "2026-12-01",
    progress: 15,
    teamSize: 45,
    castIds: ["2", "4", "7"],
    gradient: "from-cyan-500 to-blue-700",
    year: 2026,
    tasks: [
      {
        id: "t5",
        title: "Финализировать сценарий",
        titleKk: "Сценарийді аяқтау",
        titleEn: "Finalize screenplay",
        status: "in_progress",
        assignee: "Тимур Ж.",
        dueDate: "2026-04-20",
      },
      {
        id: "t6",
        title: "Подбор локаций в Алматы",
        titleKk: "Алматыдағы локацияларды таңдау",
        titleEn: "Location scouting in Almaty",
        status: "todo",
        assignee: "Бекзат А.",
        dueDate: "2026-05-01",
      },
      {
        id: "t7",
        title: "Согласование бюджета",
        titleKk: "Бюджетті келісу",
        titleEn: "Budget approval",
        status: "done",
        assignee: "Арсен Н.",
        dueDate: "2026-03-15",
      },
    ],
  },
  {
    id: "3",
    title: "Тень Алатау",
    titleKk: "Алатау көлеңкесі",
    titleEn: "Shadow of Alatau",
    description:
      "Психологический триллер. Детектив расследует серию загадочных исчезновений в горах Алатау.",
    descriptionKk:
      "Психологиялық триллер. Детектив Алатау тауларындағы жұмбақ жоғалулар сериясын тергейді.",
    descriptionEn:
      "A psychological thriller. A detective investigates a series of mysterious disappearances in the Alatau mountains.",
    genre: "Триллер / Детектив",
    genreKk: "Триллер / Детектив",
    genreEn: "Thriller / Mystery",
    director: "Алия Мукашева",
    directorKk: "Алия Мұқашева",
    directorEn: "Aliya Mukasheva",
    status: "post",
    budget: "₸480,000,000",
    deadline: "2026-06-01",
    progress: 78,
    teamSize: 65,
    castIds: ["5", "6", "10"],
    gradient: "from-violet-600 to-purple-900",
    year: 2026,
    tasks: [
      {
        id: "t8",
        title: "Цветокоррекция — серии 1-5",
        titleKk: "Түс коррекциясы — 1-5 серия",
        titleEn: "Color grading — episodes 1-5",
        status: "done",
        assignee: "Дамир К.",
        dueDate: "2026-03-25",
      },
      {
        id: "t9",
        title: "Саунд-дизайн и музыка",
        titleKk: "Саунд-дизайн және музыка",
        titleEn: "Sound design and music",
        status: "in_progress",
        assignee: "Ернар С.",
        dueDate: "2026-04-15",
      },
      {
        id: "t10",
        title: "Финальный монтаж",
        titleKk: "Соңғы монтаж",
        titleEn: "Final editing",
        status: "todo",
        assignee: "Алия М.",
        dueDate: "2026-05-10",
      },
    ],
  },
  {
    id: "4",
    title: "Маленький батыр",
    titleKk: "Кішкентай батыр",
    titleEn: "Little Batyr",
    description:
      "Семейная комедия о мальчике, который мечтает стать батыром и отправляется в захватывающее приключение.",
    descriptionKk:
      "Батыр болуды армандайтын бала туралы отбасылық комедия. Ол тартымды шытырман оқиғаға аттанады.",
    descriptionEn:
      "A family comedy about a boy who dreams of becoming a batyr and embarks on an exciting adventure.",
    genre: "Семейный / Комедия",
    genreKk: "Отбасылық / Комедия",
    genreEn: "Family / Comedy",
    director: "Динара Бактыбаева",
    directorKk: "Динара Бақтыбаева",
    directorEn: "Dinara Baktybayeva",
    status: "completed",
    budget: "₸250,000,000",
    deadline: "2026-01-15",
    progress: 100,
    teamSize: 55,
    castIds: ["2", "7", "11", "12"],
    gradient: "from-emerald-500 to-teal-700",
    year: 2025,
    tasks: [
      {
        id: "t11",
        title: "Премьера в Алматы",
        titleKk: "Алматыдағы премьера",
        titleEn: "Almaty premiere",
        status: "done",
        assignee: "Динара Б.",
        dueDate: "2025-12-20",
      },
      {
        id: "t12",
        title: "Прокат по Казахстану",
        titleKk: "Қазақстан бойынша прокат",
        titleEn: "Kazakhstan distribution",
        status: "done",
        assignee: "Марат Н.",
        dueDate: "2026-01-15",
      },
    ],
  },
  {
    id: "5",
    title: "Код Астаны",
    titleKk: "Астана коды",
    titleEn: "Astana Code",
    description:
      "Технотриллер о программисте, который обнаруживает заговор в столице Казахстана. Современный экшн с элементами киберпанка.",
    descriptionKk:
      "Қазақстан астанасындағы қастандықты ашқан программист туралы технотриллер.",
    descriptionEn:
      "A techno-thriller about a programmer who uncovers a conspiracy in Kazakhstan's capital. Modern action with cyberpunk elements.",
    genre: "Триллер / Sci-Fi",
    genreKk: "Триллер / Ғылыми-фантастика",
    genreEn: "Thriller / Sci-Fi",
    director: "Нурлан Абдуллин",
    directorKk: "Нұрлан Абдуллин",
    directorEn: "Nurlan Abdullin",
    status: "pre",
    budget: "₸620,000,000",
    deadline: "2027-03-01",
    progress: 8,
    teamSize: 30,
    castIds: ["1", "4", "8"],
    gradient: "from-rose-500 to-red-800",
    year: 2027,
    tasks: [
      {
        id: "t13",
        title: "Разработка концепт-артов",
        titleKk: "Концепт-арттарды жасау",
        titleEn: "Develop concept art",
        status: "in_progress",
        assignee: "Аскар Д.",
        dueDate: "2026-05-01",
      },
      {
        id: "t14",
        title: "Технический скрипт",
        titleKk: "Техникалық сценарий",
        titleEn: "Technical script",
        status: "todo",
        assignee: "Нурлан А.",
        dueDate: "2026-06-15",
      },
    ],
  },
];

export const companies = [
  {
    id: "c1",
    name: "ErKaz Productions",
    nameKk: "ErKaz Productions",
    nameEn: "ErKaz Productions",
    description: "Основная производственная компания. Полнометражные фильмы и сериалы.",
    descriptionKk: "Негізгі продакшн компания. Толық метражды фильмдер мен сериалдар.",
    descriptionEn: "Main production company. Feature films and series.",
    focus: "Production",
  },
  {
    id: "c2",
    name: "ErKaz Digital",
    nameKk: "ErKaz Digital",
    nameEn: "ErKaz Digital",
    description: "Цифровой контент, VFX и пост-продакшн.",
    descriptionKk: "Цифрлық контент, VFX және пост-продакшн.",
    descriptionEn: "Digital content, VFX and post-production.",
    focus: "Digital & VFX",
  },
  {
    id: "c3",
    name: "ErKaz Talent",
    nameKk: "ErKaz Talent",
    nameEn: "ErKaz Talent",
    description: "Кастинговое и талант-агентство. Управление карьерой актёров.",
    descriptionKk: "Кастинг және талант агенттігі. Актёрлердің мансабын басқару.",
    descriptionEn: "Casting and talent agency. Actor career management.",
    focus: "Talent Management",
  },
  {
    id: "c4",
    name: "ErKaz Distribution",
    nameKk: "ErKaz Distribution",
    nameEn: "ErKaz Distribution",
    description: "Дистрибуция и прокат фильмов в Казахстане и ЦА.",
    descriptionKk: "Қазақстан мен ОА-дағы фильмдерді тарату және прокат.",
    descriptionEn: "Film distribution in Kazakhstan and Central Asia.",
    focus: "Distribution",
  },
  {
    id: "c5",
    name: "ErKaz Academy",
    nameKk: "ErKaz Academy",
    nameEn: "ErKaz Academy",
    description: "Образовательная платформа для будущих кинематографистов.",
    descriptionKk: "Болашақ кинематографистер үшін білім беру платформасы.",
    descriptionEn: "Educational platform for future filmmakers.",
    focus: "Education",
  },
];
