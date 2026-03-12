"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FORMATOS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const IMAGES = [
  { src: "/optimized/studio-1.webp", alt: "Setup de entrevista con sofá blanco y cámara profesional" },
  { src: "/optimized/studio-3.webp", alt: "Vista panorámica del skyline de Madrid desde la terraza" },
  { src: "/optimized/studio-4.webp", alt: "Cámara en la terraza rooftop con Madrid de fondo" },
];

const INTERVAL = 3500;

export default function QueEs() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = (index: number) => {
    setActive(index);
    startTimer();
  };

  return (
    <section id="que-es" className="py-14 sm:py-28 lg:py-32">
      <div className="px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* Left — text content */}
            <div>
              <ScrollReveal>
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
                  ( Qué es )
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h2 className="mt-6 font-heading text-[clamp(2.4rem,9vw,5rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
                  Tu Estudio de Contenido en Madrid.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <p className="mt-8 text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
                  Un rooftop privado en el centro de Madrid donde grabas todo
                  tu contenido en una sola mañana. Llegas con tu idea, te vas
                  con semanas de material listo. Sin montar, sin desmontar,
                  sin complicaciones.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.24}>
                <p className="mb-8 mt-4 font-mono text-[10px] uppercase tracking-[0.4em] text-muted lg:mt-10">
                  Graba lo que necesites
                </p>
                <ul className="flex flex-col gap-4">
                  {FORMATOS.map((formato) => (
                    <li key={formato} className="flex items-center gap-4 text-base text-foreground sm:text-[1.05rem]">
                      <span className="h-px w-6 bg-accent" aria-hidden="true" />
                      {formato}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Right — auto slideshow */}
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                {IMAGES.map((img, i) => (
                  <div
                    key={img.src}
                    className="absolute inset-0"
                    style={{
                      opacity: i === active ? 1 : 0,
                      transition: "opacity 0.8s ease-in-out",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      style={{
                        animation: i === active ? "queEsKenBurns 3.5s ease-out forwards" : "none",
                      }}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}

                {/* Dot indicators */}
                <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2 sm:bottom-5">
                  {IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Imagen ${i + 1}`}
                      className="h-[3px] rounded-[2px] transition-all duration-300"
                      style={{
                        width: i === active ? 24 : 8,
                        backgroundColor: i === active ? "#C9A84C" : "#333",
                      }}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes queEsKenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
