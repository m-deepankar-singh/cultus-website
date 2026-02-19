import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import ProgramCard from "@/components/sections/ProgramCard";
import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROGRAMS, PROGRAM_FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skilling Programs in AI, Cloud, Green Energy & More",
  description:
    "Explore 9 industry-aligned skilling programs in AI, Cloud, Finance, Green Energy, HR, and more. Get job-ready and earn a 5-Star credential recognized by 4,000+ employers.",
  openGraph: {
    title: "Skilling Programs in AI, Cloud, Green Energy & More",
    description:
      "Explore 9 industry-aligned skilling programs in AI, Cloud, Finance, Green Energy, HR, and more. Get job-ready and earn a 5-Star credential recognized by 4,000+ employers.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PROGRAM_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroBanner
        headline="Your Pathway to a High-Growth Career"
        subheadline="Discover industry-aligned programs in AI, Cloud, Green Energy, and more designed to make you job-ready from day one."
        ctaText="Explore All Programs"
        ctaHref="#programs"
      />

      <section id="programs" className="section-shell-tight bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            title="Explore Our Skilling Programs"
            subtitle="Choose from 9 industry-aligned program categories to launch or accelerate your career."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-shell-tight bg-bg-light section-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <Accordion items={PROGRAM_FAQS} />
        </div>
      </section>
    </>
  );
}
