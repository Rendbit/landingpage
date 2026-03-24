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
  <div className="absolute bottom-0 right-4 w-[240px] pointer-events-none select-none">
    {/* ↓ Replace with your image */}
    {/* <img src="/image/seamless-phone-1.svg" alt="" className="w-full h-auto" /> */}
    <img src="/image/seamless-3.svg" alt="" className="w-full h-auto" />
    {/* <PhonePlaceholder className="h-[260px] w-full" /> */}
  </div>
);

const PhoneMockupTwo: React.FC = () => (
  <div className="absolute bottom-0 right-4 w-[210px] pointer-events-none select-none">
    {/* ↓ Replace with your image */}
    {/* <img src="/image/seamless-phone-2.svg" alt="" className="w-full h-auto" /> */}
    <img src="/image/seamless-5.svg" alt="" className="w-full h-auto" />
  </div>
);

// ── Icon placeholder — swap for your SVG image later ─────────────────────
const IconBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  // Replace this with: <img src="/image/seamless-X.svg" alt="" className="w-[50px] h-[50px] object-contain" />
  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600">
    {children}
  </div>
);

export default function SeamlessFinancial() {
  return (
    <div>

      <section className="w-full bg-white px-6 py-20">
        <div className="max-w-[1100px] mx-auto">

          {/* ── Header ─────────────────────────────────────────────────────── */}
          <div className="flex flex-col items-center text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 mb-5">
              <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-[12px] font-medium text-gray-500 tracking-wide">
                Smarter tools for finance ops
              </span>
            </div>

            <h2 className="text-[clamp(32px,5vw,56px)] font-bold text-gray-900 leading-tight tracking-tight mb-5 max-w-2xl">
              Seamless Financial Solutions for Everyone
            </h2>

            <p className="text-[15px] text-gray-400 leading-relaxed max-w-[480px]">
              Discover how RendBit simplifies your financial transactions with
              cutting-edge technology and user-friendly features.
            </p>
          </div>

          {/* ── Row 1 ──────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-3 gap-4 mb-4">

            {/* Deposit — 1 col */}
            <div className="col-span-1 bg-[#F7F7F7] rounded-2xl p-7 flex flex-col justify-between min-h-[340px]">
              <img src="/image/seamless-1.svg" alt="" className="w-12 h-12" />
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-2">Deposit</h3>
                <p className="text-[13.5px] text-gray-400 leading-relaxed">
                  Use a card, Apple Pay, Google Pay or PayPal to buy crypto fast. We also accept
                  bank transfers and wires in applicable jurisdictions.
                </p>
              </div>
            </div>

            {/* Swap — 2 cols with phone mockup */}
            <div className="col-span-2 bg-[#F7F7F7] rounded-2xl p-7 relative min-h-[340px] overflow-hidden">
              <img src="/image/seamless-2.svg" alt="" className="w-12 h-12" />
              <div className="mt-6 max-w-[220px]">
                <h3 className="text-[20px] font-bold text-gray-900 mb-2">Swap</h3>
                <p className="text-[13.5px] text-gray-400 leading-relaxed">
                  Swap easily on RendBit on the Stellar Blockchain.
                </p>
              </div>
              <PhoneMockupOne />
            </div>

          </div>

          {/* ── Row 2 ──────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-3 gap-4 mb-4">

            {/* Swap — 2 cols with phone mockup */}
            <div className="col-span-2 bg-[#F7F7F7] rounded-2xl p-7 relative min-h-[340px] overflow-hidden">
              <img src="/image/seamless-4.svg" alt="" className="w-12 h-12" />
              <div className="mt-6 max-w-[220px]">
                <h3 className="text-[20px] font-bold text-gray-900 mb-2">Transfer</h3>
                <p className="text-[13.5px] text-gray-400 leading-relaxed">
                  Effortlessly transfer money across Africa without the need to create additional
                  accounts to support different currencies.
                </p>
              </div>
              <PhoneMockupTwo />
            </div>

            {/* Deposit — 1 col */}
            <div className="col-span-1 bg-[#F7F7F7] rounded-2xl p-7 flex flex-col justify-between min-h-[340px]">
              <img src="/image/seamless-6.svg" alt="" className="w-12 h-12" />
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-2">AI Savings</h3>
                <p className="text-[13.5px] text-gray-400 leading-relaxed">
                  Our AI system analyses your spending pattern and suggest a saving structure for
                  you, and help you save.
                </p>
              </div>
            </div>

          </div>

          
          
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 w-[90%] mx-auto rounded-[16px] mb-16"
        // style={{ minHeight: "420px" }}
      >
        {/* ── Background image ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image/app-section-bg.svg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
          {/* Fallback solid colour shown while image loads or if missing */}
          <div className="absolute inset-0 bg-[#0F7CB3] -z-10" />
        </div>
  
        {/* ── Content wrapper ── */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pt-14 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-4 lg:px-20 lg:pt-20">
  
          {/* ── Left: copy + CTAs ── */}
          <div className="flex flex-col gap-6 md:max-w-[52%]">
            <h1 className="font-extrabold leading-tight tracking-tight text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
              }}
            >
              Start Sending Money Today
            </h1>
  
            <p
              className="text-white/90 leading-relaxed"
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                maxWidth: "480px",
              }}
            >
              Join thousands of users who trust RendBit for fast, secure,
              and affordable international transfers
            </p>
  
            {/* Store badges */}
            <div className="flex flex-wrap gap-4 pt-1">
              {/* App Store */}
                <a
                  href="#"
                >
                  <img src="/image/apple-store.svg" alt="" />
                </a>
  
              {/* Google Play */}
                <a
                  href="#"
                >
                  <img src="/image/google-play.svg" alt="" />
                </a>
            </div>
          </div>
  
          {/* ── Right: phone image ── */}
          <div className="relative flex justify-center md:justify-end md:max-w-[44%] w-full">
            {/*
              Drop-shadow gives the phone a sense of depth against
              whatever background image you plug in.
            */}
            <img
              src="/image/app-section.svg"
              alt="RendBit app on a smartphone"
              className="relative z-10 w-full max-w-[220px] drop-shadow-2xl sm:max-w-[260px] md:max-w-[300px] lg:max-w-[360px]"
              style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.35))" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}