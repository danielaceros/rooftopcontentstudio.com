import { SITE_URL, SITE_NAME, FAQS } from "./constants";

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    description:
      "Estudio de contenido en un ático en Madrid. Vienes una mañana, grabas con nuestro equipo y te vas con podcast, reels, YouTube y cursos listos para publicar. Look auténtico, calidad de producción. Presupuesto personalizado sin compromiso.",
    url: SITE_URL,
    telephone: "+34711255496",
    email: "hola@rooftopcontentstudio.es",
    foundingDate: "2024-01-01",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/optimized/logo.webp`,
      width: 256,
      height: 256,
    },
    image: [
      `${SITE_URL}/og-image.jpg`,
      `${SITE_URL}/optimized/studio-1.webp`,
      `${SITE_URL}/optimized/studio-2.webp`,
    ],
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
    currenciesAccepted: "EUR",
    paymentAccepted: "Transferencia bancaria, Tarjeta de crédito",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Daniel Acero",
      jobTitle: "Founder & Creative Director",
      url: "https://www.rooftopcontentstudio.es",
      sameAs: [
        "https://www.instagram.com/daniaceros",
        "https://www.instagram.com/rooftopcontentstudio",
        "https://www.daniaceros.com",
      ],
      knowsAbout: [
        "Producción audiovisual",
        "Filmmaking",
        "Contenido para redes sociales",
        "Videografía profesional",
        "Dirección creativa",
        "Producción de contenido para marcas",
        "Grabación de podcast",
        "Edición de vídeo",
      ],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sesiones de grabación a medida",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Solo Grabación",
          description:
            "Ático privado con equipo técnico, cámaras, sonido profesional y teleprompter. Sales con los brutos del día.",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Solo Grabación",
              description:
                "Ático privado con equipo técnico, cámaras, sonido profesional y teleprompter. Sales con los brutos del día.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
              },
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/#tarifas`,
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Grabación + Edición",
          description:
            "Grabación con filmmaker y dirección creativa, edición profesional, subtítulos y entrega en 24-48h.",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Grabación + Edición",
              description:
                "Grabación con filmmaker y dirección creativa, edición profesional, subtítulos y entrega en 24-48h.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
              },
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/#tarifas`,
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Producción Completa",
          description:
            "Grabación, edición, estrategia de contenido y distribución multiplataforma. Servicio integral a medida.",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Producción Completa",
              description:
                "Grabación, edición, estrategia de contenido y distribución multiplataforma. Servicio integral a medida.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
              },
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/#tarifas`,
            },
          ],
        },
      ],
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Guillermo" },
        reviewBody:
          "En tres horas grabamos contenido para todo el equipo. Volveremos.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Almudena" },
        reviewBody: "El espacio es super comodo. Cinco estrellas.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "2",
      bestRating: "5",
    },
    sameAs: [
      "https://www.instagram.com/daniaceros",
      "https://www.instagram.com/rooftopcontentstudio",
    ],
    areaServed: {
      "@type": "City",
      name: "Madrid",
    },
    serviceType: "Producción audiovisual y grabación de contenido digital",
    knowsLanguage: ["es"],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Estudio de contenido en un ático en Madrid. Graba podcast, reels, YouTube y cursos con look auténtico y calidad de producción.",
    inLanguage: "es",
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Rooftop Content Studio — Tu Contenido. Tu Marca. Un Día. Madrid",
    description:
      "Estudio de contenido en un ático en Madrid. Vienes una mañana, grabas con nuestro equipo y te vas con contenido listo para publicar. Look auténtico, calidad de producción.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#business`,
    },
    inLanguage: "es",
    datePublished: "2025-09-01",
    dateModified: "2026-03-20",
    author: {
      "@id": `${SITE_URL}/#founder`,
    },
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
    ],
  };
}

export function getFAQPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo grabar contenido profesional en Rooftop Content Studio",
    description:
      "Proceso de grabación de contenido audiovisual en 4 pasos en el estudio rooftop de Madrid.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Cuéntanos tu proyecto",
        text: "Escríbenos con lo que necesitas. Presupuesto en menos de 1 hora.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Preparamos tu sesión",
        text: "Nuestro equipo reserva fecha, prepara el set y planifica la sesión para que solo tengas que venir.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Llegas y grabas",
        text: "Todo montado. Te dirigimos, te guiamos y nos encargamos de la técnica. Tú solo graba.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Contenido listo para publicar",
        text: "Te llevas el material. Si incluye edición, en 24-48h tienes todo editado, subtitulado y formateado.",
      },
    ],
  };
}

export function getVideoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Rooftop Content Studio - Showreel",
    description:
      "Portfolio de producciones audiovisuales realizadas en Rooftop Content Studio, estudio de grabación premium en Madrid.",
    thumbnailUrl: `${SITE_URL}/og-image.jpg`,
    uploadDate: "2024-01-01",
    duration: "PT30S",
    contentUrl: `${SITE_URL}/video/corr.mp4`,
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}
