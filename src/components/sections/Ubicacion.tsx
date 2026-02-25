import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
            ( Ubicación )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            En el Corazón de Madrid.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 sm:mt-16 sm:gap-16 lg:mt-20 lg:grid-cols-2 lg:items-start lg:gap-20">
          <ScrollReveal delay={0.2}>
            <p className="max-w-lg text-base leading-[1.75] text-muted sm:text-[1.15rem] sm:leading-[1.8]">
              Nuestro estudio rooftop está situado en el centro de Madrid, con
              fácil acceso en transporte público y parking cercano. Un espacio
              privado con vistas panorámicas a la ciudad.
            </p>
            <div className="mt-12 flex flex-col gap-6">
              {[
                "Calle Ronda de Atocha, 16, Madrid",
                "Metro a menos de 5 minutos",
                "Parking público a 2 minutos",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-4 text-foreground sm:gap-5 ${
                    index === 0 ? "text-[1.05rem] font-semibold sm:text-[1.2rem]" : "text-base sm:text-[1.05rem]"
                  }`}
                >
                  <span className="h-px w-8 bg-amber" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="https://maps.google.com/?q=Calle+Ronda+de+Atocha,+16,+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/3] overflow-hidden"
              aria-label="Ver ubicación en Google Maps"
            >
              <Image
                src="/optimized/studio-space.webp"
                alt="Interior del estudio Rooftop Content Studio en Madrid"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 transition-colors duration-500 group-hover:bg-transparent" />
              <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8">
                <span className="rounded-full border border-foreground/50 bg-background/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur-sm transition-colors group-hover:bg-foreground group-hover:text-background sm:px-6 sm:py-3 sm:text-xs sm:tracking-[0.2em]">
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
