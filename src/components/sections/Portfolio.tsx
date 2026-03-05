import PortfolioCard from "./PortfolioCard"
import { projects } from "@/data/projects"

type Props = {
  openVideosInModal?: boolean
  projectSlugs?: string[]
  desktopSlideshow?: boolean
}

export default function Portfolio({
  openVideosInModal = false,
  projectSlugs,
  desktopSlideshow = false,
}: Props) {
  const selectedProjects = projectSlugs?.length
    ? projectSlugs
        .map((slug) => projects.find((project) => project.slug === slug))
        .filter((project): project is (typeof projects)[number] => Boolean(project))
    : projects

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 lg:py-32"
    >
      <div className="px-5 pb-8 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">( Portfolio )</p>
        <h2 className="mt-4 font-heading text-[clamp(2.4rem,9vw,7rem)] uppercase leading-[0.9] text-foreground">
          Trabajos Recientes.
        </h2>
      </div>
      <div>
        {desktopSlideshow ? (
          <>
            {/* Mobile: horizontal scroll */}
            <div className="lg:hidden">
              <div className="portfolio-slideshow-wrap overflow-hidden">
                <div className="portfolio-mobile-track">
                  {[...selectedProjects, ...selectedProjects].map((project, i) => (
                    <div key={`${project.slug}-m-${i}`} className="portfolio-mobile-item shrink-0">
                      <PortfolioCard
                        title={project.title}
                        video={project.video}
                        cover={project.cover}
                        index={i}
                        openInModal={openVideosInModal}
                        hideOverlayTitle
                      />
                      <p className="mt-2 px-1 text-left font-heading text-[13px] font-semibold uppercase leading-tight text-white/92">
                        {project.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: slideshow */}
            <div className="hidden lg:block">
              <div className="portfolio-slideshow-wrap overflow-hidden">
                <div className="portfolio-desktop-track">
                  {[...selectedProjects, ...selectedProjects].map((project, i) => (
                    <div key={`${project.slug}-${i}`} className="w-[260px] shrink-0 xl:w-[295px]">
                      <PortfolioCard
                        title={project.title}
                        video={project.video}
                        cover={project.cover}
                        index={i}
                        openInModal={openVideosInModal}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <style>{`
              .portfolio-slideshow-wrap {
                position: relative;
                isolation: isolate;
              }

              .portfolio-slideshow-wrap::before,
              .portfolio-slideshow-wrap::after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                width: 44px;
                pointer-events: none;
                z-index: 2;
              }

              .portfolio-slideshow-wrap::before {
                left: 0;
                background: linear-gradient(to right, #0a0a0a, rgba(10, 10, 10, 0));
              }

              .portfolio-slideshow-wrap::after {
                right: 0;
                background: linear-gradient(to left, #0a0a0a, rgba(10, 10, 10, 0));
              }

              .portfolio-mobile-track {
                display: flex;
                width: max-content;
                gap: 0.5rem;
                animation: portfolio-mobile-slide 40s linear infinite;
                will-change: transform;
              }

              .portfolio-mobile-item {
                width: min(44vw, 190px);
              }

              .portfolio-desktop-track {
                display: flex;
                width: max-content;
                gap: 0.85rem;
                animation: portfolio-desktop-slide 55s linear infinite;
                will-change: transform;
              }

              @keyframes portfolio-mobile-slide {
                0% {
                  transform: translate3d(0, 0, 0);
                }
                100% {
                  transform: translate3d(-50%, 0, 0);
                }
              }

              @keyframes portfolio-desktop-slide {
                0% {
                  transform: translate3d(0, 0, 0);
                }
                100% {
                  transform: translate3d(-50%, 0, 0);
                }
              }

              @media (prefers-reduced-motion: reduce) {
                .portfolio-mobile-track,
                .portfolio-desktop-track {
                  animation: none;
                  transform: translate3d(0, 0, 0);
                }
              }

              @media (min-width: 1024px) {
                .portfolio-slideshow-wrap::before,
                .portfolio-slideshow-wrap::after {
                  width: 72px;
                }
              }
            `}</style>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
            {selectedProjects.map((project, i) => (
              <PortfolioCard
                key={project.slug}
                title={project.title}
                video={project.video}
                cover={project.cover}
                index={i}
                openInModal={openVideosInModal}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
