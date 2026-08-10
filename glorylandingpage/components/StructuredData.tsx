
import { CLINIC } from "@/data/clinicData";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",

    "@id": "https://glorymediumclinic.com/#clinic",

    name: CLINIC.name,

    url: "https://glorymediumclinic.com",

    logo: "https://glorymediumclinic.com/gloryLogo.jpg",

    image: [
      "https://glorymediumclinic.com/images/g11.jpg",
      "https://glorymediumclinic.com/images/g2.jpg",
    ],

    description:
      "Glory Medium Clinic provides compassionate, reliable, and patient-centered healthcare services in Dembi Dolo, Kellem Wollega, Oromia, Ethiopia.",

    telephone: CLINIC.phone,

    email: CLINIC.email,

    address: {
      "@type": "PostalAddress",
      streetAddress: "Kellem Wollega Zone",
      addressLocality: "Dembi Dolo",
      addressRegion: "Oromia",
      addressCountry: "ET",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Dembi Dolo",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kellem Wollega",
      },
    ],

    founder: {
      "@type": "Person",
      name: CLINIC.founder.name,
      jobTitle: "Consultant Internist",
    },

    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:30",
      closes: "19:00",
    },

    sameAs: [
      CLINIC.socials.facebook,
      CLINIC.socials.YouTube,
      CLINIC.socials.telegram,
      CLINIC.socials.Tiktok,
    ],

    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "General Consultation",
      },
      {
        "@type": "MedicalTest",
        name: "Laboratory Diagnostics",
      },
      {
        "@type": "MedicalProcedure",
        name: "Maternal Health and Antenatal Care",
      },
      {
        "@type": "MedicalProcedure",
        name: "Emergency Stabilization",
        description:
          "Emergency stabilization and first-response medical support available 24/7.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Minor Surgery and Wound Care",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

