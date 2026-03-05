import { FAQS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-14 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( FAQ )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Preguntas Frecuentes.
          </h2>
        </ScrollReveal>

        <div className="mt-14 sm:mt-20">
          <ScrollReveal delay={0.2}>
            <div className="border-t border-foreground/10">
              {FAQS.map((faq) => (
                <Accordion
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
