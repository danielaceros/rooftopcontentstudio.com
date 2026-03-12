"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
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
    <section id="estudio" className="px-5 py-20 sm:px-8 sm:py-28 md:px-10 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            ( El Estudio )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Tu Estudio de Contenido en Madrid.
          </h2>
        </ScrollReveal>

        {/* Full-width slideshow */}
        <ScrollReveal delay={0.16}>
          <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden sm:mt-16 lg:mt-20">
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
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    animation: i === active ? "queEsKenBurns 3.5s ease-out forwards" : "none",
                  }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}

            {/* Dot indicators */}
            <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-1 sm:bottom-6">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Imagen ${i + 1}`}
                  className="flex h-11 w-11 items-center justify-center"
                >
                  <span
                    className="block h-[3px] rounded-[2px] transition-all duration-300"
                    style={{
                      width: i === active ? 24 : 8,
                      backgroundColor: i === active ? "#C9A84C" : "#333",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
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
