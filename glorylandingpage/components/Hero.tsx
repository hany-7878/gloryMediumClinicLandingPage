"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CLINIC } from "@/data/clinicData";

interface HeroProps {
  language: 'en' | 'om';
}

export default function Hero({ language }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = {
    en: [
      {
        title: "Welcome to Glory Medium Clinic",
        subtitle: "Delivering compassionate medical care, advanced diagnostic testing, and dependable pharmaceutical services tailored for Dembi Dolo.",
        cta: "Read More"
      },
      {
        title: "2+ Years of Trusted Excellence",
        subtitle: "Rooted in Kellem Wollega, our doors remain open through every season with doctors and staff dedicated to your health.",
        cta: "Our Services"
      },
      {
        title: "24/7 Emergency & Quality Care",
        subtitle: "From general health consultations to specialized maternal care and trauma stabilization under one roof.",
        cta: "Contact Us"
      }
    ],
    om: [
      {
        title: "Baga Nagaan Gara Glory Medium Clinic Dhuftan",
        subtitle: "Kunuunsa fayyaa qulqullina qabu, qorannoo laaboraatorii ammayyaa, fi tajaajila farmaasii amanamaa Dambi Doolloof dhiyeessina.",
        cta: "Dabalataan Dubbisaa"
      },
      {
        title: "Waggoota 2+ Amantaa fi Muuxannoo",
        subtitle: "Qellem Wallaggaa keessatti hundaa'uudhaan ogeeyyii fayyaa dhukkubsattootaaf qophaa'an waliin hojjenna.",
        cta: "Tajaajila Keenya"
      },
      {
        title: "Tajaajila Balaa Tasaa Sa'aa 24",
        subtitle: "Gorsa fayyaa irraa kaasee hanga kunuunsa haadholii fi yaalii alaa bakka tokkotti.",
        cta: "Nu Quunnamaa"
      }
    ]
  };

  const currentSlides = slides[language];
  
  
  const activeSlide = currentSlides[currentIndex % currentSlides.length];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLINIC.heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-[85vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Slideshow */}
      {CLINIC.heroImages.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-40 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ backgroundImage: `url(${img})`, transitionDuration: "1.2s" }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${language}-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                {activeSlide.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                {activeSlide.subtitle}
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#about"
                  className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-teal-600/30 transition-all"
                >
                  {activeSlide.cta}
                </a>
                <a
                  href="#contact"
                  className="border border-slate-700 bg-slate-900/60 hover:bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold text-sm backdrop-blur transition-all"
                >
                  {language === 'en' ? "Book Appointment" : "Qabxii Qabadhaa"}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + CLINIC.heroImages.length) % CLINIC.heroImages.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/40 hover:bg-teal-700 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % CLINIC.heroImages.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/40 hover:bg-teal-700 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {CLINIC.heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              idx === currentIndex ? "w-8 bg-teal-500" : "w-2.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}