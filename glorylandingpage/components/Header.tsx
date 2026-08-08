"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CLINIC, NAV_LINKS } from "@/data/clinicData";

interface HeaderProps {
  language: 'en' | 'om';
}

export default function Header({ language }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const links = NAV_LINKS[language];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-2xl bg-teal-50 border border-teal-200 overflow-hidden flex items-center justify-center shadow-sm">
            <img 
              src={CLINIC.logoUrl} 
              alt={CLINIC.name} 
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-slate-900 block leading-none">
              {CLINIC.logoText}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-teal-700">
              {CLINIC.logoSub}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-teal-700/20 transition-all active:scale-95"
          >
            {language === 'en' ? "Make an Appointment" : "Beellama Qabachuuf"}
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-800 text-2xl p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-6">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-teal-700 text-white py-3 rounded-xl font-bold shadow"
              >
                {language === 'en' ? "Make an Appointment" : "Beellama Qabachuuf"}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}