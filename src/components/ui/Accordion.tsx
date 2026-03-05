"use client";

import { useState, useRef, useEffect } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="border-b border-foreground/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between py-8 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-8 font-heading text-[clamp(1.2rem,2vw,1.6rem)] uppercase tracking-wide text-foreground">
          {question}
        </span>
        <span
          className={`shrink-0 font-heading text-3xl text-foreground/40 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
        style={{
          maxHeight: isOpen ? `${maxHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="max-w-2xl pb-8 text-[1.05rem] leading-relaxed text-muted">
          {answer}
        </p>
      </div>
    </div>
  );
}
