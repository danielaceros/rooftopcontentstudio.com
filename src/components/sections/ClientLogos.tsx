const LOGOS_SRC =
  "https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/bannerlegit.png?alt=media&token=99a19a7d-ffa0-4eb1-80ff-5732df48ea7b";

export default function ClientLogos() {
  return (
    <section className="py-10 sm:py-12">
      <p className="mb-7 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-muted sm:mb-8 sm:text-[11px]">
        Algunas de las empresas que han confiado en nosotros
      </p>

      <div className="flex justify-center">
        <div
          className="w-[85%] sm:w-[60%] lg:w-[50%] overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        >
          <div className="animate-marquee flex w-max items-center">
            <img
              src={LOGOS_SRC}
              alt="Clientes: Cámara de Comercio de Madrid, IFEMA, FIFA, Cinesa, Federación Española de Esgrima"
              width={1200}
              height={56}
              className="h-10 w-auto max-w-none sm:h-12 lg:h-14"
              draggable={false}
            />
            <img
              src={LOGOS_SRC}
              alt=""
              aria-hidden="true"
              width={1200}
              height={56}
              className="h-10 w-auto max-w-none sm:h-12 lg:h-14"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
