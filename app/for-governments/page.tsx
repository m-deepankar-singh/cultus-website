import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import LogoCarousel from "@/components/ui/LogoCarousel";
import CTABanner from "@/components/sections/CTABanner";
import GovernmentContent from "./GovernmentContent";
import { PARTNER_LOGOS } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Government Skilling Missions & Workforce Programs",
  description:
    "Partner with Cultus to design and deliver large-scale government skilling missions. We've trained 221,000+ learners through government-linked initiatives with a 93% placement rate.",
  openGraph: {
    title: "Government Skilling Missions & Workforce Programs",
    description:
      "Partner with Cultus to design and deliver large-scale government skilling missions. We've trained 221,000+ learners through government-linked initiatives with a 93% placement rate.",
  },
};

export default function ForGovernmentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "For Governments", href: "/for-governments" }])),
        }}
      />
      <HeroBanner
        headline="Drive National Growth Through High-Impact, Large-Scale Skilling Missions"
        subheadline="Build a future-ready workforce and achieve measurable socio-economic impact. Cultus partners with government bodies to design, deliver, and scale high-impact skilling programs that address critical regional and national employability goals."
        ctaText="Let's Transform Your Skilling Mission"
        ctaHref="/contact"
      />

      {/* Intro text */}
      <section className="section-shell-tight bg-white section-divider">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-lg text-text-body leading-relaxed">
            We partner with ministries, state skill missions, and public institutions to implement large-scale, outcome-driven projects. From flagship national schemes to targeted regional initiatives, our programs transform lives through training, entrepreneurship, and guaranteed employability outcomes.
          </p>
        </div>
      </section>

      {/* Government partners */}
      <section className="section-shell-tight bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-text-secondary mb-8">
            Trusted Government Partners
          </p>
          <LogoCarousel logos={PARTNER_LOGOS} />
        </div>
      </section>

      <GovernmentContent />

      <CTABanner
        headline="Let's Partner to Build a Future-Ready Nation."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
