import { useState } from "react";

/* ── Types ── */
type AccordionItem = {
  id: number;
  title: string;
  description: string;
  preview?: React.ReactNode;
};


/* ── Data ── */
const items: AccordionItem[] = [
  {
    id: 1,
    title: "Fast Global Transfers",
    description:
      "Send money anywhere in the world in minutes, not days. Our real-time rails connect 180+ countries with guaranteed delivery windows.",
  },
  {
    id: 2,
    title: "Low & Transparent Fees",
    description:
      "No hidden charges. See exactly what you pay upfront with our transparent fee structure. Save up to 90% on transfer costs.",
    preview: <img src="/image/accordion-image.svg" alt="" />
    // preview: <PaymentPreview />,
  },
  {
    id: 3,
    title: "Secure & Compliant",
    description:
      "Bank-level security with AES-256 encryption, KYC verification, and full regulatory compliance across every market we operate in.",
  },
  {
    id: 4,
    title: "Real-Time Monitoring",
    description:
      "Verify accounts, monitor activity, and ensure compliance standards — all in real time with instant alerts and audit-ready logs.",
  },
];

const AvatarStack = () => (
  <div className="flex items-center gap-3">
    <img src="/image/avatars.svg" alt="" />
    <p className="text-sm text-neutral-500">
      <span className="font-semibold text-neutral-900">4.8/5</span> out of{" "}
      <span className="font-semibold text-neutral-900">254 reviews</span>
    </p>
  </div>
);

/* ── Accordion item ── */
const AccordionRow = ({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div
    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
      isOpen
        ? "border-neutral-200 bg-white shadow-md shadow-neutral-100"
        : "border-neutral-200 bg-white hover:border-neutral-300"
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-4 px-6 py-5 text-left"
      aria-expanded={isOpen}
    >
      {/* <img src="/image/accordion-check.svg" alt="" /> */}
      {/* Step indicator */}
      {
        isOpen ? (
          <img src="/image/accordion-check.svg" alt="" />
        ) : (
          <p className="bg-neutral-100 text-neutral-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm transition-all duration-300">
            {
              String(item.id).padStart(2, "0")
            }
          </p>
        )
      }

      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-base transition-colors ${isOpen ? "text-neutral-900" : "text-neutral-700"}`}>
          {item.title}
        </p>
        {!isOpen && (
          <p className="text-sm text-neutral-400 truncate mt-0.5 max-w-xs">
            {item.description.slice(0, 52)}…
          </p>
        )}
      </div>

      {/* Chevron */}
      <div
        className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180 bg-neutral-50" : "rotate-0 bg-white"
        }`}
      >
        <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>

    {/* Expanded content */}
    <div
      className={`transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="px-6 pb-6 pl-20">
        <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
        {item.preview}
      </div>
    </div>
  </div>
);

/* ── Main section ── */
export default function WhyChooseUs() {
  const [openId, setOpenId] = useState<number>(2);

  return (
    <section className="w-full min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── Left ── */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit bg-white border border-neutral-200 rounded-full px-3.5 py-1.5 shadow-sm">
            <svg className="w-3.5 h-3.5 text-[#0E7BB2]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-neutral-500">How it works?</span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Why Choose
              <br />
              <span className="text-[#0E7BB2]">RendBit?</span>
            </h2>
            <p className="mt-5 text-base text-neutral-500 leading-relaxed max-w-sm">
              Experience the future of cross-border payment design for speed,
              reliability, and safety for the African money transfers market.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#0E7BB2] font-semibold text-base hover:gap-3 transition-all duration-200 group w-fit"
          >
            Get started
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* Spacer + social proof */}
          <div className="pt-4 border-t border-neutral-200 space-y-3">
            <p className="text-sm text-neutral-700">
              <span className="font-semibold">All in real time,</span>{" "}
              <span className="text-neutral-500">
                verify accounts, monitor activity, and ensure compliance standards.
              </span>
            </p>
            <AvatarStack />
          </div>
        </div>

        {/* ── Right — Accordion ── */}
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <AccordionRow
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? 0 : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}