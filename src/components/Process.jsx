const STEPS = [
  ["Share your requirement", "Tell us the rooms, approximate area and budget by phone, WhatsApp or at the showroom."],
  ["Choose from samples", "See the shortlisted tiles in person, in daylight, and pick the ones that suit your space."],
  ["Get a written quote", "We calculate quantity with wastage and send an itemised quote with the delivery date."],
  ["Receive at your site", "Your order is checked, loaded and delivered. We stay available for reorders and top-ups."],
];

export default function Process() {
  return (
    <section id="process" className="bg-glaze-deep text-plaster">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
        <h2 className="max-w-2xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          From first call to delivery in four steps
        </h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([title, text], i) => (
            <li key={title} className="border-t-4 border-marigold pt-5">
              <span className="font-display text-3xl font-extrabold text-marigold">{i + 1}</span>
              <h3 className="mt-3 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-plaster/80">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
