"use client";

import { useEffect, useRef, useCallback } from "react";

export function use3DTilt(maxDeg = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const isDesktop = useRef(false);

  useEffect(() => {
    isDesktop.current = window.matchMedia("(pointer: fine) and (min-width: 768px)").matches;
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDesktop.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(1000px) rotateY(${x * maxDeg * 2}deg) rotateX(${-y * maxDeg * 2}deg)`;
    if (lightRef.current) {
      lightRef.current.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(201,168,76,0.10) 0%, transparent 60%)`;
    }
  }, [maxDeg]);

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    if (lightRef.current) {
      lightRef.current.style.background = "transparent";
    }
  }, []);

  return { ref, lightRef, onMouseMove, onMouseLeave };
}
