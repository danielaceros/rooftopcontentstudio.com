import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 bg-[#0D0D0D] sm:scroll-mt-32"
    >
      <div className="px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-12 lg:py-40 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
            {/* Left column */}
            <div className="md:sticky md:top-32">
              <ScrollReveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-accent">
                  ( Contacto )
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <h2 className="mt-6 font-heading text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.85] text-foreground sm:mt-8">
                  Reserva tu Sesión.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <p className="mt-6 max-w-[400px] text-base leading-[1.75] text-muted sm:text-[1.05rem] sm:leading-[1.8]">
                  Solo 1 sesión al día. Cuéntanos qué necesitas y te montamos todo esta semana. Presupuesto en menos de 1 hora.
                </p>
              </ScrollReveal>

              {/* Contact details */}
              <ScrollReveal delay={0.24}>
                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4">
                  {[
                    { text: "hola@rooftopcontentstudio.es", href: "mailto:hola@rooftopcontentstudio.es" },
                    { text: "+34 711 25 54 96", href: "tel:+34711255496" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 sm:gap-4">
                      <span className="h-px w-4 shrink-0 bg-accent sm:w-5" aria-hidden="true" />
                      <a
                        href={item.href}
                        className="font-mono text-[12px] text-muted transition-colors duration-300 hover:text-foreground sm:font-sans sm:text-[14px]"
                      >
                        {item.text}
                      </a>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right column — form */}
            <ScrollReveal delay={0.12}>
              <div className="relative">
                {/* Badge */}
                <div className="absolute -top-3 right-4 z-20 bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-background sm:right-6">
                  Presupuesto en 1h
                </div>

                {/* GHL Form embed — replace placeholder with actual GHL iframe/script */}
                <div
                  id="ghl-form-placeholder"
                  className="flex min-h-[500px] items-center justify-center rounded-[4px] border border-dashed border-foreground/20 bg-[#0A0A0A] p-6 sm:p-8 lg:p-10"
                >
                  <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-muted/50">
                    [EMBED FORMULARIO GHL]
                  </p>
                </div>
                <p className="mt-3 text-center font-mono text-[11px] text-muted/60">
                  Sin compromiso. Respuesta en menos de 1 hora.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Location bar — integrated below */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 flex flex-col items-start gap-4 border-t border-foreground/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="h-px w-5 shrink-0 bg-accent" aria-hidden="true" />
                <span className="font-mono text-[12px] text-muted">
                  Calle Ronda de Atocha, 16, Madrid — Metro Atocha Renfe (5 min)
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Calle+Ronda+de+Atocha+16+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent transition-colors duration-300 hover:text-accent-light"
              >
                Ver en Google Maps →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
