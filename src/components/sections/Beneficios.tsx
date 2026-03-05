import { BENEFICIOS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DitherCard from "@/components/ui/DitherCard";

export default function Beneficios() {
  return (
    <section id="beneficios" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( Beneficios )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Por Qué Elegirnos.
          </h2>
        </ScrollReveal>

        {/* Alternating layout: large feature left + two stacked right, then flip */}
        <div className="mt-14 flex flex-col gap-12 sm:mt-16 sm:gap-16 lg:mt-24 lg:gap-20">
          {/* Row 1: big left + 2 stacked right */}
          <div className="grid gap-8 lg:grid-cols-5">
            <ScrollReveal delay={0.1} className="lg:col-span-3">
              <DitherCard className="flex h-full flex-col justify-end bg-foreground/[0.04] p-7 sm:p-10 lg:p-14">
                <span className="absolute right-6 top-5 font-heading text-[5.5rem] leading-none text-foreground/[0.04] sm:right-8 sm:top-6 sm:text-[8rem] lg:text-[12rem]">
                  01
                </span>
                <div className="relative">
                  <span className="mb-4 inline-block h-px w-12 bg-amber" />
                  <h3 className="font-heading text-[clamp(1.8rem,3vw,2.8rem)] uppercase tracking-wide text-foreground">
                    {BENEFICIOS[0].title}
                  </h3>
                  <p className="mt-4 max-w-md text-base sm:text-[1.05rem] leading-relaxed text-muted">
                    {BENEFICIOS[0].description}
                  </p>
                </div>
              </DitherCard>
            </ScrollReveal>

            <div className="flex flex-col gap-8 lg:col-span-2">
              {BENEFICIOS.slice(1, 3).map((b, i) => (
                <ScrollReveal key={b.title} delay={0.15 + i * 0.1} className="flex-1">
                  <DitherCard className="flex h-full flex-col justify-end border border-foreground/10 p-6 sm:p-8 transition-colors duration-500 hover:border-amber/20">
                    <span className="mb-6 font-heading text-5xl text-foreground/[0.06]">
                      0{i + 2}
                    </span>
                    <h3 className="font-heading text-[clamp(1.3rem,2vw,1.6rem)] uppercase tracking-wide text-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {b.description}
                    </p>
                  </DitherCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Row 2: 2 stacked left + big right (flipped) */}
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="flex flex-col gap-8 lg:col-span-2">
              {BENEFICIOS.slice(3, 5).map((b, i) => (
                <ScrollReveal key={b.title} delay={0.1 + i * 0.1} className="flex-1">
                  <DitherCard className="flex h-full flex-col justify-end border border-foreground/10 p-6 sm:p-8 transition-colors duration-500 hover:border-amber/20">
                    <span className="mb-6 font-heading text-5xl text-foreground/[0.06]">
                      0{i + 4}
                    </span>
                    <h3 className="font-heading text-[clamp(1.3rem,2vw,1.6rem)] uppercase tracking-wide text-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {b.description}
                    </p>
                  </DitherCard>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.15} className="lg:col-span-3">
              <DitherCard className="flex h-full flex-col justify-end bg-foreground/[0.04] p-7 sm:p-10 lg:p-14">
                <span className="absolute right-6 top-5 font-heading text-[5.5rem] leading-none text-foreground/[0.04] sm:right-8 sm:top-6 sm:text-[8rem] lg:text-[12rem]">
                  06
                </span>
                <div className="relative">
                  <span className="mb-4 inline-block h-px w-12 bg-amber" />
                  <h3 className="font-heading text-[clamp(1.8rem,3vw,2.8rem)] uppercase tracking-wide text-foreground">
                    {BENEFICIOS[5].title}
                  </h3>
                  <p className="mt-4 max-w-md text-base sm:text-[1.05rem] leading-relaxed text-muted">
                    {BENEFICIOS[5].description}
                  </p>
                </div>
              </DitherCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
