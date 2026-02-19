import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, MapPin } from "lucide-react";
import { OFFICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Cultus – Partner With Us",
  description:
    "Get in touch with Cultus Education. Reach out for skilling partnerships, talent hiring, government missions, or university collaborations. Offices in Bangalore and Hyderabad.",
  openGraph: {
    title: "Contact Cultus – Partner With Us",
    description:
      "Get in touch with Cultus Education. Reach out for skilling partnerships, talent hiring, government missions, or university collaborations. Offices in Bangalore and Hyderabad.",
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroBanner
        headline="Let's Build a Skilled Future Together"
        subheadline="Whether you're looking to transform talent, launch a skilling initiative, or hire ready-to-work professionals — our team is here to partner with you."
        ctaText="Send Us a Message"
        ctaHref="#contact-form"
        compact
      />

      <section id="contact-form" className="section-shell-tight bg-bg-light section-divider">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-text-dark mb-6">
                Ready to take the next step?
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-dark mb-6">
                Get in Touch
              </h2>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 border border-primary/10 mb-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">
                      Sales & Partnerships
                    </p>
                    <a
                      href="mailto:sales@cultusedu.com"
                      className="focus-ring text-primary font-semibold hover:text-primary-light transition-colors"
                    >
                      sales@cultusedu.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="space-y-4">
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="bg-white rounded-xl p-6 border border-primary/10 shadow-[var(--shadow-card)]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-text-dark mb-1">
                          {office.city} Office
                        </p>
                        {office.address.map((line, i) => (
                          <p
                            key={i}
                            className="text-sm text-text-secondary leading-relaxed"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
