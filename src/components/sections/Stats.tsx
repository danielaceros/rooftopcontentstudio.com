"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 28, suffix: "+", label: "Marcas Grabadas" },
  { value: 500, suffix: "+", label: "Horas de Contenido" },
  { value: 100, suffix: "%", label: "Satisfacción" },
];

function ScrambleNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;

    const totalDuration = 1200; // total ms
    const scramblePhase = 800; // ms of pure scramble
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / totalDuration, 1);

      if (elapsed < scramblePhase) {
        // Scramble phase: random numbers
        const randomVal = Math.floor(Math.random() * target * 1.5);
        setDisplay(String(randomVal));
      } else {
        // Stabilize phase: ease toward real value
        const stabilizeProgress = (elapsed - scramblePhase) / (totalDuration - scramblePhase);
        const eased = 1 - Math.pow(1 - stabilizeProgress, 3);
        const value = Math.round(eased * target);
        setDisplay(String(value));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(String(target));
      }
    };

    requestAnimationFrame(animate);
  }, [active, target]);

  return (
    <span className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative border-t border-border">
      <div className="mx-auto grid max-w-5xl grid-cols-3 px-4 py-14 sm:py-20 lg:py-24">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="relative flex flex-col items-center text-center">
            {i > 0 && (
              <div className="absolute left-0 top-1/2 h-10 w-px -translate-y-1/2 bg-accent/30 sm:h-14" />
            )}
            <span className="font-heading text-[clamp(3rem,12vw,6rem)] leading-none text-accent">
              <ScrambleNumber target={stat.value} suffix={stat.suffix} active={active} />
            </span>
            <span className="mt-2 font-mono text-[7px] uppercase tracking-[0.35em] text-muted sm:mt-3 sm:text-[9px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
