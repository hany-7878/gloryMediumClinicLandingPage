// components/Faq.tsx
"use client";

import { useState } from "react";
import { FAQ_DATA } from "@/data/clinicData"; 
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface FaqProps {
  language: string;
}

export default function Faq({ language }: FaqProps) {
  const content = FAQ_DATA[language] || FAQ_DATA.en;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors duration-200 bg-white shadow-sm hover:border-teal-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-base sm:text-lg pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`text-teal-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}