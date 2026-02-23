import { PROCESO } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Proceso() {
  return (
    <section id="proceso" className="px-8 py-40 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( Proceso )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-heading text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.85] text-foreground">
            Cómo Trabajamos.
          </h2>
        </ScrollReveal>

        <div className="mt-24 flex flex-col">
          {PROCESO.map((paso, index) => (
            <ScrollReveal key={paso.step} delay={index * 0.1}>
              <div className="group grid border-t border-foreground/10 py-12 md:grid-cols-12 md:gap-8 md:py-16">
                <div className="md:col-span-1">
                  <span className="font-heading text-[clamp(3rem,5vw,5rem)] leading-none text-foreground/10 transition-colors duration-500 group-hover:text-amber/40">
                    {String(paso.step).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 md:col-span-4 md:mt-2">
                  <h3 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] uppercase tracking-wide text-foreground">
                    {paso.title}
                  </h3>
                </div>
                <div className="mt-4 md:col-span-6 md:col-start-7 md:mt-2">
                  <p className="max-w-lg text-[1.05rem] leading-[1.8] text-muted">
                    {paso.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {/* Bottom border */}
          <div className="border-t border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
