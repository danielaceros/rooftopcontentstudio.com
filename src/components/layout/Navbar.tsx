import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Dark gradient backdrop for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-transparent" />
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
            className="h-20 w-20 object-cover object-top sm:h-28 sm:w-28 lg:h-32 lg:w-32"
            priority
            fetchPriority="high"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold uppercase tracking-[0.15em] text-white drop-shadow-sm transition-colors hover:text-amber"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-amber transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full border border-white/80 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-white drop-shadow-sm transition-all hover:border-white hover:bg-white hover:text-background"
          >
            Hablemos
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contacto"
            className="rounded-full border border-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white drop-shadow-sm transition-all hover:border-white hover:bg-white hover:text-background"
          >
            Hablemos
          </a>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
