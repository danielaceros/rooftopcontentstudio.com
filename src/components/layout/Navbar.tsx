"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed z-50 w-full transition-all duration-500"
      style={{
        top: "var(--promo-banner-h, 0px)",
        backgroundColor: scrolled ? "rgba(8, 8, 8, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Accent line at top */}
      <div
        className="h-px w-full bg-accent transition-opacity duration-500"
        style={{ opacity: scrolled ? 0.4 : 0 }}
      />

      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-8 sm:py-3 lg:px-12"
        aria-label="Navegación principal"
      >
        <a href="#" className="relative z-10">
          <Image
            src="/optimized/logo.webp"
            alt="Rooftop Content Studio"
            width={128}
            height={128}
            className="h-14 w-14 object-cover object-top sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            priority
            fetchPriority="high"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/60 transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contacto"
            className="border border-accent/40 px-6 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-background"
          >
            Reservar Sesión
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contacto"
            className="border border-accent/40 px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-background"
          >
            Reservar Sesión
          </a>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
