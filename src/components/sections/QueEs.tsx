import Image from "next/image";
import { FORMATOS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function QueEs() {
  return (
    <section id="que-es" className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( Qué es )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Tu Estudio de Contenido en Madrid.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 sm:mt-16 sm:gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal delay={0.2}>
            <p className="text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
              Rooftop Content Studio es un espacio de grabación premium
              diseñado para creadores, marcas y profesionales que quieren
              producir contenido de calidad sin complicaciones.
            </p>
            <p className="mt-6 text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
              Reservas tu sesión, te presentas y nosotros nos encargamos de
              todo: equipo, iluminación, dirección y edición. Sales con semanas
              de contenido listo para publicar.
            </p>

            <div className="mt-12">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                Formatos que producimos
              </p>
              <ul className="flex flex-col gap-5">
                {FORMATOS.map((formato) => (
                  <li key={formato} className="flex items-center gap-5 text-base sm:text-[1.1rem] text-foreground">
                    <span className="h-px w-8 bg-amber" aria-hidden="true" />
                    {formato}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/optimized/studio-recording.webp"
                alt="Sesión de grabación con teleprompter y equipamiento profesional"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
