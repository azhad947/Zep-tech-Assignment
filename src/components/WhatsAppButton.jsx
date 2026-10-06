import { WhatsAppIcon } from "./Icons";
import { waLink } from "../data";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink("Hello Shree Hari Traders, I have a question about tiles.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-lg hover:bg-[#188a46]"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
