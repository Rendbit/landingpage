import { LinkedinIcon } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { RiTelegramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

// Icon Components

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Data 

// const footerLinks = [
//   {
//     heading: "Solutions",
//     links: ["Spend management", "Approval automation", "Treasury ops", "Team collaboration"],
//   },
//   {
//     heading: "Company",
//     links: ["About", "Blog", "Careers", "Contact"],
//   },
//   {
//     heading: "Legal",
//     links: ["Terms of service", "Privacy policy", "Cookie settings"],
//   },
//   {
//     heading: "Product",
//     links: ["Overview", "Smart workflows", "Real-time insights"],
//   },
//   {
//     heading: "Developers",
//     links: ["API reference", "Webhooks", "Authentication", "System status", "Changelog"],
//   },
// ];

const socialLinks = [
  { icon: <RiTelegramFill />, label: "Telegram", href: "https://t.me/rendbit" },
  { icon: <LinkedinIcon />, label: "LinkedIn", href: "https://www.linkedin.com/company/rendbit/" },
  { icon: <XIcon />, label: "X / Twitter", href: "https://x.com/rendbit_" },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="relative overflow-hidden" id="contact"
      style={{ backgroundColor: "#0d1f2d" }}
    >
      {/* Top nav section */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-5 md:px-8 pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="flex justify-between flex-col md:flex-row md:flex-wrap gap-x-16 gap-y-8 md:gap-y-10 items-start">

          {/* Logo + App Store, side by side on mobile */}
          <div className="flex items-center justify-between w-full md:w-auto md:flex-col md:items-start md:gap-6">
            <div className="flex items-center gap-2 text-white pt-0.5">
              <img src="/image/logo.svg" alt="RendBit" style={{ height: 22 }} />
              <span
                className="text-base font-semibold tracking-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                RendBit™
              </span>
            </div>

            {/* App Store badge: visible on mobile inline with logo, hidden on md+ (shown separately below) */}
            <div className="md:hidden">
              <a href="#">
                <img src="/image/apple-store.svg" alt="" className="h-9" />
              </a>
            </div>
          </div>

          {/* Contact + legal */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:support@rendbit.com"
              className="text-sm font-medium text-white transition-opacity hover:opacity-70 w-fit"
            >
              support@rendbit.com
            </a>
            <div className="flex items-center gap-3 text-[13px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              <Link to="/privacy-policy" className="transition-colors hover:text-white">{t("footer.privacy")}</Link>
              <span aria-hidden>&middot;</span>
              <Link to="/terms" className="transition-colors hover:text-white">{t("footer.terms")}</Link>
              <span aria-hidden>&middot;</span>
              <Link to="/safety" className="transition-colors hover:text-white">{t("footer.dataSafety")}</Link>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-1 md:flex-wrap gap-x-8 md:gap-x-12 gap-y-7 md:gap-y-8 w-full md:w-auto">
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
          </div> */}

          {/* App Store CTA, desktop only */}
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
            {new Date().getFullYear()} RendBit &copy; {t("footer.rights")}
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
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