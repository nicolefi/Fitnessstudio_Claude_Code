import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — So Fresh",
};

export default function Impressum() {
  return (
    <main className="mx-auto max-w-2xl flex-1 px-6 py-24 sm:px-10">
      <h1 className="font-display text-3xl font-bold uppercase tracking-tight">
        Impressum
      </h1>

      <p className="mt-4 rounded-md border border-dashed border-accent/40 bg-accent/5 px-4 py-3 text-sm text-accent">
        Platzhalter-Inhalt — vor Launch durch verbindliche Angaben ersetzen.
      </p>

      <div className="mt-8 space-y-6 text-foreground/80">
        <section>
          <h2 className="font-semibold text-foreground">Anbieter</h2>
          <p>
            So Fresh Fitness GmbH
            <br />
            Musterstrasse 1
            <br />
            8001 Zürich
            <br />
            Schweiz
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Kontakt</h2>
          <p>
            Telefon: +41 00 000 00 00
            <br />
            E-Mail: hello@example.com
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Handelsregister</h2>
          <p>Lorem ipsum dolor sit amet, UID: CHE-000.000.000</p>
        </section>
      </div>
    </main>
  );
}
