export type Language = "en" | "om" | "am";

export const content = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",

    heroTitle: "Compassionate care for every stage of life",
    heroText:
      "Modern medical care with warmth, precision, and family-focused support.",

    heroButton: "Book a Visit",
    heroSecondary: "Explore Services",

    stat1: "24/7 Support",
    stat2: "Trusted Doctors",
    stat3: "Family-Friendly Clinic",

    aboutTitle: "Why Patients Choose Glory Medium Clinic",

    aboutText:
      "We combine advanced diagnostics, preventive medicine, and compassionate healthcare to help every patient receive quality treatment in a safe and welcoming environment.",

    serviceTitle: "Our Services",

    serviceCards: [
      {
        title: "General Care",
        text: "Routine consultations and personalized treatment plans.",
      },
      {
        title: "Pediatric Care",
        text: "Gentle and attentive healthcare for children and adolescents.",
      },
      {
        title: "Wellness Programs",
        text: "Preventive screenings and healthy lifestyle guidance.",
      },
    ],

    ctaTitle: "Ready to Feel Better?",

    ctaText:
      "Book your appointment today and let our experienced medical team take care of your health.",
  },

  om: {
    navHome: "Mana",
    navAbout: "Waa'ee Keenya",
    navServices: "Tajaajiloota",

    heroTitle: "Kunuunsa Fayyaa Garaa Guutuun Maatii Hundaaf",

    heroText:
      "Tajaajila yaalaa ammayyaa, sirrii fi kunuunsa maatii irratti xiyyeeffate.",

    heroButton: "Beellama Qabsiifadhu",

    heroSecondary: "Tajaajiloota Ilaali",

    stat1: "Deeggarsa Sa'aatii 24",
    stat2: "Doktoroota Amanamoo",
    stat3: "Kiliinikii Maatii",

    aboutTitle: "Maaliif Glory Medium Clinic Filatu?",

    aboutText:
      "Qorannoo ammayyaa, yaala ittisa dhibee fi kunuunsa gaarii walitti makuun tajaajila amanamaa ni kennina.",

    serviceTitle: "Tajaajiloota Keenya",

    serviceCards: [
      {
        title: "Kunuunsa Waliigalaa",
        text: "Qorannoo fi karoora yaalaa dhuunfaa.",
      },
      {
        title: "Kunuunsa Daa'immanii",
        text: "Kunuunsa gaarii daa'immanii fi dargaggootaaf.",
      },
      {
        title: "Sagantaa Fayyaa",
        text: "Qorannoo ittisa dhibee fi gorsa jireenya fayyaa.",
      },
    ],

    ctaTitle: "Yaala Argachuuf Qophaa'aa?",

    ctaText:
      "Har'a beellama qabsiifadhaa, gareen keenya fayyaa keessan ni kunuunsa.",
  },

  am: {
    navHome: "መነሻ",
    navAbout: "ስለ እኛ",
    navServices: "አገልግሎቶች",

    heroTitle: "ለመላው ቤተሰብ የሚሰጥ በርኅራኄ የተሞላ የጤና እንክብካቤ",

    heroText:
      "ዘመናዊ፣ ትክክለኛ እና በቤተሰብ ላይ ያተኮረ የህክምና አገልግሎት።",

    heroButton: "ቀጠሮ ይያዙ",

    heroSecondary: "አገልግሎቶችን ይመልከቱ",

    stat1: "24/7 ድጋፍ",
    stat2: "ታማኝ ዶክተሮች",
    stat3: "የቤተሰብ ክሊኒክ",

    aboutTitle: "ለምን Glory Medium Clinic?",

    aboutText:
      "ዘመናዊ ምርመራ፣ የመከላከያ ህክምና እና በርኅራኄ የተሞላ እንክብካቤ በአንድነት እናቀርባለን።",

    serviceTitle: "አገልግሎቶቻችን",

    serviceCards: [
      {
        title: "አጠቃላይ ህክምና",
        text: "መደበኛ ምርመራ እና የግል ህክምና እቅዶች።",
      },
      {
        title: "የህፃናት ህክምና",
        text: "ለህፃናት እና ለወጣቶች ልዩ እንክብካቤ።",
      },
      {
        title: "የጤና ፕሮግራሞች",
        text: "የመከላከያ ምርመራ እና የጤና አኗኗር ምክር።",
      },
    ],

    ctaTitle: "ጤናዎን ለማሻሻል ዝግጁ ነዎት?",

    ctaText:
      "ዛሬ ቀጠሮ ይያዙ፤ የሙያ ህክምና ባለሙያዎቻችን በደህንነትዎ ይንከባከባሉ።",
  },
} as const;