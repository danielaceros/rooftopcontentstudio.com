"use client";

import { useState } from "react";
import Image from "next/image";
import { FORMATOS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const IMAGES = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/DSC09910%20(1).webp?alt=media&token=c16cd222-b4e0-4245-b848-4a14d37aae52",
    alt: "Setup de entrevista con sofá blanco y cámara profesional",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/DSC09876%20(1).webp?alt=media&token=31bc1a8f-7102-4c2d-82b3-f1eb76d300b0",
    alt: "Formato mesa de entrevista en el estudio",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/DSC09614%20(1).webp?alt=media&token=15e4cb45-6ba6-44c4-a9dc-60eaaa5dfe93",
    alt: "Vista panorámica del skyline de Madrid desde la terraza",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/DSC09925%20(1).webp?alt=media&token=e09cb5d2-601c-42b2-b751-063ebe6bafc8",
    alt: "Cámara en la terraza rooftop con Madrid de fondo",
  },
];

export default function QueEs() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="que-es" className="py-24 sm:py-28 lg:py-32 xl:py-36">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
              ( Qué es )
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
              Tu Estudio de Contenido en Madrid.
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid gap-12 sm:mt-16 sm:gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal delay={0.2}>
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                Formatos que producimos
              </p>
              <ul className="flex flex-col gap-5">
                {FORMATOS.map((formato) => (
                  <li key={formato} className="flex items-center gap-5 text-base sm:text-[1.1rem] text-foreground">
                    <span className="h-px w-8 bg-amber" aria-hidden="true" />
                    {formato}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
                Rooftop Content Studio es un espacio de grabación premium
                diseñado para creadores, marcas y profesionales que quieren
                producir contenido de calidad sin complicaciones.
              </p>
              <p className="mt-6 text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
                Reservas tu sesión, te presentas y nosotros nos encargamos de
                todo: equipo, iluminación y dirección. Sales con semanas
                de contenido grabado y listo para usar.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Slideshow de galería */}
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <ScrollReveal delay={0.4}>
          <div className="galeria-slideshow-wrap overflow-hidden">
            <div
              className="galeria-track"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {[...IMAGES, ...IMAGES].map((img, i) => (
                <div
                  key={`${img.alt}-${i}`}
                  className="galeria-item relative shrink-0 overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 50vw"
                    className="object-cover"
                    priority={i < 2}
                  />
                </div>
              ))}
            </div>
          </div>

          <style>{`
            .galeria-slideshow-wrap {
              position: relative;
              isolation: isolate;
            }

            .galeria-slideshow-wrap::before,
            .galeria-slideshow-wrap::after {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              width: 48px;
              pointer-events: none;
              z-index: 2;
            }

            .galeria-slideshow-wrap::before {
              left: 0;
              background: linear-gradient(to right, #0a0a0a, rgba(10, 10, 10, 0));
            }

            .galeria-slideshow-wrap::after {
              right: 0;
              background: linear-gradient(to left, #0a0a0a, rgba(10, 10, 10, 0));
            }

            .galeria-track {
              display: flex;
              width: max-content;
              gap: 0.75rem;
              animation: galeria-slide 35s linear infinite;
              will-change: transform;
            }

            .galeria-item {
              width: min(72vw, 700px);
              aspect-ratio: 16 / 9;
              border-radius: 0.75rem;
            }

            @keyframes galeria-slide {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .galeria-track {
                animation: none;
                transform: translate3d(0, 0, 0);
              }
            }

            @media (min-width: 640px) {
              .galeria-item {
                width: min(55vw, 700px);
              }
            }

            @media (min-width: 1024px) {
              .galeria-slideshow-wrap::before,
              .galeria-slideshow-wrap::after {
                width: 80px;
              }

              .galeria-item {
                width: 55vw;
                max-width: 900px;
              }
            }
          `}</style>
        </ScrollReveal>
      </div>
    </section>
  );
}
