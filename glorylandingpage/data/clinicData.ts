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


export const CLINIC: ClinicConfig = {
  name: "Glory Medium Clinic",
  logoText: "Glory",
  logoSub: "Medium Clinic",
  tagline: "Dembi Dolo's Premier Healthcare Center",
  address: "Kellem Wollega Zone, Dembi Dolo, Ethiopia",
  location: "Dembi Dolo, Kellem Wollega Zone, Ethiopia",
  phone: "+251 911918330",
  phoneHref: "tel:+251 911918330",
  email: "info@glorymediumclinic.com",
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
      om: "Kiliniikiin Giddu-galeessaa Gloorii Bara 2016 (E.C) Dr. Gemechis Mokonnin, ogeessa dhukkuboota keessooatiin hundaa'e. Tajaajila fayyaa amansiisaa, olaanaa fi qulqullina qabu hawaasa Dambi Dooloo fi naannoo isaaniif kennuuf kutannoon hojjechaa jira."
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
    hoursWeekday: "Mon - Sun: 8:00 AM - 8:00 PM",
    hoursWeekend: "Sunday: Emergency Only"
  },
  om: {
    eyebrow: "Kunuunsaaf Qophaa'aa?",
    title: "Fayyaa Keessani Dursa Keenya",
    subtitle: "Kilinika keenya Dambi Doolloo jiru daawwadhaa ykn gareen balaa tasaa keenya quunnamaa.",
    body: "Tajaajila fayyaa guutuu ogeeyyii olaanaatiin isinii kennina.",
    buttonText: "Beellama Qabadhu",
    emergencyText: "Tajaajila Balaa Tasaa Sa'aa 24 Jira",
    callLabel: "Bilbilaan Quunnamaa",
    whatsappLabel: "WhatsApp irratti Nu Haasa'aa",
    hoursLabel: "Sa'aatii Hojii",
    hoursWeekday: "Wiixata - Sanbata: Ganama 2:00 - Halkan 2:00",
    hoursWeekend: "Dilbata: Balaa Tasaa Qofa"
  }
};

export const TOP_BAR: Record<string, TopBarContent> = {
  en: {
    hours: "Monday - Saturday: 8:00 AM - 8:00 PM",
    emergency: "Emergency 24/7 Available"
  },
  om: {
    hours: "Wiixata - Sanbata: Ganama Sa'aa 2:00 - Halkan Sa'aa 2:00",
    emergency: "Tajaajila Balaa Tasaa Sa'aa 24 Jira"
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
    { count: "10,000+", label: "Dhukkubsattoota Gargaaramte", icon: FaHeartbeat },
    { count: "6", label: "Dameewwan Ammayyaa", icon: FaVial },
  ]
};

export const WHY_US: Record<string, WhyUsContent> = {
  en: {
    title: "Why Choose Glory Medium Clinic",
    subtitle: "Rooted in Dembi Dolo with a commitment to uncompromised clinical excellence, patient warmth, and dependable community care.",
    boxTitle: "Dedicated to Your Well-Being",
    boxDesc: "Established with a visionary mission to bridge healthcare gaps, we bring professional diagnostics, certified medications, and emergency readiness under one roof.",
    buttonText: "Learn More About Us",
    features: [
      { title: "Decade of Local Trust", desc: "Serving families across Kellem Wollega with consistent high-standard medical attention." },
      { title: "Advanced Diagnostics", desc: "Reliable laboratory equipment ensuring accurate results for rapid treatment plans." },
      { title: "Compassionate Staff", desc: "Experienced doctors and nurses who prioritize dignity, comfort, and attentive listening." }
    ]
  },
  om: {
    title: "Maaliif Glory Medium Clinic Filattu?",
    subtitle: "Dambi Doolloo keessatti qulqullina tajaajila fayyaa, dhihaannaa hawaasaa, fi amanammummaan kan beekamu.",
    boxTitle: "Fayyaa Keessaniif Qophaa'eera",
    boxDesc: "Hanqinoota tajaajila fayyaa furuuf kan hundaa'e, qorannoo laaboraatorii ammayyaa fi qoricha qulqullina qabu waliin isin tajaajilla.",
    buttonText: "Waa'ee Keenya Dabalataan Beeka",
    features: [
      { title: "Amantaa Waggoota lama olii", desc: "Maatii Qellem Wallaggaa tajaajiluun kunuunsa fayyaa ol'aanaa kenne." },
      { title: "Qorannoo Ammayyaa", desc: "Meeshaalee laaboraatorii ammayyaa bu'aa sirrii kennan." },
      { title: "Ogeeyyii Kabajaa Qaban", desc: "Ogeeyyii dursa kabajaa dhukkubsattootaa kennan." }
    ]
  }
};

