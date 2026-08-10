
import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const SITE_URL = "https://glorymediumclinic.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Glory Medium Clinic | Healthcare in Dembi Dolo",
    template: "%s | Glory Medium Clinic",
  },

  description:
    "Glory Medium Clinic provides compassionate, reliable, and patient-centered healthcare services in Dembi Dolo, Oromia, Ethiopia.",

  keywords: [
    "Glory Medium Clinic",
    "Glory Clinic",
    "clinic in Dembi Dolo",
    "healthcare in Dembi Dolo",
    "medical clinic Dembi Dolo",
    "healthcare Oromia",
    "medical services Dembi Dolo",
  ],

  authors: [
    {
      name: "Glory Medium Clinic",
    },
  ],

  creator: "Glory Medium Clinic",
  publisher: "Glory Medium Clinic",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Glory Medium Clinic",
    title: "Glory Medium Clinic | Healthcare in Dembi Dolo",
    description:
      "Compassionate, reliable, and patient-centered healthcare services in Dembi Dolo, Oromia, Ethiopia.",
    images: [
      {
        url: "/DRGame.jpg",
        width: 1200,
        height: 630,
        alt: "Glory Medium Clinic in Dembi Dolo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Glory Medium Clinic | Healthcare in Dembi Dolo",
    description:
      "Compassionate, reliable, and patient-centered healthcare services in Dembi Dolo, Oromia, Ethiopia.",
    images: ["/DRGame.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
          <StructuredData />
        {children}
      </body>
    </html>
  );
}

