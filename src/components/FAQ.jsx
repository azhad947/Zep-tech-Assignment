import { PlusIcon } from "./Icons";

const FAQS = [
  ["Do you deliver outside Delhi?", "Yes. We deliver across Delhi NCR and can arrange transport to other cities for larger orders. Share your pin code and quantity for a delivery quote."],
  ["Can I see samples before I buy?", "Yes. Visit the showroom to view and handle samples in daylight. For large orders we can also lend sample pieces to your designer or contractor."],
  ["How much extra tile should I order?", "As a guide, add 8 to 10 percent for straight layouts and 12 to 15 percent for diagonal or herringbone patterns. We will confirm the number for your plan."],
  ["Do you offer rates for contractors and builders?", "Yes. Project and repeat-order pricing is available. Send your bill of quantities and we will quote against it."],
  ["Which tiles are suitable for balconies and bathrooms?", "Choose matte, anti-skid tiles for wet and outdoor floors. Our Outdoor and Bathroom filters list the suitable options, and we can advise on slip ratings."],
  ["What if some boxes arrive damaged?", "Check the boxes at delivery and tell us straight away. We will arrange replacement for damaged tiles as per the terms on your quote."],
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-glaze-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          Questions we hear often
        </h2>

        <div className="border-t border-ink/15">
          {FAQS.map(([q, a]) => (
            <details key={q} className="group border-b border-ink/15 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                {q}
                <PlusIcon className="shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/75">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
