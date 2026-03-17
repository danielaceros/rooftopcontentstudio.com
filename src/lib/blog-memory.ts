export type BlogMemoryEntry = {
  slug: string;
  keyword: string;
  intent: string;
  createdAt: string;
  status: "draft" | "published";
  notes?: string;
};

export const blogMemory: BlogMemoryEntry[] = [
  {
    slug: "estudio-grabacion-madrid-precios",
    keyword: "estudios de grabacion madrid precios",
    intent: "comercial",
    createdAt: "2026-03-17",
    status: "draft",
    notes:
      "Tema inicial del blog de RCS. Evitar repetir la misma intención de precio/estudio sin revisar primero esta URL.",
  },
];

export function findSimilarTopic(term: string) {
  const normalized = term.toLowerCase();
  return blogMemory.find(
    (entry) =>
      normalized.includes(entry.keyword.toLowerCase()) ||
      entry.keyword.toLowerCase().includes(normalized)
  );
}
