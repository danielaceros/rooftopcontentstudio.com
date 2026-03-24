import ScrollReveal from "@/components/ui/ScrollReveal";

export default function QueEs() {
  return (
    <section
      id="estudio"
      className="px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-12 lg:py-40 xl:px-16 2xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            ( El Estudio )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Un Estudio de Contenido en un Ático en Madrid.
          </h2>
        </ScrollReveal>

        {/* Key stats — large numbers */}
        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-foreground/[0.08] pt-10 sm:mt-16 sm:pt-12 md:grid-cols-4 md:gap-8">
          <ScrollReveal delay={0.12}>
            <div>
              <p className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] uppercase leading-none text-foreground">
                50€/h
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Solo espacio
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <div>
              <p className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] uppercase leading-none text-foreground">
                75€/h
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Espacio + Filmmaker
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <p className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] uppercase leading-none text-foreground">
                24-48h
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Entrega con edición
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div>
              <p className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] uppercase leading-none text-foreground">
                1 sesión/día
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Disponibilidad limitada
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
