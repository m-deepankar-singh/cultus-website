import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read Cultus Education's Terms of Service governing use of our website and skilling programs.",
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Terms of Service</h1>
        <p className="text-text-secondary mb-10 text-sm">Last updated: February 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-text-body leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Cultus Education and Technology Services (&quot;Cultus&quot;)
              website and services, you agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">2. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Does not infringe the rights of others</li>
              <li>Does not restrict or inhibit anyone else&apos;s use and enjoyment of the website</li>
              <li>Does not involve transmitting unlawful, harmful, or offensive content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, graphics, logos, images, and
              software — is the property of Cultus Education and Technology Services and is
              protected by applicable intellectual property laws. You may not reproduce, distribute,
              or create derivative works without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">4. Program Enrollment</h2>
            <p>
              Enrollment in Cultus programs is subject to availability and eligibility criteria.
              Cultus reserves the right to modify, suspend, or discontinue any program at any time.
              Specific terms for individual programs, including fees, refund policies, and
              certification requirements, will be communicated at the time of enrollment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">
              5. Disclaimer of Warranties
            </h2>
            <p>
              This website and its content are provided &quot;as is&quot; without any warranties of any kind,
              express or implied. Cultus does not warrant that the website will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Cultus shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of, or inability
              to use, the website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for
              convenience only. Cultus has no control over those websites and is not responsible
              for their content or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">8. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of India. Any disputes arising from
              these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore,
              Karnataka.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">9. Changes to Terms</h2>
            <p>
              Cultus reserves the right to update these terms at any time. Continued use of the
              website after changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-dark mb-3">10. Contact Us</h2>
            <p>
              For questions about these Terms of Service, please contact us at:{" "}
              <a
                href="mailto:sales@cultusedu.com"
                className="text-primary font-medium hover:underline"
              >
                sales@cultusedu.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
