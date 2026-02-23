import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import CTABanner from "@/components/sections/CTABanner";
import SkillsCenterStreams from "@/components/products/SkillsCenterStreams";
import ProductsContent from "./ProductsContent";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Skilling Products & Platforms – Cultus Skills Center",
  description:
    "Explore Cultus's technology-powered skilling products — from the AI-driven Cultus Skills Center to Cultus Guru MCE. Enterprise-grade platforms for learners, universities, and governments.",
  openGraph: {
    title: "Skilling Products & Platforms – Cultus Skills Center",
    description:
      "Explore Cultus's technology-powered skilling products — from the AI-driven Cultus Skills Center to Cultus Guru MCE. Enterprise-grade platforms for learners, universities, and governments.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Products", href: "/products" }])),
        }}
      />
      <HeroBanner
        headline="Technology-Powered Solutions for Scalable Skilling"
        subheadline="From AI-driven job readiness platforms to enterprise-grade skilling ecosystems — explore our suite of products designed to bridge the gap between learning and employment."
        ctaText="Discover Our Products"
        ctaHref="#products"
      />

      <div id="products" className="section-divider">
        <SkillsCenterStreams />
      </div>

      <ProductsContent />

      <CTABanner
        headline="Transform your institution into a hub of employability and innovation."
        buttonText="Explore Partnership Opportunities"
        buttonHref="/contact"
      />
    </>
  );
}
