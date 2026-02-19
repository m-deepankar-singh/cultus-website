import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import LogoCarousel from "@/components/ui/LogoCarousel";
import CTABanner from "@/components/sections/CTABanner";
import BusinessContent from "./BusinessContent";
import { PARTNER_LOGOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hire Certified Talent at Zero Recruitment Cost",
  description:
    "Access a direct pipeline of 25,000+ pre-vetted, job-ready candidates across 11 Asian countries. Hire AI, Cloud, Fintech, and Green Energy talent screened by Cultus's 5-Star Job Ready Program.",
  openGraph: {
    title: "Hire Certified Talent at Zero Recruitment Cost",
    description:
      "Access a direct pipeline of 25,000+ pre-vetted, job-ready candidates across 11 Asian countries. Hire AI, Cloud, Fintech, and Green Energy talent screened by Cultus's 5-Star Job Ready Program.",
  },
};

export default function ForBusinessesPage() {
  return (
    <>
      <HeroBanner
        headline="The Skills-First Hiring Platform"
        subheadline="Hire smarter with AI-matched, industry-certified talent, backed by a global 5-Star Job Ready Credential and a pipeline trusted by 4,000+ employers."
        ctaText="Solve Your Talent Shortage at Zero Cost"
        ctaHref="/contact"
      />

      <BusinessContent />

      {/* Company logos */}
      <section className="section-shell-tight bg-bg-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-text-secondary mb-8">
            Trusted by Industry Leaders Who Partner With Cultus
          </p>
          <LogoCarousel logos={PARTNER_LOGOS} />
        </div>
      </section>

      <CTABanner
        headline="Join leading companies who hire smarter."
        buttonText="Start Hiring Certified Talent"
        buttonHref="/contact"
      />
    </>
  );
}
