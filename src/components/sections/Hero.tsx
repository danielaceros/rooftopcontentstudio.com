import VideoBackground from "@/components/ui/VideoBackground";
import Marquee from "@/components/ui/Marquee";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden" aria-label="Hero">
      <VideoBackground />

      {/* Headline anchored to bottom-left — OLMO style */}
      <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-24 lg:px-12 lg:pb-28">
        <h1 className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-white/80 drop-shadow-md lg:text-base">
          Estudio de Grabación en Madrid
        </h1>
        <p className="max-w-[90vw] font-heading text-[clamp(3.5rem,11vw,12rem)] uppercase leading-[0.85] tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.7)]">
          Graba Meses
          <br />
          de Contenido
          <br />
          en Una Mañana
        </p>
      </div>

      {/* Marquee at the very bottom */}
      <div className="absolute bottom-0 left-0 z-10 w-full">
        <Marquee />
      </div>
    </section>
  );
}
