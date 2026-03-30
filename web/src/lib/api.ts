const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://erkaz-api.onrender.com";

export type ApiActor = {
  id: number;
  name: string;
  gender: string;
  birth_date: string | null;
  country: string;
  city: string | null;
  education: string | null;
  height_cm: number | null;
  weight_kg: number | null;
  eye_color: string | null;
  hair_color: string | null;
  appearance_type: string | null;
  languages: string | null;
  vocal_timbre: string | null;
  choreography: string | null;
  musical_instruments: string | null;
  sports: string | null;
  other_skills: string | null;
  driving_license: string | null;
  portfolio: string | null;
  theater: string | null;
  tv_radio: string | null;
  phone: string | null;
  email: string | null;
  social_links: string | null;
  video_showreel: string | null;
  photo_profile: string | null;
  photo_full_face: string | null;
  photo_full_body: string | null;
};

export type ApiActorsResponse = {
  actors: ApiActor[];
  total: number;
  page: number;
  per_page: number;
};

export async function fetchActors(params: {
  page?: number;
  per_page?: number;
  search?: string;
  gender?: string;
  city?: string;
  appearance_type?: string;
}): Promise<ApiActorsResponse> {
  const sp = new URLSearchParams();
  if (params.page) sp.set("page", String(params.page));
  if (params.per_page) sp.set("per_page", String(params.per_page));
  if (params.search) sp.set("search", params.search);
  if (params.gender) sp.set("gender", params.gender);
  if (params.city) sp.set("city", params.city);
  if (params.appearance_type) sp.set("appearance_type", params.appearance_type);

  const res = await fetch(`${API_URL}/api/actors?${sp.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch actors");
  return res.json();
}

export async function fetchActor(id: number): Promise<ApiActor> {
  const res = await fetch(`${API_URL}/api/actors/${id}`);
  if (!res.ok) throw new Error("Actor not found");
  return res.json();
}

export async function fetchCities(): Promise<{ city: string; count: number }[]> {
  const res = await fetch(`${API_URL}/api/actors/cities`);
  if (!res.ok) return [];
  return res.json();
}

const avatarColors = [
  "from-amber-400 to-orange-500",
  "from-cyan-400 to-blue-500",
  "from-emerald-400 to-teal-500",
  "from-purple-400 to-indigo-500",
  "from-rose-400 to-pink-500",
  "from-yellow-400 to-amber-500",
  "from-sky-400 to-cyan-500",
  "from-lime-400 to-green-500",
];

function getAge(birthDate: string | null): number {
  if (!birthDate) return 25;
  const d = new Date(birthDate);
  if (isNaN(d.getTime())) return 25;
  const today = new Date();
  let age = today.getFullYear() - d.getFullYear();
  const m = today.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < d.getDate())) age--;
  return age;
}

function extractSkills(a: ApiActor): string[] {
  const skills: string[] = [];
  if (a.choreography) skills.push("Хореография");
  if (a.musical_instruments) skills.push("Музыка");
  if (a.sports) skills.push("Спорт");
  if (a.vocal_timbre) skills.push("Вокал");
  if (a.other_skills) skills.push("Навыки");
  if (a.driving_license) skills.push("Вождение");
  if (a.theater) skills.push("Театр");
  return skills.length > 0 ? skills : ["Актёр"];
}

function extractLanguages(a: ApiActor): string[] {
  if (!a.languages) return ["Казахский", "Русский"];
  return a.languages
    .split(/[,/]/)
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, 4);
}

function countFilms(a: ApiActor): number {
  if (!a.portfolio) return 0;
  const matches = a.portfolio.match(/\d{4}/g);
  return matches ? Math.min(matches.length, 30) : 1;
}

/** Convert API actor to the ErKaz Actor interface used by the frontend */
export function toErkazActor(a: ApiActor) {
  const age = getAge(a.birth_date);
  const gender: "male" | "female" | "child" = age < 16 ? "child" : (a.gender as "male" | "female");

  return {
    id: String(a.id),
    name: a.name,
    nameKk: a.name,
    nameEn: a.name,
    age,
    gender,
    height: a.height_cm || 170,
    city: a.city || "Алматы",
    cityKk: a.city || "Алматы",
    cityEn: a.city || "Almaty",
    languages: extractLanguages(a),
    skills: extractSkills(a),
    skillsKk: extractSkills(a),
    skillsEn: extractSkills(a),
    experience: Math.max(1, Math.floor(age / 5)),
    filmsCount: countFilms(a),
    bio: [a.education, a.portfolio].filter(Boolean).join(". ") || "Актёр казахстанского кино.",
    bioKk: [a.education, a.portfolio].filter(Boolean).join(". ") || "Қазақстан киносының актёры.",
    bioEn: [a.education, a.portfolio].filter(Boolean).join(". ") || "Kazakhstan cinema actor.",
    avatar: avatarColors[a.id % avatarColors.length],
    rating: 4.3 + Math.round((a.id % 8) * 0.1 * 10) / 10,
    available: true,
    genres: extractSkills(a).slice(0, 3),
    // Extra fields from spreadsheet
    phone: a.phone,
    email: a.email,
    socialLinks: a.social_links,
    videoShowreel: a.video_showreel,
    photoProfile: a.photo_profile,
    photoFullFace: a.photo_full_face,
    photoFullBody: a.photo_full_body,
    portfolio: a.portfolio,
    theater: a.theater,
    sports: a.sports,
    choreography: a.choreography,
    musicalInstruments: a.musical_instruments,
    appearanceType: a.appearance_type,
    eyeColor: a.eye_color,
    hairColor: a.hair_color,
  };
}
