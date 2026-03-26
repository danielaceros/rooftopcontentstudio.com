"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import VideoBackground from "@/components/ui/VideoBackground";
import Marquee from "@/components/ui/Marquee";
import ContactFormEmbed from "./ContactFormEmbed";

const LOGOS_SRC = "/optimized/logos-banner.png";

const LINES = [
  { text: "Tu Contenido.", desktopOnly: false },
  { text: "Tu Marca.", desktopOnly: false },
  { text: "Un Día.", desktopOnly: false },
];

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);

  // Layer 3: headline floats up slightly on scroll (desktop only)
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const headline = headlineRef.current;
    if (!headline) return;

    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        headline.style.transform = `translateY(${window.scrollY * -0.1}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden md:min-h-screen" aria-label="Hero">
      {/* Video — absolute fullscreen on all viewports */}
      <div className="absolute inset-0">
        <VideoBackground />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:min-h-screen lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:pb-20 lg:pt-40 lg:text-left xl:gap-16 2xl:px-20">
        {/* Headline — centered on mobile, left on desktop */}
        <div
          ref={headlineRef}
          className="flex min-h-[100svh] flex-1 flex-col justify-end pb-16 px-5 sm:px-8 md:justify-center md:pb-0 lg:min-h-0 lg:w-[55%] lg:px-0 lg:pb-12"
          style={{ willChange: "transform" }}
        >
          {/* Terminal-style label — visually reinforced */}
          <div className="hero-line-wrapper mb-4 sm:mb-5">
            <p
              className="hero-line font-mono text-sm uppercase leading-relaxed tracking-wide text-accent sm:text-base md:tracking-[0.2em]"
              style={{ animationDelay: "0.2s" }}
            >
              [ Graba contenido para semanas. En una mañana. En un ático en Madrid. ]
            </p>
          </div>

          {/* Cinematic line-by-line reveal */}
          <h1 className="max-w-[1100px] font-heading text-[clamp(2.8rem,11vw,6.5rem)] uppercase leading-[0.86] tracking-tight text-foreground [text-shadow:0_2px_20px_rgba(0,0,0,0.7)] sm:text-[clamp(2.8rem,7vw,6.5rem)] sm:leading-[0.85]">
            {LINES.map((line, i) => (
              <span key={i} className="hero-line-wrapper inline-block w-full">
                <span
                  className="hero-line inline-block"
                  style={{ animationDelay: `${0.3 + i * 0.2}s` }}
                >
                  {line.text}
                </span>
                {i < LINES.length - 1 && " "}
              </span>
            ))}
          </h1>

          <div className="hero-line-wrapper mt-5 sm:mt-6">
            <p
              className="hero-line max-w-[540px] text-base leading-[1.7] text-foreground/65 sm:text-[1.05rem] sm:leading-[1.8] lg:text-[1.1rem]"
              style={{ animationDelay: "0.9s" }}
            >
              Ático en Madrid centro. Equipo, filmmaker y dirección incluidos. Entrega en 24-48h.
            </p>
          </div>

          {/* CTA button on mobile instead of form */}
          <div className="hero-line-wrapper mt-8 lg:hidden">
            <a
              href="#contacto"
              className="hero-line inline-block bg-accent px-10 py-4 font-mono text-[11px] uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light"
              style={{ animationDelay: "1.1s" }}
            >
              Pide tu Presupuesto →
            </a>
            <p className="hero-line mt-2 text-center text-xs text-foreground/40" style={{ animationDelay: "1.2s" }}>
              Sin compromiso · Respuesta en menos de 1h
            </p>
          </div>

          {/* Mini-testimonio */}
          <div className="hero-line-wrapper mt-5 lg:mt-6">
            <p
              className="hero-line text-sm leading-relaxed text-foreground/50 lg:text-[0.9rem]"
              style={{ animationDelay: "1.25s" }}
            >
              ★★★★★ &ldquo;En tres horas grabamos contenido para todo el equipo.&rdquo; — Guillermo, Geko Marketing
            </p>
          </div>

          {/* Scarcity badge */}
          <div className="hero-line-wrapper mt-3">
            <span
              className="hero-line inline-block text-xs font-medium uppercase tracking-wide text-amber-400/80"
              style={{ animationDelay: "1.35s" }}
            >
              Solo 1 sesión al día · Disponibilidad limitada
            </span>
          </div>

          {/* Social proof logos — mobile */}
          <div className="hero-line-wrapper mt-8 lg:hidden">
            <div
              className="hero-line"
              style={{ animationDelay: "1.3s" }}
            >
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/30">
                Empresas que han confiado en nosotros
              </p>
              <div
                className="w-[85%] overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
              >
                <Image
                  src={LOGOS_SRC}
                  alt="Clientes: Cámara de Comercio de Madrid, IFEMA, FIFA, Cinesa"
                  width={1200}
                  height={56}
                  className="h-6 w-auto max-w-none scale-[1.15] brightness-0 invert opacity-40 sm:h-9"
                  draggable={false}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form block — ONLY on desktop */}
        <div className="hero-form-reveal hidden lg:block lg:w-[380px] lg:shrink-0 lg:pb-12 xl:w-[420px]">
          <div className="overflow-hidden border border-foreground/10 bg-[#0A0A0A]/80 backdrop-blur-md">
            <ContactFormEmbed loadDelay={0} signalReady />
          </div>
        </div>
      </div>

      {/* Marquee — static on mobile, absolute on desktop */}
      <div className="relative z-10 w-full lg:absolute lg:bottom-0 lg:left-0">
        <Marquee />
      </div>

      <style>{`
        .hero-line-wrapper {
          overflow: hidden;
        }
        .hero-line {
          transform: translateY(110%);
          animation: heroRevealLine 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-form-reveal {
          opacity: 0;
          animation: heroFadeIn 0.8s ease-out 0.9s forwards;
        }
        @keyframes heroRevealLine {
          to { transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          to { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-line {
            transform: translateY(0);
            animation: none;
          }
          .hero-form-reveal {
            opacity: 1;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
