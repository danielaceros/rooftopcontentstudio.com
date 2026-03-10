"use client";

import { useEffect, useState } from "react";

const VIDEO_SRC = "/video/hero.webm";

type NavigatorConnection = {
  saveData?: boolean;
  effectiveType?: string;
};

export default function VideoBackground() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: NavigatorConnection })
      .connection;
    const isSlow =
      conn?.saveData ||
      ["slow-2g", "2g", "3g"].includes(conn?.effectiveType ?? "");
    if (!isSlow) setShouldLoad(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {/* TODO: ideally serve a vertical (9:16) video for mobile via <source media="..."> */}
      <video
        src={shouldLoad ? VIDEO_SRC : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/optimized/hero-poster.webp"
        {...{ fetchPriority: "high" } as React.VideoHTMLAttributes<HTMLVideoElement>}
        onCanPlay={() => setLoaded(true)}
        className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 lg:object-center"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <track kind="captions" />
      </video>
      {/* Strong overlay for text contrast */}
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
      {/* Extra darkening on the left where text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
    </div>
  );
}
