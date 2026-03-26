import ScrollReveal from "@/components/ui/ScrollReveal";

const CONTENT_TYPES = [
  { icon: "🎙️", title: "Podcast & Entrevistas", desc: "Sets preparados para grabación en solitario o con invitados." },
  { icon: "📱", title: "Reels / TikToks / Shorts", desc: "Contenido vertical optimizado para redes sociales." },
  { icon: "🎬", title: "Vídeo Corporativo & Marca Personal", desc: "Para LinkedIn, web, presentaciones y VSLs." },
  { icon: "🎓", title: "Cursos & Formación Online", desc: "Graba módulos completos en una sola sesión." },
];

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

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Qué puedes Grabar.
          </h2>
        </ScrollReveal>

        {/* Content types grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 md:grid-cols-4">
          {CONTENT_TYPES.map((item, i) => (
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
