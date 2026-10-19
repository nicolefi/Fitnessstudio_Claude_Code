const schedule = [
  {
    day: "Montag",
    classes: [
      { time: "07:00", title: "HIIT Express" },
      { time: "18:30", title: "Cycling" },
      { time: "19:30", title: "Yoga Flow" },
    ],
  },
  {
    day: "Mittwoch",
    classes: [
      { time: "07:00", title: "Mobility" },
      { time: "18:00", title: "Boxen" },
      { time: "19:15", title: "Functional Strength" },
    ],
  },
  {
    day: "Samstag",
    classes: [
      { time: "09:00", title: "Cycling" },
      { time: "10:15", title: "Bootcamp" },
      { time: "11:30", title: "Yin Yoga" },
    ],
  },
];

export function Schedule() {
  return (
    <section id="kurse" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Kursplan
      </h2>
      <p className="mt-3 max-w-md text-foreground/70">
        Ein Auszug aus unserem Wochenplan. Alle Kurse sind im Abo inklusive.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {schedule.map((day) => (
          <div key={day.day} className="rounded-lg border border-foreground/10 p-5">
            <h3 className="font-semibold">{day.day}</h3>
            <ul className="mt-4 space-y-3">
              {day.classes.map((c) => (
                <li key={c.time} className="flex items-center gap-3 text-sm">
                  <span className="inline-block rounded bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
                    {c.time}
                  </span>
                  <span className="text-foreground/80">{c.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
