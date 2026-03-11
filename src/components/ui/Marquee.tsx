"use client";

import { MARQUEE_TEXT } from "@/lib/constants";

export default function Marquee() {
  return (
    <div className="overflow-hidden border-t border-border/50 py-4 sm:py-5">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <span
            key={i}
            className="font-mono text-[clamp(0.6rem,1.4vw,0.85rem)] uppercase tracking-[0.4em] text-foreground/15 sm:tracking-[0.5em]"
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
