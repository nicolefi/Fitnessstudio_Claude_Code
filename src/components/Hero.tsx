export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-start justify-center overflow-hidden px-6 sm:px-10"
    >
      <div className="bg-grain absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(198,255,61,0.12),_transparent_60%)]" />

      <span className="absolute right-6 top-6 rounded border border-dashed border-foreground/20 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground/40 sm:right-10 sm:top-10">
        Foto/Video Platzhalter
      </span>

      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Fitnessstudio · Zürich
        </p>
        <h1 className="mt-4 font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-8xl">
          Train
          <br />
          So Fresh
        </h1>
        <p className="mt-6 max-w-md text-lg text-foreground/70">
          Kraft, Kurse und Coaching ohne Schnickschnack — für alle, die stärker
          werden wollen als gestern.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-block rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Probetraining buchen
          </a>
          <a
            href="#preise"
            className="inline-block rounded-full border border-foreground/20 px-7 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
          >
            Preise ansehen
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Nach unten scrollen"
        className="absolute bottom-8 left-1/2 flex h-10 w-10 -translate-x-1/2 animate-bounce items-center justify-center rounded-full border border-foreground/20 text-foreground/60 transition-colors hover:border-accent hover:text-accent"
      >
        ↓
      </a>
    </section>
  );
}
