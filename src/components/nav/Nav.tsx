import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Theme tokens
  const navBg = isDark ? "#1a1a1a" : "#ffffff";
  const navBorder = isDark ? "#2a2a2a" : "#e5e7eb";
  const navShadow = isDark ? "0 4px 24px rgba(0,0,0,0.4)" : "0 1px 8px rgba(0,0,0,0.08)";
  const textPrimary = isDark ? "#f5f5f5" : "#1E1E1E";
  const hoverBg = isDark ? "#2a2a2a" : "#f3f4f6";
  const dividerColor = isDark ? "#2a2a2a" : "#f3f4f6";
  const ctaBorder = isDark ? "#38bdf8" : "#0F7CB3";
  const ctaText = isDark ? "#38bdf8" : "#0F7CB3";
  const ctaHoverBg = isDark ? "#0c2a3a" : "#eff6ff";
  const toggleBg = isDark ? "#2a2a2a" : "#f3f4f6";
  const toggleHoverBg = isDark ? "#3a3a3a" : "#e5e7eb";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center p-4 md:p-6">
      <nav
        className="w-full max-w-3xl rounded-2xl"
        style={{
          background: navBg,
          border: `1px solid ${navBorder}`,
          boxShadow: navShadow,
          transition: "background 0.2s, border-color 0.2s",
        }}
      >
        {/* Main bar */}
        <div className="flex items-center justify-between px-4 md:px-5 h-[60px] gap-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/image/logo.svg" alt="RendBit" style={{ height: 26 }} />
            <span
              className="text-[18px] font-bold"
              style={{ color: isDark ? "#ffffff" : "#111111", letterSpacing: "-0.02em" }}
            >
              RendBit
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[14px] font-medium px-3 py-1.5 rounded-lg transition-colors"
                style={{ color: textPrimary }}
                onMouseEnter={e => (e.currentTarget.style.background = hoverBg)}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop right side: theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors cursor-pointer"
              style={{ background: toggleBg, color: textPrimary }}
              onMouseEnter={e => (e.currentTarget.style.background = toggleHoverBg)}
              onMouseLeave={e => (e.currentTarget.style.background = toggleBg)}
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href="/#demo"
              className="text-[13px] font-medium border rounded-[10px] cursor-pointer px-5 py-2 transition-colors whitespace-nowrap inline-block"
              style={{ color: ctaText, borderColor: ctaBorder }}
              onMouseEnter={e => (e.currentTarget.style.background = ctaHoverBg)}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Request a demo
            </a>
          </div>

          {/* Mobile right side: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors cursor-pointer"
              style={{ background: toggleBg, color: textPrimary }}
              onMouseEnter={e => (e.currentTarget.style.background = toggleHoverBg)}
              onMouseLeave={e => (e.currentTarget.style.background = toggleBg)}
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors cursor-pointer"
              style={{ color: textPrimary }}
              onMouseEnter={e => (e.currentTarget.style.background = hoverBg)}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden px-4 pb-4 pt-3 flex flex-col gap-1"
            style={{ borderTop: `1px solid ${dividerColor}` }}
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[14px] font-medium px-3 py-2.5 rounded-lg transition-colors"
                style={{ color: textPrimary }}
                onMouseEnter={e => (e.currentTarget.style.background = hoverBg)}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}

            {/* CTA */}
            <div className="pt-2 mt-1" style={{ borderTop: `1px solid ${dividerColor}` }}>
              <a
                href="/#demo"
                className="block text-center w-full text-[13px] font-medium border rounded-[10px] cursor-pointer px-5 py-2.5 transition-colors"
                style={{ color: ctaText, borderColor: ctaBorder }}
                onMouseEnter={e => (e.currentTarget.style.background = ctaHoverBg)}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                Request a demo
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}