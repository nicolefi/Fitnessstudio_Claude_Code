import { ImagePlaceholder } from "./ImagePlaceholder";

const areas = [
  { name: "Kraft & Freihantel", text: "Racks, Plattformen und Kurzhanteln bis 50 kg." },
  { name: "Functional", text: "Rig, Kettlebells, Sled-Strecke und Rudergeräte." },
  { name: "Cycling", text: "Indoor-Cycling mit Licht- und Soundsystem." },
  { name: "Yoga & Mobility", text: "Ruhiger Raum für Flow, Stretching und Atmung." },
  { name: "Boxen", text: "Sandsäcke, Pratzen und Technik-Training." },
  { name: "Personal Training", text: "1:1-Coaching mit individuellem Plan." },
];

export function Training() {
  return (
    <section id="training" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Training
      </h2>
      <p className="mt-3 max-w-md text-foreground/70">
        Sechs Bereiche, ein Abo. Trainiere, wie es zu dir passt.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {areas.map((area) => (
          <div key={area.name}>
            <ImagePlaceholder label={area.name} className="aspect-square w-full" />
            <p className="mt-3 text-sm font-medium">{area.name}</p>
            <p className="text-sm text-foreground/50">{area.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
