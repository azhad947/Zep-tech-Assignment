import Logo from "./Logo";
import { BUSINESS } from "../data";

export default function Footer() {
  return (
    <footer className="bg-ink text-plaster">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo className="text-plaster" />
          <p className="mt-4 max-w-sm leading-relaxed text-plaster/70">
            Floor, wall, bathroom, kitchen and outdoor tiles for homes, shops and construction sites across
            Delhi NCR.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display font-bold">Explore</h2>
          <ul className="mt-3 space-y-2 text-plaster/75">
            {[["Collections", "#collections"], ["About us", "#about"], ["Spaces", "#spaces"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={h}><a className="hover:text-marigold" href={h}>{l}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display font-bold">Visit or call</h2>
          <address className="mt-3 space-y-2 not-italic text-plaster/75">
            <p>{BUSINESS.address}</p>
            <p>{BUSINESS.phone}</p>
            <p>{BUSINESS.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-plaster/15 py-5 text-center text-sm text-plaster/60">
        &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  );
}
