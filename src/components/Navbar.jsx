import { useState } from "react";
import Logo from "./Logo";
import { MenuIcon, CloseIcon, PhoneIcon } from "./Icons";
import { BUSINESS } from "../data";

const LINKS = [
  ["Collections", "#collections"],
  ["About", "#about"],
  ["Spaces", "#spaces"],
  ["How it works", "#process"],
  ["Reviews", "#reviews"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-grout bg-plaster/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#top" aria-label="Shree Hari Traders home" className="text-glaze">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-glaze">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded bg-glaze px-4 py-2 text-sm font-semibold text-white hover:bg-glaze-deep sm:inline-flex"
          >
            <PhoneIcon width={16} height={16} />
            Call {BUSINESS.phone}
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded border border-grout lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-grout bg-plaster lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-grout/70 py-3 font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded bg-glaze px-4 py-2.5 text-sm font-semibold text-white"
              >
                <PhoneIcon width={16} height={16} />
                Call {BUSINESS.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
