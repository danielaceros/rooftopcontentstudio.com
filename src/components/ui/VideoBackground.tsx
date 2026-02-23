"use client";

import Image from "next/image";

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/optimized/studio-equipment.webp"
        alt="Estudio de grabación profesional con vistas al atardecer de Madrid"
        fill
        priority
        sizes="100vw"
        className="animate-ken-burns object-cover"
      />
      {/* Strong overlay for text contrast */}
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
      {/* Extra darkening on the left where text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
    </div>
  );
}
