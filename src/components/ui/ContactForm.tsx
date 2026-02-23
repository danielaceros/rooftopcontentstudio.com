"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/actions";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null);

  return (
    <form action={formAction} className="flex flex-col gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-4 text-lg text-foreground placeholder:text-foreground/20 focus:border-foreground focus:outline-none"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-4 text-lg text-foreground placeholder:text-foreground/20 focus:border-foreground focus:outline-none"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-4 text-lg text-foreground placeholder:text-foreground/20 focus:border-foreground focus:outline-none"
          placeholder="+34 600 000 000"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none border-0 border-b border-foreground/20 bg-transparent px-0 py-4 text-lg text-foreground placeholder:text-foreground/20 focus:border-foreground focus:outline-none"
          placeholder="Cuéntanos sobre tu proyecto..."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full border border-foreground/60 px-12 py-4 font-heading text-xl uppercase tracking-[0.15em] text-foreground transition-all hover:bg-foreground hover:text-background disabled:opacity-40"
        >
          {isPending ? "Enviando..." : "Enviar"}
        </button>
      </div>

      {state && (
        <p
          className={`text-sm ${state.success ? "text-green-400" : "text-red-400"}`}
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
