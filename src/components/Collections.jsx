import { useState } from "react";
import TileArt from "./TileArt";
import { CATEGORIES, TILES, waLink } from "../data";

export default function Collections() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? TILES : TILES.filter((t) => t.tags.includes(filter));

  return (
    <section id="collections" className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          Our tile collections
        </h2>
        <p className="mt-4 text-lg text-ink/75">
          Filter by where the tile will go. Every design is stocked in several sizes, and samples are
          available at the showroom.
        </p>
      </div>

      <div role="group" aria-label="Filter tiles by use" className="mt-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={filter === cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${
              filter === cat
                ? "border-glaze bg-glaze text-white"
                : "border-grout bg-white hover:border-glaze"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} designs
      </p>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((t) => (
          <article key={t.id}>
            <div className="aspect-square overflow-hidden rounded-sm bg-grout">
              <TileArt
                variant={t.variant}
                a={t.a}
                b={t.b}
                c={t.c}
                size={t.variant === "marble" || t.variant === "wood" ? 190 : 120}
                label={`${t.name} tile pattern`}
              />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">{t.name}</h3>
            <p className="mt-1 text-sm text-ink/70">Size: {t.size}</p>
            <p className="text-sm text-ink/70">Finish: {t.finish}</p>
            <p className="text-sm text-ink/70">Best for: {t.rooms}</p>
            <a
              href={waLink(`Hello Shree Hari Traders, please share the price and availability of ${t.name} (${t.size}).`)}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-glaze underline decoration-2 underline-offset-4 hover:decoration-marigold"
            >
              Ask for price on WhatsApp
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
