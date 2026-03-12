import { SITE_URL, SITE_NAME } from "./constants";

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
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
          name: "Media Jornada",
          description:
            "4 horas de grabación profesional. Hasta 24 reels o 12 vídeos YouTube.",
          price: "600",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Jornada Completa",
          description:
            "8 horas de grabación profesional. Ideal para podcasts y producciones intensivas.",
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
