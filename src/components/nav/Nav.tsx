import { useState, useRef, useEffect } from "react";

const ActivityIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2B7FD4"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

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

const solutions = [
  { label: "For startups", href: "#" },
  { label: "For enterprises", href: "#" },
  { label: "For agencies", href: "#" },
];

export default function Nav() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
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

  return (
    <div className="flex items-center justify-center p-6">
      <nav className="flex items-center justify-between w-full max-w-3xl bg-white border border-gray-200 rounded-2xl px-5 h-[60px] gap-4 shadow-md">

        {/* Logo */}
        <a href="/">
            <img src="/image/logo1.svg" alt="" />
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-1 flex-1">

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

        {/* CTA Button */}
        <button className="flex-shrink-0 text-[13px] font-medium text-[#0F7CB3] border border-[#0F7CB3] hover:bg-blue-50 rounded-[10px] cursor-pointer px-5 py-2 transition-colors whitespace-nowrap">
          Request a demo
        </button>
      </nav>
    </div>
  );
}