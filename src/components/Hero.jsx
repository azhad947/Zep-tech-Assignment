import { useState } from "react";
import TileArt from "./TileArt";
import { CheckIcon } from "./Icons";
import { byId } from "../data";

const PICKS = ["jaali", "carrara", "walnut", "terrazzo", "metro", "checker"].map(byId);

export default function Hero() {
  const [pick, setPick] = useState(PICKS[0]);
  const [size, setSize] = useState(110);

  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1fr_1.05fr] lg:py-16">
      <div className="flex flex-col justify-center">
        <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Tiles for every floor, wall and balcony in your project.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
          Shree Hari Traders supplies vitrified, ceramic and outdoor tiles to homeowners, builders and
          interior designers across Delhi NCR. Visit the showroom, or send your requirement on WhatsApp
          and get a quote the same day.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded bg-glaze px-6 py-3 font-semibold text-white hover:bg-glaze-deep"
          >
            Get a quote
          </a>
          <a
            href="#collections"
            className="rounded border-2 border-glaze px-6 py-3 font-semibold text-glaze hover:bg-glaze-soft"
          >
            Browse collections
          </a>
        </div>

        <ul className="mt-10 grid gap-3 text-sm font-medium sm:grid-cols-3">
          {["Free site-visit estimate", "Delivery across Delhi NCR", "Bulk rates for contractors"].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-glaze" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Interactive tile wall: the memorable element of the page */}
      <div className="relative min-h-[460px] overflow-hidden rounded-md bg-grout lg:min-h-[600px]">
        <div key={pick.id} className="relay absolute inset-0">
          <TileArt
            variant={pick.variant}
            a={pick.a}
            b={pick.b}
            c={pick.c}
            size={size}
            label={`${pick.name} tiles laid on a wall`}
          />
        </div>

        <div className="absolute left-3 top-3 bg-ink px-3 py-2 text-sm text-plaster">
          <p className="font-display font-bold">{pick.name}</p>
          <p className="text-plaster/75">{pick.size}</p>
        </div>

        <div className="absolute inset-x-3 bottom-3 rounded bg-plaster p-4 shadow-lg">
          <p id="pick-label" className="mb-2 text-sm font-semibold">
            Pick a design and see it on the wall
          </p>
          <div role="group" aria-labelledby="pick-label" className="flex flex-wrap gap-2">
            {PICKS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setPick(t)}
                aria-pressed={pick.id === t.id}
                aria-label={t.name}
                title={t.name}
                className={`size-12 overflow-hidden rounded-sm border-2 ${
                  pick.id === t.id ? "border-marigold ring-2 ring-ink" : "border-transparent"
                }`}
              >
                <TileArt variant={t.variant} a={t.a} b={t.b} c={t.c} size={36} />
              </button>
            ))}
          </div>

          <label className="mt-4 flex items-center gap-3 text-sm font-medium">
            <span className="shrink-0">Tile size</span>
            <input
              type="range"
              min="60"
              max="200"
              step="5"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full accent-glaze"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
