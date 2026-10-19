"use client";

import { useActionState } from "react";
import { submitTrialRequest, type TrialRequestState } from "@/app/actions";

const socials = ["Instagram", "Facebook", "Mail"];

const goals = ["Muskelaufbau", "Abnehmen", "Ausdauer", "Beweglichkeit", "Einfach fitter werden"];

const initialTrialRequestState: TrialRequestState = { status: "idle" };

const inputClass =
  "rounded-md border border-foreground/20 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-foreground/40 focus:border-accent";

export function Contact() {
  const [trialRequestState, trialRequestAction, isPending] = useActionState(
    submitTrialRequest,
    initialTrialRequestState
  );

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Probetraining
      </h2>
      <p className="mt-3 max-w-md text-foreground/70">
        Dein erstes Training ist gratis — inklusive Studio-Tour und kurzem
        Gespräch mit einem Coach. Trag dich ein, wir melden uns.
      </p>

      <form action={trialRequestAction} className="mt-10 flex max-w-md flex-col gap-4">
        <input type="text" name="name" placeholder="Name" required className={inputClass} />
        <input type="email" name="email" placeholder="E-Mail" required className={inputClass} />
        <select name="goal" defaultValue="" className={`${inputClass} bg-background`}>
          <option value="" disabled>
            Dein Trainingsziel
          </option>
          {goals.map((goal) => (
            <option key={goal} value={goal}>
              {goal}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Wird gesendet…" : "Probetraining anfragen"}
        </button>
        {trialRequestState.status !== "idle" && (
          <p
            className={
              trialRequestState.status === "success"
                ? "text-sm text-accent"
                : "text-sm text-red-400"
            }
          >
            {trialRequestState.message}
          </p>
        )}
      </form>

      <h3 className="mt-16 font-display text-2xl font-bold uppercase tracking-tight">
        Kontakt
      </h3>
      <p className="mt-3 max-w-md text-foreground/70">
        Fragen zu Abos oder Kursen? +41 00 000 00 00 · hello@example.com
      </p>

      <div className="mt-6 flex gap-4">
        {socials.map((social) => (
          <a
            key={social}
            href="#"
            aria-label={social}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20 text-xs text-foreground/70 transition-colors hover:border-accent hover:text-accent"
          >
            {social.slice(0, 2)}
          </a>
        ))}
      </div>
    </section>
  );
}
