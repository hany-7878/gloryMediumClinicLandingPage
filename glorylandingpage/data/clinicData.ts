import { 
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin, 
  FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, 
  FaStethoscope, FaPills, FaHeartbeat, FaVial, FaAmbulance, FaUserMd 
} from "react-icons/fa"; 
import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement> & { size?: string | number; color?: string }>;

export interface FounderConfig {
  name: string;
  title: Record<string, string>;
  bio: Record<string, string>;
  imageUrl: string;
}

export interface ClinicConfig {
  name: string;
  logoText: string;
  logoSub: string;
  tagline: string;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  whatsapp: string;
  whatsappNumber: string;
  emergencyPhone: string;
  heroImages: string[];
  founderImage: string;
  founderName: string;
  logoUrl: string;
  location: string;
  founder: FounderConfig;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
}

export interface TopBarContent {
  hours: string;
  emergency: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  count: string;
  label: string;
  icon: IconType;
}

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface WhyUsContent {
  title: string;
  subtitle: string;
  boxTitle: string;
  boxDesc: string;
  buttonText: string;
  features: FeatureItem[];
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  p1: string;
  p2: string;
  quote: string;
}

export interface ServiceItem {
  icon: IconType;
  title: string;
  desc: string;
}

export interface ServicesSectionContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface DepartmentTab {
  name: string;
  title: string;
  desc: string;
}

export interface DepartmentsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  tabs: DepartmentTab[];
}

export interface DoctorItem {
  name: string;
  role: string;
  desc?: string;
  image: string;
}

export interface DoctorsSectionContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  list: DoctorItem[];
}

export interface ContactSectionContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  locationTitle: string;
  locationVal: string;
  emailTitle: string;
  callTitle: string;
  formName: string;
  formEmail: string;
  formSubject: string;
  formMessage: string;
  formSubmit: string;
  successMsg: string;
}

export interface SocialLinkItem {
  icon: IconType; 
  href: string;
  label: string;
}

export interface CtaContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  body?: string;
  buttonText: string;
  emergencyText: string;
  callLabel: string;
  whatsappLabel: string;
  hoursLabel: string;
  hoursWeekday: string;
  hoursWeekend: string;
}


export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FaqItem[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  comment: string;
}

export interface TestimonialsSectionContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  list: TestimonialItem[];
}

export interface InsurancePartner {
  name: string;
  logoText: string;
}


export const CLINIC: ClinicConfig = {
  name: "Glory Medium Clinic",
  logoText: "Glory",
  logoSub: "Medium Clinic",
  tagline: "Dembi Dolo's Premier Healthcare Center",
  address: "Kellem Wollega Zone, Dembi Dolo, Ethiopia",
  location: "Dembi Dolo, Kellem Wollega Zone, Ethiopia",
  phone: "+251 911918330",
  founderName: "Dr. Gemechis Mokonnin",
  phoneHref: "tel:+251 911918330",
  email: "gemeayana7@gmail.com",
  whatsapp: "+251 911918330",
  whatsappNumber: "+251 911918330",
  emergencyPhone: "+251 911918330",
  logoUrl: "/gloryLogo.jpg",
  heroImages: [
    "/images/g11.jpg",
    "/images/g2.jpg",
    "/images/g3.jpg",
    "/images/g4.jpg",
    "/images/g5.jpg",
    "/images/g6.jpg",
    "/images/g7.jpg",
    "/images/g8.jpg",
    "/images/g9.jpg",
    "/images/g10.jpg"
  ],
  founderImage: "/images/DRGame.jpg",
  founder: {
    name: "Dr. Gemechis Mokonnin",
    title: {
      en: "Founder & Consultant Internist",
      om: "Hundeessaa fi Ogeessa Dhukkuboota Keessoo (Internist)"
    },
    bio: {
      en: "Founded in 2016 (EC), Glory Medium Clinic was established by Dr. Gemechis Mokonnin, a dedicated specialist internist. With a vision to deliver compassionate, high-standard, and advanced internal medicine healthcare, Dr. Gemechis brings extensive professional expertise to serve the community of Dembi Dolo and beyond.",
      om: "Kiliinikni Giddu-galeessaa Glory Bara 2016 (EC) Dr. Gemechis Mokonnin, ogeessa dhukkuboota keessootiin kan hundaa'e yoo ta'uu. Tajaajila fayyaa amansiisaa, olaanaa fi qulqullina qabu hawaasa Dambi Doolloo fi naannoo isaaniif kennuun kutannoon hojjechaa jira."
    },
    imageUrl: "/images/DRGame.jpg"
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  }
};

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export const CTA_CONTENT: Record<string, CtaContent> = {
  en: {
    eyebrow: "Ready for Care?",
    title: "Your Health is Our Top Priority",
    subtitle: "Visit our clinic in Dembi Dolo or get in touch with our emergency team right away.",
    body: "We provide comprehensive medical support round the clock with professional care.",
    buttonText: "Book an Appointment",
    emergencyText: "24/7 Emergency Support Available",
    callLabel: "Call Support",
    whatsappLabel: "Chat on WhatsApp",
    hoursLabel: "Working Hours",
    hoursWeekday: "Sun - Sun: 8:30 AM - 7:00 PM",
    hoursWeekend: "Sunday: 6:00 AM - 8:00 PM"
  },
  om: {
    eyebrow: "yaalii Barbaaddaniittu?",
    title: "Fayyaan Keessan Dursa Keenya",
    subtitle: "Kilinika keenya Dambi Doolloo jiru daawwadhaa ykn garee balaa tasaa keenya quunnamaa.",
    body: "Tajaajila fayyaa guutuu ogeeyyii olaanaatiin isinii kennina.",
    buttonText: "Beellama Qabachuuf",
    emergencyText: "Tajaajila Balaa Tasaa Sa'aa 24",
    callLabel: "Bilbilaan Quunnamuuf",
    whatsappLabel: "WhatsApp'n quunnamuuf",
    hoursLabel: "Sa'aatii Hojii",
    hoursWeekday: "sanbata - Sanbata: Ganama 2:30 - Halkan 7:00",
    hoursWeekend: "Sanbata: ganama 2:30 - Halkan 1:00"
  }
};

