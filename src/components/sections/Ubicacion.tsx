"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const MAPS_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8!2d-3.6992!3d40.4072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288a!2sCalle+Ronda+de+Atocha+16+Madrid!5e0!3m2!1ses!2ses!4v1";

export default function Ubicacion() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          iframe.src = MAPS_SRC;
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(iframe);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ubicacion" className="px-5 py-14 sm:px-8 sm:py-28 md:px-10 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            ( Ubicación )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            En el Corazón de Madrid.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 sm:mt-16 sm:gap-16 lg:mt-20 lg:grid-cols-2 lg:items-start lg:gap-20">
          <ScrollReveal delay={0.2}>
            <p className="max-w-lg text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
              Nuestro estudio rooftop está situado en el centro de Madrid, con
              fácil acceso en transporte público y parking cercano. Un espacio
              privado con vistas panorámicas a la ciudad.
            </p>
            <div className="mt-12 flex flex-col gap-6">
              {[
                "Calle Ronda de Atocha, 16, Madrid",
                "Metro a menos de 5 minutos",
                "Parking público a 2 minutos",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-4 text-foreground sm:gap-5 ${
                    index === 0 ? "text-[1.05rem] font-semibold sm:text-[1.2rem]" : "text-base sm:text-[1.05rem]"
                  }`}
                >
                  <span className="h-px w-8 bg-accent" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              {/* Map container */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] border border-border sm:aspect-[16/10] lg:aspect-[4/3]">
                <iframe
                  ref={iframeRef}
                  width="100%"
                  height="100%"
                  style={{ border: "none", display: "block", minHeight: 300 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rooftop Content Studio - Ubicación"
                  className="grayscale contrast-[1.1] brightness-[0.85] transition-[filter] duration-500 hover:grayscale-0 hover:contrast-100 hover:brightness-100"
                />
                {!loaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-card">
                    <span className="h-6 w-6 animate-spin rounded-full border border-accent/20 border-t-accent/60" />
                  </div>
                )}
              </div>

              {/* Info below map */}
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[10px] text-[#444] sm:text-[11px]">
                  Metro: Atocha Renfe · L1 · Cercanías
                </p>
                <a
                  href="https://maps.google.com/?q=Calle+Ronda+de+Atocha+16+Madrid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-accent transition-colors duration-300 hover:text-accent/80 sm:text-[11px]"
                >
                  ABRIR EN GOOGLE MAPS →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
