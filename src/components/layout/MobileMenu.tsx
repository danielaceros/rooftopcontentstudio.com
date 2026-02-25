"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-10 w-10 items-center justify-center"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md">
          <nav className="flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-4xl uppercase tracking-[0.06em] text-foreground transition-colors hover:text-amber sm:text-5xl"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full border border-foreground/60 px-8 py-3 font-heading text-xl uppercase tracking-[0.08em] text-foreground transition-all hover:bg-foreground hover:text-background sm:mt-6 sm:px-10 sm:py-4 sm:text-2xl"
            >
              Hablemos
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
