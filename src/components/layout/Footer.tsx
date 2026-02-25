import Image from "next/image";
import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";
import NeonFlow from "@/components/ui/NeonFlow";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <NeonFlow className="min-h-[400px]">
      <footer className="px-5 pb-12 pt-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Big footer logo */}
          <div className="flex justify-center opacity-[0.06]">
            <Image
              src="/optimized/logo.webp"
              alt=""
              width={400}
              height={400}
              className="h-36 w-auto sm:h-48 lg:h-64"
              aria-hidden="true"
            />
          </div>

          <div className="mt-12 grid gap-10 border-t border-foreground/10 pt-10 md:mt-16 md:grid-cols-3 md:gap-12 md:pt-12">
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
                  className="break-all transition-colors hover:text-foreground"
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
    </NeonFlow>
  );
}
