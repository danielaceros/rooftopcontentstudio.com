"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const IMAGES: {
  src: string;
  alt: string;
  label: string;
  caption: string;
}[] = [
  // — Terraza / Exterior —
  { src: "/optimized/studio-3.webp", alt: "Vista panorámica del skyline de Madrid desde la terraza", label: "01 — Terraza", caption: "Vistas desde la terraza" },
  { src: "/optimized/studio/dsc09925.webp", alt: "Cámara en la terraza rooftop con vistas a los tejados de Madrid", label: "02 — Terraza", caption: "Cámara lista en la terraza" },
  // — Salón / Entrevistas —
  { src: "/optimized/studio-1.webp", alt: "Setup de entrevista con sofá blanco y cámara profesional", label: "03 — Salón", caption: "Set de entrevista listo" },
  { src: "/optimized/studio/dsc09680.webp", alt: "Salón del estudio con softboxes, cámara y sofá blanco", label: "04 — Salón", caption: "Salón con luz natural y equipo" },
  { src: "/optimized/studio/dsc09694.webp", alt: "Setup de iluminación con softbox y cámara en el salón", label: "05 — Salón", caption: "Reflector y cámara en el salón" },
  { src: "/optimized/studio/dsc09702.webp", alt: "Salón con sofá, softbox y mesa de trabajo con portátil", label: "06 — Salón", caption: "Zona de trabajo y grabación" },
  { src: "/optimized/studio/dsc09710.webp", alt: "Zona de entrevista con sofá beige y equipo de iluminación", label: "07 — Salón", caption: "El salón: cómodo, no intimida" },
  // — Set de grabación —
  { src: "/optimized/studio/dsc09771.webp", alt: "Set de grabación con sillón reclinable y dos softboxes", label: "08 — Set", caption: "Set de entrevista nocturno" },
  { src: "/optimized/studio/dsc09774.webp", alt: "Salón preparado para rodaje con iluminación profesional", label: "09 — Set", caption: "Listo para rodar" },
  { src: "/optimized/studio/dsc09776.webp", alt: "Vista cenital del set con sillón y softboxes encendidas", label: "10 — Set", caption: "Vista cenital del set" },
  { src: "/optimized/studio/dsc09780.webp", alt: "Rincón de grabación con sillón y softboxes desde arriba", label: "11 — Set", caption: "Iluminación desde arriba" },
  { src: "/optimized/studio/dsc09789.webp", alt: "Sillón con panel reflector y cámara en plano cenital", label: "12 — Set", caption: "Sillón con reflector y cámara" },
  { src: "/optimized/studio/dsc09897.webp", alt: "Sofá con teleprompter y softboxes de iluminación", label: "13 — Set", caption: "Sofá con teleprompter" },
  { src: "/optimized/studio/dsc09900.webp", alt: "Setup de entrevista con sofá, cámara y doble softbox", label: "14 — Set", caption: "Todo listo para grabar" },
  { src: "/optimized/studio/dsc09911.webp", alt: "Cámara profesional con teleprompter frente al sofá", label: "15 — Set", caption: "Cámara y teleprompter" },
  // — Podcast / Mesa —
  { src: "/optimized/studio/dsc09820.webp", alt: "Set de podcast con escritorio, portátil y dos softboxes", label: "16 — Podcast", caption: "Set de podcast preparado" },
  { src: "/optimized/studio/dsc09849.webp", alt: "Mesa de podcast con portátil y softboxes laterales", label: "17 — Podcast", caption: "Mesa de podcast con iluminación" },
  { src: "/optimized/studio/dsc09859.webp", alt: "Habitación de grabación con softboxes y escritorio", label: "18 — Podcast", caption: "Sala de podcast completa" },
  { src: "/optimized/studio/dsc09877.webp", alt: "Set de conversación con mesa, vasos y softboxes", label: "19 — Podcast", caption: "Set íntimo de conversación" },
  { src: "/optimized/studio/dsc09886.webp", alt: "Vista aérea de la mesa de podcast con dos sillas", label: "20 — Podcast", caption: "Vista cenital del set de podcast" },
];

