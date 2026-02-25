import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 sm:py-28 lg:py-32 xl:py-36">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
              ( Galería )
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
              Nuestro Estudio.
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* B-roll video */}
      <div className="mt-14 px-4 sm:mt-16 lg:mt-20 lg:px-8">
        <ScrollReveal delay={0.2}>
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[21/9]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/optimized/studio-space.webp"
              className="h-full w-full object-cover"
            >
              <source src="/optimized/banner.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/10 transition-colors duration-500 hover:bg-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
