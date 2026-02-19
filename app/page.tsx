import HeroBanner from "@/components/sections/HeroBanner";
import WhyCultusSection from "@/components/home/WhyCultusSection";
import SegmentButtons from "@/components/sections/SegmentButtons";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import LogoCarousel from "@/components/ui/LogoCarousel";
import StatsGrid from "@/components/sections/StatsGrid";
import CTABanner from "@/components/sections/CTABanner";
import { HOME_STATS, PARTNER_LOGOS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroBanner
        headline="Bridging Talent To Tomorrow"
        subheadline="We build tomorrow's workforce by transforming learners into job-ready talent, skilling them for the future and connecting them directly to high-demand careers."
        ctaText="Join the community of 221,000+ Learners"
        ctaHref="/programs"
      />

      <WhyCultusSection />

      <SegmentButtons />

      <FeaturedPrograms />

      {/* Partner Logos */}
      <section className="section-shell-tight bg-white relative section-divider">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted mb-10">
            Trusted by leading organizations
          </p>
          <LogoCarousel logos={PARTNER_LOGOS} />
        </div>
      </section>

      <StatsGrid stats={HOME_STATS} columns={3} background="primary" />

      <CTABanner
        headline="Partner with Us to Build a Skilled Future"
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}
