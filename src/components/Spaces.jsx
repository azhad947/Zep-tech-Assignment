import TileArt from "./TileArt";
import { byId } from "../data";

const SPACES = [
  { title: "Living room", text: "Large-format vitrified slabs and wood-look planks.", tile: "carrara", span: "md:col-span-4", size: 220 },
  { title: "Kitchen", text: "Easy-to-wipe backsplashes and stain-resistant floors.", tile: "metro", span: "md:col-span-2", size: 100 },
  { title: "Bathroom", text: "Anti-skid floors and water-resistant wall tiles.", tile: "scales", span: "md:col-span-2", size: 90 },
  { title: "Balcony and terrace", text: "Matte anti-skid tiles that handle sun and rain.", tile: "chevron", span: "md:col-span-2", size: 110 },
  { title: "Shops and showrooms", text: "Durable floors that look sharp under heavy footfall.", tile: "slate", span: "md:col-span-2", size: 110 },
];

export default function Spaces() {
  return (
    <section id="spaces" className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          Tiles for every space
        </h2>
        <p className="mt-4 text-lg text-ink/75">
          Not sure what suits a room? Start with where it will be used and we will shortlist designs,
          finishes and sizes for you.
        </p>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-6">
        {SPACES.map((s) => {
          const t = byId(s.tile);
          return (
            <div key={s.title} className={`relative min-h-72 overflow-hidden rounded-sm ${s.span}`}>
              <div className="absolute inset-0">
                <TileArt variant={t.variant} a={t.a} b={t.b} c={t.c} size={s.size} />
              </div>
              <div className="absolute bottom-3 left-3 max-w-[85%] bg-plaster p-4">
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-ink/75">{s.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
