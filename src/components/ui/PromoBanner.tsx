"use client";

import { useEffect, useState } from "react";

const PROMO_END = new Date("2026-03-31T23:59:59").getTime();

function getTimeLeft() {
  const diff = PROMO_END - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
  };
}

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Don't render if promo expired or dismissed
  if (!timeLeft || dismissed) return null;

  return (
    <div className="relative z-50 flex items-center justify-center gap-3 bg-foreground px-4 py-2.5 sm:gap-5 sm:px-6">
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-background" />
      </span>

      {/* Copy */}
      <a
        href="#tarifas"
        className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background sm:text-[11px]">
          -25% Filmmaker
        </span>
        <span className="hidden text-background/30 sm:inline">·</span>
        <span className="font-heading text-sm text-background sm:text-base">
          <span className="line-through decoration-background/40 decoration-1">100€/h</span>
          {" "}
          <span>75€/h</span>
        </span>
        <span className="hidden text-background/30 sm:inline">·</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/70 sm:text-[11px]">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.mins}m
        </span>
      </a>

      {/* Close */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-background/50 transition-colors hover:text-background sm:right-4"
        aria-label="Cerrar oferta"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 1l12 12M13 1L1 13" />
        </svg>
      </button>
    </div>
  );
}
