// components/CTA.tsx
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { CLINIC, SOCIAL_LINKS, CTA_CONTENT } from "@/data/clinicData";

export default function CTA({ language }: { language: 'en' | 'om' }) {
  const t = CTA_CONTENT[language];
  return (
    <section id="cta" className="bg-slate-950 text-white relative overflow-hidden">
      
      {/* Glow effect */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-center">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.title}</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-400">{t.body}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={CLINIC.phoneHref} className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-teal-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-teal-500 shadow-lg shadow-teal-600/25">
                <Phone className="h-4 w-4" />
                {t.callLabel}
              </a>
              <a
                href={`https://wa.me/${CLINIC.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-800 bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:border-emerald-500/50"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                {t.whatsappLabel}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 transition-colors hover:bg-teal-600 hover:text-white hover:border-teal-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-8 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-400">{t.hoursLabel}</p>
            <div className="mt-4 flex items-start gap-3 text-sm text-slate-300">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
              <div>
                <p className="font-semibold text-white">{t.hoursWeekday}</p>
                <p className="mt-1 text-slate-400 text-xs">{t.hoursWeekend}</p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3 text-sm text-slate-300 border-t border-slate-800 pt-6">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
              <span className="text-xs leading-relaxed">{CLINIC.location}</span>
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>Dembi Dolo, Oromia Region, Ethiopia</p>
        </div>
      </div>
    </section>
  );
}