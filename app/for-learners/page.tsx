import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import LearnersPrograms from "./LearnersPrograms";
import { LEARNER_FAQS } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Job-Ready Training Programs for Learners",
  description:
    "Join 221,000+ learners who turned skills into jobs. Gain industry-aligned training in AI, Cloud, Finance, and more. Earn a 5-Star Job Ready Badge recognized by 4,000+ employers.",
  openGraph: {
    title: "Job-Ready Training Programs for Learners",
    description:
      "Join 221,000+ learners who turned skills into jobs. Gain industry-aligned training in AI, Cloud, Finance, and more. Earn a 5-Star Job Ready Badge recognized by 4,000+ employers.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LEARNER_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ForLearnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "For Learners", href: "/for-learners" }])),
        }}
      />
      <HeroBanner
        headline="Your Pathway to a High-Growth Career Starts Here"
        subheadline="Join 221,000+ learners who turned skills into jobs. Gain industry-aligned training, earn a 5-Star Job Ready Badge, and connect with employers ready to hire."
        ctaText="Find Your Program & Start Your Journey Today"
        ctaHref="/programs"
      />

      {/* Programs grid */}
      <section className="section-shell-tight bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            title="Build Your Future with Industry 4.0 Skills"
            subtitle="Choose a program to explore industry-aligned curriculum, certification pathways, and real-world outcomes."
          />
          <LearnersPrograms />
          <div className="text-center mt-10">
            <Button href="/programs" size="lg">
              Explore Our Programs
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* FAQ */}
      <section className="section-shell-tight bg-white section-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <Accordion items={LEARNER_FAQS} />
        </div>
      </section>
    </>
  );
}
