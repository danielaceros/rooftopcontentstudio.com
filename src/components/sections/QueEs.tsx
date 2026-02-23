import { FORMATOS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function QueEs() {
  return (
    <section id="que-es" className="px-8 py-40 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Big editorial intro */}
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( Qué es )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-8 max-w-5xl font-heading text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.85] text-foreground">
            Tu Estudio de Contenido en Madrid.
          </h2>
        </ScrollReveal>

        <div className="mt-20 grid gap-20 lg:grid-cols-2">
          <ScrollReveal delay={0.2}>
            <p className="text-[1.15rem] leading-[1.8] text-muted">
              Rooftop Content Studio es un espacio de grabación premium
              diseñado para creadores, marcas y profesionales que quieren
              producir contenido de calidad sin complicaciones.
            </p>
            <p className="mt-6 text-[1.15rem] leading-[1.8] text-muted">
              Reservas tu sesión, te presentas y nosotros nos encargamos de
              todo: equipo, iluminación, dirección y edición. Sales con semanas
              de contenido listo para publicar.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-muted">
              Formatos que producimos
            </p>
            <ul className="flex flex-col gap-5">
              {FORMATOS.map((formato) => (
                <li key={formato} className="flex items-center gap-5 text-[1.1rem] text-foreground">
                  <span className="h-px w-8 bg-amber" aria-hidden="true" />
                  {formato}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
