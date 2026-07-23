import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../i18n";

/**
 * Language picker for the marketing site nav. Persists to localStorage via the
 * i18n language detector, so the choice survives reloads.
 *
 * Desktop (md+): a labelled dropdown.
 * Mobile: a compact translator icon that opens the OS-native language picker —
 * a transparent <select> is layered over the icon so tapping it still gets the
 * accessible native dropdown, but all the user sees is the symbol.
 */
export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage ?? "en";

  const options = SUPPORTED_LANGUAGES.map((l) => (
    <option key={l.code} value={l.code}>
      {l.label}
    </option>
  ));

  return (
    <>
      {/* Desktop: full labelled dropdown */}
      <select
        aria-label="Language"
        value={current}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className={
          "cursor-pointer md:block hidden rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 " +
          "text-sm text-gray-800 focus:border-[#0E7BB2] focus:outline-none " +
          className
        }
      >
        {options}
      </select>

      {/* Mobile: translator icon; the transparent select on top handles the tap */}
      <div className={"relative md:hidden inline-flex " + className}>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-800"
        >
          <Languages className="h-5 w-5" />
        </span>
        <select
          aria-label="Language"
          title="Language"
          value={current}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        >
          {options}
        </select>
      </div>
    </>
  );
}
