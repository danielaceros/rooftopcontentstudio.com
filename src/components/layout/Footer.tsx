import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-8 pb-12 pt-24 lg:px-12">
      {/* Big footer logo */}
      <div className="mx-auto max-w-7xl">
        <div className="font-heading text-[clamp(4rem,12vw,14rem)] uppercase leading-[0.8] text-foreground/[0.06]">
          Rooftop
        </div>

        <div className="mt-16 grid gap-12 border-t border-foreground/10 pt-12 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
              Navegación
            </p>
            <nav className="mt-6 flex flex-col gap-3" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
              Contacto
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-foreground/60">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="transition-colors hover:text-foreground"
              >
                {CONTACT_INFO.email}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="transition-colors hover:text-foreground"
              >
                {CONTACT_INFO.phone}
              </a>
              <p>{CONTACT_INFO.address}</p>
            </div>
          </div>

          <div className="flex items-end md:justify-end">
            <p className="text-xs text-foreground/30">
              &copy; {currentYear} Rooftop Content Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
