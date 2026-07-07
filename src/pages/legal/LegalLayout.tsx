import { useEffect } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

type Props = { title: string; updated?: string; children: ReactNode };

export default function LegalLayout({ title, updated = "7 July 2026", children }: Props) {
  const { isDark } = useTheme();

  useEffect(() => {
    document.title = `${title} | RendBit`;
    return () => { document.title = "RendBit"; };
  }, [title]);
  const ink = isDark ? "#e7e9ee" : "#1e2230";
  const muted = isDark ? "#9aa3b2" : "#5b6472";
  const line = isDark ? "#262a33" : "#e6e9ef";
  const cardBg = isDark ? "#111318" : "#ffffff";
  const brand = "#0E7BB2";

  const proseVars = {
    "--ink": ink,
    "--muted": muted,
    "--line": line,
    "--brand": brand,
  } as CSSProperties;

  return (
    <div className="px-4 md:px-6 pb-24 pt-2 md:pt-4" style={{ minHeight: "70vh" }}>
      <article
        className="mx-auto max-w-[820px] rounded-3xl px-5 md:px-12 py-8 md:py-12"
        style={{ background: cardBg, border: `1px solid ${line}` }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium mb-7 transition-opacity hover:opacity-70"
          style={{ color: brand }}
        >
          <span aria-hidden>&larr;</span> Back to home
        </Link>
        <div className="text-[11px] font-bold tracking-[0.22em]" style={{ color: brand }}>
          RENDBIT
        </div>
        <h1 className="text-[26px] md:text-[34px] font-bold mt-1.5" style={{ color: ink, letterSpacing: "-0.02em" }}>
          {title}
        </h1>
        <p className="text-[13px] mt-1.5" style={{ color: muted }}>
          Last updated: {updated}
        </p>
        <hr className="mt-6 mb-2" style={{ border: "none", borderTop: `1px solid ${line}` }} />
        <div className="legal-prose" style={proseVars}>
          {children}
        </div>
      </article>
    </div>
  );
}
