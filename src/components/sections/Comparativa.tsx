"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    src: "/AXZ.webm",
    poster: "/optimized/poster-axz.webp",
    name: "Guillermo",
    role: "Founder, Geko Marketing",
    quote: "En tres horas grabamos contenido para todo el equipo. Volveremos.",
  },
  {
    src: "/C5694.webm",
    poster: "/optimized/poster-c5694.webp",
    name: "Almudena",
    role: "Content Creator, Geko Marketing",
    quote: "El espacio es super comodo. Cinco estrellas.",
  },
];

function TestimonialCard({
  src,
  poster,
  name,
  role,
  quote,
}: {
  src: string;
  poster: string;
  name: string;
  role: string;
  quote: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalReady, setIsModalReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.preload = "auto";
          video.load();
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setIsModalReady(false);
  }, [isOpen]);

  return (
    <>
      <div ref={containerRef} className="flex flex-col items-center text-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative aspect-[9/16] w-full max-w-[320px] cursor-pointer overflow-hidden rounded-sm sm:max-w-[320px] lg:max-w-[360px]"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={poster}
          >
            <source src={src} type="video/webm" />
          </video>

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />

          {/* Play icon */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
            <svg width="52" height="52" viewBox="0 0 44 44" fill="none" className="scale-[0.8] transition-transform duration-300 group-hover:scale-100 drop-shadow-lg">
              <circle cx="22" cy="22" r="21" stroke="white" strokeWidth="1.5" opacity="0.8" />
              <path d="M18 14L30 22L18 30V14Z" fill="white" opacity="0.9" />
            </svg>
          </div>

          {/* Gradient bottom */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4"
            style={{ background: "linear-gradient(0deg, rgba(8,8,8,0.6) 0%, transparent 100%)" }}
          />
        </button>

        {/* Info below video */}
        <p className="mt-4 text-[1rem] font-medium text-foreground">{name}</p>
        <p className="mt-0.5 text-[0.8rem] text-muted">{role}</p>
        <p className="mt-2 max-w-[280px] text-[0.9rem] italic leading-relaxed text-foreground/70">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Modal */}
      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[120] flex items-center justify-center bg-black/82 px-3 py-4 backdrop-blur-sm sm:px-6"
              onClick={() => setIsOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Testimonio"
            >
              <div
                className="relative max-h-[88svh] max-w-[94vw] overflow-hidden rounded-2xl border border-white/15 bg-background shadow-[0_28px_70px_-30px_rgba(0,0,0,0.95)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute right-3 top-3 z-10 cursor-pointer rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[11px] uppercase text-white/85 transition hover:bg-black/75"
                  aria-label="Cerrar video"
                >
                  Cerrar
                </button>
                <video
                  src={src}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  onLoadedData={() => setIsModalReady(true)}
                  className="block max-h-[88svh] max-w-[94vw] bg-black object-contain"
                >
                  <track kind="captions" />
                </video>
                <div
                  className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 transition-opacity duration-300 ${
                    isModalReady ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="h-8 w-8 animate-spin rounded-full border border-white/60 border-t-transparent" />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

/* ── Mobile carousel with dots ── */
function MobileCarousel() {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  return (
    <div className="mt-14 sm:hidden">
      <div className="flex items-center justify-center gap-4">
        {/* Prev arrow */}
        <button
          type="button"
          onClick={prev}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground/50 transition-colors hover:border-foreground/30 hover:text-foreground"
          aria-label="Anterior"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Cards — all mounted, toggle visibility to avoid re-renders */}
        <div className="relative min-w-0 flex-1">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.src}
              className={i === active ? "block" : "hidden"}
            >
              <TestimonialCard
                src={t.src}
                poster={t.poster}
                name={t.name}
                role={t.role}
                quote={t.quote}
              />
            </div>
          ))}
        </div>

        {/* Next arrow */}
        <button
          type="button"
          onClick={next}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-foreground/50 transition-colors hover:border-foreground/30 hover:text-foreground"
          aria-label="Siguiente"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
              i === active ? "w-6 bg-accent" : "w-2 bg-foreground/20"
            }`}
            aria-label={`Ir al testimonio ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Comparativa() {
  return (
    <section className="px-5 pb-10 pt-20 sm:px-8 sm:py-28 md:px-10 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            ( Testimonios )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Lo que dicen quienes han grabado aquí.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted sm:text-[1.1rem] sm:leading-[1.8]">
            Geko Marketing grabó con nosotros. Esto es lo que dijeron.
          </p>
        </ScrollReveal>

        {/* Mobile: single-card carousel */}
        <ScrollReveal delay={0.18}>
          <MobileCarousel />
        </ScrollReveal>

        {/* Desktop: side by side */}
        <ScrollReveal delay={0.18}>
          <div className="mt-16 hidden gap-8 sm:flex sm:justify-center lg:mt-20 lg:gap-12">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard
                key={t.src}
                src={t.src}
                poster={t.poster}
                name={t.name}
                role={t.role}
                quote={t.quote}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <div className="mt-10 text-center sm:mt-14">
            <a
              href="#contacto"
              className="inline-block bg-accent px-10 py-4 font-mono text-[11px] uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light"
            >
              Reserva tu sesión →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