export const ABOUT_CONTENT: Record<string, AboutContent> = {
  en: {
    eyebrow: "About Us",
    title: "Providing Compassionate Healthcare Solutions in Dembi Dolo Since 2016 (EC)",
    p1: "Glory Medium Clinic has grown from a humble community initiative into Dembi Dolo's premier medical facility. Founded by Dr. Gemechis Mokonnin, a dedicated consultant internist, our clinic combines advanced clinical practices with genuine local dedication.",
    p2: "Our mission is simple: to make dependable, high-quality healthcare accessible to every individual and family in the Kellem Wollega Zone.",
    quote: "“Healthcare is not just about treating an illness; it is about honoring the dignity of every patient.”"
  },
  om: {
    eyebrow: "Waa'ee Keenya",
    title: "Bara 2016 (E.C) irraa eegalee Dambi Doolloo keessatti kunuunsa fayyaa kennina",
    p1: "Glory Medium Clinic hojii hawaasaa irraa kaasee hanga buufata fayyaa olaanaatti guddateera. Dr. Gemechis Mokonnin, ogeessa dhukkuboota keessootiin kan hundaa'e, tajaajila ammayyaa fi dhihaannaa hawaasaa walitti fida.",
    p2: "Ergamni keenya salphaadha: Naannoo Qellem Wallaggaa keessatti tajaajila fayyaa qulqullina qabu nama hundaa biraan gahuu.",
    quote: "“Kunuunsa fayyaa jechuun dhukkuba qofa yaaluu miti; kabajaa dhukkubsataa hunda eeguudha.”"
  }
};

export const SERVICES_SECTION: Record<string, ServicesSectionContent> = {
  en: {
    eyebrow: "Services",
    title: "Our Medical Services",
    subtitle: "Comprehensive health departments structured to deliver accurate diagnoses and soothing treatments.",
    items: [
      { icon: FaStethoscope, title: "General Consultation", desc: "Routine health checkups, physical assessments, and professional specialist referrals." },
      { icon: FaVial, title: "Laboratory Diagnostics", desc: "Fast and reliable blood panels, biochemistry tests, and infectious disease screenings." },
      { icon: FaPills, title: "Pharmacy Dispensary", desc: "Fully stocked pharmacy with certified medications and professional pharmaceutical guidance." },
    //   { icon: FaHeartbeat, title: "Maternal & Child Health", desc: "Antenatal care, safe delivery counseling, childhood immunizations, and growth monitoring." },
      { icon: FaAmbulance, title: "Emergency Stabilization", desc: "Immediate first-response triage and acute stabilization for urgent medical incidents." },
      { icon: FaUserMd, title: "Minor Surgery & Wound Care", desc: "Outpatient sterile surgical interventions, suture care, and trauma management." }
    ]
  },
  om: {
    eyebrow: "Tajaajila",
    title: "Tajaajila Fayyaa Keenya",
    subtitle: "Qorannoo sirrii fi yaalii gaarii kennuuf dameewwan gurmaa'an.",
    items: [
      { icon: FaStethoscope, title: "Gorsa Waliigalaa", desc: "Sakatta'insa qaamaa fi gorsa ogeeyyii fayyaa." },
      { icon: FaVial, title: "Laaboraatorii Qorannoo", desc: "Qorannoo dhiigaa fi vaayirasii ariifachiisaa fi amanamaa." },
      { icon: FaPills, title: "Farmaasii Kilinikaa", desc: "Qoricha qulqullina qabu ibsa ogeeyyii waliin." },
    //   { icon: FaHeartbeat, title: "Fayyaa Haadholii & Daa'immanii", desc: "Hordoffii ulfaa, talaallii daa'immanii, fi guddina hordofuu." },
      { icon: FaAmbulance, title: "Tajaajila Balaa Tasaa", desc: "Gargaarsa jalqabaa ariifachiisaa haala tasaa mudataniif." },
      { icon: FaUserMd, title: "Yaalii Xixiqqaa & Madaa", desc: "Kunuunsa madaa, hodhaa, fi yaalii alaa." }
    ]
  }
};

