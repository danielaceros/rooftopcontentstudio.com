"use client";

import { MARQUEE_TEXT } from "@/lib/constants";

export default function Marquee() {
  return (
    <div className="overflow-hidden py-5">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-heading text-[clamp(0.9rem,1.5vw,1.2rem)] uppercase tracking-[0.5em] text-foreground/20"
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
