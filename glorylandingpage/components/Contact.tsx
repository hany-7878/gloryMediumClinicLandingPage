// components/Contact.tsx
"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { CLINIC, CONTACT_SECTION } from "@/data/clinicData";

interface ContactProps {
  language: 'en' | 'om';
}

export default function Contact({ language }: ContactProps) {
  const t = CONTACT_SECTION[language];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-700">{t.eyebrow}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{t.title}</h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 text-xl font-bold">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">{t.locationTitle}</h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{CLINIC.address}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 text-xl font-bold">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">{t.emailTitle}</h4>
                <p className="text-sm text-slate-600 mt-1">{CLINIC.email}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 text-xl font-bold">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">{t.callTitle}</h4>
                <p className="text-sm text-slate-600 mt-1">{CLINIC.phone}</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl font-bold text-center">
                {t.successMsg}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">{t.formName}</label>
                    <input 
                      required
                      type="text" 
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 focus:border-teal-600 focus:bg-white focus:outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">{t.formEmail}</label>
                    <input 
                      required
                      type="email" 
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 focus:border-teal-600 focus:bg-white focus:outline-none" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">{t.formSubject}</label>
                  <input 
                    required
                    type="text" 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 focus:border-teal-600 focus:bg-white focus:outline-none" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">{t.formMessage}</label>
                  <textarea 
                    required
                    rows={4} 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 focus:border-teal-600 focus:bg-white focus:outline-none" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-700/25 transition-all cursor-pointer"
                >
                  {t.formSubmit}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}