import VideoBackground from "@/components/ui/VideoBackground";
import Marquee from "@/components/ui/Marquee";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero">
      <VideoBackground />

      {/* Headline anchored to bottom-left — OLMO style */}
      <div className="relative z-10 flex min-h-screen px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end">
          <h1 className="mb-3 font-body text-[11px] uppercase tracking-[0.2em] text-white/80 drop-shadow-md sm:text-sm sm:tracking-[0.25em] lg:text-base">
            Estudio de Grabación en Madrid
          </h1>
          <p className="max-w-[1100px] font-heading text-[clamp(2.8rem,13.2vw,10rem)] uppercase leading-[0.88] tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.7)] sm:leading-[0.85]">
            Graba Meses
            <br />
            de Contenido
            <br />
            en Una Mañana
          </p>
          <a
            href="#contacto"
            className="absolute bottom-6 right-0 inline-flex rounded-full border border-white/80 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white drop-shadow-sm backdrop-blur-[2px] transition-all hover:border-white hover:bg-white hover:text-background"
          >
            Pide Presupuesto
          </a>
        </div>
      </div>

      {/* Marquee at the very bottom */}
      <div className="absolute bottom-0 left-0 z-10 w-full">
        <Marquee />
      </div>
    </section>
  );
}
