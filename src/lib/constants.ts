export const SITE_URL = "https://www.rooftopcontentstudio.es";
export const SITE_NAME = "Rooftop Content Studio";
export const SITE_DESCRIPTION =
  "Estudio de grabación de contenido premium en Madrid. Graba meses de contenido en una sola mañana con un equipo profesional en una localización exclusiva.";

export const NAV_LINKS = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "FAQ", href: "#faq" },
] as const;

export const BENEFICIOS = [
  {
    title: "El Único Rooftop de Madrid",
    description:
      "Vistas panorámicas al skyline de Madrid. Un escenario que ningún otro estudio puede ofrecerte.",
    icon: "location",
  },
  {
    title: "Un Mes de Contenido en 4 Horas",
    description:
      "Sal con 24 reels grabados, organizados y listos para publicar. Sin improvisar, sin volver a casa con nada.",
    icon: "clock",
  },
  {
    title: "Editado y Listo para Publicar",
    description:
      "Subtítulos, reencuadre y formato para cada plataforma incluidos. Solo tienes que subir.",
    icon: "sparkles",
  },
  {
    title: "Dirección Creativa Incluida",
    description:
      "No grabamos por grabar. Un filmmaker profesional te guía en cada toma para que el resultado funcione en redes.",
    icon: "strategy",
  },
  {
    title: "Entrega en Menos de 24h",
    description:
      "Tus archivos organizados por pieza y listos para programar al día siguiente de la sesión.",
    icon: "zap",
  },
  {
    title: "Marcas que ya Confían en Nosotros",
    description:
      "FIFA, IFEMA, Cinesa, Brahím Díaz. El mismo nivel de producción, ahora disponible para tu marca.",
    icon: "package",
  },
] as const;

export const PROCESO = [
  {
    step: 1,
    title: "Briefing Estratégico",
    description:
      "Analizamos tu marca, tu audiencia y tus objetivos para diseñar un plan de contenido a medida.",
  },
  {
    step: 2,
    title: "Pre-producción",
    description:
      "Te ayudamos a preparar guiones, escaleta y referencias visuales. Nadie conoce tu negocio mejor que tú, pero nosotros nos encargamos de que todo esté listo para grabar.",
  },
  {
    step: 3,
    title: "Día de Grabación",
    description:
      "Grabamos todo el contenido planificado en nuestro estudio rooftop con un equipo profesional a tu disposición.",
  },
  {
    step: 4,
    title: "Post-producción y Entrega",
    description:
      "Te entregamos todas las grabaciones organizadas en menos de 24 horas desde la sesión, listas para usar.",
  },
] as const;

export const TARIFAS = [
  {
    name: "24 Reels Profesionales",
    price: "600€",
    pricePerUnit: "Solo 25€/reel",
    description:
      "Graba hasta 24 reels o 12 vídeos de YouTube en una sola sesión. Contenido listo para publicar.",
    incluye: [
      "4 horas de grabación",
      "Espacio rooftop privado",
      "Filmmaker profesional",
      "Cámaras y equipo técnico",
      "Iluminación de estudio",
      "Sonido profesional",
      "Teleprompter",
      "Dirección creativa",
      "Edición básica incluida (cortes, subtítulos y formato vertical)",
      "Entrega en 24-48h",
    ],
    highlighted: false,
  },
  {
    name: "48 Reels Profesionales",
    price: "1.000€",
    pricePerUnit: "Solo 21€/reel",
    description:
      "El doble de contenido para marcas que necesitan escalar. Hasta 48 reels o 24 vídeos de YouTube.",
    incluye: [
      "8 horas de grabación",
      "Espacio rooftop privado",
      "Filmmaker profesional",
      "Cámaras y equipo técnico",
      "Iluminación de estudio",
      "Sonido profesional",
      "Teleprompter",
      "Dirección creativa",
      "Edición básica incluida (cortes, subtítulos y formato vertical)",
      "Entrega en 24-48h",
    ],
    highlighted: true,
  },
] as const;

export const ADDONS = [
  {
    name: "Edición Premium",
    description: "Pack 10 reels con transiciones, motion graphics y color grading",
    price: "desde 300€",
  },
  {
    name: "Thumbnails YouTube",
    description: "Pack 10 thumbnails profesionales para tus vídeos",
    price: "150€",
  },
  {
    name: "Estrategia de Contenido",
    description: "Calendario editorial + estrategia de publicación personalizada",
    price: "200€",
  },
] as const;

export const FAQS = [
  {
    question: "¿Necesito experiencia delante de la cámara?",
    answer:
      "No. Nuestro equipo de dirección te guiará en todo momento. Además, contamos con teleprompter para que no tengas que memorizar nada.",
  },
  {
    question: "¿Qué incluye exactamente el servicio?",
    answer:
      "Incluye el uso del espacio rooftop, equipo técnico completo (cámaras, iluminación, sonido), teleprompter y dirección creativa durante toda la sesión. Recibes todas las grabaciones organizadas y listas para usar en menos de 24 horas.",
  },
  {
    question: "¿Cuánto contenido puedo grabar en una sesión?",
    answer:
      "En una media jornada (4 horas) puedes grabar hasta 24 reels o 12 vídeos de YouTube. En una jornada completa, el doble.",
  },
  {
    question: "¿Puedo traer a mi propio equipo?",
    answer:
      "Por supuesto. Si tienes un fotógrafo, videógrafo o maquillador de confianza, pueden acompañarte sin coste adicional por el uso del espacio.",
  },
  {
    question: "¿Dónde está el estudio?",
    answer:
      "Estamos en Calle Ronda de Atocha, 16, Madrid — a 5 minutos a pie del Metro Atocha Renfe. Te enviaremos los detalles exactos de acceso al confirmar tu reserva.",
  },
  {
    question: "¿Cómo reservo una sesión?",
    answer:
      "Rellena el formulario de contacto o escríbenos por email. Te responderemos en menos de 24 horas para agendar tu sesión.",
  },
  {
    question: "¿Qué incluye la edición básica?",
    answer:
      "Todos nuestros planes incluyen edición básica: cortes dinámicos, subtítulos animados y adaptación a formato vertical (9:16) para Instagram Reels y TikTok. Si necesitas algo más avanzado como motion graphics, color grading profesional o transiciones personalizadas, ofrecemos packs de edición premium como add-on.",
  },
] as const;

export const CONTACT_INFO = {
  email: "hola@rooftopcontentstudio.es",
  phone: "+34 711 25 54 96",
  address: "Calle Ronda de Atocha, 16",
  city: "Madrid",
  postalCode: "28001",
  country: "ES",
} as const;

