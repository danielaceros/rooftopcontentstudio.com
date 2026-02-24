"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contacto" className="px-8 py-40 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( Contacto )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-8 max-w-5xl font-heading text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.85] text-foreground">
            Hablemos de tu Proyecto.
          </h2>
        </ScrollReveal>

        <div className="mt-20 grid gap-20 lg:grid-cols-2 lg:items-start">
          <ScrollReveal delay={0.2}>
            <p className="max-w-lg text-[1.15rem] leading-[1.8] text-muted">
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24
              horas con una propuesta personalizada.
            </p>
            <div className="mt-12 flex flex-col gap-5">
              <a
                href="mailto:hola@rooftopcontentstudio.es"
                className="flex items-center gap-5 text-[1.05rem] text-foreground transition-colors hover:text-amber"
              >
                <span className="h-px w-8 bg-amber" aria-hidden="true" />
                hola@rooftopcontentstudio.es
              </a>
              <a
                href="tel:+34711255496"
                className="flex items-center gap-5 text-[1.05rem] text-foreground transition-colors hover:text-amber"
              >
                <span className="h-px w-8 bg-amber" aria-hidden="true" />
                +34 711 25 54 96
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            {showForm ? (
              <iframe
                src="https://api.fitnesslaunch.es/widget/form/sxDYj1gBgfvDh9PI9Jte"
                title="Formulario de contacto Rooftop Content Studio"
                loading="lazy"
                className="h-[620px] w-full border-0"
              />
            ) : (
              <div className="flex min-h-[620px] flex-col items-center justify-center border border-foreground/15 bg-foreground/[0.02] px-8 text-center">
                <p className="max-w-md text-sm uppercase tracking-[0.18em] text-muted">
                  Carga el formulario cuando quieras continuar.
                </p>
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="mt-6 rounded-full border border-foreground/60 px-8 py-3 font-heading text-lg uppercase tracking-[0.12em] text-foreground transition-all hover:bg-foreground hover:text-background"
                >
                  Abrir formulario
                </button>
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
