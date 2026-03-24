import { useState } from "react";

type Testimonial = {
  company: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    company: "Synergy",
    quote:
      "Setting up smart spend limits and approvals took minutes — now our team moves faster.",
    author: "James Brown",
    role: "Head of Finance",
    initials: "JB",
    color: "bg-blue-100 text-blue-700",
  },
  {
    company: "Apex",
    quote:
      "Love how fast we integrated our banks, wallets, and started tracking expenses in real-time.",
    author: "Arthur Taylor",
    role: "Finance Ops Lead",
    initials: "AT",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    company: "Horizon",
    quote:
      "Audit prep went from painful to painless. This tool just works and saves hours every week.",
    author: "Sophia Williams",
    role: "CFO",
    initials: "SW",
    color: "bg-violet-100 text-violet-700",
  },
  {
    company: "Pulse",
    quote:
      "We automated multi-step approvals and finally stopped chasing down manual receipts.",
    author: "Matthew Johnson",
    role: "Controller",
    initials: "MJ",
    color: "bg-amber-100 text-amber-700",
  },
  {
    company: "Catalyst",
    quote:
      "Smart controls, simple interface. It's the only tool our finance ops team actually enjoys using.",
    author: "Laura Perez",
    role: "VP Finance",
    initials: "LP",
    color: "bg-rose-100 text-rose-700",
  },
  {
    company: "Solaris",
    quote:
      "Vendor payments used to be messy. Now we track, approve, and sync everything instantly.",
    author: "Emma Wright",
    role: "Treasury Manager",
    initials: "EW",
    color: "bg-cyan-100 text-cyan-700",
  },
];

const CompanyLogo = ({ letter, color }: { letter: string; color: string }) => (
  <div
    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${color} flex-shrink-0`}
  >
    {letter}
  </div>
);

const QuoteIcon = () => (
  <svg
    className="w-8 h-8 text-neutral-200"
    fill="currentColor"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.21 1.79-4 4-4V8zm16 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.21 1.79-4 4-4V8z" />
  </svg>
);

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
        group relative flex flex-col gap-5 rounded-2xl border bg-white p-7
        transition-all duration-300 ease-out cursor-default
        ${hovered ? "border-neutral-300 shadow-lg shadow-neutral-100 -translate-y-1" : "border-neutral-200 shadow-sm"}
      `}
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Company */}
      <div className="flex items-center gap-2.5">
        <CompanyLogo
          letter={testimonial.company[0]}
          color={testimonial.color}
        />
        <span className="text-sm font-semibold text-neutral-800 tracking-tight">
          {testimonial.company}
          <sup className="text-neutral-400 font-normal ml-0.5 text-[10px]">
            ™
          </sup>
        </span>
      </div>

      {/* Quote icon */}
      <div className="absolute top-7 right-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <QuoteIcon />
      </div>

      {/* Quote */}
      <p className="text-[15px] leading-relaxed text-neutral-700 flex-1">
        {testimonial.quote}
      </p>

      {/* Divider */}
      <div className="h-px w-full bg-neutral-100" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${testimonial.color}`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-900 leading-tight">
            {testimonial.author}
          </p>
          <p className="text-xs text-neutral-400 leading-tight mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
              Trusted by finance leaders
            </span>
          </div>

          <h2 className="text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-5">
            Trusted by teams who{" "}
            <span className="relative inline-block">
              <span className="relative z-10">move money</span>
              <span
                className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 rounded-sm -z-0"
                aria-hidden="true"
              />
            </span>
          </h2>

          <p className="text-base text-neutral-500 max-w-md mx-auto leading-relaxed">
            Reduce risk, gain visibility, and help your finance team stay
            focused — not buried in approvals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.company} testimonial={t} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-400 mb-4">
            Join 2,000+ finance teams already using Rendbit
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-700 transition-colors">
              Get started free
            </button>
            <button className="px-5 py-2.5 border border-neutral-200 text-neutral-700 text-sm font-medium rounded-xl hover:bg-white hover:border-neutral-300 transition-colors bg-transparent">
              See all stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}