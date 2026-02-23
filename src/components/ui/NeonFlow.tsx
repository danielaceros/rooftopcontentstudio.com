"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface NeonFlowProps {
  children?: ReactNode;
  className?: string;
}

const CDN =
  "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

const randomColors = (count: number) =>
  Array.from({ length: count }, () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
  );

export default function NeonFlow({ children, className = "" }: NeonFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create a <script type="module"> that imports from the CDN
    // and exposes the constructor on window, bypassing Turbopack
    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import TubesCursor from "${CDN}";
      window.__TubesCursor = TubesCursor;
      window.dispatchEvent(new CustomEvent("__tubesLoaded"));
    `;

    const canvas = canvasRef.current;

    const onLoaded = () => {
      const TubesCursor = (window as any).__TubesCursor;
      if (!TubesCursor || !canvas) return;

      try {
        const app = TubesCursor(canvas, {
          tubes: {
            colors: ["#f59e0b", "#d97706", "#92400e"],
            lights: {
              intensity: 200,
              colors: ["#f59e0b", "#fbbf24", "#ff008a", "#d97706"],
            },
          },
        });
        tubesRef.current = app;
      } catch (e) {
        console.error("TubesCursor init failed:", e);
      }
    };

    // If already loaded from a previous mount, init immediately
    if ((window as any).__TubesCursor) {
      onLoaded();
    } else {
      window.addEventListener("__tubesLoaded", onLoaded, { once: true });
      document.head.appendChild(script);
    }

    return () => {
      window.removeEventListener("__tubesLoaded", onLoaded);
    };
  }, []);

  const handleClick = () => {
    if (!tubesRef.current) return;
    tubesRef.current.tubes.setColors(randomColors(3));
    tubesRef.current.tubes.setLightsColors(randomColors(4));
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ touchAction: "none" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Top fade — smooth transition from the section above */}
      <div className="absolute inset-x-0 top-0 z-[1] h-72 bg-gradient-to-b from-background via-background/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
