import { TARIFAS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Tarifas() {
  return (
    <section id="tarifas" className="px-8 py-40 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( Tarifas )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-heading text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.85] text-foreground">
            Elige tu Plan.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 max-w-xl text-[1.15rem] leading-[1.8] text-muted">
            Todo incluido. Sin sorpresas. Sin costes ocultos.
          </p>
        </ScrollReveal>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {TARIFAS.map((tarifa, index) => (
            <ScrollReveal key={tarifa.name} delay={index * 0.15}>
              <div
                className={`group relative flex h-full flex-col p-10 transition-colors duration-500 lg:p-14 ${
                  tarifa.highlighted
                    ? "bg-foreground/[0.05]"
                    : "bg-transparent"
                }`}
              >
                {tarifa.highlighted && (
                  <div className="absolute right-10 top-10 text-xs font-semibold uppercase tracking-[0.3em] text-amber lg:right-14 lg:top-14">
                    Popular
                  </div>
                )}

                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                  {tarifa.name}
                </p>

                <div className="mt-6">
                  <span className="font-heading text-[clamp(4rem,8vw,8rem)] leading-none text-foreground">
                    {tarifa.price}
                  </span>
                </div>
                <p className="mt-4 text-muted">{tarifa.duration}</p>

                <div className="mt-10 h-px w-full bg-foreground/10" />

                <ul className="mt-10 flex flex-1 flex-col gap-5">
                  {tarifa.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <span className="mt-1.5 h-px w-5 shrink-0 bg-amber" aria-hidden="true" />
                      <span className="text-[1.05rem] text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-14">
                  <a
                    href="#contacto"
                    className={`inline-block rounded-full px-10 py-4 font-heading text-lg uppercase tracking-[0.15em] transition-all ${
                      tarifa.highlighted
                        ? "bg-foreground text-background hover:bg-amber"
                        : "border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground hover:text-background"
                    }`}
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
