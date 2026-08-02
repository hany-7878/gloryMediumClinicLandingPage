// components/WhyUs.tsx
"use client";

import { motion } from "framer-motion";
import { WHY_US, STATS } from "@/data/clinicData";

interface WhyUsProps {
  language: 'en' | 'om';
}

export default function WhyUs({ language }: WhyUsProps) {
  const t = WHY_US[language];
  const stats = STATS[language];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Why Us intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-teal-700 text-white p-10 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-black">{t.boxTitle}</h3>
            <p className="mt-4 text-teal-100 text-sm leading-relaxed">{t.boxDesc}</p>
            <a
              href="#about"
              className="mt-8 inline-block bg-white text-teal-800 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-teal-50 transition-colors shadow"
            >
              {t.buttonText}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Medicio Style Excellence</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{t.title}</h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">{t.subtitle}</p>
            </div>

            <div className="space-y-4 pt-4">
              {t.features.map((feat, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{feat.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ count, label, icon: Icon }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-200/60 shadow-sm"
            >
              <div className="h-14 w-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center text-2xl shadow-md shadow-teal-600/30">
                <Icon />
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">{count}</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}