export const TOP_BAR: Record<string, TopBarContent> = {
  en: {
    hours: "sunday - sunday: 8:30 AM - 7:00 PM",
    emergency: "Emergency 24/7 Available"
  },
  om: {
    hours: "sanbata - Sanbata: Ganama Sa'aa 2:30 - Halkan Sa'aa 1:00",
    emergency: "Tajaajila Balaa Tasaa Sa'aa 24 ni taasisna"
  }
};

export const NAV_LINKS: Record<string, NavLink[]> = {
  en: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Departments", href: "#departments" },
    { label: "Doctors", href: "#doctors" },
    { label: "Contact", href: "#contact" },
  ],
  om: [
    { label: "Mana", href: "#hero" },
    { label: "Waa'ee Keenya", href: "#about" },
    { label: "Tajaajila", href: "#services" },
    { label: "Dameewwan", href: "#departments" },
    { label: "Ogeeyyii", href: "#doctors" },
    { label: "Quunnamaa", href: "#contact" },
  ],
};

export const STATS: Record<string, StatItem[]> = {
  en: [
    { count: "2+", label: "Years of Experience", icon: FaUserMd },
    { count: "5+", label: "Expert Doctors & Staff", icon: FaStethoscope },
    { count: "10,000+", label: "Patients Served", icon: FaHeartbeat },
    { count: "6", label: "Advanced Departments", icon: FaVial },
  ],
  om: [
    { count: "2+", label: "Waggoota Muuxannoo", icon: FaUserMd },
    { count: "5+", label: "Ogeeyyii Fayyaa", icon: FaStethoscope },
    { count: "10,000+", label: "Dhukkubsattoota Gargaaraman", icon: FaHeartbeat },
    { count: "6", label: "Dameewwan", icon: FaVial },
  ]
};

