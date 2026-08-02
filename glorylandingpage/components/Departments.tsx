// components/Departments.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DEPARTMENTS_DATA } from "@/data/clinicData";

interface DepartmentsProps {
  language: 'en' | 'om';
}

export default function Departments({ language }: DepartmentsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const t = DEPARTMENTS_DATA[language];

  return (
    <section id="departments" className="py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-700">{t.eyebrow}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{t.title}</h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {t.tabs.map((tab, idx) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(idx)}
                className={`text-left px-6 py-4 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                  activeTab === idx
                    ? "bg-teal-700 text-white shadow-lg shadow-teal-700/25"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm min-h-[320px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${language}-${activeTab}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-black text-slate-900">{t.tabs[activeTab].title}</h3>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">{t.tabs[activeTab].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}