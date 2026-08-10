
"use client";

import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import {
  CLINIC,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/data/clinicData";

interface FooterProps {
  language: "en" | "om";
}

export default function Footer({ language }: FooterProps) {
  const links = NAV_LINKS[language];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 border-b border-slate-800 pb-8 md:grid-cols-3">

          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-1 shadow-sm">
                <img
                  src={CLINIC.logoUrl}
                  alt={CLINIC.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <span className="block text-lg font-black leading-tight tracking-tight text-white">
                  {CLINIC.name}
                </span>

                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400">
                  Dembi Dolo · Ethiopia
                </span>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              {language === "en"
                ? "Providing compassionate, professional, and accessible healthcare services for you and your family."
                : "Tajaajila fayyaa amansiisaa, ogeessotaan kennamu fi argamoo ta'e isiinii fi maatii keessaniif dhiyeessina."}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-teal-400">
              {language === "en"
                ? "Quick Links"
                : "Geessituu Saffisaa"}
            </h4>

            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-teal-400">
              {language === "en"
                ? "Contact & Hours"
                : "Teessoo & Sa'atii"}
            </h4>

            <ul className="flex flex-col gap-3 text-sm text-slate-400">

              <li className="flex items-center gap-2.5">
                <FaMapMarkerAlt className="shrink-0 text-teal-500" />
                <span>Dembi Dolo, Ethiopia</span>
              </li>

              <li className="flex items-center gap-2.5">
                <FaPhone className="shrink-0 text-teal-500" />

                <a
                  href={CLINIC.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {CLINIC.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <FaClock className="shrink-0 text-teal-500" />

                <span>
                  {language === "en"
                    ? "Every Day: 8:30 AM - 7:00 PM"
                    : "Guyyaa Hunda: Ganama 2:30 - Halkan 1:00"}
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">

          {/* Copyright */}
          <p className="text-center text-xs text-slate-500 sm:text-left">
            &copy; {new Date().getFullYear()} {CLINIC.name}.{" "}
            {language === "en"
              ? "All rights reserved."
              : "Mirgi hundi eegamaadha."}
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-2.5">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Glory Medium Clinic on ${social.label}`}
                  title={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition-all duration-200 hover:border-teal-600 hover:bg-teal-600 hover:text-white"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}

