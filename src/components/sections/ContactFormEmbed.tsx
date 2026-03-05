"use client";

import { useState } from "react";

export default function ContactFormEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-card">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-amber" />
        </div>
      )}
      <iframe
        src="https://api.fitnesslaunch.es/widget/form/sxDYj1gBgfvDh9PI9Jte"
        id="inline-sxDYj1gBgfvDh9PI9Jte"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form - The Rooftop Content Studio"
        data-height="undefined"
        data-layout-iframe-id="inline-sxDYj1gBgfvDh9PI9Jte"
        data-form-id="sxDYj1gBgfvDh9PI9Jte"
        title="Formulario de contacto Rooftop Content Studio"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-[680px] w-full border-0 sm:h-[640px] xl:h-[700px] transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
