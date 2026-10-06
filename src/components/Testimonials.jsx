const REVIEWS = [
  {
    quote: "They helped me work out exactly how many boxes I needed for three bathrooms and a kitchen. The tiles came from one batch and the colour matched across every room.",
    name: "Rohit Mehra",
    role: "Homeowner, Dwarka",
    big: true,
  },
  {
    quote: "Clear prices and quick quotes. I send my client's requirement in the morning and have options by the afternoon.",
    name: "Anita Sharma",
    role: "Interior designer",
  },
  {
    quote: "Deliveries reach our sites on the promised day, which keeps our tiling crew working without gaps.",
    name: "Gupta Constructions",
    role: "Building contractor",
  },
];

export default function Testimonials() {
  const [first, ...rest] = REVIEWS;
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
      <h2 className="max-w-2xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
        What customers say
      </h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <figure className="flex flex-col justify-between rounded-sm bg-glaze p-8 text-plaster lg:p-10">
          <blockquote className="font-display text-2xl font-semibold leading-snug text-balance lg:text-3xl">
            {first.quote}
          </blockquote>
          <figcaption className="mt-8">
            <p className="font-semibold">{first.name}</p>
            <p className="text-sm text-plaster/75">{first.role}</p>
          </figcaption>
        </figure>

        <div className="grid gap-6">
          {rest.map((r) => (
            <figure key={r.name} className="rounded-sm border border-grout bg-white p-6">
              <blockquote className="leading-relaxed">{r.quote}</blockquote>
              <figcaption className="mt-4">
                <p className="font-semibold">{r.name}</p>
                <p className="text-sm text-ink/65">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
