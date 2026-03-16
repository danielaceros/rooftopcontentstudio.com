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
            No es un Plató. Es un Ático en Madrid.
          </h2>
        </ScrollReveal>

        <h3 className="mt-10 font-heading text-[clamp(1.6rem,5vw,3rem)] uppercase leading-[0.95] text-foreground sm:mt-12">
          ¿Qué es Rooftop Content Studio?
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          <p className="text-[0.935rem] leading-[1.8] text-muted sm:text-[1rem]">
            Rooftop Content Studio es un espacio de grabación profesional ubicado en un ático real en la Calle Ronda de Atocha, 16, en el centro de Madrid. A diferencia de los platós convencionales con ciclorama blanco y focos artificiales, el espacio cuenta con un salón con sofás, una terraza con vistas panorámicas al skyline de Madrid y luz natural directa. Está diseñado para que el contenido grabado parezca orgánico — no producido en un estudio — mientras mantiene calidad profesional con cámaras, iluminación y sonido de estudio.
          </p>
          <p className="text-[0.935rem] leading-[1.8] text-muted sm:text-[1rem]">
            Fundado por Daniel Acero, filmmaker con más de 6 años de experiencia y clientes como FIFA, IFEMA y Cinesa, ofrece tres modalidades: alquiler del espacio (desde 50€/h), espacio con filmmaker profesional (desde 100€/h), o producción completa con edición y entrega en 24-48 horas. Solo se realiza 1 sesión por día.
          </p>
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
              100€/h
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
