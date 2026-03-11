"use client";

import { useId, useState } from "react";

type Props = {
  className?: string;
};

export default function ContactFormEmbed({ className }: Props) {
  const [loaded, setLoaded] = useState(false);
  const suffix = useId().replace(/:/g, "");
  const iframeId = `inline-sxDYj1gBgfvDh9PI9Jte-${suffix}`;

  return (
    <div className={`relative ${className ?? ""}`}>
      {!loaded && (
        <div className="flex min-h-[400px] items-center justify-center">
          <span className="h-8 w-8 animate-spin rounded-full border border-foreground/20 border-t-foreground/60" />
        </div>
      )}
      <iframe
        src="https://api.fitnesslaunch.es/widget/form/sxDYj1gBgfvDh9PI9Jte"
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form - The Rooftop Content Studio"
        data-height="undefined"
        data-layout-iframe-id={iframeId}
        data-form-id="sxDYj1gBgfvDh9PI9Jte"
        title="Formulario de contacto Rooftop Content Studio"
        loading="lazy"
        scrolling="no"
        onLoad={() => setLoaded(true)}
        className={`w-full border-0 transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ minHeight: 400 }}
      />
    </div>
  );
}
