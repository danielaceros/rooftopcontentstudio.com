import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";

export default function CTA() {
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
                href="mailto:hola@therooftopcontentstudio.com"
                className="flex items-center gap-5 text-[1.05rem] text-foreground transition-colors hover:text-amber"
              >
                <span className="h-px w-8 bg-amber" aria-hidden="true" />
                hola@therooftopcontentstudio.com
              </a>
              <a
                href="tel:+34600000000"
                className="flex items-center gap-5 text-[1.05rem] text-foreground transition-colors hover:text-amber"
              >
                <span className="h-px w-8 bg-amber" aria-hidden="true" />
                +34 600 000 000
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
