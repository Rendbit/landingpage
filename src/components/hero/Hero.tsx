import { useTheme } from "../../context/ThemeContext";

const ArrowUpRightIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
    <path d="M3 13L13 3M13 3H6M13 3v7"/>
  </svg>
);

const PartnerLogos = ({ isDark }: { isDark: boolean }) => (
  <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
    {["Synergy™", "Horizon™", "Phoenix™", "Pulse™", "Solaris™"].map((name) => (
      <div
        key={name}
        className="flex items-center gap-1.5"
        style={{ color: isDark ? "#6b7280" : "#9ca3af" }}
      >
        <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor" opacity="0.4">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M6 10l2.5 2.5L14 7" strokeWidth="1.5" stroke="currentColor" fill="none"/>
        </svg>
        <span className="text-[13px] font-medium tracking-tight">{name}</span>
      </div>
    ))}
  </div>
);

const Hero = () => {
  const { isDark } = useTheme();

  const surface = isDark ? "#1a1a1a" : "#F5F5F5";
  const cardBg = isDark ? "#111111" : "#ffffff";
  const textPrimary = isDark ? "#f5f5f5" : "#171717";
  const textMuted = isDark ? "#9ca3af" : "#A3A3A3";
  const textSemi = isDark ? "#d1d5db" : "#5C5C5C";
  const border = isDark ? "#2a2a2a" : "#e5e7eb";
  const badgeBg = isDark ? "#1f1f1f" : "#ffffff";

  return (
    <section style={{ minHeight: "100vh", position: "relative" }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 md:pt-10 pb-4">

        {/* Top row: badge + theme toggle */}
        <div className="flex justify-center items-center mb-6 md:mb-8">
          <div
            className="flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ background: badgeBg, border: `1px solid ${border}`, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}
          >
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide uppercase"
              style={{ background: textPrimary, color: isDark ? "#0f0f0f" : "#ffffff" }}
            >
              NEW
            </span>
            <span className="text-[12px] md:text-[13px] font-medium" style={{ color: textPrimary }}>
              All-in-one crypto dashboard
            </span>
            <ArrowUpRightIcon />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-4 md:mb-5">
          <h1
            style={{
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: textPrimary,
            }}
            className="text-[36px] sm:text-[46px] md:text-[58px]"
          >
            Send Money Across<br />
            Africa Instantly
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-center text-[14px] md:text-[16px] max-w-[500px] mx-auto leading-relaxed mb-6 md:mb-8 px-2"
          style={{ color: textPrimary }}
        >
          Break free from banking restrictions. Transfer money seamlessly across
          African countries using Stellar XLM as your currency bridge.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 md:mb-12">
          <a href="https://finance.rendbit.com/#/create-account"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold w-full sm:w-auto justify-center"
            style={{ background: "#0F7CB3", color: "#ffffff" }}
          >
            Get Started Today
            <ArrowUpRightIcon />
          </a>
          <a href="#see-how-it-works"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-medium w-full sm:w-auto justify-center cursor-pointer"
            style={{
              background: cardBg,
              border: `1px solid ${border}`,
              color: isDark ? "#d1d5db" : "#374151",
            }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" style={{ color: textMuted }}>
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
            See how it works
          </a>
        </div>

        {/* Main card area */}
        <div style={{ background: cardBg }} className="w-full px-2 md:px-6 py-6 md:py-10">
          <div className="max-w-[1100px] mx-auto">

            {/* Top row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-6 gap-4 sm:gap-0 sm:px-1">
              <div className="flex flex-col items-center sm:items-end gap-1 sm:ml-[110px]">
                <img src="/image/avatars.svg" alt="" className="grayscale"/>
                <p className="text-[12px] md:text-[13px]" style={{ color: textMuted }}>
                  Trusted by <span className="font-semibold" style={{ color: textSemi }}>200,000+</span> crypto traders
                </p>
              </div>
              <div className="sm:mr-[140px] flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <img src="/image/appstore.svg" alt="" />
                  <p className="text-[12px] md:text-[13px] font-semibold" style={{ color: textSemi }}>4.9/5 Appstore</p>
                </div>
                <p className="text-[12px] md:text-[13px]" style={{ color: textMuted }}>
                  Over <span className="font-semibold" style={{ color: textSemi }}>$500M</span> swapped securely
                </p>
              </div>
            </div>

            {/* Gray card area */}
            <div className="relative">
              <div
                className="rounded-3xl w-full flex flex-col justify-between px-4 md:px-8 pt-6 md:pt-10 pb-6 md:pb-8"
                style={{ background: surface, minHeight: "400px" }}
              >
                <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-0">
                  <p
                    className="text-[12px] md:text-[13px] leading-relaxed md:text-right w-full md:w-[220px] md:border-r md:pr-9 md:ml-[80px]"
                    style={{ color: textMuted, borderColor: border }}
                  >
                    Track swaps, <span className="font-semibold" style={{ color: textSemi }}>monitor</span> tokens, and
                    stay <span className="font-semibold" style={{ color: textSemi }}>connected</span> with your assets while on the move.
                  </p>
                  <div className="hidden md:block w-[300px]" />
                  <p
                    className="text-[12px] md:text-[13px] leading-relaxed w-full md:w-[220px] md:border-l md:pl-9 md:mr-[80px]"
                    style={{ color: textMuted, borderColor: border }}
                  >
                    Replace scattered <span className="font-semibold" style={{ color: textSemi }}>wallets</span> with one{" "}
                    <span className="font-semibold" style={{ color: textSemi }}>mobile-first</span> dashboard{" "}
                    <span className="font-semibold" style={{ color: textSemi }}>built</span> for active crypto users.
                  </p>
                </div>

                <div className="flex md:hidden justify-center my-4">
                  <img src="/image/hero-phone-img.svg" alt="" className="w-[220px] sm:w-[280px]" />
                </div>

                <div className="flex items-center justify-between mt-2 md:mt-0">
                  <a href="#"><img src="/image/apple-store.svg" alt="" /></a>
                  <a href="#"><img src="/image/google-play.svg" alt="" /></a>
                </div>
              </div>

              <div className="absolute inset-0 flex items-start justify-center pointer-events-none top-[-90px] hidden md:flex">
                <img src="/image/hero-phone-img.svg" alt="" className="w-[500px]" />
              </div>
            </div>
          </div>
        </div>

        <PartnerLogos isDark={isDark} />
      </div>
    </section>
  );
};

export default Hero;