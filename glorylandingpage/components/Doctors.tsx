// components/Doctors.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DOCTORS_SECTION } from "@/data/clinicData";

interface DoctorsProps {
  language: "en" | "om";
}

export default function Doctors({ language }: DoctorsProps) {
  const t = DOCTORS_SECTION[language];

  return (
    <section
      id="doctors"
      className="relative overflow-hidden bg-[#F7F4EC] py-24"
    >
      {/* Subtle chart-paper background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#E7E0CF 1px, transparent 1px), linear-gradient(90deg, #E7E0CF 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-700">
            {t.eyebrow}
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t.title}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {t.subtitle}
          </p>
        </header>

        {/* Team Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.list.map((member, idx) => {
            // Handles both "/images/file.png" and "./images/file.png"
            const imageSrc = member.image.startsWith("./")
              ? member.image.replace("./", "/")
              : member.image;

            return (
              <motion.article
                key={`${member.name}-${idx}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: "easeOut",
                }}
                className="group"
              >
                {/* Doctor Card */}
                <div className="relative overflow-hidden rounded-2xl border border-[#E3DACB] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">

                  {/* =================================
                      80% — ORIGINAL STAFF PHOTO
                      ================================= */}
                  <div className="relative h-[390px] w-full overflow-hidden bg-[#F3F0E8]">
                    <Image
                      src={imageSrc}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={idx < 3}
                      className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />
                  </div>

                  {/* Punch-hole Notches */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-3 top-[378px] z-10 h-6 w-6 rounded-full border border-[#E3DACB] bg-[#F7F4EC]"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-[378px] z-10 h-6 w-6 rounded-full border border-[#E3DACB] bg-[#F7F4EC]"
                  />

                  {/* =================================
                      ECG SEPARATOR
                      ================================= */}
                  <div
                    aria-hidden="true"
                    className="relative h-7 border-t border-dashed border-[#D8CFC0]"
                  >
                    <svg
                      viewBox="0 0 200 24"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M0 12 H70 L82 3 L94 21 L106 12 H200"
                        fill="none"
                        stroke="#0F766E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                          pathLength: 0,
                          opacity: 0,
                        }}
                        whileInView={{
                          pathLength: 1,
                          opacity: 0.6,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + idx * 0.06,
                          ease: "easeInOut",
                        }}
                      />
                    </svg>
                  </div>

                  {/* =================================
                      20% — STAFF INFORMATION
                      ================================= */}
                  <div className="flex min-h-[150px] flex-col items-center px-5 pb-6 pt-3 text-center">
                    <h3 className="font-serif text-lg font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-teal-700">
                      {member.name}
                    </h3>

                    <span className="mt-2 inline-block rounded-full border border-teal-700/40 bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-800">
                      {member.role}
                    </span>

                    {member.desc && (
                      <p className="mt-3 max-w-sm text-xs leading-relaxed text-slate-600">
                        {member.desc}
                      </p>
                    )}

                    {/* Medical Accent */}
                    <div
                      aria-hidden="true"
                      className="mt-4 h-1 w-7 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-11"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}