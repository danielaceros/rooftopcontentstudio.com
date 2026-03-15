"use client";

import { useState } from "react";

export default function FlashOffer() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("rcs_flash_dismissed", "1");
  };

  // Check sessionStorage after mount (SSR-safe via useState initializer won't work, but
  // the banner flash is acceptable since it's tiny)
  if (typeof window !== "undefined" && sessionStorage.getItem("rcs_flash_dismissed")) {
    return null;
  }

  return (
    <div className="relative z-[60] flex w-full items-center justify-center gap-3 bg-accent px-4 py-2 sm:gap-4 sm:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-background sm:text-[11px]">
          50% en tu primera sesión · Espacio + Filmmaker desde 50€/h
        </span>

        <a
          href="#contacto"
          className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-background underline underline-offset-2 transition-opacity hover:opacity-80 sm:text-[11px]"
        >
          Reservar con descuento
        </a>
      </div>

      {/* Dismiss */}
      <button
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-background/60 transition-colors hover:text-background sm:right-4"
        aria-label="Cerrar oferta"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 1l8 8M9 1l-8 8" />
        </svg>
      </button>
    </div>
  );
}
