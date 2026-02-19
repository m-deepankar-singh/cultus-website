import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import StatsGrid from "@/components/sections/StatsGrid";
import CTABanner from "@/components/sections/CTABanner";
import AboutContent from "./AboutContent";
import { ABOUT_STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Cultus – India's Workforce Skilling Leader",
  description:
    "Learn about Cultus Education and Technology Services (CETS) — our mission, methodology, and impact training 221,000+ learners across 11 Asian countries.",
  openGraph: {
    title: "About Cultus – India's Workforce Skilling Leader",
    description:
      "Learn about Cultus Education and Technology Services (CETS) — our mission, methodology, and impact training 221,000+ learners across 11 Asian countries.",
  },
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        headline="Cultus stands at the intersection of innovation and opportunity."
        subheadline="We are Cultus Education and Technology Services (CETS), committed to enhancing skilling through technology. Our mission is to offer scalable, outcome-focused solutions to India's critical skilling challenges."
        ctaText="Let's Build a Skilled Future Together"
        ctaHref="/contact"
      />

      <AboutContent />

      <StatsGrid stats={ABOUT_STATS} columns={4} background="light" />

      {/* Awards section */}
      <section className="section-shell-tight bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-bg-light rounded-xl h-40 flex items-center justify-center border border-primary/10 shadow-[var(--shadow-card)]"
              >
                <div className="text-center">
                  <svg
                    className="w-10 h-10 text-text-secondary/30 mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 13.125 12h-2.25A3.375 3.375 0 0 0 7.5 14.25v4.5m6-6V6.75m0 0a2.25 2.25 0 1 0-4.5 0m4.5 0a2.25 2.25 0 1 1-4.5 0"
                    />
                  </svg>
                  <span className="text-xs text-text-secondary/40">Award {i + 1}</span>
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
