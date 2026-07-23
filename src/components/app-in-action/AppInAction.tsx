import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import shotDashboard from "../../assets/shots/dashboard.png";
import shotAddMoney from "../../assets/shots/addmoney.png";
import shotConvert from "../../assets/shots/convert.png";
import shotTransactions from "../../assets/shots/transactions.png";
import shotProfile from "../../assets/shots/profile.png";

const steps = [
  { img: shotDashboard, key: "glance" },
  { img: shotAddMoney, key: "fund" },
  { img: shotConvert, key: "convert" },
  { img: shotTransactions, key: "track" },
  { img: shotProfile, key: "secure" },
];

const coins: { src: string; style: CSSProperties; delay: number }[] = [
  { src: "/image/ngn.svg", style: { top: "2%", left: "-4%" }, delay: 0 },
  { src: "/image/usd.svg", style: { bottom: "6%", left: "-2%" }, delay: 0.8 },
  { src: "/image/stellar.svg", style: { top: "16%", right: "-6%" }, delay: 0.4 },
];

const AppInAction = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const [step, setStep] = useState(0);

  const surface = isDark ? "#0d0d0d" : "#F5F5F5";
  const textPrimary = isDark ? "#f5f5f5" : "#171717";
  const textMuted = isDark ? "#9ca3af" : "#5C5C5C";
  const cardBg = isDark ? "#161616" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "#e5e7eb";

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.55, delay },
  });

  return (
    <section id="demo" style={{ background: surface, position: "relative" }} className="py-16 md:py-24 overflow-hidden">
      {/* background glows */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "8%", left: "-6%", width: 540, height: 540, background: `radial-gradient(circle, ${isDark ? "rgba(15,124,179,0.16)" : "rgba(15,124,179,0.08)"}, transparent 65%)`, filter: "blur(30px)" }} />
        <div style={{ position: "absolute", bottom: "-4%", right: "-6%", width: 540, height: 540, background: `radial-gradient(circle, ${isDark ? "rgba(106,63,160,0.14)" : "rgba(106,63,160,0.06)"}, transparent 66%)`, filter: "blur(30px)" }} />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 md:px-6 text-center">
        <motion.p {...reveal(0)} className="text-[12px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#0F7CB3" }}>
          {t("appInAction.eyebrow")}
        </motion.p>
        <motion.h2 {...reveal(0.05)} className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold mb-3" style={{ color: textPrimary, letterSpacing: "-0.03em", lineHeight: 1.12 }}>
          {t("appInAction.title")}
        </motion.h2>
        <motion.p {...reveal(0.1)} className="text-[14px] md:text-[16px] max-w-[470px] mx-auto mb-12" style={{ color: textMuted }}>
          {t("appInAction.subtitle")}
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* phone with the current screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative shrink-0"
          >
            {coins.map((c, i) => (
              <motion.img
                key={i}
                src={c.src}
                alt=""
                aria-hidden
                className="absolute w-10 h-10 md:w-14 md:h-14 z-0 hidden sm:block"
                style={{ ...c.style, filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.22))" }}
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4.2 + c.delay, repeat: Infinity, ease: "easeInOut", delay: c.delay }}
              />
            ))}
            <div
              style={{
                width: 268,
                background: "#0a0a0a",
                borderRadius: 42,
                padding: 9,
                boxShadow: "0 40px 90px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
                zIndex: 10,
              }}
            >
              <div style={{ borderRadius: 34, overflow: "hidden", background: "#000", aspectRatio: "392 / 794" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={step}
                    src={steps[step].img}
                    alt={t(`appInAction.steps.${steps[step].key}.title`)}
                    initial={{ opacity: 0, x: 26 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -26 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%", display: "block" }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* interactive step list */}
          <motion.div {...reveal(0.1)} className="w-full md:w-[380px] text-left space-y-1.5">
            {steps.map((s, i) => {
              const active = i === step;
              return (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className="w-full text-left rounded-2xl px-4 py-3 transition-all"
                  style={{
                    background: active ? cardBg : "transparent",
                    border: `1px solid ${active ? cardBorder : "transparent"}`,
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center rounded-full text-[12px] font-bold shrink-0"
                      style={{ width: 24, height: 24, background: active ? "#0F7CB3" : (isDark ? "#222" : "#e8eef3"), color: active ? "#fff" : textMuted }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[15px] font-semibold" style={{ color: active ? textPrimary : textMuted }}>
                      {t(`appInAction.steps.${s.key}.title`)}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-[13px] leading-relaxed mt-1.5 ml-9 overflow-hidden"
                        style={{ color: textMuted }}
                      >
                        {t(`appInAction.steps.${s.key}.desc`)}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppInAction;
