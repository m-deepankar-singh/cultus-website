import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Cultus Education's Privacy Policy to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy",
    description:
      "Read Cultus Education's Privacy Policy to understand how we collect, use, and protect your personal information.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Privacy Policy", href: "/privacy" }])),
        }}
      />
      <main className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-text-secondary mb-10 text-sm">Last updated: February 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-text-body leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">1. Introduction</h2>
            <p>
              Cultus Education and Technology Services (&quot;Cultus&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
              committed to protecting your personal information and your right to privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Personal identification information</strong> — name, email address, phone
                number, when you submit a contact or enquiry form.
              </li>
              <li>
                <strong>Professional information</strong> — job title, organization, and area of
                interest when you enquire about partnerships or programs.
              </li>
              <li>
                <strong>Usage data</strong> — pages visited, time spent, and interaction data
                collected through analytics tools to improve our website experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to your enquiries and provide requested services</li>
              <li>Send relevant communications about programs, partnerships, and updates</li>
              <li>Improve our website, products, and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">4. Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share information with trusted service providers who assist in operating our website
              and services, subject to confidentiality agreements. We may also disclose information
              when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">5. Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to fulfil the purposes
              outlined in this policy or as required by law. You may request deletion of your data
              at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">7. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can set your
              browser to refuse cookies, though some parts of the website may not function
              correctly without them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data,
              please contact us at:{" "}
              <a
                href="mailto:infosales@cultusworkforceedu.com"
                className="text-primary font-medium hover:underline"
              >
                infosales@cultusworkforceedu.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
    </>
  );
}
