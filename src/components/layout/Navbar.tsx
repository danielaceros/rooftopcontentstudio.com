import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Dark gradient backdrop for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-transparent" />
      <nav
        className="relative mx-auto flex items-center justify-between px-8 py-0 lg:px-12"
        aria-label="Navegación principal"
      >
        <a href="#" className="relative -mt-5 z-10 h-32 w-32 overflow-hidden lg:h-36 lg:w-36">
          <Image
            src="/optimized/logo.webp"
            alt="Rooftop Content Studio"
            width={400}
            height={400}
            className="h-36 w-36 max-w-none object-cover object-top lg:h-40 lg:w-40"
            priority
          />
        </a>

        <div className="hidden items-center gap-10 md:flex">
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

        <MobileMenu />
      </nav>
    </header>
  );
}
