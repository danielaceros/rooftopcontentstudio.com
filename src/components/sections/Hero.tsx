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
  const formRef = useRef<HTMLDivElement>(null);

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
    <section className="relative min-h-[100svh] overflow-hidden sm:min-h-[100svh]" aria-label="Hero">
      {/* Video — absolute fullscreen on all viewports */}
      <div className="absolute inset-0">
        <VideoBackground />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center lg:min-h-screen lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:pb-20 lg:pt-40 lg:text-left xl:gap-16 2xl:px-20">
        {/* Headline — overlaps video on all viewports */}
        <div
          ref={headlineRef}
          className="flex-1 px-4 pb-0 pt-28 sm:px-8 sm:pt-32 lg:pt-0 lg:w-[55%] lg:px-0 lg:pb-12"
          style={{ willChange: "transform" }}
        >
          {/* Terminal-style label */}
          <div className="hero-line-wrapper mb-2 sm:mb-3">
            <p
              className="hero-line font-mono text-[11px] uppercase tracking-[0.25em] text-accent sm:text-[11px]"
              style={{ animationDelay: "0.2s" }}
            >
              [ Graba contenido para semanas. En una mañana. En un ático en Madrid. ]
            </p>
          </div>

          {/* Cinematic line-by-line reveal */}
          <h1 className="max-w-[1100px] font-heading text-[clamp(1.9rem,9.5vw,6.5rem)] uppercase leading-[0.86] tracking-tight text-foreground [text-shadow:0_2px_20px_rgba(0,0,0,0.7)] sm:text-[clamp(2.8rem,7vw,6.5rem)] sm:leading-[0.85]">
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

          <div className="hero-line-wrapper mt-4 sm:mt-6">
            <p
              className="hero-line max-w-[540px] text-[0.95rem] leading-[1.7] text-foreground/60 sm:text-[1.05rem] sm:leading-[1.8] lg:text-[1.1rem]"
              style={{ animationDelay: "0.9s" }}
            >
              Vienes al ático, grabas con nuestro equipo y te vas con podcast, reels, YouTube o cursos listos para publicar. Look auténtico, calidad de producción, entrega en 24-48h. Desde 50€/h.
            </p>
          </div>
        </div>

        {/* Form block — solid bg on mobile, transparent on desktop (45%) */}
        <div
          ref={formRef}
          className="hero-form-reveal w-full bg-background/90 px-4 pb-4 pt-2 backdrop-blur-sm sm:px-8 lg:w-[380px] lg:shrink-0 lg:bg-transparent lg:backdrop-blur-none lg:px-0 lg:pb-12 xl:w-[420px]"
        >
          {/* Social proof logos — mobile only */}
          <div className="mb-1.5 lg:hidden">
            <p className="mb-1 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/30 sm:text-[11px]">
              Empresas que han confiado en nosotros
            </p>
            <div
              className="mx-auto w-[85%] overflow-hidden"
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
                className="mx-auto h-6 w-auto max-w-none scale-[1.15] brightness-0 invert opacity-40 sm:h-9"
                draggable={false}
                loading="eager"
              />
            </div>
          </div>

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
