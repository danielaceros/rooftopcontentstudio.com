"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { use3DTilt } from "@/hooks/use3DTilt";

const OPTIONS = [
  {
    label: "Espacio",
    name: "Solo el Espacio",
    price: "50",
    unit: "/hora",
    description:
      "El rooftop es tuyo. Trae tu propio equipo y filmmaker — tú controlas la sesión.",
    includes: [
      "Rooftop privado con vistas a Madrid",
      "Iluminación de estudio",
      "Conexión Wi-Fi de alta velocidad",
      "Acceso a zona de maquillaje",
    ],
    highlighted: false,
    cta: "Reservar Espacio",
  },
  {
    label: "Más popular",
    name: "Espacio + Filmmaker",
    price: "100",
    unit: "/hora",
    description:
      "Un filmmaker profesional dirige tu sesión para que solo tengas que ponerte delante de la cámara.",
    includes: [
      "Todo lo del plan Espacio",
      "Filmmaker con dirección creativa",
      "Cámaras y equipo técnico",
      "Sonido profesional",
      "Teleprompter",
    ],
    highlighted: true,
    cta: "Reservar Sesión",
  },
  {
    label: "Todo incluido",
    name: "Producción Completa",
    price: null,
    unit: null,
    description:
      "Nos encargamos de todo: grabación, edición y entrega. Tú solo tienes que aparecer.",
    includes: [
      "Todo lo del plan Espacio + Filmmaker",
      "Edición profesional a medida",
      "Subtítulos y formato para cada plataforma",
      "Entrega en 24-48h",
    ],
    highlighted: false,
    cta: "Pedir Presupuesto",
  },
] as const;

function OptionCard({ option, index }: { option: (typeof OPTIONS)[number]; index: number }) {
  const { ref, lightRef, onMouseMove, onMouseLeave } = use3DTilt(6);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`group relative flex h-full flex-col p-7 transition-all duration-500 sm:p-9 lg:p-10 ${
          option.highlighted
            ? "border border-accent/30 bg-foreground/[0.03]"
            : "border border-border bg-transparent"
        }`}
        style={{ transition: "transform 0.6s ease, box-shadow 0.5s ease" }}
      >
        {/* Light highlight overlay */}
        <div
          ref={lightRef}
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        />

        {/* Name + Label badge */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            {option.name}
          </p>
          <span className={`shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] ${
            option.highlighted ? "text-accent" : "text-muted"
          }`}>
            {option.label}
          </span>
        </div>

        {/* Price */}
        <div className="relative z-10 mt-6 flex items-baseline gap-1">
          {option.price ? (
            <>
              <span className="font-mono text-[13px] text-muted">desde</span>
              <span className="font-heading text-[clamp(3rem,6vw,4rem)] leading-none text-foreground">
                {option.price}€
              </span>
              <span className="font-mono text-[13px] text-muted">{option.unit}</span>
            </>
          ) : (
            <span className="font-heading text-[clamp(1.8rem,4vw,2.4rem)] leading-none text-foreground">
              A medida
            </span>
          )}
        </div>

        {/* Description */}
        <p className="relative z-10 mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base">
          {option.description}
        </p>

        {/* Includes */}
        <ul className="relative z-10 mt-8 flex flex-col gap-3">
          {option.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.9rem] leading-snug text-foreground/80">
              <span className="mt-[7px] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="relative z-10 mt-auto pt-10">
          <a
            href="#contacto"
            data-cursor-text="RESERVAR"
            className={`inline-block w-full px-8 py-3.5 text-center font-mono text-[11px] uppercase tracking-[0.15em] transition-all duration-300 sm:px-10 ${
              option.highlighted
                ? "bg-accent text-background hover:bg-accent-light"
                : "border border-foreground/30 text-foreground hover:border-accent hover:bg-accent hover:text-background"
            }`}
          >
            {option.cta}
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Tarifas() {
  return (
    <section id="tarifas" className="px-5 py-20 sm:px-8 sm:py-28 md:px-10 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            ( Opciones )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.04}>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Solo 1 sesión por día · Disponibilidad limitada
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-4 max-w-4xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-6 sm:leading-[0.85]">
            Elige lo que Necesitas. Nada Más.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="mt-8 max-w-xl text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
            Sin packs inflados ni servicios que no vas a usar.
          </p>
        </ScrollReveal>

        {/* 3 Cards */}
        <div className="mt-14 grid gap-6 sm:mt-16 sm:gap-8 lg:mt-24 lg:grid-cols-3 lg:gap-6">
          {OPTIONS.map((option, index) => (
            <OptionCard key={option.name} option={option} index={index} />
          ))}
        </div>

        <p className="sr-only">
          Tarifas de Rooftop Content Studio: Solo Espacio desde 50€/hora. Espacio más Filmmaker desde 100€/hora. Producción Completa con precio a medida según proyecto. Sesiones mínimas de 2 horas.
        </p>

        {/* Bottom note */}
        <ScrollReveal delay={0.4}>
          <p className="mt-10 text-center font-mono text-[12px] text-muted sm:mt-14">
            Sesiones desde 2 horas · Reels, YouTube, podcast, VSLs, cursos · Presupuesto sin compromiso
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
