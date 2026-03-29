enum Gender { male, female }

class Actor {
  final String id;
  final String name;
  final int age;
  final Gender gender;
  final String city;
  final List<String> skills;
  final double rating;
  final int filmsCount;
  final int awards;
  final int experience;
  final String bio;
  final List<String> filmography;

  const Actor({
    required this.id,
    required this.name,
    required this.age,
    required this.gender,
    required this.city,
    required this.skills,
    required this.rating,
    required this.filmsCount,
    required this.awards,
    required this.experience,
    required this.bio,
    required this.filmography,
  });

  String get initial => name.isNotEmpty ? name[0] : '?';
}

class Movie {
  final String id;
  final String titleRu;
  final String titleEn;
  final String genre;
  final String status;
  final double progress;
  final int year;

  const Movie({
    required this.id,
    required this.titleRu,
    required this.titleEn,
    required this.genre,
    required this.status,
    required this.progress,
    required this.year,
  });
}

class CastingResult {
  final Actor actor;
  final double matchPercent;

  const CastingResult({required this.actor, required this.matchPercent});
}

// ===================== MOCK DATA =====================

final List<Actor> mockActors = [
  Actor(
    id: '1',
    name: 'Асылхан Толепов',
    age: 32,
    gender: Gender.male,
    city: 'Almaty',
    skills: ['Drama', 'Action'],
    rating: 4.8,
    filmsCount: 12,
    awards: 3,
    experience: 10,
    bio:
        'Талантливый актёр с многолетним опытом в драматических и экшн-фильмах. Выпускник Казахской национальной академии искусств.',
    filmography: [
      'Степной ветер (2025)',
      'Путь воина (2024)',
      'Тень города (2023)',
      'Последний рубеж (2022)',
    ],
  ),
  Actor(
    id: '2',
    name: 'Динара Бактыбаева',
    age: 28,
    gender: Gender.female,
    city: 'Astana',
    skills: ['Comedy', 'Drama'],
    rating: 4.6,
    filmsCount: 8,
    awards: 2,
    experience: 6,
    bio:
        'Яркая актриса комедийного и драматического жанра. Известна по сериалам и полнометражным фильмам.',
    filmography: [
      'Алматы навсегда (2025)',
      'Смех и слёзы (2024)',
      'Две судьбы (2023)',
    ],
  ),
  Actor(
    id: '3',
    name: 'Ерболат Кудайбергенов',
    age: 45,
    gender: Gender.male,
    city: 'Shymkent',
    skills: ['Drama', 'Historical'],
    rating: 4.9,
    filmsCount: 25,
    awards: 7,
    experience: 22,
    bio:
        'Заслуженный артист с богатым опытом в исторических и драматических картинах. Лауреат множества кинофестивалей.',
    filmography: [
      'Степной ветер (2025)',
      'Великий хан (2024)',
      'Путь предков (2023)',
      'Шёлковый путь (2022)',
      'Батыр (2021)',
    ],
  ),
  Actor(
    id: '4',
    name: 'Айгерим Калиева',
    age: 24,
    gender: Gender.female,
    city: 'Almaty',
    skills: ['Comedy', 'Musical'],
    rating: 4.5,
    filmsCount: 5,
    awards: 1,
    experience: 3,
    bio:
        'Молодая и перспективная актриса с отличными вокальными данными. Звезда музыкальных комедий.',
    filmography: [
      'Маленький батыр (2025)',
      'Мелодия степи (2024)',
      'Первая любовь (2023)',
    ],
  ),
  Actor(
    id: '5',
    name: 'Нурлан Абдуллин',
    age: 38,
    gender: Gender.male,
    city: 'Astana',
    skills: ['Action', 'Drama'],
    rating: 4.7,
    filmsCount: 15,
    awards: 4,
    experience: 14,
    bio:
        'Актёр с мощной физической подготовкой, специализируется на экшн-сценах и драматических ролях.',
    filmography: [
      'Тень Алатау (2025)',
      'Код Астаны (2025)',
      'Огненный рубеж (2024)',
      'Стальной закат (2023)',
    ],
  ),
  Actor(
    id: '6',
    name: 'Мадина Саурыкова',
    age: 31,
    gender: Gender.female,
    city: 'Karaganda',
    skills: ['Drama', 'Comedy'],
    rating: 4.6,
    filmsCount: 10,
    awards: 2,
    experience: 8,
    bio:
        'Универсальная актриса, одинаково талантлива в драме и комедии. Активно снимается в казахстанском кино.',
    filmography: [
      'Алматы навсегда (2025)',
      'Карагандинские истории (2024)',
      'Сердце степи (2023)',
      'Новый день (2022)',
    ],
  ),
  Actor(
    id: '7',
    name: 'Тимур Жансеитов',
    age: 29,
    gender: Gender.male,
    city: 'Almaty',
    skills: ['Comedy'],
    rating: 4.4,
    filmsCount: 7,
    awards: 1,
    experience: 5,
    bio:
        'Комедийный актёр с отличным чувством юмора. Популярен среди молодёжной аудитории.',
    filmography: [
      'Маленький батыр (2025)',
      'Смешная история (2024)',
      'Большой куш (2023)',
    ],
  ),
  Actor(
    id: '8',
    name: 'Камила Ерженова',
    age: 22,
    gender: Gender.female,
    city: 'Almaty',
    skills: ['Drama', 'Fantasy'],
    rating: 4.3,
    filmsCount: 3,
    awards: 0,
    experience: 2,
    bio:
        'Начинающая актриса с большим потенциалом. Специализируется на драматических и фэнтези ролях.',
    filmography: [
      'Тень Алатау (2025)',
      'Мечты Алматы (2024)',
      'Первый шаг (2023)',
    ],
  ),
];

