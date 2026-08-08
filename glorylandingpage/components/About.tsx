// components/About.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_CONTENT, CLINIC } from "@/data/clinicData";

interface AboutProps {
  language: 'en' | 'om';
}

export default function About({ language }: AboutProps) {
  const t = ABOUT_CONTENT[language];

  return (
    <section id="about" className="py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-112 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
              <Image 
                src={CLINIC.founderImage} 
                alt="Founder & Management" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-teal-100">
                <p className="text-xs font-bold text-teal-700 uppercase tracking-widest">{CLINIC.founderName}</p>
                <p className="text-lg font-black text-slate-900">Glory Medium Clinic Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-teal-700">{t.eyebrow}</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.title}
            </h2>

            <p className="mt-6 text-base text-slate-600 leading-relaxed">{t.p1}</p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">{t.p2}</p>

            <div className="mt-6 p-6 rounded-2xl bg-white border-l-4 border-teal-600 shadow-sm border-y border-r border-slate-200/60">
              <p className="text-sm italic font-medium text-slate-700">{t.quote}</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}