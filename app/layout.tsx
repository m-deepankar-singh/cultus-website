import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Sora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cultusedu.com"),
  title: {
    default: "Cultus Education | Bridging Talent To Tomorrow",
    template: "%s | Cultus Education",
  },
  description:
    "We build tomorrow's workforce by transforming learners into job-ready talent, skilling them for the future and connecting them directly to high-demand careers.",
  openGraph: {
    title: "Cultus Education | Bridging Talent To Tomorrow",
    description:
      "We build tomorrow's workforce by transforming learners into job-ready talent, skilling them for the future and connecting them directly to high-demand careers.",
    url: "https://cultusedu.com",
    siteName: "Cultus Education",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cultus Education – Bridging Talent To Tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cultus Education | Bridging Talent To Tomorrow",
    description:
      "We build tomorrow's workforce by transforming learners into job-ready talent, skilling them for the future and connecting them directly to high-demand careers.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cultus Education and Technology Services",
  alternateName: "CETS",
  url: "https://cultusedu.com",
  logo: "https://cultusedu.com/images/Cultus-white (1).png",
  description:
    "Cultus Education and Technology Services (CETS) is a workforce skilling platform that trains learners and connects them to high-demand careers across 11 Asian countries.",
  email: "sales@cultusedu.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "PSP SQUARE, 4th Floor, No 201, Green Glen Layout, Bellandur ORR",
      addressLocality: "Bangalore",
      postalCode: "560103",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "6-3-634, A1&2, II Floor, Green Channel Apartments, Opposite Lane ICICI Bank, Khairtabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500004",
      addressCountry: "IN",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${sora.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
