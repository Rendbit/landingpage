import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

type AccordionItem = { id: number; title: string; description: string; preview?: React.ReactNode; };

const items: AccordionItem[] = [
  { id: 1, title: "Fast Global Transfers", description: "Send money anywhere in the world in minutes, not days. Our real-time rails connect 180+ countries with guaranteed delivery windows." },
  { id: 2, title: "Low & Transparent Fees", description: "No hidden charges. See exactly what you pay upfront with our transparent fee structure. Save up to 90% on transfer costs.", preview: <img src="/image/accordion-image.svg" alt="" /> },
  { id: 3, title: "Secure & Compliant", description: "Bank-level security with AES-256 encryption, KYC verification, and full regulatory compliance across every market we operate in." },
  { id: 4, title: "Real-Time Monitoring", description: "Verify accounts, monitor activity, and ensure compliance standards, all in real time with instant alerts and audit-ready logs." },
];

export default function WhyChooseUs() {
  const [openId, setOpenId] = useState<number>(2);
  const { isDark } = useTheme();

  const bg = isDark ? "#0f0f0f" : "#ffffff";
  const cardBg = isDark ? "#1a1a1a" : "#ffffff";
  const cardBgOpen = isDark ? "#1f1f1f" : "#ffffff";
  const border = isDark ? "#2a2a2a" : "#e5e7eb";
  const badgeBg = isDark ? "#1a1a1a" : "#ffffff";
  const textPrimary = isDark ? "#f5f5f5" : "#111827";
  const textMuted = isDark ? "#9ca3af" : "#6b7280";
  const textSemi = isDark ? "#d1d5db" : "#374151";
  const stepBg = isDark ? "#2a2a2a" : "#f3f4f6";
  const stepText = isDark ? "#9ca3af" : "#6b7280";
  const chevronBg = isDark ? "#2a2a2a" : "#ffffff";
  const divider = isDark ? "#2a2a2a" : "#e5e7eb";
  const accentColor = "#0E7BB2";

  const TrustBadges = () => (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {["Bank-grade security", "Full KYC verification", "Multi-currency wallet"].map((t) => (
        <div key={t} className="flex items-center gap-1.5">
          <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0" fill="none">
            <circle cx="10" cy="10" r="8.5" stroke={accentColor} strokeOpacity="0.35" strokeWidth="1.5" />
            <path d="M6 10.2l2.4 2.4L14 7.2" stroke={accentColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[13px] font-medium" style={{ color: textSemi }}>{t}</span>
        </div>
      ))}
    </div>
  );

  const AccordionRow = ({ item, isOpen, onToggle }: { item: AccordionItem; isOpen: boolean; onToggle: () => void }) => (
    <div
      className="rounded-2xl transition-all duration-300 overflow-hidden"
      style={{
        border: `1px solid ${border}`,
        background: isOpen ? cardBgOpen : cardBg,
        boxShadow: isOpen ? (isDark ? "0 4px 24px rgba(0,0,0,0.4)" : "0 4px 24px rgba(0,0,0,0.06)") : "none",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5 text-left"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <img src="/image/accordion-check.svg" alt="" />
        ) : (
          <div
            className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm"
            style={{ background: stepBg, color: stepText }}
          >
            {String(item.id).padStart(2, "0")}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[14px] md:text-base" style={{ color: isOpen ? textPrimary : textSemi }}>
            {item.title}
          </p>
          {!isOpen && (
            <p className="text-[12px] md:text-sm truncate mt-0.5 max-w-[200px] sm:max-w-xs" style={{ color: textMuted }}>
              {item.description.slice(0, 52)}…
            </p>
          )}
        </div>

        <div
          className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          style={{ border: `1px solid ${border}`, background: chevronBg }}
        >
          <svg className="w-3.5 h-3.5 md:w-4 md:h-4" style={{ color: textMuted }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="px-4 md:px-6 pb-5 md:pb-6 pl-14 md:pl-20">
          <p className="text-[12px] md:text-sm leading-relaxed" style={{ color: textMuted }}>{item.description}</p>
          {item.preview}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full min-h-screen flex items-center py-12 md:py-20 px-4 md:px-6" id="why-choose-us" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* Left */}
        <div className="flex flex-col gap-6 md:gap-8 lg:sticky lg:top-20">
          <div
            className="inline-flex items-center gap-2 w-fit rounded-full px-3.5 py-1.5"
            style={{ background: badgeBg, border: `1px solid ${border}` }}
          >
            <svg className="w-3.5 h-3.5" fill={accentColor} viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
            </svg>
            <span className="text-xs font-medium" style={{ color: textMuted }}>How it works?</span>
          </div>

          <div>
            <h2 className="text-[36px] sm:text-[44px] md:text-5xl font-bold tracking-tight leading-[1.1]" style={{ color: textPrimary }}>
              Why Choose<br />
              <span style={{ color: accentColor }}>RendBit?</span>
            </h2>
            <p className="mt-4 md:mt-5 text-[13px] md:text-base leading-relaxed max-w-sm" style={{ color: textMuted }}>
              Experience the future of cross-border payment design for speed,
              reliability, and safety for the African money transfers market.
            </p>
          </div>

          <a href="https://finance.rendbit.com/#/create-account" className="inline-flex items-center gap-2 font-semibold text-[14px] md:text-base hover:gap-3 transition-all duration-200 group w-fit" style={{ color: accentColor }}>
            Get started
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>

          <div className="pt-4" style={{ borderTop: `1px solid ${divider}` }}>
            <p className="text-[13px] md:text-sm mb-3" style={{ color: textSemi }}>
              <span className="font-semibold">All in real time,</span>{" "}
              <span style={{ color: textMuted }}>verify accounts, monitor activity, and ensure compliance standards.</span>
            </p>
            <TrustBadges />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <AccordionRow key={item.id} item={item} isOpen={openId === item.id} onToggle={() => setOpenId(openId === item.id ? 0 : item.id)}/>
          ))}
        </div>
      </div>
    </section>
  );
}
