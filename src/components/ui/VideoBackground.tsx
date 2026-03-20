"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/IMG_7394_1.webm";

type NavigatorConnection = {
  saveData?: boolean;
  effectiveType?: string;
};

export default function VideoBackground() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: NavigatorConnection })
      .connection;
    const isSlow =
      conn?.saveData ||
      ["slow-2g", "2g", "3g"].includes(conn?.effectiveType ?? "");
    // Mobile: only poster, no video
    const isMobile = window.innerWidth < 768;
    if (!isSlow && !isMobile) setShouldLoad(true);
    // On mobile, load video only on fast connections (preload metadata)
    if (!isSlow && isMobile) setShouldLoad(true);
  }, []);

  // Parallax multicapa — desktop only
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!video) return;

    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Layer 1: video moves slow (0.5x)
        video.style.transform = `translateY(${scrollY * 0.5}px)`;
        // Layer 2: overlay darkens with scroll
        if (overlay) {
          const opacity = Math.min(0.5, 0.15 + scrollY / 1200);
          overlay.style.opacity = String(opacity);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {/* Poster fallback — always visible behind video */}
      <img
        src="/optimized/hero-poster-v2.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-contain object-center lg:h-[130%] lg:object-cover lg:object-center"
        fetchPriority="high"
      />
      <video
        ref={videoRef}
        src={shouldLoad ? VIDEO_SRC : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/optimized/hero-poster-v2.webp"
        onCanPlay={() => setLoaded(true)}
        className="absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-1000 will-change-transform lg:h-[130%] lg:object-cover lg:object-center"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <track kind="captions" />
      </video>
      {/* Layer 2: dynamic overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-background"
        style={{ opacity: 0.15 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/20 to-transparent" />
    </div>
  );
}