const INTERVAL = 5000;
const TOTAL = IMAGES.length;

export default function QueEs() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const hoveredRef = useRef(false);
  const touchStartRef = useRef(0);
  const dirRef = useRef<"fwd" | "bwd">("fwd");

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!hoveredRef.current) {
        dirRef.current = "fwd";
        setPrevActive((p) => {
          // We read active from closure via a trick: prevActive becomes the old active
          return p; // will be overwritten below
        });
        setActive((prev) => {
          setPrevActive(prev);
          return (prev + 1) % TOTAL;
        });
        setAnimKey((k) => k + 1);
      }
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = useCallback(
    (index: number, direction?: "fwd" | "bwd") => {
      dirRef.current = direction ?? (index > active ? "fwd" : "bwd");
      setPrevActive(active);
      setActive(index);
      setAnimKey((k) => k + 1);
      startTimer();
    },
    [active, startTimer],
  );

  const goPrev = useCallback(() => {
    goTo((active - 1 + TOTAL) % TOTAL, "bwd");
  }, [active, goTo]);

  const goNext = useCallback(() => {
    goTo((active + 1) % TOTAL, "fwd");
  }, [active, goTo]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const delta = touchStartRef.current - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) goNext();
        else goPrev();
      }
    },
    [goNext, goPrev],
  );

  const handleBarClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = x / rect.width;
      const idx = Math.min(Math.floor(pct * TOTAL), TOTAL - 1);
      goTo(idx, idx > active ? "fwd" : "bwd");
    },
    [active, goTo],
  );

  const pad = (n: number) => String(n).padStart(2, "0");

  // Determine translateX for each slide
  const getSlideTransform = (i: number) => {
    if (i === active) return "translateX(0)";
    if (i === prevActive && prevActive !== active) {
      // Outgoing slide
      return dirRef.current === "fwd"
        ? "translateX(-100%)"
        : "translateX(100%)";
    }
    // All other slides: park them off-screen on the incoming side
    // so they're ready to enter when they become active
    if (dirRef.current === "fwd") {
      return "translateX(100%)";
    }
    return "translateX(-100%)";
  };

  const getSlideTransition = (i: number) => {
    // Only animate the active and the previous slide
    if (i === active || (i === prevActive && prevActive !== active)) {
      return "transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)";
    }
    return "none";
  };

  return (
    <section
      id="estudio"
      className="px-5 py-20 sm:px-8 sm:py-28 md:px-10 lg:px-12 lg:py-32 xl:px-16 2xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            ( El Estudio )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            No es un Plató. Es un Ático en Madrid.
          </h2>
        </ScrollReveal>

        <h3 className="mt-10 font-heading text-[clamp(1.6rem,5vw,3rem)] uppercase leading-[0.95] text-foreground sm:mt-12">
          ¿Qué es Rooftop Content Studio?
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          <p className="text-[0.935rem] leading-[1.8] text-muted sm:text-[1rem]">
            Rooftop Content Studio es un espacio de grabación profesional ubicado en un ático real en la Calle Ronda de Atocha, 16, en el centro de Madrid. A diferencia de los platós convencionales con ciclorama blanco y focos artificiales, el espacio cuenta con un salón con sofás, una terraza con vistas panorámicas al skyline de Madrid y luz natural directa. Está diseñado para que el contenido grabado parezca orgánico — no producido en un estudio — mientras mantiene calidad profesional con cámaras, iluminación y sonido de estudio.
          </p>
          <p className="text-[0.935rem] leading-[1.8] text-muted sm:text-[1rem]">
            Fundado por Daniel Acero, filmmaker con más de 6 años de experiencia y clientes como FIFA, IFEMA y Cinesa, ofrece tres modalidades: alquiler del espacio (desde 50€/h), espacio con filmmaker profesional (desde 100€/h), o producción completa con edición y entrega en 24-48 horas. Solo se realiza 1 sesión por día.
          </p>
        </div>

        {/* Key stats */}
        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-foreground/[0.08] pt-8 sm:mt-12 sm:pt-10 md:grid-cols-4 md:gap-8">
          <div>
            <p className="font-heading text-[clamp(1.8rem,4vw,2.6rem)] uppercase leading-none text-foreground">
              50€/h
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Solo espacio
            </p>
          </div>
          <div>
            <p className="font-heading text-[clamp(1.8rem,4vw,2.6rem)] uppercase leading-none text-foreground">
              100€/h
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Espacio + Filmmaker
            </p>
          </div>
          <div>
            <p className="font-heading text-[clamp(1.8rem,4vw,2.6rem)] uppercase leading-none text-foreground">
              24-48h
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Entrega con edición
            </p>
          </div>
          <div>
            <p className="font-heading text-[clamp(1.8rem,4vw,2.6rem)] uppercase leading-none text-foreground">
              1 sesión/día
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Disponibilidad limitada
            </p>
          </div>
        </div>

        {/* Cinematic slideshow */}
        <ScrollReveal delay={0.16}>
          <div
            className="group relative mt-14 aspect-[16/9] w-full overflow-hidden md:aspect-[16/7] sm:mt-16 lg:mt-20"
            style={{ borderRadius: 2, backgroundColor: "#080808" }}
            onMouseEnter={() => { hoveredRef.current = true; }}
            onMouseLeave={() => { hoveredRef.current = false; }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Slides — stacked absolute, animated via translateX */}
            {IMAGES.map((img, i) => (
              <div
                key={img.src}
                className="absolute inset-0"
                style={{
                  transform: getSlideTransform(i),
                  transition: getSlideTransition(i),
                  zIndex: i === active ? 1 : 0,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    transform: i === active ? "scale(1.06)" : "scale(1)",
                    transition:
                      "transform 6s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                  priority={i === 0}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 z-[1]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0) 40%, rgba(8,8,8,0.5) 100%)",
                  }}
                />
              </div>
            ))}

            {/* Caption — bottom left */}
            <div className="absolute bottom-12 left-5 z-[2] sm:bottom-16 sm:left-8">
              <p
                className="font-sans text-[8px] uppercase sm:text-[9px]"
                style={{
                  letterSpacing: "0.35em",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {IMAGES[active].label}
              </p>
              <p
                className="mt-1 font-sans text-[13px] font-medium sm:text-[15px]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {IMAGES[active].caption}
              </p>
            </div>

            {/* Counter — bottom right */}
            <div
              className="absolute bottom-12 right-5 z-[2] font-sans sm:bottom-16 sm:right-8"
              style={{ letterSpacing: "0.2em" }}
            >
              <span
                className="text-[13px]"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                {pad(active + 1)}
              </span>
              <span
                className="text-[11px]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {" / "}
                {pad(TOTAL)}
              </span>
            </div>

            {/* Arrow buttons — hidden on mobile, visible on hover */}
            <button
              onClick={goPrev}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 z-[3] hidden -translate-y-1/2 items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(8,8,8,0.4)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.8)",
                fontSize: 16,
              }}
            >
              &#8249;
            </button>
            <button
              onClick={goNext}
              aria-label="Foto siguiente"
              className="absolute right-3 top-1/2 z-[3] hidden -translate-y-1/2 items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(8,8,8,0.4)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.8)",
                fontSize: 16,
              }}
            >
              &#8250;
            </button>

            {/* Progress bars — Instagram Stories style */}
            <div
              className="absolute inset-x-0 bottom-0 z-[2] flex cursor-pointer px-5 sm:px-6"
              style={{ gap: 3, paddingBottom: 12 }}
              onClick={handleBarClick}
            >
              {IMAGES.map((_, i) => (
                <div
                  key={i}
                  className="relative h-[3px] flex-1 overflow-hidden rounded-[1.5px]"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <div
                    key={i === active ? `bar-${animKey}` : `done-${i}`}
                    className="absolute inset-y-0 left-0 rounded-[1.5px]"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.6)",
                      width:
                        i < active ? "100%" : i === active ? "100%" : "0%",
                      animation:
                        i === active
                          ? `rcsBarFill ${INTERVAL}ms linear forwards`
                          : "none",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @keyframes rcsBarFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
