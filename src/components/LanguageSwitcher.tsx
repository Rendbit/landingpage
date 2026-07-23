import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../i18n";

/**
 * Language picker for the marketing site nav. Persists to localStorage via the
 * i18n language detector, so the choice survives reloads.
 */
export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage ?? "en";

  return (
    <select
      aria-label="Language"
      value={current}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className={
        "cursor-pointer rounded-full border border-gray-200 bg-white/80 px-3 py-1.5 " +
        "text-sm text-gray-800 focus:border-[#0E7BB2] focus:outline-none " +
        className
      }
    >
      {SUPPORTED_LANGUAGES.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
