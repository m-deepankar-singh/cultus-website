import type { Metadata } from "next";
import Image from "next/image";
import HeroBanner from "@/components/sections/HeroBanner";
import StatsGrid from "@/components/sections/StatsGrid";
import CTABanner from "@/components/sections/CTABanner";
import AboutContent from "./AboutContent";
import { ABOUT_STATS } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

const AWARDS = [
  { src: "/images/awards/Award_2.png", alt: "Award Recognition", width: 495, height: 514 },
  { src: "/images/awards/ET_Now.png", alt: "ET Now Recognition", width: 390, height: 262 },
  { src: "/images/awards/Orbit_future.png", alt: "Orbit Future Recognition", width: 387, height: 263 },
  { src: "/images/awards/orbit_academy.png", alt: "Orbit Academy Recognition", width: 433, height: 262 },
];

export const metadata: Metadata = {
  title: "About Cultus – Workforce Development Services",
  description:
    "Learn about Cultus Workforce Development Services (Pvt) Ltd — our mission, methodology, and impact training 221,000+ learners across 11 Asian countries.",
  openGraph: {
    title: "About Cultus – Workforce Development Services",
    description:
      "Learn about Cultus Workforce Development Services (Pvt) Ltd — our mission, methodology, and impact training 221,000+ learners across 11 Asian countries.",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "About", href: "/about" }])),
        }}
      />
      <HeroBanner
        headline="Cultus stands at the intersection of innovation and opportunity."
        subheadline="We are Cultus Workforce Development Services (Pvt) Ltd, committed to enhancing skilling through technology. Our mission is to offer scalable, outcome-focused solutions to India's critical skilling challenges."
        ctaText="Let's Build a Skilled Future Together"
        ctaHref="/contact"
      />

      <AboutContent />

      <StatsGrid stats={ABOUT_STATS} columns={4} background="light" />

      {/* Awards section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-bg-light/30 to-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4 font-display">
            Awards & Recognition
          </h2>
          <p className="text-text-secondary text-center text-lg mb-16 max-w-2xl mx-auto">
            Honoured for our commitment to workforce transformation and excellence in skilling
          </p>

          {/* Featured award - centered */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative bg-white rounded-2xl overflow-hidden border border-primary/10 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="relative flex items-center justify-center p-8 md:p-10">
                <Image
                  src={AWARDS[0].src}
                  alt={AWARDS[0].alt}
                  width={AWARDS[0].width}
                  height={AWARDS[0].height}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom row - 3 landscape awards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AWARDS.slice(1).map((award) => (
              <div
                key={award.src}
                className="relative bg-white rounded-2xl overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
                <div className="relative w-full">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    width={award.width}
                    height={award.height}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Partner with Us to Build a Skilled Future"
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
