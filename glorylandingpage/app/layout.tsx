import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glory Medium Clinic",
  description:
    "Modern healthcare services in Dembi Dolo. Compassionate, reliable, and patient-centered medical care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}