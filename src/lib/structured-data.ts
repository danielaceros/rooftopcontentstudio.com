import { SITE_URL, SITE_NAME } from "./constants";

export function getFAQPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Necesito experiencia delante de la cámara?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Nuestro equipo de dirección te guiará en todo momento. Además, contamos con teleprompter para que no tengas que memorizar nada."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué incluye exactamente el servicio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de lo que necesites. Puedes alquilar solo el espacio rooftop, añadir un filmmaker profesional con dirección creativa, o contratar la producción completa con equipo técnico y edición. Cuéntanos tu proyecto y te preparamos un presupuesto a medida."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué puedo grabar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lo que necesites: reels, vídeos de YouTube, podcast, VSLs, cursos, vídeo corporativo o cualquier formato audiovisual. El espacio y el equipo se adaptan completamente a tu proyecto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo traer a mi propio equipo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Puedes alquilar solo el espacio y traer tu propio filmmaker y equipo. También ofrecemos filmmaker profesional y equipo técnico completo si lo necesitas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde está el estudio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Estamos en Calle Ronda de Atocha, 16, Madrid — a 5 minutos a pie del Metro Atocha Renfe. Te enviaremos los detalles exactos de acceso al confirmar tu reserva."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo reservo una sesión?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rellena el formulario de contacto o escríbenos a hola@rooftopcontentstudio.es. Te respondemos en menos de 1 hora con presupuesto y fecha disponible."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecéis edición de vídeo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, como parte de la producción completa podemos encargarnos de la edición: cortes, subtítulos, formato vertical, motion graphics… lo que necesite tu proyecto. Es opcional — si ya tienes editor, perfecto."
        }
      }
    ]
  };
}

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    description:
      "Estudio de grabación premium en Madrid para marcas y creadores. Producción de reels, podcasts, vídeos corporativos y contenido para redes sociales.",
    url: SITE_URL,
    telephone: "+34711255496",
    email: "hola@rooftopcontentstudio.es",
    foundingDate: "2024",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
    image: `${SITE_URL}/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Ronda de Atocha, 16",
      addressLocality: "Madrid",
      addressRegion: "Madrid",
      postalCode: "28012",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4072,
      longitude: -3.6992,
    },
    priceRange: "€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sesiones de grabación a medida",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Alquiler de espacio rooftop",
          description:
            "Espacio rooftop privado con vistas a Madrid. Trae tu propio equipo y filmmaker. Sesiones desde 2 horas.",
        },
        {
          "@type": "Offer",
          name: "Espacio + Filmmaker",
          description:
            "Espacio rooftop con filmmaker profesional y dirección creativa incluida.",
        },
        {
          "@type": "Offer",
          name: "Producción completa",
          description:
            "Espacio, filmmaker profesional, equipo técnico completo y edición. Servicio integral a medida.",
        },
      ],
    },
    sameAs: [
      "https://www.instagram.com/daniaceros",
      "https://www.instagram.com/rooftopcontentstudio",
    ],
    areaServed: {
      "@type": "City",
      name: "Madrid",
    },
    serviceType:
      "Producción audiovisual y grabación de contenido digital",
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "es",
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}
