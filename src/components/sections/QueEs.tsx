import ScrollReveal from "@/components/ui/ScrollReveal";

export default function QueEs() {
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
            Un Estudio de Contenido en un Ático en Madrid.
          </h2>
        </ScrollReveal>

        <h3 className="mt-10 font-heading text-[clamp(1.6rem,5vw,3rem)] uppercase leading-[0.95] text-foreground sm:mt-12">
          ¿Qué es Rooftop Content Studio?
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          <div>
            <p className="text-[0.935rem] leading-[1.8] text-muted sm:text-[1rem]">
              Rooftop Content Studio es un estudio de contenido en Madrid pensado para founders, marcas personales y equipos de marketing que necesitan contenido recurrente con look auténtico y calidad de producción. Está ubicado en un ático real en Ronda de Atocha, 16, centro de Madrid, a 5 minutos de Metro Atocha Renfe.
            </p>
            <p className="mt-4 text-[0.935rem] leading-[1.8] text-muted sm:text-[1rem]">
              El espacio tiene terraza con vistas al skyline de Madrid, luz natural directa y un set diseñado para que el contenido parezca orgánico. Sin cicloramas blancos ni focos que intimiden. Detrás hay un equipo profesional con cámaras, iluminación y sonido de estudio.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-[clamp(1.1rem,2vw,1.4rem)] uppercase text-foreground">
              ¿Qué se puede grabar?
            </h4>
            <p className="mt-3 text-[0.935rem] leading-[1.8] text-muted sm:text-[1rem]">
              Podcast, reels para Instagram y TikTok, vídeos para YouTube, cursos online y contenido corporativo. La mayoría de clientes graban varios formatos en la misma sesión para aprovechar el día.
            </p>
            <h4 className="mt-6 font-heading text-[clamp(1.1rem,2vw,1.4rem)] uppercase text-foreground">
              ¿Cuánto cuesta?
            </h4>
            <p className="mt-3 text-[0.935rem] leading-[1.8] text-muted sm:text-[1rem]">
              Solo el espacio desde 50€/hora. Espacio con filmmaker desde 75€/hora. Producción completa con edición y entrega en 24-48h a medida. FIFA, IFEMA, Cinesa y Cámara de Comercio de Madrid ya han grabado aquí.
            </p>
          </div>
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
              75€/h
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
      </div>
    </section>
  );
}
