import { ImagePlaceholder } from "./ImagePlaceholder";

const stats = [
  { value: "1200 m²", label: "Trainingsfläche" },
  { value: "40+", label: "Kurse pro Woche" },
  { value: "6–23", label: "Uhr geöffnet" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <ImagePlaceholder label="Studio / Team" className="aspect-[4/3] w-full" />
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Über uns
          </h2>
          <p className="mt-4 text-foreground/70">
            So Fresh ist kein Fitness-Discounter und kein Luxus-Club, sondern
            ein Studio für Menschen, die ernsthaft trainieren wollen. Moderne
            Geräte, kleine Kursgruppen und Coaches, die dich beim Namen kennen —
            egal ob du gerade anfängst oder deine nächste Bestleistung jagst.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-accent sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-foreground/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