final List<Movie> mockMovies = [
  Movie(
    id: '1',
    titleRu: 'Степной ветер',
    titleEn: 'Steppe Wind',
    genre: 'Historical Drama',
    status: 'inProduction',
    progress: 0.45,
    year: 2025,
  ),
  Movie(
    id: '2',
    titleRu: 'Алматы навсегда',
    titleEn: 'Almaty Forever',
    genre: 'Comedy',
    status: 'preProduction',
    progress: 0.15,
    year: 2025,
  ),
  Movie(
    id: '3',
    titleRu: 'Тень Алатау',
    titleEn: 'Shadow of Alatau',
    genre: 'Thriller',
    status: 'postProduction',
    progress: 0.78,
    year: 2025,
  ),
  Movie(
    id: '4',
    titleRu: 'Маленький батыр',
    titleEn: 'Little Batyr',
    genre: 'Family Comedy',
    status: 'completed',
    progress: 1.0,
    year: 2025,
  ),
  Movie(
    id: '5',
    titleRu: 'Код Астаны',
    titleEn: 'Astana Code',
    genre: 'Sci-Fi Thriller',
    status: 'preProduction',
    progress: 0.08,
    year: 2025,
  ),
];

// ===================== AI CASTING ENGINE =====================

List<CastingResult> performAiCasting(String query) {
  if (query.trim().isEmpty) return [];

  final lowerQuery = query.toLowerCase();
  final results = <CastingResult>[];

  for (final actor in mockActors) {
    double score = 0;
    int factors = 0;

    // Gender matching
    final maleKeywords = [
      'мужчина', 'мужской', 'парень', 'мужик', 'man', 'male', 'guy',
      'ер', 'еркек', 'жігіт',
    ];
    final femaleKeywords = [
      'женщина', 'женский', 'девушка', 'woman', 'female', 'girl',
      'әйел', 'қыз',
    ];

    bool genderQueried = false;
    for (final kw in maleKeywords) {
      if (lowerQuery.contains(kw)) {
        genderQueried = true;
        if (actor.gender == Gender.male) {
          score += 25;
        } else {
          score -= 20;
        }
        factors++;
        break;
      }
    }
    if (!genderQueried) {
      for (final kw in femaleKeywords) {
        if (lowerQuery.contains(kw)) {
          genderQueried = true;
          if (actor.gender == Gender.female) {
            score += 25;
          } else {
            score -= 20;
          }
          factors++;
          break;
        }
      }
    }

    // Age range matching
    final agePattern = RegExp(r'(\d{2})\s*[-–]\s*(\d{2})');
    final ageMatch = agePattern.firstMatch(lowerQuery);
    if (ageMatch != null) {
      final minAge = int.parse(ageMatch.group(1)!);
      final maxAge = int.parse(ageMatch.group(2)!);
      factors++;
      if (actor.age >= minAge && actor.age <= maxAge) {
        score += 25;
      } else {
        final dist = actor.age < minAge
            ? minAge - actor.age
            : actor.age - maxAge;
        score += (25 - dist * 3).clamp(0, 25).toDouble();
      }
    } else {
      // Single age
      final singleAge = RegExp(r'(\d{2})\s*(лет|жас|years|y\.?o\.?)');
      final singleMatch = singleAge.firstMatch(lowerQuery);
      if (singleMatch != null) {
        final targetAge = int.parse(singleMatch.group(1)!);
        final diff = (actor.age - targetAge).abs();
        factors++;
        if (diff <= 2) {
          score += 25;
        } else {
          score += (25 - diff * 3).clamp(0, 25).toDouble();
        }
      }
    }

    // City matching
    final cities = {
      'алматы': 'Almaty', 'almaty': 'Almaty',
      'астана': 'Astana', 'astana': 'Astana',
      'шымкент': 'Shymkent', 'shymkent': 'Shymkent',
      'караганда': 'Karaganda', 'karaganda': 'Karaganda',
    };
    for (final entry in cities.entries) {
      if (lowerQuery.contains(entry.key)) {
        factors++;
        if (actor.city == entry.value) {
          score += 20;
        }
        break;
      }
    }

    // Skill matching
    final skillKeywords = {
      'драма': 'Drama', 'drama': 'Drama', 'драматич': 'Drama',
      'экшн': 'Action', 'action': 'Action', 'боевик': 'Action', 'боевой': 'Action',
      'комедия': 'Comedy', 'comedy': 'Comedy', 'комедийн': 'Comedy', 'смешн': 'Comedy',
      'историч': 'Historical', 'historical': 'Historical', 'тарихи': 'Historical',
      'мюзикл': 'Musical', 'musical': 'Musical', 'музыкальн': 'Musical',
      'триллер': 'Thriller', 'thriller': 'Thriller',
      'фэнтези': 'Fantasy', 'fantasy': 'Fantasy',
      'фантастик': 'Sci-Fi', 'sci-fi': 'Sci-Fi', 'scifi': 'Sci-Fi',
    };
    final matchedSkills = <String>{};
    for (final entry in skillKeywords.entries) {
      if (lowerQuery.contains(entry.key)) {
        matchedSkills.add(entry.value);
      }
    }
    if (matchedSkills.isNotEmpty) {
      factors++;
      int matched = 0;
      for (final skill in matchedSkills) {
        if (actor.skills.contains(skill)) matched++;
      }
      score += (matched / matchedSkills.length * 30);
    }

    // Experience / young / seasoned keywords
    if (lowerQuery.contains('опытн') ||
        lowerQuery.contains('experienced') ||
        lowerQuery.contains('тәжірибелі')) {
      factors++;
      if (actor.experience >= 10) score += 15;
    }
    if (lowerQuery.contains('молод') ||
        lowerQuery.contains('young') ||
        lowerQuery.contains('жас')) {
      factors++;
      if (actor.age <= 30) score += 15;
    }

    // Normalize
    if (factors == 0) {
      // No matching criteria, give a base score based on rating
      score = actor.rating / 5.0 * 40;
    } else {
      // Add rating bonus
      score += actor.rating / 5.0 * 10;
    }

    // Clamp to 0-100
    final percent = score.clamp(0, 100).toDouble();
    if (percent > 10) {
      results.add(CastingResult(actor: actor, matchPercent: percent));
    }
  }

  results.sort((a, b) => b.matchPercent.compareTo(a.matchPercent));
  return results;
}
