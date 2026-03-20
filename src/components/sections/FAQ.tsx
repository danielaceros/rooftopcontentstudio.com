import { FAQS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-14 sm:px-8 sm:py-28 md:px-10 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            ( FAQ )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Preguntas Frecuentes.
          </h2>
        </ScrollReveal>

        <div className="mt-14 sm:mt-20">
          <ScrollReveal delay={0.16}>
            <div className="border-t border-foreground/10">
              {FAQS.map((faq, i) => (
                <Accordion
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.24}>
          <div className="mt-12 text-center sm:mt-16">
            <p className="mb-6 text-base text-muted sm:text-[1.05rem]">
              ¿Listo para grabar? Presupuesto sin compromiso en menos de 1 hora.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-accent px-10 py-4 font-mono text-[11px] uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-accent-light"
            >
              Reserva tu sesión →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
