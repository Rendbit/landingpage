import React, { useState } from "react";

// ─── Icon Components ──────────────────────────────────────────────────────────

const RendBitLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 2L17 6V14L10 18L3 14V6L10 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M10 6L14 8.5V13.5L10 16L6 13.5V8.5L10 6Z"
      fill="currentColor"
      opacity="0.4"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const footerLinks = [
  {
    heading: "Solutions",
    links: ["Spend management", "Approval automation", "Treasury ops", "Team collaboration"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    heading: "Legal",
    links: ["Terms of service", "Privacy policy", "Cookie settings"],
  },
  {
    heading: "Product",
    links: ["Overview", "Smart workflows", "Real-time insights"],
  },
  {
    heading: "Developers",
    links: ["API reference", "Webhooks", "Authentication", "System status", "Changelog"],
  },
];

const socialLinks = [
  { icon: <FacebookIcon />, label: "Facebook", href: "#" },
  { icon: <InstagramIcon />, label: "Instagram", href: "#" },
  { icon: <XIcon />, label: "X / Twitter", href: "#" },
];

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0d1f2d" }}
    >
      {/* Top nav section */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-5 md:px-8 pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-x-16 gap-y-8 md:gap-y-10 items-start">

          {/* Logo + App Store — side by side on mobile */}
          <div className="flex items-center justify-between w-full md:w-auto md:flex-col md:items-start md:gap-6">
            <div className="flex items-center gap-2 text-white pt-0.5">
              <RendBitLogo />
              <span
                className="text-base font-semibold tracking-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                RendBit™
              </span>
            </div>

            {/* App Store badge — visible on mobile inline with logo, hidden on md+ (shown separately below) */}
            <div className="md:hidden">
              <a href="#">
                <img src="/image/apple-store.svg" alt="" className="h-9" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-1 md:flex-wrap gap-x-8 md:gap-x-12 gap-y-7 md:gap-y-8 w-full md:w-auto">
            {footerLinks.map((col) => (
              <div key={col.heading} className="min-w-0 md:min-w-[120px]">
                <p
                  className="mb-3 md:mb-4 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#ffffff", letterSpacing: "0.1em", fontSize: "11px" }}
                >
                  {col.heading}
                </p>
                <ul className="space-y-2 md:space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] md:text-sm transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.95)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* App Store CTA — desktop only */}
          <div className="hidden md:flex items-start">
            <a href="#">
              <img src="/image/apple-store.svg" alt="" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-6 md:my-8 h-px w-full"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-4">
          {/* Copyright */}
          <p
            className="text-[12px] md:text-sm text-center sm:text-left"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {new Date().getFullYear()} RendBit &copy; All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.55)", backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div
        className="relative select-none overflow-hidden"
        style={{ height: "clamp(60px, 18vw, 200px)" }}
        aria-hidden="true"
      >
        <p
          className="absolute bottom-[-30%] left-1/2 w-full -translate-x-1/2 text-center font-black leading-none"
          style={{
            fontSize: "clamp(60px, 18vw, 220px)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.12)",
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
          }}
        >
          RendBit
        </p>
      </div>
    </footer>
  );
};

export default Footer;