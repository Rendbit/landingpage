import React from "react";
import { Send, PiggyBank, BarChart2, UserCircle, RefreshCw, Users, BookMarked } from "lucide-react";

// ── Placeholder phone image — swap src for your real image later ──────────
const PhonePlaceholder: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`bg-gray-200 rounded-[2rem] flex items-center justify-center text-gray-400 text-xs ${className}`}>
    {/* Replace this div with: <img src="/image/your-phone.svg" alt="" className="w-full h-auto" /> */}
    <img src="/image/seamless-3.svg" alt="" className="w-full h-auto" />
  </div>
);

const PhoneMockupOne: React.FC = () => (
  <div className="absolute bottom-0 right-4 w-[160px] sm:w-[200px] md:w-[240px] pointer-events-none select-none">
    <img src="/image/seamless-3.svg" alt="" className="w-full h-auto" />
  </div>
);

const PhoneMockupTwo: React.FC = () => (
  <div className="absolute bottom-0 right-4 w-[140px] sm:w-[175px] md:w-[210px] pointer-events-none select-none">
    <img src="/image/seamless-5.svg" alt="" className="w-full h-auto" />
  </div>
);

// ── Icon placeholder — swap for your SVG image later ─────────────────────
const IconBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600">
    {children}
  </div>
);

export default function SeamlessFinancial() {
  return (
    <div>

      <section className="w-full bg-white px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-[1100px] mx-auto">

          {/* ── Header ─────────────────────────────────────────────────────── */}
          <div className="flex flex-col items-center text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-4 md:mb-5">
              <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[12px] font-medium text-gray-500 tracking-wide">
                Smarter tools for finance ops
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[38px] md:text-[clamp(32px,5vw,56px)] font-bold text-gray-900 leading-tight tracking-tight mb-4 md:mb-5 max-w-2xl px-2">
              Seamless Financial Solutions for Everyone
            </h2>

            <p className="text-[13px] md:text-[15px] text-gray-400 leading-relaxed max-w-[480px] px-2">
              Discover how RendBit simplifies your financial transactions with
              cutting-edge technology and user-friendly features.
            </p>
          </div>

          {/* ── Row 1 ──────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

            {/* Deposit — full width on mobile, 1 col on desktop */}
            <div className="md:col-span-1 bg-[#F7F7F7] rounded-2xl p-5 md:p-7 flex flex-col justify-between min-h-[240px] md:min-h-[340px]">
              <img src="/image/seamless-1.svg" alt="" className="w-12 h-12" />
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 mb-2">Deposit</h3>
                <p className="text-[12.5px] md:text-[13.5px] text-gray-400 leading-relaxed">
                  Use a card, Apple Pay, Google Pay or PayPal to buy crypto fast. We also accept
                  bank transfers and wires in applicable jurisdictions.
                </p>
              </div>
            </div>

            {/* Swap — full width on mobile, 2 cols on desktop */}
            <div className="flex flex-col justify-between md:col-span-2 bg-[#F7F7F7] rounded-2xl p-5 md:p-7 relative min-h-[260px] md:min-h-[340px] overflow-hidden">
              <img src="/image/seamless-2.svg" alt="" className="w-12 h-12" />
              <div className="mt-4 md:mt-6 max-w-[200px] md:max-w-[220px]">
                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 mb-2">Swap</h3>
                <p className="text-[12.5px] md:text-[13.5px] text-gray-400 leading-relaxed">
                  Swap easily on RendBit on the Stellar Blockchain.
                </p>
              </div>
              <PhoneMockupOne />
            </div>

          </div>

          {/* ── Row 2 ──────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

            {/* Transfer — full width on mobile, 2 cols on desktop */}
            <div className="flex flex-col justify-between md:col-span-2 bg-[#F7F7F7] rounded-2xl p-5 md:p-7 relative min-h-[260px] md:min-h-[340px] overflow-hidden">
              <img src="/image/seamless-4.svg" alt="" className="w-12 h-12" />
              <div className="mt-4 md:mt-6 max-w-[200px] md:max-w-[220px]">
                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 mb-2">Transfer</h3>
                <p className="text-[12.5px] md:text-[13.5px] text-gray-400 leading-relaxed">
                  Effortlessly transfer money across Africa without the need to create additional
                  accounts to support different currencies.
                </p>
              </div>
              <PhoneMockupTwo />
            </div>

            {/* AI Savings — full width on mobile, 1 col on desktop */}
            <div className="md:col-span-1 bg-[#F7F7F7] rounded-2xl p-5 md:p-7 flex flex-col justify-between min-h-[240px] md:min-h-[340px]">
              <img src="/image/seamless-6.svg" alt="" className="w-12 h-12" />
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 mb-2">AI Savings</h3>
                <p className="text-[12.5px] md:text-[13.5px] text-gray-400 leading-relaxed">
                  Our AI system analyses your spending pattern and suggest a saving structure for
                  you, and help you save.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section
        className="relative overflow-hidden px-0 w-[92%] mx-auto rounded-[16px] mb-12 md:mb-16"
      >
        {/* ── Background image ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image/app-section-bg.svg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0F7CB3] -z-10" />
        </div>

        {/* ── Content wrapper ── */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 md:gap-10 px-5 pt-10 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-4 lg:px-20 md:pt-14 lg:pt-20">

          {/* ── Left: copy + CTAs ── */}
          <div className="flex flex-col gap-5 md:gap-6 md:max-w-[52%] items-center md:items-start text-center md:text-left">
            <h1 className="font-extrabold leading-tight tracking-tight text-white"
              style={{
                fontSize: "clamp(1.6rem, 5vw, 3.25rem)",
              }}
            >
              Start Sending Money Today
            </h1>

            <p
              className="text-white/90 leading-relaxed"
              style={{
                fontSize: "clamp(0.875rem, 2vw, 1.1rem)",
                maxWidth: "480px",
              }}
            >
              Join thousands of users who trust RendBit for fast, secure,
              and affordable international transfers
            </p>

            {/* Store badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-1">
              <a href="#">
                <img src="/image/apple-store.svg" alt="" />
              </a>
              <a href="#">
                <img src="/image/google-play.svg" alt="" />
              </a>
            </div>
          </div>

          {/* ── Right: phone image ── */}
          <div className="relative flex justify-center md:justify-end md:max-w-[44%] w-full">
            <img
              src="/image/app-section.svg"
              alt="RendBit app on a smartphone"
              className="relative z-10 w-full max-w-[180px] drop-shadow-2xl sm:max-w-[220px] md:max-w-[300px] lg:max-w-[360px]"
              style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.35))" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}