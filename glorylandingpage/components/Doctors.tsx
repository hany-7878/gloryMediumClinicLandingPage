// components/Doctors.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DOCTORS_SECTION } from "@/data/clinicData";

interface DoctorsProps {
  language: 'en' | 'om';
}

export default function Doctors({ language }: DoctorsProps) {
  const t = DOCTORS_SECTION[language];

  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-700">{t.eyebrow}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{t.title}</h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.list.map((doc, idx) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-72 w-full bg-slate-200 overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-slate-900">{doc.name}</h3>
                <p className="text-xs font-medium text-teal-700 mt-1">{doc.role || doc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}