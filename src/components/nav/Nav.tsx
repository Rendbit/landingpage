import { useState, useRef, useEffect } from "react";

const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
  >
    <polyline points="4 6 8 10 12 6" />
  </svg>
);

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

const solutions = [
  { label: "For startups", href: "#" },
  { label: "For enterprises", href: "#" },
  { label: "For agencies", href: "#" },
];

export default function Nav() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center p-4 md:p-6">
      <nav className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-md">

        {/* ── Main bar ── */}
        <div className="flex items-center justify-between px-4 md:px-5 h-[60px] gap-4">

          {/* Logo */}
          <a href="/">
            <img src="/image/logo1.svg" alt="" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            <a
              href="#"
              className="text-[14px] font-medium text-[#1E1E1E] hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              Products
            </a>

            {/* Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSolutionsOpen((prev) => !prev)}
                className="cursor-pointer flex items-center gap-1.5 text-[14px] font-medium text-[#1E1E1E] hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                Solutions
                <ChevronDownIcon open={solutionsOpen} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 bg-white border border-gray-200 rounded-xl shadow-sm p-1.5 min-w-[180px] z-50">
                  {solutions.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-[13px] text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-[14px] font-medium text-[#1E1E1E] hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-[14px] font-medium text-[#1E1E1E] hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block flex-shrink-0 text-[13px] font-medium text-[#0F7CB3] border border-[#0F7CB3] hover:bg-blue-50 rounded-[10px] cursor-pointer px-5 py-2 transition-colors whitespace-nowrap">
            Request a demo
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 px-4 pb-4 pt-3 flex flex-col gap-1">
            <a
              href="#"
              className="text-[14px] font-medium text-[#1E1E1E] hover:bg-gray-100 px-3 py-2.5 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Products
            </a>

            {/* Solutions accordion on mobile */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                className="w-full flex items-center justify-between text-[14px] font-medium text-[#1E1E1E] hover:bg-gray-100 px-3 py-2.5 rounded-lg transition-colors"
              >
                Solutions
                <ChevronDownIcon open={mobileSolutionsOpen} />
              </button>
              {mobileSolutionsOpen && (
                <div className="mt-1 ml-3 flex flex-col gap-0.5">
                  {solutions.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-[13px] text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-[14px] font-medium text-[#1E1E1E] hover:bg-gray-100 px-3 py-2.5 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-[14px] font-medium text-[#1E1E1E] hover:bg-gray-100 px-3 py-2.5 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>

            {/* CTA inside mobile menu */}
            <div className="pt-2 mt-1 border-t border-gray-100">
              <button className="w-full text-[13px] font-medium text-[#0F7CB3] border border-[#0F7CB3] hover:bg-blue-50 rounded-[10px] cursor-pointer px-5 py-2.5 transition-colors">
                Request a demo
              </button>
            </div>
          </div>
        )}

      </nav>
    </div>
  );
}