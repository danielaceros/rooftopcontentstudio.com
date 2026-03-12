"use client";

import { TARIFAS, ADDONS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { use3DTilt } from "@/hooks/use3DTilt";

function TarifaCard({ tarifa, index }: { tarifa: typeof TARIFAS[number]; index: number }) {
  const { ref, lightRef, onMouseMove, onMouseLeave } = use3DTilt(8);

  return (
    <ScrollReveal delay={index * 0.12}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`group relative flex h-full flex-col p-7 transition-all duration-500 sm:p-10 lg:p-14 ${
          tarifa.highlighted
            ? "border border-accent/30 bg-foreground/[0.03]"
            : "border border-border bg-transparent"
        }`}
        style={{ transition: "transform 0.6s ease, box-shadow 0.5s ease" }}
        data-cursor-text="VER"
      >
        {/* Light highlight overlay */}
        <div
          ref={lightRef}
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        />

        {tarifa.highlighted && (
          <div className="absolute right-10 top-10 font-mono text-[10px] uppercase tracking-[0.3em] text-accent lg:right-14 lg:top-14">
            Más Elegido
          </div>
        )}

        <p className="relative z-10 font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
          {tarifa.name}
        </p>

        <div className="relative z-10 mt-6 flex items-baseline gap-3">
          <span className="font-heading text-[clamp(4rem,8vw,5rem)] leading-none text-foreground">
            {tarifa.price}
          </span>
        </div>
        <p className="relative z-10 mt-1 font-mono text-[13px] text-accent">
          {tarifa.pricePerUnit}
        </p>

        <p className="relative z-10 mt-6 max-w-md text-base leading-relaxed text-muted sm:text-[1.05rem]">
          {tarifa.description}
        </p>

        {/* Incluye list */}
        <ul className="relative z-10 mt-8 flex flex-col gap-3">
          {tarifa.incluye.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-snug text-foreground/80">
              <span className="mt-[7px] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="relative z-10 mt-auto pt-14">
          <a
            href="#contacto"
            data-cursor-text="RESERVAR"
            className={`inline-block px-8 py-3 font-mono text-[11px] uppercase tracking-[0.15em] transition-all duration-300 sm:px-10 sm:py-4 ${
              tarifa.highlighted
                ? "bg-accent text-background hover:bg-accent-light"
                : "border border-foreground/30 text-foreground hover:border-accent hover:bg-accent hover:text-background"
            }`}
          >
            Reservar sesión
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
            ( Tarifas )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Invierte en tu Contenido.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="mt-8 max-w-xl text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
            Todo incluido. Edición básica gratis. Sin costes ocultos.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 md:gap-10 lg:mt-24 lg:gap-12">
          {TARIFAS.map((tarifa, index) => (
            <TarifaCard key={tarifa.name} tarifa={tarifa} index={index} />
          ))}
        </div>

        {/* Add-ons */}
        <ScrollReveal delay={0.18}>
          <div className="mt-16 border-t border-border pt-10 sm:mt-20">
            <h3 className="font-heading text-[clamp(1.6rem,4vw,2.5rem)] uppercase leading-[0.95] text-foreground">
              Potencia tu Contenido
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-8">
              {ADDONS.map((addon) => (
                <div
                  key={addon.name}
                  className="border border-border/50 p-6 transition-colors duration-300 hover:border-accent/30 sm:p-8"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    {addon.name}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {addon.description}
                  </p>
                  <p className="mt-4 font-heading text-[1.5rem] uppercase text-foreground">
                    {addon.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
