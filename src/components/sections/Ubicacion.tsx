import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="px-5 py-14 sm:px-8 sm:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1!2d-3.6945!3d40.4085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42263baf5a4e0b%3A0x0!2sCalle%20Ronda%20de%20Atocha%2C%2016%2C%20Madrid!5e0!3m2!1ses!2ses!4v1709000000000"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Rooftop Content Studio en Google Maps"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
