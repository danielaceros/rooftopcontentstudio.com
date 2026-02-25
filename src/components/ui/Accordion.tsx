interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  return (
    <details className="group border-b border-foreground/10">
      <summary className="flex cursor-pointer list-none items-center justify-between py-8 text-left">
        <span className="pr-8 font-heading text-[clamp(1.2rem,2vw,1.6rem)] uppercase tracking-wide text-foreground">
          {question}
        </span>
        <span
          className="shrink-0 font-heading text-3xl text-foreground/40 transition-transform duration-300 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <p className="max-w-2xl pb-8 text-[1.05rem] leading-relaxed text-muted">
        {answer}
      </p>
    </details>
  );
}
