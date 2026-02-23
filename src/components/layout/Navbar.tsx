import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className="relative mx-auto flex items-center justify-between px-8 py-6 lg:px-12"
        aria-label="Navegación principal"
      >
        {/* Logo — bold, large, tight tracking like OLMO */}
        <a
          href="#"
          className="font-heading text-[clamp(1.8rem,3vw,2.5rem)] uppercase leading-none text-foreground"
        >
          Rooftop
        </a>

        {/* Desktop nav — uppercase links with underline + rounded CTA */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-amber transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full border border-foreground/60 px-6 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
          >
            Hablemos
          </a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
