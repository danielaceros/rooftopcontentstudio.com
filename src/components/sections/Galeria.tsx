import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Galeria() {
  return (
    <section id="galeria" className="py-40">
      <div className="px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
              ( Galería )
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-8 max-w-5xl font-heading text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.85] text-foreground">
              Nuestro Estudio.
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* B-roll video */}
      <div className="mt-20 px-4 lg:px-8">
        <ScrollReveal delay={0.2}>
          <div className="relative aspect-[21/9] overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/optimized/BROLL.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/10 transition-colors duration-500 hover:bg-transparent" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
