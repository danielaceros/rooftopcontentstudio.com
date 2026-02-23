import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="px-8 py-40 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( Ubicación )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-8 max-w-5xl font-heading text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.85] text-foreground">
            En el Corazón de Madrid.
          </h2>
        </ScrollReveal>

        <div className="mt-20 grid gap-20 lg:grid-cols-2 lg:items-start">
          <ScrollReveal delay={0.2}>
            <p className="max-w-lg text-[1.15rem] leading-[1.8] text-muted">
              Nuestro estudio rooftop está situado en el centro de Madrid, con
              fácil acceso en transporte público y parking cercano. Un espacio
              privado con vistas panorámicas a la ciudad.
            </p>
            <div className="mt-12 flex flex-col gap-6">
              {[
                "Centro de Madrid, España",
                "Metro a menos de 5 minutos",
                "Parking público a 2 minutos",
              ].map((item) => (
                <div key={item} className="flex items-center gap-5 text-[1.05rem] text-foreground">
                  <span className="h-px w-8 bg-amber" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="https://maps.google.com/?q=Madrid,Spain"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/3] overflow-hidden"
              aria-label="Ver ubicación en Google Maps"
            >
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-background/20 transition-colors duration-500 group-hover:bg-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="rounded-full border border-foreground/50 bg-background/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-colors group-hover:bg-foreground group-hover:text-background">
                  Ver en Google Maps
                </span>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
