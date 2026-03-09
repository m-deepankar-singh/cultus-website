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
  metadataBase: new URL("https://cultusworkforce.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
    url: "https://cultusworkforce.com",
    siteName: "Cultus Education",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cultus Education | Bridging Talent To Tomorrow",
    description:
      "We build tomorrow's workforce by transforming learners into job-ready talent, skilling them for the future and connecting them directly to high-demand careers.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cultus Education and Technology Services",
  alternateName: "CWDS",
  url: "https://cultusworkforce.com",
  logo: "https://cultusworkforce.com/images/Cultus-white%20(1).png",
  description:
    "Cultus Workforce Development Services (Pvt) Ltd is a workforce skilling platform that trains learners and connects them to high-demand careers across 11 Asian countries.",
  email: "info@cultusworkforce.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "No. 70, Lucky Plaza Building, St. Anthony\u2019s Road",
      addressLocality: "Colombo 3",
      addressCountry: "LK",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Kawasan CBD Rasuna Epicentrum - Epiwalk Office Suite, Jl. HR. Rasuna Said, Karet Kuningan, Setiabudi",
      addressLocality: "Jakarta Selatan",
      postalCode: "12940",
      addressCountry: "ID",
    },
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
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cultus Education",
  url: "https://cultusworkforce.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://cultusworkforce.com/programs?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
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
