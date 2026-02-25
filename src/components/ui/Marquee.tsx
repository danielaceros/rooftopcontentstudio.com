"use client";

import { MARQUEE_TEXT } from "@/lib/constants";

export default function Marquee() {
  return (
    <div className="overflow-hidden py-4 sm:py-5">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-heading text-[clamp(0.78rem,1.8vw,1.2rem)] uppercase tracking-[0.32em] text-foreground/20 sm:tracking-[0.5em]"
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
