import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

type Partner = {
  name: string;
  role: string;
  img: string;
  tile: "light" | "dark";
  blurb: string;
};

const partners: Partner[] = [
  {
    name: "Stellar",
    role: "Funder",
    img: "/image/partner-stellar.png",
    tile: "light",
    blurb: "Backed by Stellar, the open network for fast, low-cost cross-border payments.",
  },
  {
    name: "Linkio",
    role: "Anchor partner",
    img: "/image/partner-link.png",
    tile: "dark",
    blurb: "Our anchor partner, bridging digital assets and local bank rails.",
  },
];

const Partners = () => {
  const { isDark } = useTheme();

  const surface = isDark ? "#0d0d0d" : "#ffffff";
  const textPrimary = isDark ? "#f5f5f5" : "#171717";
  const textMuted = isDark ? "#9ca3af" : "#5C5C5C";
  const cardBg = isDark ? "#141414" : "#ffffff";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "#e5e7eb";

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.55, delay },
  });

  return (
    <section id="backers" className="py-16 md:py-24 overflow-hidden" style={{ background: surface, position: "relative" }}>
      {/* background glows */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-6%", right: "-6%", width: 520, height: 520, background: `radial-gradient(circle, ${isDark ? "rgba(15,124,179,0.14)" : "rgba(15,124,179,0.07)"}, transparent 66%)`, filter: "blur(30px)" }} />
        <div style={{ position: "absolute", bottom: "-8%", left: "-6%", width: 520, height: 520, background: `radial-gradient(circle, ${isDark ? "rgba(106,63,160,0.12)" : "rgba(106,63,160,0.06)"}, transparent 66%)`, filter: "blur(30px)" }} />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 md:px-6 text-center">
        <motion.p {...reveal(0)} className="text-[12px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#0F7CB3" }}>
          Backed by &amp; partners
        </motion.p>
        <motion.h2 {...reveal(0.05)} className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold mb-3" style={{ color: textPrimary, letterSpacing: "-0.03em", lineHeight: 1.12 }}>
          In good company
        </motion.h2>
        <motion.p {...reveal(0.1)} className="text-[14px] md:text-[16px] max-w-[560px] mx-auto" style={{ color: textMuted }}>
          RendBit is funded by Stellar and works with Linkio, our anchor for moving money between digital assets and local currencies.
        </motion.p>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-[720px] mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              {...reveal(0.12 + i * 0.08)}
              className="rounded-2xl p-5 md:p-6 flex flex-col items-center text-center gap-4"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            >
              {/* logo tile */}
              <div
                className="w-full rounded-xl overflow-hidden flex items-center justify-center"
                style={{
                  height: 96,
                  background: p.tile === "light" ? "#ffffff" : "#05060a",
                  border: `1px solid ${cardBorder}`,
                }}
              >
                <img
                  src={p.img}
                  alt={`${p.name} logo`}
                  style={
                    p.tile === "light"
                      ? { maxHeight: 46, maxWidth: "72%", objectFit: "contain" }
                      : { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }
                  }
                />
              </div>

              <div>
                <div className="text-[15px] font-semibold" style={{ color: textPrimary }}>{p.name}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] mt-1" style={{ color: "#0F7CB3" }}>{p.role}</div>
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: textMuted }}>{p.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
