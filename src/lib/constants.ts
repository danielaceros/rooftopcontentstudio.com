export const SITE_URL = "https://rooftopcontentstudio.es";
export const SITE_NAME = "Rooftop Content Studio";
export const SITE_DESCRIPTION =
  "Estudio de grabación de contenido premium en Madrid. Graba meses de contenido en una sola mañana con un equipo profesional en una localización exclusiva.";

export const NAV_LINKS = [
  { label: "Estudio", href: "#que-es" },
  { label: "Galería", href: "#galeria" },
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
      "Equipo técnico, dirección creativa, maquillaje y teleprompter. Tú solo tienes que presentarte.",
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
      "Recibe tu contenido editado y listo para publicar en menos de una semana.",
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
      "Preparamos guiones, escaleta, referencias visuales y todo lo necesario para que el día de grabación sea perfecto.",
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
      "Editamos, corregimos color, añadimos subtítulos y te entregamos todo listo para publicar.",
  },
] as const;

export const TARIFAS = [
  {
    name: "Media Jornada",
    price: "600€",
    duration: "4 horas",
    description:
      "Ideal para grabar entre 10 y 20 piezas de contenido corto o módulos específicos.",
    highlighted: false,
  },
  {
    name: "Jornada Completa",
    price: "1.000€",
    duration: "8 horas",
    description:
      "Perfecta para formaciones completas, podcast o producción intensiva.",
    highlighted: true,
  },
] as const;

export const TARIFAS_INCLUYE = [
  "Espacio",
  "Filmmaker",
  "Equipo técnico",
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
      "Incluye el uso del estudio, equipo técnico (cámaras, iluminación, sonido), dirección creativa, maquillaje, teleprompter y la edición completa de todas las piezas grabadas.",
  },
  {
    question: "¿Cuánto contenido puedo grabar en una sesión?",
    answer:
      "En una media jornada puedes grabar hasta 10 piezas (reels, clips, etc.). En una jornada completa, hasta 25 piezas más una sesión de fotos.",
  },
  {
    question: "¿En cuánto tiempo recibo el contenido editado?",
    answer:
      "El plazo estándar de entrega es de 5 días laborables desde la fecha de grabación.",
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
  address: "Centro de Madrid, España",
  city: "Madrid",
  postalCode: "28001",
  country: "ES",
} as const;

export const MARQUEE_TEXT =
  "CONTENT STUDIO · MADRID · ROOFTOP · GRABACIÓN PROFESIONAL · REELS · PODCAST · VIDEO · ";
