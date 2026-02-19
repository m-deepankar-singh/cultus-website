import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import CTABanner from "@/components/sections/CTABanner";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers at Cultus Education",
  description:
    "Join Cultus Education and help bridge the gap between talent and opportunity. We're hiring across EdTech, skilling, partnerships, and technology roles. Impact 221,000+ learners.",
  openGraph: {
    title: "Careers at Cultus Education",
    description:
      "Join Cultus Education and help bridge the gap between talent and opportunity. We're hiring across EdTech, skilling, partnerships, and technology roles. Impact 221,000+ learners.",
  },
};

export default function CareersPage() {
  return (
    <>
      <HeroBanner
        headline="Shape the Future of Skilling & Employability"
        subheadline="Join a team that's bridging the gap between talent and opportunity. If you're driven by impact, innovation, and the desire to empower learners across the globe, we want you on our mission."
        ctaText="View Open Positions"
        ctaHref="#openings"
      />

      <div className="section-divider">
        <CareersContent />
      </div>

      <CTABanner
        headline="Not seeing a role that fits? We'd love to hear from you."
        buttonText="Send Us Your Profile"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}
