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
  {
    slug: "reels-verticales-empresa-ceos",
    keyword: "reels verticales empresa ceos",
    intent: "informacional",
    createdAt: "2026-06-09",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #10. Imágenes Pexels/Unsplash.",
  },
  {
    slug: "grabacion-multicamara-podcast-que-aporta",
    keyword: "grabacion multicamara podcast",
    intent: "informacional",
    createdAt: "2026-06-10",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #11. Imágenes Unsplash.",
  },
  {
    slug: "como-usar-teleprompter-sin-parecer-robot",
    keyword: "como usar teleprompter sin parecer robot",
    intent: "informacional",
    createdAt: "2026-06-11",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #12. Imágenes Unsplash.",
  },
  {
    slug: "iluminacion-grabacion-contenido-basicos",
    keyword: "iluminacion grabacion contenido",
    intent: "informacional",
    createdAt: "2026-06-12",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #13. Imágenes Unsplash.",
  },
  {
    slug: "microfonos-podcast-entrevistas-tipos",
    keyword: "microfonos para podcast y entrevistas",
    intent: "informacional",
    createdAt: "2026-06-15",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #14. Imágenes Unsplash.",
  },
  {
    slug: "grabacion-cursos-online-madrid",
    keyword: "grabacion cursos online madrid",
    intent: "informacional",
    createdAt: "2026-06-16",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #15. Imágenes Unsplash.",
  },
  {
    slug: "contenido-youtube-shorts-sesion-estudio",
    keyword: "contenido youtube shorts sesion estudio",
    intent: "informacional",
    createdAt: "2026-06-17",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #16. Imágenes Unsplash/Pexels.",
  },
  {
    slug: "que-grabar-jornada-intensiva-contenido",
    keyword: "jornada intensiva de contenido",
    intent: "informacional",
    createdAt: "2026-06-18",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #17. Imágenes Unsplash.",
  },
  {
    slug: "como-preparar-invitado-grabar-podcast",
    keyword: "como preparar invitado grabar podcast",
    intent: "informacional",
    createdAt: "2026-06-19",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #18. Imágenes Unsplash.",
  },
  {
    slug: "edicion-video-rapida-vs-edicion-que-convierte",
    keyword: "edicion de video rapida vs edicion que convierte",
    intent: "informacional",
    createdAt: "2026-06-23",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #19. Imágenes Unsplash.",
  },
  {
    slug: "cuando-contratar-produccion-completa-vs-solo-grabacion",
    keyword: "cuando contratar produccion completa vs solo grabacion",
    intent: "informacional",
    createdAt: "2026-06-24",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #20. Imágenes Unsplash.",
  },
  {
    slug: "contenido-recurrente-marca-constancia",
    keyword: "contenido recurrente para marca",
    intent: "informacional",
    createdAt: "2026-06-25",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #21. Imágenes Unsplash.",
  },
  {
    slug: "grabacion-testimonios-casos-exito-empresa",
    keyword: "grabacion de testimonios para empresa",
    intent: "informacional",
    createdAt: "2026-06-26",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #22. Imágenes Unsplash.",
  },
  {
    slug: "como-optimizar-sesion-podcast-clips-redes",
    keyword: "como optimizar sesion podcast clips redes",
    intent: "informacional",
    createdAt: "2026-06-30",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #23. Imágenes Unsplash.",
  },
  {
    slug: "audio-profesional-video-microfono-segun-formato",
    keyword: "audio profesional para video que microfono usar",
    intent: "informacional",
    createdAt: "2026-07-01",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (token expirado). Fallback evergreen #24. Imágenes Unsplash.",
  },
  {
    slug: "content-day-como-sacarle-el-maximo-partido",
    keyword: "content day",
    intent: "informacional",
    createdAt: "2026-07-02",
    status: "published",
    notes: "Auto-generado por blog-auto-rcs. SC: sin datos (refresh token OAuth invalid_grant, requiere reautorización manual). Fallback evergreen #25 (última de la lista). Imágenes Unsplash.",
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