export const WHY_US: Record<string, WhyUsContent> = {
  en: {
    title: "Why Choose Glory Medium Clinic",
    subtitle: "Rooted in Dembi Dolo with a commitment to uncompromised clinical excellence, patient warmth, and dependable community care.",
    boxTitle: "Dedicated to Your Well-Being",
    boxDesc: "Established with a visionary mission to bridge healthcare gaps, we bring professional diagnostics and emergency readiness under one roof.",
    buttonText: "Learn More About Us",
    features: [
      { title: "more than two years of Local Trust", desc: "Serving families across Kellem Wollega with consistent high-standard medical attention." },
      { title: "Advanced Diagnostics", desc: "Reliable laboratory equipment ensuring accurate results for rapid treatment plans." },
      { title: "Compassionate Staff", desc: "Experienced doctors and nurses who prioritize dignity, comfort, and attentive listening." }
    ]
  },
  om: {
    title: "Maaliif Glory Medium Clinic Filattu?",
    subtitle: "Dambi Doolloo keessatti qulqullina tajaajila fayyaafi amanammummaan kan beekamu.",
    boxTitle: "Fayyaa Keessaniif",
    boxDesc: "Hanqinoota tajaajila fayyaa furuuf kan hundaa'e, qorannoo laaboraatorii ammayyaa fi qoricha qulqullina qabu waliin isin tajaajilla.",
    buttonText: "Waa'ee Keenya Dabalataan Beeka",
    features: [
      { title: "Amantaa Waggoota lama olii", desc: "Maatii Qellem Wallaggaa tajaajiluun kunuunsa fayyaa ol'aanaa kennineerra" },
      { title: "Qorannoo Ammayyaa", desc: "Meeshaalee laaboraatorii ammayyaa bu'aa sirrii kennan qabaachuun." },
      { title: "Ogeeyyii Kabajaa Qaban", desc: "Ogeeyyii dursa dhukkubsattootaaf kennan." }
    ]
  }
};

export const ABOUT_CONTENT: Record<string, AboutContent> = {
  en: {
    eyebrow: "About Us",
    title: "Providing Compassionate Healthcare Services in Dembi Dolo Since 2016 (EC)",
    p1: "Glory Medium Clinic has grown from a humble community initiative into Dembi Dolo's premier medical facility. Founded by Dr. Gemechis Mokonnin, a dedicated consultant internist, our clinic combines advanced clinical practices with genuine local dedication.",
    p2: "Our mission is simple: to make dependable, high-quality healthcare accessible to every individual and family in the Kellem Wollega Zone.",
    quote: "“Healthcare is not just about treating an illness; it is about honoring the dignity of every patient.”"
  },
  om: {
  eyebrow: "Waa'ee Keenya",
  title: "Bara 2016 (E.C) irraa eegalee Dambi Doolloo keessatti kunuunsa fayyaa qulqullina qabu kennuun beekamna",
  p1: "Kilinikni Giddu-galeessaa Glory (Glory Medium Clinic)  Ogeessa dhukkuboota keessoo Dr. Gemechis Mekonnen kan hundaa'e yoo ta'u, tajaajila ammayyaa fi amansiisa hawaasa biraan ga'uuf hojjechaa jira.",
  p2: "Ergamni keenya salphaadha: \"Fayyaa hundaaf\" jechuudhaan naannoo Qellem Wallaggaa keessatti tajaajila fayyaa amansiisaa fi qulqullina qabu hawaasa hunda biraan gahuudha.",
  quote: "“Kunuunsa fayyaa jechuun dhukkuba qofa yaaluu miti; kabajaa dhukkubsataa hunda eeguudha.”"
}
};

export const SERVICES_SECTION: Record<string, ServicesSectionContent> = {
  en: {
    eyebrow: "Services",
    title: "Our Medical Services",
    subtitle: "Comprehensive health departments structured to deliver accurate diagnoses and soothing treatments.",
    items: [
      { icon: FaStethoscope, title: "General Consultation", desc: "Routine health checkups, physical assessments, and professional specialist." },
      { icon: FaVial, title: "Laboratory Diagnostics", desc: "Fast and reliable blood panels, biochemistry tests, and infectious disease screenings." },
      { icon: FaHeartbeat, title: "Maternal Health (Antenatal Care)", desc: "Antenatal care and pregnancy health tracking up until birth." },
      { icon: FaAmbulance, title: "Emergency Stabilization", desc: "Immediate first-response triage and acute stabilization for urgent medical incidents." },
      { icon: FaUserMd, title: "Minor Surgery & Wound Care", desc: "Outpatient sterile surgical interventions, suture care, and trauma management." }
    ]
  },
  om: {
    eyebrow: "Tajaajila",
    title: "Tajaajila Fayyaa nuti kenninu",
    subtitle: "Qorannoo sirrii fi yaalii gaarii kennuuf dameewwan gurmaa'an.",
    items: [
      { icon: FaStethoscope, title: "Gorsa Waliigalaa", desc: "Sakatta'insa qaamaa fi gorsa ogeeyyii fayyaa." },
      { icon: FaVial, title: "Laaboraatorii Qorannoo", desc: "Complete blood tests and comprehensive chemistry analysis, Ultrasound, Echocardiography, Electrocardiography (ECG), and viral testing, delivered with prompt and reliable service." },
      { icon: FaHeartbeat, title: "Fayyaa fi qorannoo Haadholii ulfaa", desc: "Hordoffii ulfaa." },
      { icon: FaAmbulance, title: "Tajaajila Balaa Tasaa", desc: "Gargaarsa jalqabaa dhibee ariifachiisaa akka tasaa mudataniif." },
      { icon: FaUserMd, title: "Yaalii baqaqsanii hodhuu Xixiqqaa", desc: "Kunuunsa madaa, hodhaa, fi yaalii alaa." }
    ]
  }
};

