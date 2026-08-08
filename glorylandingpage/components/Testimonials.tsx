// components/Testimonials.tsx
"use client";

import { TESTIMONIALS_DATA } from "@/data/clinicData"; 
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialsProps {
  language: string;
}

export default function Testimonials({ language }: TestimonialsProps) {
  const content = TESTIMONIALS_DATA[language] || TESTIMONIALS_DATA.en;

  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm bg-teal-50 px-3 py-1 rounded-full">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            {content.title}
          </h2>
          <p className="text-slate-600 text-lg">
            {content.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.list.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col justify-between relative"
            >
              <div className="absolute top-6 right-6 text-teal-100 text-4xl">
                <FaQuoteLeft />
              </div>
              <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                "{item.comment}"
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-sm text-teal-600 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}