"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { CLINIC, NAV_LINKS } from "@/data/clinicData";

interface FooterProps {
  language: 'en' | 'om';
}

export default function Footer({ language }: FooterProps) {
  const links = NAV_LINKS[language];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-1 shadow-sm">
                <img 
                  src={CLINIC.logoUrl} 
                  alt={CLINIC.name} 
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-lg tracking-tight block leading-tight text-white">{CLINIC.name}</span>
                <span className="text-[10px] text-teal-400 uppercase tracking-widest font-bold">Dembi Dolo · Ethiopia</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {language === 'en' 
                ? "Providing compassionate, professional, and accessible healthcare services for you and your family."
                : "Tajaajila fayyaa amansiisaa, ogeessotaan kennamu fi argamoo ta'e isiinii fi maatii keessaniif dhiyeessina."}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400 mb-4">
              {language === 'en' ? "Quick Links" : "Geessituu Saffisaa"}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400 mb-4">
              {language === 'en' ? "Contact & Hours" : "Teessoo & Sa'atii"}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <FaMapMarkerAlt className="text-teal-500 shrink-0" />
                <span>Dembi Dolo, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhone className="text-teal-500 shrink-0" />
                <a href={CLINIC.phoneHref} className="hover:text-white transition-colors">{CLINIC.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaClock className="text-teal-500 shrink-0" />
                <span>{language === 'en' ? "Mon - Sat: 8:00 AM - 8:00 PM" : "Wiix - San: Sa'a 2:00 - 14:00"}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {CLINIC.name}. {language === 'en' ? "All rights reserved." : "Mirgi hundi eegamaadha."}
          </p>

          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-teal-600 hover:text-white transition-colors" aria-label="Facebook">
              <FaFacebook size={14} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-teal-600 hover:text-white transition-colors" aria-label="Instagram">
              <FaInstagram size={14} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-teal-600 hover:text-white transition-colors" aria-label="Twitter">
              <FaTwitter size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}