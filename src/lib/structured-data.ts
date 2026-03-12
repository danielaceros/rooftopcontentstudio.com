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
          "text": "Espacio rooftop, filmmaker profesional, cámaras y equipo técnico, iluminación de estudio, sonido profesional, teleprompter y dirección creativa. Archivos entregados en menos de 24 horas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto contenido puedo grabar en una sesión?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En una media jornada (4 horas) puedes grabar hasta 24 reels o 12 vídeos de YouTube. En una jornada completa, el doble."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo traer a mi propio equipo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Si tienes un fotógrafo, videógrafo o maquillador de confianza, pueden acompañarte sin coste adicional por el uso del espacio."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde está el estudio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Estamos en el centro de Madrid, en Calle Ronda de Atocha 16, una terraza rooftop privada con vistas panorámicas a la ciudad. A 5 minutos del metro Atocha Renfe."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo reservo una sesión?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rellena el formulario de contacto o escríbenos a hola@rooftopcontentstudio.es. Te responderemos en menos de 24 horas para agendar tu sesión."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué incluye la edición básica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Todos nuestros planes incluyen edición básica: cortes dinámicos, subtítulos animados y adaptación a formato vertical (9:16) para Instagram Reels y TikTok. Si necesitas algo más avanzado como motion graphics, color grading profesional o transiciones personalizadas, ofrecemos packs de edición premium como add-on."
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
    priceRange: "€€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sesiones de grabación",
      itemListElement: [
        {
          "@type": "Offer",
          name: "24 Reels Profesionales",
          description:
            "4 horas de grabación profesional. Hasta 24 reels o 12 vídeos YouTube. Edición básica incluida.",
          price: "600",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "48 Reels Profesionales",
          description:
            "8 horas de grabación profesional. Hasta 48 reels o 24 vídeos YouTube. Edición básica incluida.",
          price: "1000",
          priceCurrency: "EUR",
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