export const DEPARTMENTS_DATA: Record<string, DepartmentsContent> = {
  en: {
    eyebrow: "Our Departments",
    title: "Care for Your Health, All in One Place",
    subtitle: "Our clinic brings together essential medical services to make it easier for you and your family to get the care you need.",
    tabs: [
      { name: "General Medicine", title: "General Clinical & Outpatient Department", desc: "Our primary point of care where experienced Specialists evaluate symptoms, diagnose conditions, and formulate tailored treatment strategies for acute and chronic illnesses." },
      { name: "Laboratory", title: "Advanced Diagnostic Laboratory", desc: "Equipped with dependable technology to execute hematology, parasitology, clinical chemistry, and serology tests rapidly and with absolute precision." },
      
      {
  name: "Maternal Care",
  title: "Maternal & Antenatal Care",
  desc: "Dedicated to supporting expectant mothers throughout pregnancy with regular antenatal checkups, health monitoring, nutritional guidance, and practical advice to help mothers and their babies stay healthy before birth."
}
    ]
  },
  om: {
    eyebrow: "Dameewwan",
    title: "Dameewwan Fayyaa",
    subtitle: "Kunuunsa dhukkubsattootaaf dameewwan qophaa'an ilaaluuf.",
    tabs: [
      { name: "tajaajila Waliigalaa", title: "Kutaa Tajaajila Waliigalaa", desc: "Bakka ogeeyyiin fayyaa mallattoo dhukkubaa sakatta'anii fi yaalii barbaachisaa kennan." },
      { name: "Laaboraatorii", title: "Laaboraatorii Qorannoo Ammayyaa", desc: "Qorannoo dhiigaa, vaayirasii fi keemikaalii sirriitti raawwachuuf kan qophaa'e." },
      { name: "Kunuunsa Haadholii", title: "Kutaa Fayyaa Haadholii", desc: "Hordoffii ulfaa, fi gorsa fayyaa haadholii." }
    ]
  }
};

