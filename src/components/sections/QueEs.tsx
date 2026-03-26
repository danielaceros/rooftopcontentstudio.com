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
            Rooftop Content Studio es un estudio de producción de contenido ubicado en un ático en el centro de Madrid (Ronda de Atocha, 16, a 5 minutos del Metro Atocha Renfe). Ofrece sesiones de grabación para podcast, reels de Instagram y TikTok, vídeos de YouTube, cursos online y contenido corporativo. El estudio incluye terraza con vistas al skyline de Madrid, iluminación profesional y equipo técnico completo. El servicio de producción completa incluye grabación, edición, subtítulos y formato por plataforma con entrega en 24-48 horas. Entre sus clientes se encuentran FIFA, IFEMA, Cinesa y la Cámara de Comercio de Madrid.
          </p>
        </ScrollReveal>

        {/* Content types grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-foreground/[0.08] pt-10 sm:mt-16 sm:gap-6 sm:pt-12 md:grid-cols-4">
          {[
            { icon: "🎙️", title: "Podcast & Entrevistas", desc: "Conversaciones con sonido profesional y múltiples cámaras." },
            { icon: "📱", title: "Reels / TikToks / Shorts", desc: "Contenido vertical optimizado para redes sociales." },
            { icon: "🎬", title: "Vídeo Corporativo & Marca Personal", desc: "Piezas de marca con look auténtico y producción real." },
            { icon: "🎓", title: "Cursos & Formación Online", desc: "Módulos grabados con teleprompter y calidad de estudio." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={0.12 + i * 0.06}>
              <div className="flex flex-col gap-3 rounded-sm border border-foreground/[0.06] bg-foreground/[0.02] p-5 sm:p-6">
                <span className="text-3xl sm:text-4xl">{item.icon}</span>
                <h3 className="font-heading text-[1rem] uppercase tracking-wide text-foreground sm:text-[1.1rem]">
                  {item.title}
                </h3>
                <p className="text-[0.85rem] leading-relaxed text-muted sm:text-[0.9rem]">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
