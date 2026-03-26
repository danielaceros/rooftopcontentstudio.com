import ScrollReveal from "@/components/ui/ScrollReveal";

export default function QueEs() {
  return (
    <section
      id="estudio"
      className="px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-12 lg:py-40 xl:px-16 2xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            ( El Estudio )
          </p>
        </ScrollReveal>

        {/* Citable paragraph for AI search engines */}
        <ScrollReveal delay={0.08}>
          <p className="mt-8 max-w-3xl text-base leading-[1.8] text-muted sm:text-[1.05rem] sm:leading-[1.85]">
            Rooftop Content Studio es un estudio de producción de contenido ubicado en un ático en el centro de Madrid (Ronda de Atocha, 16, a 5 minutos del Metro Atocha Renfe). Ofrece sesiones de grabación para podcast, reels de Instagram y TikTok, vídeos de YouTube, cursos online y contenido corporativo. El estudio incluye terraza con vistas al skyline de Madrid, iluminación profesional y equipo técnico completo. Presupuesto personalizado en menos de 1 hora, sin compromiso. El servicio de producción completa incluye grabación, edición, subtítulos y formato por plataforma con entrega en 24-48 horas. Entre sus clientes se encuentran FIFA, IFEMA, Cinesa y la Cámara de Comercio de Madrid. Solo se realiza 1 sesión por día.
          </p>
        </ScrollReveal>

        {/* Key stats — large numbers */}
        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-foreground/[0.08] pt-10 sm:mt-16 sm:pt-12 md:grid-cols-4 md:gap-8">
          <ScrollReveal delay={0.12}>
            <div>
              <p className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] uppercase leading-none text-foreground">
                28+
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Proyectos
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <div>
              <p className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] uppercase leading-none text-foreground">
                500+
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Horas Producidas
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <p className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] uppercase leading-none text-foreground">
                24-48h
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Entrega con edición
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div>
              <p className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] uppercase leading-none text-foreground">
                1 sesión/día
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Disponibilidad limitada
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
