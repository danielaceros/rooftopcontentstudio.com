"use client";

import { useEffect, useRef, useState } from "react";
import ContactFormEmbed from "./ContactFormEmbed";

export default function VideoFinal() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !videoRef.current) return;
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative min-h-screen scroll-mt-24 overflow-hidden sm:scroll-mt-32"
    >
      {/* Gradient transition from previous section */}
      <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background to-transparent" />

      {/* Video background */}
      <video
        ref={videoRef}
        src="/video/hero.webm"
        muted
        loop
        playsInline
        preload="none"
        poster="/optimized/hero-poster.webp"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <track kind="captions" />
      </video>

      {/* Overlay — directional gradient for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: isMobile
            ? "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.88) 100%)"
            : "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 md:px-10 lg:px-12 lg:pb-32 lg:pt-44 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
            {/* Left column */}
            <div className="md:sticky md:top-32">
              <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-accent">
                ( Contacto )
              </p>

              <h2 className="mt-6 font-heading text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.85] text-[#F0EDE6] [text-shadow:0_2px_20px_rgba(0,0,0,0.5)] sm:mt-8">
                ¿Cuándo Vienes
                <br />
                a Grabar?
              </h2>

              <p className="mt-6 max-w-[400px] text-base leading-[1.75] text-[#cccccc] sm:text-[1.05rem] sm:leading-[1.8]">
                Plazas limitadas. Cuéntanos tu proyecto y te respondemos en
                menos de 24 horas.
              </p>

              {/* Contact details — desktop only */}
              {!isMobile && (
                <div className="mt-10 flex flex-col gap-4">
                  {[
                    { text: "Calle Ronda de Atocha, 16, Madrid", href: undefined },
                    { text: "hola@rooftopcontentstudio.es", href: "mailto:hola@rooftopcontentstudio.es" },
                    { text: "+34 711 25 54 96", href: "tel:+34711255496" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4">
                      <span className="h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-sans text-[14px] text-[#bbbbbb] transition-colors duration-300 hover:text-foreground"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="font-sans text-[14px] text-[#bbbbbb]">
                          {item.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right column — form */}
            <div className="relative">
              {/* Badge */}
              <div className="absolute -top-3 right-4 z-20 bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-background sm:right-6">
                Plazas Limitadas
              </div>

              {/* Form container */}
              <div
                className="rounded-[4px] border border-foreground/[0.08] p-6 sm:p-8 lg:p-10"
                style={{
                  backgroundColor: isMobile ? "rgba(8,8,8,0.92)" : "rgba(8,8,8,0.85)",
                  backdropFilter: isMobile ? "none" : "blur(12px)",
                  WebkitBackdropFilter: isMobile ? "none" : "blur(12px)",
                }}
              >
                <ContactFormEmbed />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient transition to footer */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
