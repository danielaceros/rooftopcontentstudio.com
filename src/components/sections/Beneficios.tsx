import { BENEFICIOS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Beneficios() {
  return (
    <section id="beneficios" className="px-8 py-40 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( Beneficios )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-heading text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.85] text-foreground">
            Por Qué Elegirnos.
          </h2>
        </ScrollReveal>

        <div className="mt-24 grid gap-0 border-t border-foreground/10 md:grid-cols-2 lg:grid-cols-3">
          {BENEFICIOS.map((beneficio, index) => (
            <ScrollReveal key={beneficio.title} delay={index * 0.08}>
              <div className="group border-b border-foreground/10 p-10 transition-colors duration-500 hover:bg-foreground/[0.03] md:border-r md:border-foreground/10 lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r">
                <span className="font-heading text-6xl text-foreground/10">
                  0{index + 1}
                </span>
                <h3 className="mt-6 font-heading text-[clamp(1.4rem,2vw,1.8rem)] uppercase tracking-wide text-foreground">
                  {beneficio.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">
                  {beneficio.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
