import Image from "next/image";

const LOGOS_SRC = "/optimized/logos-banner.png";

export default function ClientLogos() {
  return (
    <section className="hidden py-10 sm:py-12 lg:block">
      <p className="mb-7 text-center font-mono text-[11px] uppercase tracking-[0.35em] text-muted sm:mb-8 sm:text-[11px]">
        Empresas que han confiado en nosotros
      </p>

      <div className="flex justify-center">
        <div
          className="w-[85%] overflow-hidden sm:w-[60%] lg:w-[50%]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        >
          <div
            className="flex w-max items-center"
            style={{ animation: "marquee 35s linear infinite" }}
          >
            <Image
              src={LOGOS_SRC}
              alt="Clientes: Cámara de Comercio de Madrid, IFEMA, FIFA, Cinesa, Federación Española de Esgrima"
              width={1200}
              height={56}
              className="h-10 w-auto max-w-none opacity-35 transition-opacity duration-500 hover:opacity-100 sm:h-12 lg:h-14"
              draggable={false}
              loading="lazy"
            />
            <Image
              src={LOGOS_SRC}
              alt=""
              aria-hidden={true}
              width={1200}
              height={56}
              className="h-10 w-auto max-w-none opacity-35 transition-opacity duration-500 hover:opacity-100 sm:h-12 lg:h-14"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
