"use client";

import { useCallback, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Comparativa() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);
  const isTouchDevice = useRef(false);
  const dragging = useRef(false);

  useEffect(() => {
    isTouchDevice.current = window.matchMedia("(pointer: coarse)").matches;
  }, []);

  // Keep both videos playing and loosely synced
  useEffect(() => {
    const after = afterVideoRef.current;
    const before = beforeVideoRef.current;
    if (!after || !before) return;

    let rafId: number;
    let started = false;

    const ensurePlaying = () => {
      before.play().catch(() => {});
      after.play().catch(() => {});
    };

    const startSync = () => {
      if (started) return;
      started = true;
      before.currentTime = 0;
      after.currentTime = 0;
      ensurePlaying();

      const tick = () => {
        // Only correct if drift exceeds 0.15s — avoids constant seeking that freezes playback
        if (Math.abs(before.currentTime - after.currentTime) > 0.15) {
          after.currentTime = before.currentTime;
        }
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const onReady = () => {
      if (before.readyState >= 3 && after.readyState >= 3) startSync();
    };

    before.addEventListener("canplaythrough", onReady);
    after.addEventListener("canplaythrough", onReady);
    onReady();

    // Fallback: start after 2s even if canplaythrough never fires (mobile)
    const fallbackTimer = setTimeout(() => {
      if (!started) startSync();
    }, 2000);

    return () => {
      clearTimeout(fallbackTimer);
      cancelAnimationFrame(rafId);
      before.removeEventListener("canplaythrough", onReady);
      after.removeEventListener("canplaythrough", onReady);
    };
  }, []);

  // Direct DOM mutation — no React re-render, no CSS transition
  const applyPosition = useCallback((pct: number) => {
    if (clipRef.current) clipRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    if (lineRef.current) lineRef.current.style.left = `${pct}%`;
    if (handleRef.current) handleRef.current.style.left = `${pct}%`;
  }, []);

  const getPercent = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return 50;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  // Desktop: hover
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouchDevice.current) return;
      applyPosition(getPercent(e.clientX));
    },
    [applyPosition, getPercent]
  );

  const onMouseLeave = useCallback(() => {
    if (isTouchDevice.current) return;
    applyPosition(50);
  }, [applyPosition]);

  // Mobile: touch drag
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      dragging.current = true;
      applyPosition(getPercent(e.touches[0].clientX));
    },
    [applyPosition, getPercent]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!dragging.current) return;
      applyPosition(getPercent(e.touches[0].clientX));
    },
    [applyPosition, getPercent]
  );

  const onTouchEnd = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 md:px-10 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted">
            ( La Diferencia )
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="mt-6 max-w-5xl font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground sm:mt-8 sm:leading-[0.85]">
            Grabarte Tú vs. Grabarlo con Nosotros.
          </h2>
        </ScrollReveal>

        {/* Comparison slider */}
        <ScrollReveal delay={0.18}>
          <div
            ref={containerRef}
            className="relative mt-14 aspect-[9/16] max-w-[400px] mx-auto cursor-col-resize select-none overflow-hidden sm:mt-16 lg:mt-20"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* After (pro) — full layer behind */}
            <video
              ref={afterVideoRef}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/video/corr.webm" type="video/webm" />
              <source src="/video/corr.mp4" type="video/mp4" />
            </video>

            {/* Before (sin estudio) — clipped layer on top */}
            <div
              ref={clipRef}
              className="absolute inset-0"
              style={{ clipPath: "inset(0 50% 0 0)", willChange: "clip-path" }}
            >
              <video
                ref={beforeVideoRef}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/video/ncorr.webm" type="video/webm" />
                <source src="/video/ncorr.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute left-4 top-4 z-20 bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur-sm sm:left-5 sm:top-5">
              Sin estudio
            </div>
            <div className="pointer-events-none absolute right-4 top-4 z-20 bg-accent/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-background backdrop-blur-sm sm:right-5 sm:top-5">
              Con nosotros
            </div>

            {/* Divider line */}
            <div
              ref={lineRef}
              className="pointer-events-none absolute top-0 z-10 h-full w-px bg-foreground/80"
              style={{ left: "50%", willChange: "left" }}
            />

            {/* Handle */}
            <div
              ref={handleRef}
              className="pointer-events-none absolute top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/30 bg-background/80 backdrop-blur-sm sm:h-12 sm:w-12"
              style={{ left: "50%", willChange: "left" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="text-foreground"
              >
                <path
                  d="M5.5 4L1.5 9L5.5 14M12.5 4L16.5 9L12.5 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
