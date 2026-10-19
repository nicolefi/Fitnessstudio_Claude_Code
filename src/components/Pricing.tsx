const plans = [
  {
    name: "Flex",
    price: "89",
    period: "pro Monat",
    features: ["Monatlich kündbar", "Gerätetraining", "Alle Kurse"],
  },
  {
    name: "Jahresabo",
    price: "69",
    period: "pro Monat, 12 Monate",
    features: ["Gerätetraining", "Alle Kurse", "Sauna", "1 Coaching-Session"],
    highlight: true,
  },
  {
    name: "10er-Abo",
    price: "190",
    period: "einmalig",
    features: ["10 Eintritte", "Gerätetraining", "Alle Kurse", "12 Monate gültig"],
  },
];

export function Pricing() {
  return (
    <section id="preise" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Preise
      </h2>
      <p className="mt-3 max-w-md text-foreground/70">
        Keine Aufnahmegebühr, keine versteckten Kosten. Das erste Training ist
        gratis.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-lg border p-6 ${
              plan.highlight ? "border-accent bg-accent/5" : "border-foreground/10"
            }`}
          >
            {plan.highlight && (
              <span className="mb-3 self-start rounded bg-accent px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-accent-foreground">
                Beliebt
              </span>
            )}
            <h3 className="font-semibold">{plan.name}</h3>
            <p className="mt-3">
              <span className="text-sm text-foreground/60">CHF </span>
              <span className="font-display text-4xl font-bold">{plan.price}</span>
            </p>
            <p className="text-sm text-foreground/50">{plan.period}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-foreground/80">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-accent">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-6 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                plan.highlight
                  ? "bg-accent text-accent-foreground hover:opacity-90"
                  : "border border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              Probetraining buchen
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
