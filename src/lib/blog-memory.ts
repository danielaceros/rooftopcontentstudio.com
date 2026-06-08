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
    status: "published",
    notes:
      "Tema inicial del blog de RCS. Evitar repetir la misma intención de precio/estudio sin revisar primero esta URL.",
  },
  {
    slug: "grabar-podcast-madrid-estudio",
    keyword: "grabar podcast madrid estudio",
    intent: "comercial",
    createdAt: "2026-03-22",
    status: "published",
    notes:
      "Post de prueba real para validar el circuito completo de autopublicación en RCS sin depender de aprobación manual.",
  },
  {
    slug: "como-preparar-sesion-grabacion-contenido-madrid",
    keyword: "como preparar sesion grabacion contenido madrid",
    intent: "informacional",
    createdAt: "2026-05-27",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #1. Imágenes Unsplash.",
  },
  {
    slug: "que-es-un-rooftop-studio-contenido-marca",
    keyword: "rooftop studio contenido marca",
    intent: "informacional",
    createdAt: "2026-05-28",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #2. Imágenes Unsplash/Pexels.",
  },
  {
    slug: "grabacion-reels-madrid-que-necesitas",
    keyword: "grabacion reels madrid",
    intent: "informacional",
    createdAt: "2026-05-29",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #3. Imágenes Unsplash.",
  },
  {
    slug: "podcast-con-video-contexto-visual-audio",
    keyword: "podcast con video contexto visual",
    intent: "informacional",
    createdAt: "2026-06-01",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #4. Imágenes Unsplash.",
  },
  {
    slug: "como-grabar-contenido-semanas-en-una-manana",
    keyword: "grabar contenido semanas una manana",
    intent: "informacional",
    createdAt: "2026-06-02",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #5. Imágenes Unsplash.",
  },
  {
    slug: "estudio-grabacion-vs-grabar-en-oficina",
    keyword: "estudio de grabacion vs grabar en oficina",
    intent: "informacional",
    createdAt: "2026-06-03",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #6. Imágenes Unsplash.",
  },
  {
    slug: "contenido-autoridad-linkedin-formatos-madrid",
    keyword: "contenido autoridad linkedin formatos madrid",
    intent: "informacional",
    createdAt: "2026-06-04",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #7. Imágenes Pexels/Unsplash.",
  },
  {
    slug: "vsl-linkedin-estructura-duracion-como-grabarlo",
    keyword: "vsl para linkedin",
    intent: "informacional",
    createdAt: "2026-06-05",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #8. Imágenes Unsplash.",
  },
  {
    slug: "como-hacer-un-day-in-studio-marcas-personales",
    keyword: "day in studio marcas personales",
    intent: "informacional",
    createdAt: "2026-06-08",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #9. Imágenes Unsplash.",
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
