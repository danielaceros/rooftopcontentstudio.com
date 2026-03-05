import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactFormEmbed from "./ContactFormEmbed";

export default function CTA() {
  const currentMonth = new Date().toLocaleString("es-ES", { month: "long" });
  const month = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);

  return (
    <section id="contacto" className="px-5 pb-12 pt-24 sm:px-8 sm:pb-14 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( Contacto )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Plazas Limitadas en {month}.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 sm:mt-16 sm:gap-16 lg:mt-20 lg:grid-cols-12 lg:items-start">
          <ScrollReveal delay={0.2} className="lg:col-span-5 lg:pt-4">
            <p className="max-w-lg text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24
              horas con una propuesta personalizada.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-5">
              <a
                href="mailto:hola@rooftopcontentstudio.es"
                className="flex items-center gap-4 break-all text-base text-foreground transition-colors hover:text-amber sm:gap-5 sm:text-[1.05rem]"
              >
                <span className="h-px w-8 bg-amber" aria-hidden="true" />
                hola@rooftopcontentstudio.es
              </a>
              <a
                href="tel:+34711255496"
                className="flex items-center gap-4 text-base text-foreground transition-colors hover:text-amber sm:gap-5 sm:text-[1.05rem]"
              >
                <span className="h-px w-8 bg-amber" aria-hidden="true" />
                +34 711 25 54 96
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="lg:col-span-7">
            <ContactFormEmbed />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
