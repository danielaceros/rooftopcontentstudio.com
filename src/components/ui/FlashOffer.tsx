"use client";

import { useEffect, useState } from "react";

// Deadline: 24 hours from first visit, persisted in localStorage per user
function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + 24 * 60 * 60 * 1000;
  const key = "rcs_flash_deadline";
  const stored = localStorage.getItem(key);
  if (stored) return parseInt(stored, 10);
  const deadline = Date.now() + 24 * 60 * 60 * 1000;
  localStorage.setItem(key, String(deadline));
  return deadline;
}

function formatUnit(n: number): string {
  return String(n).padStart(2, "0");
}

export default function FlashOffer() {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });
  const [expired, setExpired] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    if (sessionStorage.getItem("rcs_flash_dismissed")) {
      setDismissed(true);
    }
    setMounted(true);

    const deadline = getDeadline();

    const tick = () => {
      const diff = deadline - Date.now();
      if (diff <= 0) {
        setExpired(true);
        return;
      }
      const totalSec = Math.floor(diff / 1000);
      setTimeLeft({
        h: Math.floor(totalSec / 3600),
        m: Math.floor((totalSec % 3600) / 60),
        s: totalSec % 60,
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted || expired || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("rcs_flash_dismissed", "1");
  };

  return (
    <div className="relative z-[60] flex w-full items-center justify-center gap-3 bg-accent px-4 py-2 sm:gap-4 sm:px-8">
      {/* Offer text */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-background sm:text-[11px]">
          Primera sesión al 50%
        </span>

        {/* Countdown */}
        <div className="flex items-center gap-1 font-mono text-[11px] font-bold tracking-wider text-background sm:text-[12px]">
          <span className="inline-flex h-6 w-7 items-center justify-center bg-background/20 text-background sm:h-7 sm:w-8">
            {formatUnit(timeLeft.h)}
          </span>
          <span className="text-background/60">:</span>
          <span className="inline-flex h-6 w-7 items-center justify-center bg-background/20 text-background sm:h-7 sm:w-8">
            {formatUnit(timeLeft.m)}
          </span>
          <span className="text-background/60">:</span>
          <span className="inline-flex h-6 w-7 items-center justify-center bg-background/20 text-background sm:h-7 sm:w-8">
            {formatUnit(timeLeft.s)}
          </span>
        </div>

        <a
          href="#contacto"
          className="hidden font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-background underline underline-offset-2 transition-opacity hover:opacity-80 sm:inline sm:text-[11px]"
        >
          Reservar ahora
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
