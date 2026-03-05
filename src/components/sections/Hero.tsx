import VideoBackground from "@/components/ui/VideoBackground";
import Marquee from "@/components/ui/Marquee";

export default function Hero() {
  return (
    <section className="relative min-h-[auto] overflow-hidden lg:min-h-screen" aria-label="Hero">
      <VideoBackground />

      {/* Headline anchored to bottom-left — OLMO style */}
      <div className="relative z-10 flex min-h-[92vw] px-5 pb-12 sm:min-h-[70vw] sm:px-8 sm:pb-20 lg:min-h-screen lg:px-12 lg:pb-28">
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
          <div className="mt-6 sm:mt-8 lg:absolute lg:bottom-6 lg:right-0 lg:mt-0">
            <a
              href="#contacto"
              className="inline-flex rounded-full border border-white/80 bg-white/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white drop-shadow-sm backdrop-blur-[2px] transition-all hover:border-white hover:bg-white hover:text-background sm:px-8 sm:py-3 sm:text-sm"
            >
              Pide Presupuesto
            </a>
          </div>
        </div>
      </div>

      {/* Marquee at the very bottom */}
      <div className="absolute bottom-0 left-0 z-10 w-full">
        <Marquee />
      </div>
    </section>
  );
}
