import React from "react";
import { BarChart2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

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

export default function SeamlessFinancial() {
  const { isDark } = useTheme();

  const bg = isDark ? "#0f0f0f" : "#ffffff";
  const cardBg = isDark ? "#1a1a1a" : "#F7F7F7";
  const border = isDark ? "#2a2a2a" : "#e5e7eb";
  const badgeBg = isDark ? "#1f1f1f" : "#f3f4f6";
  const textPrimary = isDark ? "#f5f5f5" : "#111827";
  const textMuted = isDark ? "#9ca3af" : "#9ca3af";
  const iconColor = isDark ? "#9ca3af" : "#6b7280";

  return (
    <div>
      <section className="w-full px-4 md:px-6 py-12 md:py-20" id="features" style={{ background: bg }}>
        <div className="max-w-[1100px] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10 md:mb-14">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 md:mb-5"
              style={{ background: badgeBg, border: `1px solid ${border}` }}
            >
              <BarChart2 className="w-3.5 h-3.5" style={{ color: iconColor }} />
              <span className="text-[12px] font-medium tracking-wide" style={{ color: iconColor }}>
                Smarter tools for finance ops
              </span>
            </div>

            <h2
              className="text-[28px] sm:text-[38px] md:text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight mb-4 md:mb-5 max-w-2xl px-2"
              style={{ color: textPrimary }}
            >
              Seamless Financial Solutions for Everyone
            </h2>

            <p className="text-[13px] md:text-[15px] leading-relaxed max-w-[480px] px-2" style={{ color: textMuted }}>
              Discover how RendBit simplifies your financial transactions with
              cutting-edge technology and user-friendly features.
            </p>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div
              className="md:col-span-1 rounded-2xl p-5 md:p-7 flex flex-col justify-between min-h-[240px] md:min-h-[340px]"
              style={{ background: cardBg }}
            >
              <img src="/image/seamless-1.svg" alt="" className="w-12 h-12" />
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold mb-2" style={{ color: textPrimary }}>Deposit</h3>
                <p className="text-[12.5px] md:text-[13.5px] leading-relaxed" style={{ color: textMuted }}>
                  Use a card, Apple Pay, Google Pay or PayPal to buy crypto fast. We also accept
                  bank transfers and wires in applicable jurisdictions.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col justify-between md:col-span-2 rounded-2xl p-5 md:p-7 relative min-h-[260px] md:min-h-[340px] overflow-hidden"
              style={{ background: cardBg }}
            >
              <img src="/image/seamless-2.svg" alt="" className="w-12 h-12" />
              <div className="mt-4 md:mt-6 max-w-[200px] md:max-w-[220px]">
                <h3 className="text-[18px] md:text-[20px] font-bold mb-2" style={{ color: textPrimary }}>Swap</h3>
                <p className="text-[12.5px] md:text-[13.5px] leading-relaxed" style={{ color: textMuted }}>
                  Swap easily on RendBit on the Stellar Blockchain.
                </p>
              </div>
              <PhoneMockupOne />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div
              className="flex flex-col justify-between md:col-span-2 rounded-2xl p-5 md:p-7 relative min-h-[260px] md:min-h-[340px] overflow-hidden"
              style={{ background: cardBg }}
            >
              <img src="/image/seamless-4.svg" alt="" className="w-12 h-12" />
              <div className="mt-4 md:mt-6 max-w-[200px] md:max-w-[220px]">
                <h3 className="text-[18px] md:text-[20px] font-bold mb-2" style={{ color: textPrimary }}>Transfer</h3>
                <p className="text-[12.5px] md:text-[13.5px] leading-relaxed" style={{ color: textMuted }}>
                  Effortlessly transfer money across Africa without the need to create additional
                  accounts to support different currencies.
                </p>
              </div>
              <PhoneMockupTwo />
            </div>

            <div
              className="md:col-span-1 rounded-2xl p-5 md:p-7 flex flex-col justify-between min-h-[240px] md:min-h-[340px]"
              style={{ background: cardBg }}
            >
              <img src="/image/seamless-6.svg" alt="" className="w-12 h-12" />
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold mb-2" style={{ color: textPrimary }}>AI Savings</h3>
                <p className="text-[12.5px] md:text-[13.5px] leading-relaxed" style={{ color: textMuted }}>
                  Our AI system analyses your spending pattern and suggest a saving structure for
                  you, and help you save.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App download banner — always dark, no theme needed */}
      <section className="relative overflow-hidden px-0 w-[92%] mx-auto rounded-[16px] mb-12 md:mb-16">
        <div className="absolute inset-0 z-0">
          <img src="/image/app-section-bg.svg" alt="" aria-hidden="true" className="h-full w-full object-cover object-center"/>
          <div className="absolute inset-0 bg-[#0F7CB3] -z-10" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 md:gap-10 px-5 pt-10 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-20 md:pt-14 lg:pt-20">
          <div className="flex flex-col gap-5 md:gap-6 md:max-w-[52%] items-center md:items-start text-center md:text-left">
            <h1 className="font-extrabold leading-tight tracking-tight text-white" style={{ fontSize: "clamp(1.6rem, 5vw, 3.25rem)" }}>
              Start Sending Money Today
            </h1>
            <p className="text-white/90 leading-relaxed" style={{ fontSize: "clamp(0.875rem, 2vw, 1.1rem)", maxWidth: "480px" }}>
              Join thousands of users who trust RendBit for fast, secure, and affordable international transfers
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-1">
              <a href="#"><img src="/image/apple-store.svg" alt="" /></a>
              <a href="#"><img src="/image/google-play.svg" alt="" /></a>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end md:max-w-[44%] w-full">
            <img src="/image/app-section.svg" alt="RendBit app" className="relative z-10 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[360px]" style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.35))" }}/>
          </div>
        </div>
      </section>
    </div>
  );
}