"use client";

import { FaLanguage } from "react-icons/fa";
import type { Language } from "@/data/translations";

type LanguageSwitcherProps = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export default function LanguageSwitcher({
  language,
  setLanguage,
}: LanguageSwitcherProps) {
  return (
    <label className="flex items-center gap-2 text-teal-700 font-semibold">
      <FaLanguage />

      <select
        value={language}
        onChange={(e) =>
          setLanguage(e.target.value as Language)
        }
        className="rounded-full border border-teal-200 bg-white px-3 py-2"
      >
        <option value="en">English</option>
        <option value="om">Afaan Oromo</option>
        <option value="am">አማርኛ</option>
      </select>
    </label>
  );
}