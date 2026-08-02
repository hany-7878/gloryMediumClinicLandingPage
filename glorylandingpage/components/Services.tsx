// components/Services.tsx
"use client";

import { motion } from "framer-motion";
import { SERVICES_SECTION } from "@/data/clinicData";

interface ServicesProps {
  language: 'en' | 'om';
}

export default function Services({ language }: ServicesProps) {
  const t = SERVICES_SECTION[language];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-700">{t.eyebrow}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{t.title}</h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all group"
            >
              <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-teal-100 flex items-center justify-center text-teal-700 text-2xl group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Icon />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}