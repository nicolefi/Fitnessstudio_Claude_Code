import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — So Fresh",
};

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-2xl flex-1 px-6 py-24 sm:px-10">
      <h1 className="font-display text-3xl font-bold uppercase tracking-tight">
        Datenschutz
      </h1>

      <p className="mt-4 rounded-md border border-dashed border-accent/40 bg-accent/5 px-4 py-3 text-sm text-accent">
        Platzhalter-Inhalt — vor Launch durch eine rechtsgültige
        Datenschutzerklärung ersetzen.
      </p>

      <div className="mt-8 space-y-6 text-foreground/80">
        <section>
          <h2 className="font-semibold text-foreground">
            Verantwortliche Stelle
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            Erhebung und Verarbeitung von Daten
          </h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Kontaktformular</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    </main>
  );
}
