import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 40,
}: ScrollRevealProps) {
  const shouldKeepArgs = Boolean(delay || y);
  return (
    <div className={className} data-reveal={shouldKeepArgs ? "static" : undefined}>
      {children}
    </div>
  );
}
