"use client";

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Accordion({ question, answer, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="border-b border-foreground/10 transition-colors duration-300 hover:bg-card">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between px-2 py-8 text-left md:px-4"
        aria-expanded={isOpen}
      >
        <span className="pr-8 font-heading text-[clamp(1.2rem,2vw,1.6rem)] uppercase tracking-wide text-foreground">
          {question}
        </span>
        <span
          className={`shrink-0 font-mono text-xl text-accent/40 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p
            className="max-w-2xl px-2 pb-8 text-[1.05rem] leading-relaxed text-muted transition-opacity duration-300 md:px-4"
            style={{ opacity: isOpen ? 1 : 0 }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
