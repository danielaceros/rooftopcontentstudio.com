"use client";

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="animate-ken-burns h-full w-full bg-cover bg-[center_25%]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=80')",
        }}
      />
      {/* Subtle bottom gradient only — let the image breathe like OLMO */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
    </div>
  );
}
