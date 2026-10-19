"use client";

import { useState } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

const items = Array.from({ length: 6 }, (_, i) => `Studio-Impression ${i + 1}`);

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Gallery
      </h2>
      <p className="mt-3 max-w-md text-foreground/70">
        Ein Blick ins Studio — von der Hantelzone bis zum Cycling-Raum.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActive(item)}
            className="transition hover:opacity-80"
            aria-label={`${item} vergrössern`}
          >
            <ImagePlaceholder label={item} className="aspect-square w-full" />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setActive(null)}
        >
          <ImagePlaceholder label={active} className="aspect-square w-full max-w-lg" />
        </div>
      )}
    </section>
  );
}
