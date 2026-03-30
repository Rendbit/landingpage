import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

type Testimonial = {
  company: string; quote: string; author: string; role: string; initials: string;
  lightBg: string; lightText: string;
  darkBg: string; darkText: string;
};

const testimonials: Testimonial[] = [
  { company: "Synergy", quote: "Setting up smart spend limits and approvals took minutes — now our team moves faster.", author: "James Brown", role: "Head of Finance", initials: "JB", lightBg: "#dbeafe", lightText: "#1d4ed8", darkBg: "#1e3a5f", darkText: "#93c5fd" },
  { company: "Apex", quote: "Love how fast we integrated our banks, wallets, and started tracking expenses in real-time.", author: "Arthur Taylor", role: "Finance Ops Lead", initials: "AT", lightBg: "#d1fae5", lightText: "#065f46", darkBg: "#064e3b", darkText: "#6ee7b7" },
  { company: "Horizon", quote: "Audit prep went from painful to painless. This tool just works and saves hours every week.", author: "Sophia Williams", role: "CFO", initials: "SW", lightBg: "#ede9fe", lightText: "#6d28d9", darkBg: "#2e1065", darkText: "#c4b5fd" },
  { company: "Pulse", quote: "We automated multi-step approvals and finally stopped chasing down manual receipts.", author: "Matthew Johnson", role: "Controller", initials: "MJ", lightBg: "#fef3c7", lightText: "#92400e", darkBg: "#451a03", darkText: "#fcd34d" },
  { company: "Catalyst", quote: "Smart controls, simple interface. It's the only tool our finance ops team actually enjoys using.", author: "Laura Perez", role: "VP Finance", initials: "LP", lightBg: "#ffe4e6", lightText: "#9f1239", darkBg: "#4c0519", darkText: "#fda4af" },
  { company: "Solaris", quote: "Vendor payments used to be messy. Now we track, approve, and sync everything instantly.", author: "Emma Wright", role: "Treasury Manager", initials: "EW", lightBg: "#cffafe", lightText: "#155e75", darkBg: "#083344", darkText: "#67e8f9" },
];

export default function Testimonials() {
  const { isDark } = useTheme();

  const bg = isDark ? "#0f0f0f" : "#ffffff";
  const cardBg = isDark ? "#1a1a1a" : "#ffffff";
  const border = isDark ? "#2a2a2a" : "#e5e7eb";
  const borderHover = isDark ? "#3a3a3a" : "#d1d5db";
  const badgeBg = isDark ? "#1a1a1a" : "#ffffff";
  const textPrimary = isDark ? "#f5f5f5" : "#111827";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const textBody = isDark ? "#d1d5db" : "#374151";
  const divider = isDark ? "#2a2a2a" : "#f3f4f6";
  const btnPrimaryBg = isDark ? "#f5f5f5" : "#111827";
  const btnPrimaryText = isDark ? "#111827" : "#ffffff";
  const btnPrimaryHover = isDark ? "#e5e5e5" : "#374151";

  const QuoteIcon = () => (
    <svg className="w-8 h-8" style={{ color: isDark ? "#2a2a2a" : "#e5e7eb" }} fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.21 1.79-4 4-4V8zm16 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.21 1.79-4 4-4V8z"/>
    </svg>
  );

  const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
    const [hovered, setHovered] = useState(false);

    const iconStyle = isDark
      ? { background: testimonial.darkBg, color: testimonial.darkText }
      : { background: testimonial.lightBg, color: testimonial.lightText };

    return (
      <div
        className="relative flex flex-col gap-4 md:gap-5 rounded-2xl p-5 md:p-7 transition-all duration-300 ease-out cursor-default"
        style={{
          background: cardBg,
          border: `1px solid ${hovered ? borderHover : border}`,
          transform: hovered ? "translateY(-4px)" : "none",
          boxShadow: hovered ? (isDark ? "0 8px 32px rgba(0,0,0,0.5)" : "0 8px 32px rgba(0,0,0,0.08)") : "none",
          animationDelay: `${index * 80}ms`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Company */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={iconStyle}
          >
            {testimonial.company[0]}
          </div>
          <span className="text-sm font-semibold tracking-tight" style={{ color: textPrimary }}>
            {testimonial.company}<sup className="font-normal ml-0.5 text-[10px]" style={{ color: textMuted }}>™</sup>
          </span>
        </div>

        {/* Quote icon */}
        <div className={`absolute top-5 right-5 md:top-7 md:right-7 transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <QuoteIcon />
        </div>

        {/* Quote */}
        <p className="text-[13.5px] md:text-[15px] leading-relaxed flex-1" style={{ color: textBody }}>
          {testimonial.quote}
        </p>

        <div className="h-px w-full" style={{ background: divider }} />

        {/* Author */}
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={iconStyle}
          >
            {testimonial.initials}
          </div>
          <div>
            <p className="text-sm font-medium leading-tight" style={{ color: textPrimary }}>{testimonial.author}</p>
            <p className="text-xs leading-tight mt-0.5" style={{ color: textMuted }}>{testimonial.role}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-14 md:py-24 px-4 md:px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 md:mb-6"
            style={{ background: badgeBg, border: `1px solid ${border}` }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase" style={{ color: textMuted }}>
              Trusted by finance leaders
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[38px] md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4 md:mb-5 px-2" style={{ color: textPrimary }}>
            Trusted by teams who{" "}
            <span className="relative inline-block">
              <span className="relative z-10">move money</span>
              <span
                className="absolute bottom-1 left-0 w-full h-3 rounded-sm -z-0"
                style={{ background: isDark ? "#1e3a5f" : "#dbeafe" }}
                aria-hidden="true"
              />
            </span>
          </h2>

          <p className="text-[13px] md:text-base max-w-md mx-auto leading-relaxed px-2" style={{ color: textMuted }}>
            Reduce risk, gain visibility, and help your finance team stay focused — not buried in approvals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.company} testimonial={t} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 md:mt-14 text-center">
          <p className="text-sm mb-4" style={{ color: textMuted }}>
            Join 2,000+ finance teams already using Rendbit
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://finance.rendbit.com/#/create-account"
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium rounded-xl transition-colors"
              style={{ background: btnPrimaryBg, color: btnPrimaryText }}
              onMouseEnter={e => (e.currentTarget.style.background = btnPrimaryHover)}
              onMouseLeave={e => (e.currentTarget.style.background = btnPrimaryBg)}
            >
              Get started free
            </a>
            {/* <button
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium rounded-xl transition-colors"
              style={{ background: "transparent", border: `1px solid ${border}`, color: textBody }}
              onMouseEnter={e => (e.currentTarget.style.background = isDark ? "#1a1a1a" : "#f9fafb")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              See all stories
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}