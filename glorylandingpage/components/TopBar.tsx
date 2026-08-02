// components/TopBar.tsx
"use client";

import { FaClock, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { CLINIC, TOP_BAR } from "@/data/clinicData";

interface TopBarProps {
  language: 'en' | 'om';
  setLanguage: (lang: 'en' | 'om') => void;
}

export default function TopBar({ language, setLanguage }: TopBarProps) {
  const t = TOP_BAR[language];

  return (
    <div className="bg-teal-700 text-white text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-1.5">
            <FaClock className="text-teal-200" />
            <span>{t.hours}</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <FaPhoneAlt className="text-teal-200" />
            <a href={CLINIC.phoneHref} className="hover:underline">{CLINIC.phone}</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="bg-teal-800 px-2.5 py-0.5 rounded-full font-semibold text-teal-100">
            {t.emergency}
          </span>
          <button
            onClick={() => setLanguage(language === 'en' ? 'om' : 'en')}
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded transition-colors font-medium cursor-pointer"
          >
            <FaGlobe />
            {language === 'en' ? "Afaan Oromoo" : "English"}
          </button>
        </div>
      </div>
    </div>
  );
}