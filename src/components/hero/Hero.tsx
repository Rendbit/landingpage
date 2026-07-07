import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const ArrowUpRightIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
    <path d="M3 13L13 3M13 3H6M13 3v7"/>
  </svg>
);

const PartnerLogos = ({ isDark }: { isDark: boolean }) => (
  <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8">
    {["KYC-verified", "Low fees", "Instant transfers", "Multi-currency", "Bank-grade security"].map((name) => (
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

const BackToTopButton = ({ isDark }: { isDark: boolean }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const btnBg = isDark ? "#1a1a1a" : "#ffffff";
  const btnBorder = isDark ? "#2a2a2a" : "#e5e7eb";
  const btnColor = isDark ? "#f5f5f5" : "#374151";
  const btnShadow = isDark ? "0 4px 16px rgba(0,0,0,0.4)" : "0 4px 16px rgba(0,0,0,0.1)";

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 50,
        width: "44px",
        height: "44px",
        borderRadius: "12px",
        background: btnBg,
        border: `1px solid ${btnBorder}`,
        color: btnColor,
        boxShadow: btnShadow,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = isDark ? "#2a2a2a" : "#f3f4f6")}
      onMouseLeave={e => (e.currentTarget.style.background = btnBg)}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 10 8 6 12 10" />
      </svg>
    </button>
  );
};

const Hero = () => {
  const { isDark } = useTheme();

  const surface = isDark ? "#1a1a1a" : "#F5F5F5";
  const cardBg = isDark ? "#111111" : "#ffffff";
  const textPrimary = isDark ? "#f5f5f5" : "#171717";
  const textMuted = isDark ? "#9ca3af" : "#A3A3A3";
  const textSemi = isDark ? "#d1d5db" : "#5C5C5C";
  const border = isDark ? "#2a2a2a" : "#e5e7eb";
  const badgeBg = isDark ? "#1f1f1f" : "#ffffff";

  const up = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Background graphics: glows + faint grid so it's never plain black */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)", width: 1050, height: 720, background: `radial-gradient(circle, ${isDark ? "rgba(15,124,179,0.22)" : "rgba(15,124,179,0.13)"}, transparent 62%)`, filter: "blur(30px)" }} />
        <div style={{ position: "absolute", top: "160px", right: "-160px", width: 640, height: 640, background: `radial-gradient(circle, ${isDark ? "rgba(106,63,160,0.16)" : "rgba(106,63,160,0.07)"}, transparent 65%)`, filter: "blur(30px)" }} />
        <div style={{ position: "absolute", top: "260px", left: "-160px", width: 560, height: 560, background: `radial-gradient(circle, ${isDark ? "rgba(46,157,98,0.12)" : "rgba(46,157,98,0.06)"}, transparent 66%)`, filter: "blur(30px)" }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(${isDark ? "rgba(255,255,255,0.045)" : "rgba(0,0,0,0.035)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.045)" : "rgba(0,0,0,0.035)"} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          WebkitMaskImage: "radial-gradient(ellipse 78% 55% at 50% 26%, black, transparent 78%)",
          maskImage: "radial-gradient(ellipse 78% 55% at 50% 26%, black, transparent 78%)",
        }} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 pt-8 md:pt-10 pb-4">

        {/* Top row: badge */}
        <motion.div {...up(0)} className="flex justify-center items-center mb-6 md:mb-8">
          <div
            className="flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ background: badgeBg, border: `1px solid ${border}`, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}
          >
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide uppercase"
              style={{ background: textPrimary, color: isDark ? "#0f0f0f" : "#ffffff" }}
            >
              EARLY ACCESS
            </span>
            <span className="text-[12px] md:text-[13px] font-medium" style={{ color: textPrimary }}>
              Cross-border payments, reimagined
            </span>
            <ArrowUpRightIcon />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div {...up(0.12)} className="text-center mb-4 md:mb-5">
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
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...up(0.22)}
          className="text-center text-[14px] md:text-[16px] max-w-[500px] mx-auto leading-relaxed mb-6 md:mb-8 px-2"
          style={{ color: textPrimary }}
        >
          Send, receive and convert money across Africa in seconds. A
          multi-currency wallet with low fees and no banking hassle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...up(0.32)} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 md:mb-12">
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
        </motion.div>

        {/* Main card area */}
        <div className="w-full px-2 md:px-6 py-6 md:py-10">
          <div className="max-w-[1100px] mx-auto">

            {/* Top row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-6 gap-4 sm:gap-0 sm:px-1">
              <div className="flex flex-col items-center sm:items-end gap-1 sm:ml-[110px]">
                <img src="/image/avatars.svg" alt="" className="grayscale"/>
                <p className="text-[12px] md:text-[13px]" style={{ color: textMuted }}>
                  Now in <span className="font-semibold" style={{ color: textSemi }}>early access</span>, join the waitlist
                </p>
              </div>
              <div className="sm:mr-[140px] flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <img src="/image/appstore.svg" alt="" />
                  <p className="text-[12px] md:text-[13px] font-semibold" style={{ color: textSemi }}>Coming to app stores</p>
                </div>
                <p className="text-[12px] md:text-[13px]" style={{ color: textMuted }}>
                  <span className="font-semibold" style={{ color: textSemi }}>Bank-grade</span> security &amp; compliance
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
                    Send, <span className="font-semibold" style={{ color: textSemi }}>receive</span> and convert across
                    currencies, and <span className="font-semibold" style={{ color: textSemi }}>track</span> every transfer in real time.
                  </p>
                  <div className="hidden md:block w-[300px]" />
                  <p
                    className="text-[12px] md:text-[13px] leading-relaxed w-full md:w-[220px] md:border-l md:pl-9 md:mr-[80px]"
                    style={{ color: textMuted, borderColor: border }}
                  >
                    One simple, <span className="font-semibold" style={{ color: textSemi }}>mobile-first</span> wallet{" "}
                    <span className="font-semibold" style={{ color: textSemi }}>built</span> for everyday{" "}
                    <span className="font-semibold" style={{ color: textSemi }}>cross-border</span> payments.
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

              <div className="absolute inset-0 items-start justify-center pointer-events-none top-[-90px] hidden md:flex">
                <img src="/image/hero-phone-img.svg" alt="" className="w-[500px]" />
              </div>
            </div>
          </div>
        </div>

        <PartnerLogos isDark={isDark} />
      </div>

      {/* Back to top */}
      <BackToTopButton isDark={isDark} />
    </section>
  );
};

export default Hero;