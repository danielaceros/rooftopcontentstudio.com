import { SITE_URL, SITE_NAME, FAQS } from "./constants";

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
          name: "Alquiler de espacio rooftop",
          description:
            "Espacio rooftop privado con vistas a Madrid. Trae tu propio equipo y filmmaker. Sesiones desde 2 horas.",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Alquiler de espacio rooftop",
              description:
                "Espacio rooftop privado con vistas a Madrid. Trae tu propio equipo y filmmaker. Sesiones desde 2 horas.",
              price: "50",
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "50",
                priceCurrency: "EUR",
                unitText: "hora",
              },
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/#tarifas`,
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Espacio + Filmmaker",
          description:
            "Espacio rooftop con filmmaker profesional y dirección creativa incluida.",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Espacio + Filmmaker",
              description:
                "Espacio rooftop con filmmaker profesional y dirección creativa incluida.",
              price: "100",
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "100",
                priceCurrency: "EUR",
                unitText: "hora",
              },
              availability: "https://schema.org/InStock",
              url: `${SITE_URL}/#tarifas`,
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Producción completa",
          description:
            "Espacio, filmmaker profesional, equipo técnico completo y edición. Servicio integral a medida.",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Producción completa",
              description:
                "Precio a medida según proyecto. Espacio, filmmaker profesional, equipo técnico completo y edición. Servicio integral.",
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
    sameAs: [
      "https://www.instagram.com/daniaceros",
      "https://www.instagram.com/rooftopcontentstudio",
    ],
    areaServed: {
      "@type": "City",
      name: "Madrid",
    },
    serviceType: "Producción audiovisual y grabación de contenido digital",
    knowsLanguage: ["es", "en"],
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
      "Estudio de grabación premium en Madrid para marcas y creadores de contenido.",
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
    name: "Rooftop Content Studio - Estudio de Grabación Premium en Madrid",
    description:
      "Estudio de grabación premium en Madrid para marcas y creadores. Producción de reels, podcasts, vídeos corporativos y contenido para redes sociales.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#business`,
    },
    inLanguage: "es",
    datePublished: "2025-09-01",
    dateModified: "2026-03-15",
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
        text: "Escríbenos o rellena el formulario. Te enviamos presupuesto a medida en menos de 1 hora.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Preparamos tu sesión",
        text: "Reservamos fecha y preparamos el ático para que el resultado parezca natural, no producido. Tú eliges el nivel de servicio.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Llegas y grabas",
        text: "Todo está listo cuando llegas. El espacio es cómodo y no intimida — es un ático, no un plató. Solo ponte delante de la cámara.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Te llevas tu contenido",
        text: "Sales con contenido que parece orgánico y suena profesional. Si incluye edición, listo para publicar en 24-48 horas.",
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
