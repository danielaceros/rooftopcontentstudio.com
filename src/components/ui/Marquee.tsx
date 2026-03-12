const MARQUEE_COPY =
  "El único estudio rooftop en el centro de Madrid · Graba un mes de contenido en una mañana · Desde 50€/h · FIFA, IFEMA y Cinesa ya han grabado aquí · Presupuesto en menos de 1 hora · Sesiones desde 2 horas · ";

export default function Marquee() {
  return (
    <div className="overflow-hidden border-t border-border/50 py-4 sm:py-5">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <span
            key={i}
            className="font-mono text-[clamp(0.7rem,1.4vw,0.85rem)] uppercase tracking-[0.3em] text-foreground/15 sm:tracking-[0.5em]"
          >
            {MARQUEE_COPY}
          </span>
        ))}
      </div>
    </div>
  );
}
