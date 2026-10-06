const REASONS = [
  ["Wide range under one roof", "Floor, wall, bathroom, kitchen and outdoor tiles from leading manufacturers, so you compare everything in a single visit."],
  ["Honest guidance on quantity", "We help you calculate area and wastage, so you order enough without paying for boxes you will never open."],
  ["Same-batch supply", "Tiles from different batches can differ in shade. We dispatch your full order from one batch wherever stock allows."],
  ["Contractor and bulk pricing", "Builders, architects and interior designers get project rates and a dedicated contact for repeat orders."],
  ["Careful delivery", "Boxes are checked before loading and delivered to your site on the day we confirm."],
];

export default function About() {
  return (
    <section id="about" className="bg-glaze-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            A tile dealer you can ask plain questions
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/80">
            Shree Hari Traders is a family-run tile supplier serving homes, shops and construction sites
            across Delhi NCR. We keep the range large, the pricing clear and the advice practical, whether
            you are tiling one bathroom or a whole building.
          </p>
        </div>

        <ul className="divide-y divide-ink/15 border-y border-ink/15">
          {REASONS.map(([title, text]) => (
            <li key={title} className="py-6">
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 max-w-xl leading-relaxed text-ink/75">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