export const DOCTORS_SECTION: Record<string, DoctorsSectionContent> = {
  en: {
    eyebrow: "Our Team",
    title: "Our Professional Staff",
    subtitle: "Dedicated medical professionals committed to your health and recovery.",
    list: [
      { 
        name: "Dr. Gemechis Mekonnen", 
        role: "Founder & Consultant Internist", 
        desc: "Experienced consultant internist specializing in comprehensive internal medicine and patient care.", 
        image: "/images/DRGame.jpg" 
      },
      { 
        name: "Dr. Firaol Rebuma", 
        role: "General Surgeon", 
        desc: "Skilled general surgeon providing expert surgical care and operations.", 
        image: "/images/DRFraol.png" 
      },
      { 
        name: "Sr.Sara Thomas", 
        role: "Nurse", 
        desc: "Compassionate nursing professional dedicated to patient support and clinical assistance.", 
        image: "/images/srSara.png" 
      },
      { 
        name: "Asabe Bacha", 
        role: "Laboratory Technologist", 
        desc: "laboratory technologist ensuring accurate diagnostic testing and analysis.", 
        image: "/images/asebe.png" 
      },
      { 
        name: "Sr.Meti Dingeta", 
        role: "Nurse", 
        desc: "Dedicated nursing professional providing high-quality patient care and support.", 
        image: "/images/meti.jpg" 
      },
      { 
        name: "Sr. Fakati Admasu", 
        role: "Nurse", 
        desc: "Caring nursing staff focused on comfort, recovery, and medical assistance.", 
        image: "/images/SrFakkattki.png" 
      },
    ]
  },
  om: {
    eyebrow: "Ogeeyyii Keenya",
    title: "Ogeeyyii Fayyaa Keenya",
    subtitle: "Ogeeyyii fayyaa fayyina keessaniif qophaa'oo ta'an.",
    list: [
      { 
        name: "Dr. Gemechis Mekonnen", 
        role: "Hundeessaa & Ogeessa Dhukkuboota Keessoo", 
        desc: "Ogeessa dhukkuboota keessoo fi kunuunsa fayyaa guutuu irratti muuxannoo qabu.", 
        image: "/images/DRGame.jpg" 
      },
      { 
        name: "Dr. Firaol Rebuma", 
        role: "Ogeessa Opireeshinii Waliigalaa", 
        desc: "Ogeessa Opireeshinii waliigalaa tajaajila baqaqsanii yaaluu irratti muuxannoo olaanaa qabu.", 
        image: "/images/DRFraol.png" 
      },
      { 
        name: "Sr. Sara Thomas", 
        role: "Narsii", 
        desc: "Narsii dhibee fi haala fayyaa hordofuu irratti deeggarsa gootu.", 
        image: "/images/srSara.png" 
      },
      { 
        name: "Asabe Bacha", 
        role: "Ogeessa Laaboraatorii", 
        desc: "Ogeessa laaboraatorii qorannoo sirrii fi amansiisaa ta'e gaggeessu.", 
        image: "/images/asebe.png" 
      },
      { 
        name: "Sr. Meti Dingeta", 
        role: "Narsii", 
        desc: "Narsii kunuunsa fayyaa fi deeggarsa barbaachisaa ta'ee Kennitu.", 
        image: "/images/meti.jpg" 
      },
      { 
        name: "Sr. Fakati Admasu", 
        role: "Narsii", 
        desc: "Narsii fayyaa fi fayyina dhukkubsattootaaf dursa kennuun tajaajiltu.", 
        image: "/images/SrFakkattki.png" 
      },
    ]
  }
};

export const CONTACT_SECTION: Record<string, ContactSectionContent> = {
  en: {
    eyebrow: "Contact",
    title: "Get in Touch With Us",
    subtitle: "Reach out to schedule consultations, ask about our services, or visit our clinic in Dembi Dolo.",
    locationTitle: "Our Location",
    locationVal: "Dembi Dolo, Kellem Wollega Zone, Oromia, Ethiopia",
    emailTitle: "Email Us",
    callTitle: "Call Us",
    formName: "Your Name",
    formEmail: "Your Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSubmit: "Send Message",
    successMsg: "Thank you! Your message has been sent successfully."
  },
  om: {
    eyebrow: "Quunnamaa",
    title: "Nu Quunnamaa",
    subtitle: "Gorsa argachuuf ykn kilinika keenya daawwachuuf nu quunnamaa.",
    locationTitle: "Bakkeerra Jirru",
    locationVal: "Dambi Doolloo, Naannoo Qellem Wallaggaa, Oromiyaa, Itoophiyaa",
    emailTitle: "Iimeilii Ergaa",
    callTitle: "Bilbilaa",
    formName: "Maqaa Keessan",
    formEmail: "Iimeilii Keessan",
    formSubject: "Mata Duree",
    formMessage: "Ergaa Keessan",
    formSubmit: "Ergaa Ergi",
    successMsg: "Galatoomaa! Ergaan keessan milkaa'inaan ergameera."
  }
};


