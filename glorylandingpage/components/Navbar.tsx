// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, Languages } from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/data/clinicData";

interface NavbarProps {
  language: 'en' | 'om';
  setLanguage: (lang: 'en' | 'om') => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = NAV_LINKS[language];

  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-teal-50 border border-teal-200 shadow-sm flex items-center justify-center">
           
            <Image 
              src={CLINIC.logoUrl} 
              alt={CLINIC.name} 
              fill 
              className="object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                // Fallback style if image is missing
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span className="text-teal-700 font-bold text-lg"></span>
          </div>
          <div className="leading-tight">
            <p className="font-bold tracking-tight text-slate-900 text-base">{CLINIC.name}</p>
            <p className="text-[10px] font-medium uppercase tracking-widest text-teal-700">Dembi Dolo · Ethiopia</p>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 transition-colors hover:text-teal-700">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setLanguage(language === "en" ? "om" : "en")}
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:border-teal-400 hover:text-teal-700 cursor-pointer"
          >
            <Languages className="h-3.5 w-3.5 text-teal-700" />
            {language === "en" ? "EN" : "OM"}
          </button>
          
          <a
            href={CLINIC.phoneHref}
            className="flex items-center gap-2 rounded-full bg-teal-700 px-4.5 py-2 text-sm font-semibold text-white shadow-md shadow-teal-700/20 transition-all hover:bg-teal-800"
          >
            <Phone className="h-3.5 w-3.5" />
            {language === "en" ? "Call Now" : "Bilbilaa"}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800 p-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden shadow-xl">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-base font-semibold text-slate-800">
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => setLanguage(language === "en" ? "om" : "en")}
                className="flex w-fit items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700"
              >
                <Languages className="h-4 w-4 text-teal-700" />
                {language === "en" ? "Switch to Afaan Oromoo" : "Switch to English"}
              </button>
              <a href={CLINIC.phoneHref} className="flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-md">
                <Phone className="h-4 w-4" />
                {language === "en" ? "Call Now" : "Bilbilaa"}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}