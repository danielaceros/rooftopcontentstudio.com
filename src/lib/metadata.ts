import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./constants";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Estudio de Grabación de Contenido en Madrid`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Rooftop Content Studio es un estudio de grabación de contenido con terraza rooftop en el centro de Madrid. Alquiler de espacio desde 50€/h, filmmaker profesional y producción completa para marcas y creadores. FIFA, IFEMA y Cinesa ya han grabado aquí.",
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Graba Meses de Contenido en Una Sola Mañana`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/optimized/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Estudio de grabación de contenido en Madrid`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Estudio de Grabación de Contenido en Madrid`,
    description: SITE_DESCRIPTION,
    images: ["/optimized/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};
