export const SITE_URL = "https://rooftopcontentstudio.es";
export const SITE_NAME = "Rooftop Content Studio";
export const SITE_DESCRIPTION =
  "Estudio de grabación de contenido premium en Madrid. Graba meses de contenido en una sola mañana con un equipo profesional en una localización exclusiva.";

export const NAV_LINKS = [
  { label: "Estudio", href: "#que-es" },
  { label: "Proceso", href: "#proceso" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "FAQ", href: "#faq" },
] as const;

export const FORMATOS = [
  "Reels y TikToks",
  "Vídeos para YouTube",
  "Podcasts y entrevistas",
  "Fotos para redes sociales",
  "Contenido para newsletters",
  "Vídeos corporativos",
] as const;

export const BENEFICIOS = [
  {
    title: "Ahorra Tiempo",
    description:
      "Produce semanas de contenido en una sola sesión. Sin improvisar, sin estrés, sin perder horas editando en casa.",
    icon: "clock",
  },
  {
    title: "Calidad Profesional",
    description:
      "Iluminación de estudio, sonido profesional y un equipo que sabe cómo hacerte brillar ante la cámara.",
    icon: "sparkles",
  },
  {
    title: "Localización Única",
    description:
      "Un rooftop privado en el centro de Madrid con vistas espectaculares. El escenario perfecto para tu marca.",
    icon: "location",
  },
  {
    title: "Todo Incluido",
    description:
      "Equipo técnico, dirección creativa y teleprompter. Tú solo tienes que presentarte y grabar.",
    icon: "package",
  },
  {
    title: "Contenido Estratégico",
    description:
      "No grabamos por grabar. Planificamos cada pieza para que encaje en tu estrategia de contenidos.",
    icon: "strategy",
  },
  {
    title: "Resultados Inmediatos",
    description:
      "Recibe tus grabaciones organizadas y listas para usar en menos de 24 horas.",
    icon: "zap",
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
    name: "Media Jornada",
    price: "600€",
    duration: "4 horas",
    description:
      "Graba hasta 24 reels o 12 vídeos de YouTube en 4 horas. Ideal para creadores que quieren acumular semanas de contenido en una mañana.",
    highlighted: false,
  },
  {
    name: "Jornada Completa",
    price: "1.000€",
    duration: "8 horas",
    description:
      "El doble de tiempo, el doble de contenido. Perfecta para formaciones, podcasts o producciones intensivas de un día completo.",
    highlighted: true,
  },
] as const;

export const TARIFAS_INCLUYE = [
  "Espacio rooftop",
  "Filmmaker profesional",
  "Cámaras y equipo técnico",
  "Iluminación de estudio",
  "Sonido profesional",
  "Teleprompter",
  "Dirección creativa",
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
      "Estamos en el centro de Madrid, en una terraza rooftop privada con vistas panorámicas a la ciudad. Te enviaremos la dirección exacta al confirmar tu reserva.",
  },
  {
    question: "¿Cómo reservo una sesión?",
    answer:
      "Rellena el formulario de contacto o escríbenos por email. Te responderemos en menos de 24 horas para agendar tu sesión.",
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

export const MARQUEE_TEXT =
  "CONTENT STUDIO · MADRID · ROOFTOP · GRABACIÓN PROFESIONAL · REELS · PODCAST · VIDEO · ";
