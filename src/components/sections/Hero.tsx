import Image from "next/image";
import VideoBackground from "@/components/ui/VideoBackground";
import Marquee from "@/components/ui/Marquee";
import ContactFormEmbed from "./ContactFormEmbed";

const LOGOS_SRC = "/optimized/logos-banner.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <VideoBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-3 pt-22 text-center sm:px-8 sm:pt-36 lg:min-h-screen lg:flex-row lg:items-end lg:gap-12 lg:px-12 lg:pb-20 lg:pt-40 lg:text-left xl:gap-16">
        {/* Headline — left column */}
        <div className="flex-1 pb-2 sm:pb-10 lg:pb-12">
          <h1 className="mb-1 font-body text-[9px] uppercase tracking-[0.2em] text-white/80 drop-shadow-md sm:mb-3 sm:text-sm sm:tracking-[0.25em] lg:text-base">
            Estudio de Grabación en Madrid
          </h1>
          <p className="max-w-[1100px] font-heading text-[clamp(1.9rem,9.5vw,10rem)] uppercase leading-[0.86] tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.7)] sm:text-[clamp(2.8rem,13.2vw,10rem)] sm:leading-[0.85]">
            Graba Meses de Contenido
            <br />
            en Una Mañana
          </p>
        </div>

        {/* Form — full width on mobile, right column on desktop */}
        <div className="w-full pb-4 sm:pb-20 lg:w-[380px] lg:shrink-0 lg:pb-12 xl:w-[420px]">
          {/* Social proof logos — mobile only */}
          <div className="mb-1.5 lg:hidden">
            <p className="mb-1 text-center text-[7px] font-semibold uppercase tracking-[0.3em] text-white/50 sm:text-[10px]">
              Empresas que han confiado en nosotros
            </p>
            <div
              className="mx-auto w-[85%] overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              }}
            >
              <Image
                src={LOGOS_SRC}
                alt="Clientes: Cámara de Comercio de Madrid, IFEMA, FIFA, Cinesa"
                width={1200}
                height={56}
                className="mx-auto h-6 w-auto max-w-none brightness-0 invert opacity-60 sm:h-9"
                draggable={false}
                loading="eager"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/15 bg-black/60 backdrop-blur-md sm:rounded-2xl">
            <ContactFormEmbed />
          </div>
        </div>
      </div>

      {/* Marquee at the very bottom — absolute on desktop, static on mobile */}
      <div className="relative z-10 w-full lg:absolute lg:bottom-0 lg:left-0">
        <Marquee />
      </div>
    </section>
  );
}