export const DEPARTMENTS_DATA: Record<string, DepartmentsContent> = {
  en: {
    eyebrow: "Departments",
    title: "Medical Departments",
    subtitle: "Explore our specialized functional units designed for optimal patient management.",
    tabs: [
      { name: "General Medicine", title: "General Clinical & Outpatient Department", desc: "Our primary point of care where experienced general practitioners evaluate symptoms, diagnose conditions, and formulate tailored treatment strategies for acute and chronic illnesses." },
      { name: "Laboratory", title: "Advanced Diagnostic Laboratory", desc: "Equipped with dependable technology to execute hematology, parasitology, clinical chemistry, and serology tests rapidly and with absolute precision." },
      { name: "Pharmacy", title: "Certified Clinical Pharmacy", desc: "A secure dispensary managed by qualified pharmacists ensuring proper drug dispensing, patient dosage education, and quality pharmaceutical storage." },
      { name: "Maternal Care", title: "Maternal & Child Health Unit", desc: "Dedicated to expectant mothers and newborns, offering comprehensive antenatal screening, postnatal monitoring, nutritional guidance, and childhood vaccination schedules." }
    ]
  },
  om: {
    eyebrow: "Dameewwan",
    title: "Dameewwan Fayyaa",
    subtitle: "Kunuunsa dhukkubsattootaaf dameewwan qophaa'an ilaalaa.",
    tabs: [
      { name: "Mala'ata Waliigalaa", title: "Kutaa Tajaajila Waliigalaa", desc: "Bakka ogeeyyiin fayyaa mallattoo dhukkubaa sakatta'anii fi yaalii barbaachisaa kennan." },
      { name: "Laaboraatorii", title: "Laaboraatorii Qorannoo Ammayyaa", desc: "Qorannoo dhiigaa, vaayirasii fi keemikaalii sirriitti raawwachuuf kan qophaa'e." },
      { name: "Farmaasii", title: "Farmaasii Mirkaneeffame", desc: "Qoricha qulqullina qabu qopheessuu fi qajeelfama fayyadamaa kennuu." },
      { name: "Kunuunsa Haadholii", title: "Kutaa Fayyaa Haadholii & Daa'immanii", desc: "Hordoffii ulfaa, talaallii daa'immanii, fi gorsa fayyaa haadholii." }
    ]
  }
};

export const DOCTORS_SECTION: Record<string, DoctorsSectionContent> = {
  en: {
    eyebrow: "Doctors",
    title: "Our Professional Staff",
    subtitle: "Dedicated medical professionals committed to your health and recovery.",
    list: [
      { name: "Dr. Gemechis Mokonnin", role: "Founder & Consultant Internist", desc: "Founder & Consultant Internist", image: "/images/DRGame.jpg" },
      { name: "Dr. Bekele Tadesse", role: "Medical Director & General Practitioner", desc: "Medical Director & General Practitioner", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" },
      { name: "Nurse Almaz Kebede", role: "Head of Nursing & Maternal Care", desc: "Head of Nursing & Maternal Care", image: "https://images.unsplash.com/photo-1594824813575-27a3c31405b0?auto=format&fit=crop&w=600&q=80" },
      { name: "Tachbele M.", role: "Senior Laboratory Technologist", desc: "Senior Laboratory Technologist", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  om: {
    eyebrow: "Ogeeyyii",
    title: "Ogeeyyii Fayyaa Keenya",
    subtitle: "Ogeeyyii fayyaa fayyaa keessaniif qophaa'an.",
    list: [
      { name: "Dr. Gemechis Mokonnin", role: "Hundaa'aa & Ogeessa Dhukkuboota Keessoo", desc: "Hundaa'aa & Ogeessa Dhukkuboota Keessoo", image: "/images/founder.jpg" },
      { name: "Doktar Bakkalaa Taddasa", role: "Hoggansa Fayyaa & Ogeessa Waliigalaa", desc: "Hoggansa Fayyaa & Ogeessa Waliigalaa", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" },
      { name: "Narsii Almaaz Kabbada", role: "Hogganituu Narsii & Fayyaa Haadholii", desc: "Hogganituu Narsii & Fayyaa Haadholii", image: "https://images.unsplash.com/photo-1594824813575-27a3c31405b0?auto=format&fit=crop&w=600&q=80" },
      { name: "Taachabalee M.", role: "Ogeessa Laaboraatorii Olaanaa", desc: "Ogeessa Laaboraatorii Olaanaa", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80" }
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