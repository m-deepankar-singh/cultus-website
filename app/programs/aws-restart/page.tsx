import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import AWSRestartContent from "./AWSRestartContent";
import { AWS_RESTART_DATA } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AWS re/Start Program — Free Cloud Computing Training",
  description:
    "Join the free AWS re/Start program with Cultus. Gain cloud computing skills, earn AWS Cloud Practitioner certification, and get placement support — all at zero cost.",
  openGraph: {
    title: "AWS re/Start Program — Free Cloud Computing Training",
    description:
      "Join the free AWS re/Start program with Cultus. Gain cloud computing skills, earn AWS Cloud Practitioner certification, and get placement support — all at zero cost.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AWS_RESTART_DATA.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AWSRestartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Programs", href: "/programs" },
              { name: "AWS re/Start", href: "/programs/aws-restart" },
            ])
          ),
        }}
      />
      <HeroBanner
        headline={AWS_RESTART_DATA.hero.headline}
        subheadline={AWS_RESTART_DATA.hero.subheadline}
        ctaText="Apply Now — It's Free"
        ctaHref="/programs/aws-restart/register#register"
        logoSrc="/images/programs/AWS_Restart_Logo_RGB.png"
        logoAlt="AWS re/Start Program"
      />

      <AWSRestartContent />
    </>
  );
}