export const FAQ_DATA: Record<string, FaqSectionContent> = {
  en: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Find clear answers to common questions regarding our medical services, operating hours, appointments, and facilities.",
    items: [
      {
        question: "Do I need to book an appointment before visiting the clinic?",
        answer: "While we welcome walk-ins for general checkups and urgent needs, booking an appointment ahead of time ensures shorter wait times with your preferred specialist or doctor."
      },
      {
        question: "Are emergency services available 24 hours a day?",
        answer: "Yes, our emergency stabilization and triage unit is fully operational round-the-clock to handle urgent medical cases and sudden illnesses in Dembi Dolo."
      },
      {
        question: "What diagnostic and laboratory services are available on-site?",
        answer: "Our advanced laboratory handles hematology, clinical chemistry, parasitology, and rapid infectious disease screenings directly on-site to deliver fast, reliable results for treatment."
      },
      
      {
        question: "What should I bring during my first visit?",
        answer: "Please bring any previous medical records or test results, a list of current medications you are taking, and payment/insurance details if applicable."
      },
      {
        question: "How can I contact the clinic in case of an urgent inquiry?",
        answer: "You can reach us immediately via phone at +251 911918330 or through our emergency line listed on the top bar for instant assistance."
      }
    ]
  },
  om: {
    eyebrow: "Gaaffilee Deddeebi'amanii Ka'an",
    title: "Gaaffilee fi Deebii",
    subtitle: "Tajaajila fayyaa, sa'aatii hojii, beellama, fi hojii kilinika keenya ilaalchisee deebii argadhaa.",
    items: [
      {
        question: "Kilinika dhufuu kiyyaan dura beellama qabachuun qabaa?",
        answer: "Tajaajila waliigalaatiif osoo hin qabatin dhufuun ni danda'ama, garuu beellama qabachuun yeroo akka hin balleessine fi ogeessa barbaaddan argachuuf isin gargaara."
      },
      {
        question: "Tajaajila balaa tasaa sa'aa 24 guutuu ni jiraa?",
        answer: "Eeyyee, kutaan balaa tasaa fi gargaarsa jalqabaa Dambi Doolloo keessatti sa'aa 24 hojjechaa jira."
      },
      {
        question: "Qorannoo laaboraatorii akkamiitu kilinikicha keessatti kennama?",
        answer: "Qorannoo dhiigaa, keemikaalii qaamaa, fi vaayirasii garaagaraa laaboraatorii keenya keessatti saffisaan hojjetamee deebii sirrii kenna."
      },
      {
        question: "Yeroo jalqabaaf dhufuuf maal qabaachuun qaba?",
        answer: "ragaa fayyaa kanaan duraa, fi qoricha amma fudhachaa jirtan qabattanii osoo dhuftanii filatamaadha."
      },
      {
        question: "Rakkoo tasaa mudateef akkamitti nu quunnamuu dandeessu?",
        answer: "Lakkoofsa bilbilaa +251 911918330 irratti yeroo kamiyyuu nu quunnamuu dandeessu."
      }
    ]
  }
};

export const TESTIMONIALS_DATA: Record<string, TestimonialsSectionContent> = {
  en: {
    eyebrow: "Testimonials",
    title: "What Our Patients Say",
    subtitle: "Read feedback from families and individuals who trust Glory Medium Clinic with their health and care.",
    list: [
      {
        name: "Gemechu Tesfaye",
        role: "Local Resident",
        comment: "Glory Medium Clinic brought top-tier healthcare right to Dembi Dolo. The doctors are attentive, and the lab results are exceptionally fast."
      },
      {
        name: "galaanee Hundeessaa",
        role: "Mother & Patient",
        comment: "The maternal care team gave me wonderful guidance throughout my pregnancy. I am deeply grateful for their professionalism and warmth."
      },
      {
        name: "Tigist Asmera",
        role: "Community Member",
        comment: "Finding a reliable medical center with an internal medicine specialist like Dr. Gemechis in Kellem Wollega has been a true blessing for our family."
      }
    ]
  },
  om: {
    eyebrow: "Ragaa Dhukkubsattootaa",
    title: "Yaada Maamila Keenyaa",
    subtitle: "Waa'ee tajaajila keenyaa hawaasa irraa yaada kennaman dubbisaa.",
    list: [
      {
        name: "Gemechu Tesfaye",
        role: "Jiraataa Naannicha",
        comment: "Kilinikni Glory tajaajila gaarii Ogeeyyii fayyaa muuxannoo qaban Dambi Doolloo keessatti fiduu isaatiif galatoomuu qaba."
      },
      {
        name: "galaanee Hundeessaa",
        role: "jiraata naannoo fi dhukkubsataa",
        comment: "tajaajila yaalaa ga'aafi gorsa gaarii argadheera."
      },
      {
        name: "Tigist Asmera",
        role: "Hawaasa Naannoo",
        comment: "Qellem Wallaggaa keessatti ogeessa dhukkuboota keessoo akka Dr. Gemechis argachuun maatii keenyaaf eebba guddaadha."
      }
    ]
  }
};