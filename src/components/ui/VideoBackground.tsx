export default function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/klip-e547f.firebasestorage.app/o/hero2.mp4?alt=media&token=1c2da14d-d074-4896-953b-78612a8fb3b9"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/optimized/hero-poster.webp"
        className="absolute inset-0 h-full w-full object-cover"
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
