import { FAQS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Accordion from "@/components/ui/Accordion";

export default function FAQ() {
  return (
    <section id="faq" className="px-8 py-40 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( FAQ )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-8 font-heading text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.85] text-foreground">
            Preguntas Frecuentes.
          </h2>
        </ScrollReveal>

        <div className="mt-20">
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
