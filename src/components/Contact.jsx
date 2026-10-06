import { useState } from "react";
import { BUSINESS, waLink } from "../data";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "./Icons";

const field =
  "mt-1.5 w-full rounded border border-grout bg-white px-3.5 py-2.5 text-base outline-none focus:border-glaze focus:ring-2 focus:ring-glaze/30";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", use: "Floor", area: "", note: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const msg = [
      `Hello Shree Hari Traders, I would like a quote.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Tiles for: ${form.use}`,
      form.area && `Approx. area: ${form.area} sq ft`,
      form.note && `Details: ${form.note}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address)}&output=embed`;

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
      <h2 className="max-w-2xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
        Get a quote or visit the showroom
      </h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <ul className="space-y-5">
            <li className="flex gap-3">
              <PinIcon className="mt-1 shrink-0 text-glaze" />
              <div>
                <p className="font-semibold">Showroom</p>
                <p className="text-ink/75">{BUSINESS.address}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-1 shrink-0 text-glaze" />
              <div>
                <p className="font-semibold">Phone and WhatsApp</p>
                <a className="text-ink/75 hover:text-glaze" href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>
                  {BUSINESS.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-1 shrink-0 text-glaze" />
              <div>
                <p className="font-semibold">Email</p>
                <a className="text-ink/75 hover:text-glaze" href={`mailto:${BUSINESS.email}`}>
                  {BUSINESS.email}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-1 shrink-0 text-glaze" />
              <div>
                <p className="font-semibold">Opening hours</p>
                <p className="text-ink/75">{BUSINESS.hours}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 aspect-[16/10] overflow-hidden rounded-sm bg-grout">
            <iframe
              title="Shree Hari Traders location map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full border-0"
            />
          </div>
        </div>

        <form onSubmit={submit} className="rounded-sm bg-glaze-soft p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold">Tell us what you need</h3>
          <p className="mt-1 text-ink/75">Your details open as a ready-to-send WhatsApp message.</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Your name
              <input required className={field} value={form.name} onChange={set("name")} autoComplete="name" />
            </label>
            <label className="block text-sm font-semibold">
              Phone number
              <input required type="tel" className={field} value={form.phone} onChange={set("phone")} autoComplete="tel" />
            </label>
            <label className="block text-sm font-semibold">
              Tiles for
              <select className={field} value={form.use} onChange={set("use")}>
                {["Floor", "Wall", "Bathroom", "Kitchen", "Outdoor", "Not sure yet"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold">
              Approx. area (sq ft)
              <input inputMode="numeric" className={field} value={form.area} onChange={set("area")} />
            </label>
            <label className="block text-sm font-semibold sm:col-span-2">
              Anything else we should know
              <textarea rows="4" className={field} value={form.note} onChange={set("note")} />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 rounded bg-glaze px-6 py-3 font-semibold text-white hover:bg-glaze-deep"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
