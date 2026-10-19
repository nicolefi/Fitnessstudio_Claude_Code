import { ImagePlaceholder } from "./ImagePlaceholder";

const hours = [
  ["Mo–Fr", "06:00–23:00"],
  ["Sa", "08:00–20:00"],
  ["So", "08:00–18:00"],
  ["Feiertage", "09:00–16:00"],
];

export function Location() {
  return (
    <section id="location" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Studio
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
        <ImagePlaceholder label="Karte (interaktiv)" className="aspect-[4/3] w-full" />

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
            Adresse
          </h3>
          <p className="mt-2 text-foreground/80">Musterstrasse 1, 8001 Zürich</p>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-foreground/50">
            Öffnungszeiten
          </h3>
          <dl className="mt-2 space-y-1">
            {hours.map(([day, time]) => (
              <div key={day} className="flex justify-between text-sm text-foreground/80 max-w-xs">
                <dt>{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Route öffnen
          </a>
        </div>
      </div>
    </section>
  );
}
