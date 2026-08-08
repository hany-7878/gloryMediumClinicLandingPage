// // app/page.tsx
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import TopBar from "@/components/TopBar";
// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import WhyUs from "@/components/WhyUs";
// import About from "@/components/About";
// import Services from "@/components/Services";
// import Departments from "@/components/Departments";
// import Doctors from "@/components/Doctors";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// export default function HomePage() {
//   const [language, setLanguage] = useState<'en' | 'om'>("en");

//   return (
//     <main className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-600 selection:text-white">
//       <TopBar language={language} setLanguage={setLanguage} />
//       <Header language={language} />

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={language}
//           initial={{ opacity: 0, y: 6 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -6 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//           <Hero language={language} />
//           <WhyUs language={language} />
//           <About language={language} />
//           <Services language={language} />
//           <Departments language={language} />
//           <Doctors language={language} />
//           <Contact language={language} />
//         </motion.div>
//       </AnimatePresence>

//       <Footer language={language} />
//     </main>
//   );
// }



// app/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Services from "@/components/Services";
import Departments from "@/components/Departments";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials"; // Added
import Faq from "@/components/Faq";                     // Added
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [language, setLanguage] = useState<'en' | 'om'>("en");

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-600 selection:text-white">
      <TopBar language={language} setLanguage={setLanguage} />
      <Header language={language} />

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Hero language={language} />
          <WhyUs language={language} />
          <About language={language} />
          <Services language={language} />
          <Departments language={language} />
          <Doctors language={language} />
          <Testimonials language={language} /> 
          <Faq language={language} />             
          <Contact language={language} />
        </motion.div>
      </AnimatePresence>

      <Footer language={language} />
    </main>
  );
}