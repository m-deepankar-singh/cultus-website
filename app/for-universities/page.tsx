import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import LogoCarousel from "@/components/ui/LogoCarousel";
import StatsGrid from "@/components/sections/StatsGrid";
import CTABanner from "@/components/sections/CTABanner";
import UniversityContent from "./UniversityContent";
import { UNIVERSITY_STATS, PARTNER_LOGOS } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Boost Graduate Placements with Industry-Aligned Skilling",
  description:
    "Partner with Cultus to increase graduate employment rates. Equip students with the 5-Star Job Ready Credential, connecting them to 4,000+ employers. 93% placement rate for eligible learners.",
  openGraph: {
    title: "Boost Graduate Placements with Industry-Aligned Skilling",
    description:
      "Partner with Cultus to increase graduate employment rates. Equip students with the 5-Star Job Ready Credential, connecting them to 4,000+ employers. 93% placement rate for eligible learners.",
  },
};

export default function ForUniversitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "For Universities", href: "/for-universities" }])),
        }}
      />
      <HeroBanner
        headline="Increase Graduate Placements with Industry-Aligned Skilling"
        subheadline="Integrate Cultus to equip students with in-demand skills and a 5-Star Job Ready Credential, directly connecting them to 4000+ employers."
        ctaText="Empower Your Graduates, Elevate Your Rankings"
        ctaHref="/contact"
      />

      <UniversityContent />

      {/* University logos */}
      <section className="section-shell-tight bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-text-secondary mb-8">
            Trusted by Leading Academic Institutions
          </p>
          <LogoCarousel logos={PARTNER_LOGOS} />
        </div>
      </section>

      <StatsGrid stats={UNIVERSITY_STATS} columns={3} background="light" />

      {/* 5-Star Credential */}
      <section className="section-shell-tight bg-white section-divider">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Learn Why Industry Leaders Back the 5-Star Job Ready Credential
          </h2>
          <p className="text-text-body leading-relaxed mb-8">
            We surveyed 1,200 HR leaders and senior recruiters across India&apos;s top
            companies to define the 30 essential competencies for a job-ready
            graduate. The Cultus Job Readiness (CJR) program translates this
            data into a proven pathway. It&apos;s the certification that proves your
            graduates possess the exact skills employers demand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Curriculum Aligned with Hiring Managers",
                text: "Embed the precise skills\u2014from Growth Mindset to Digital Proficiency\u2014that industry leaders prioritize.",
              },
              {
                title: "A Credential That Opens Doors",
                text: "Students earn the industry-trusted 5-Star Job Ready Badge, a qualification recognized by 4,000+ employers to validate job readiness.",
              },
              {
                title: "Drive Measurable Placement Outcomes",
                text: "Join the ecosystem that achieves a 93% placement rate for eligible learners, transforming academic potential into career success.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-bg-light rounded-xl p-6 border border-primary/10">
                <h3 className="font-semibold text-text-dark mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want to bring industry-backed credentialing to your campus?"
        buttonText="Request a Credential Overview"
        buttonHref="/contact"
      />
    </>
  );
}
