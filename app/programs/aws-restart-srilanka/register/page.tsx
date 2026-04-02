import type { Metadata } from "next";
import HeroBanner from "@/components/sections/HeroBanner";
import AWSRestartRegisterForm from "./AWSRestartRegisterForm";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Register for AWS re/Start Program in Sri Lanka",
  description:
    "Apply for the free AWS re/Start program in Sri Lanka. Fill out the registration form to start your cloud computing career with Cultus.",
  openGraph: {
    title: "Register for AWS re/Start Program in Sri Lanka",
    description:
      "Apply for the free AWS re/Start program in Sri Lanka. Fill out the registration form to start your cloud computing career with Cultus.",
  },
};

export default function AWSRestartRegisterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Programs", href: "/programs" },
              { name: "AWS re/Start", href: "/programs/aws-restart-srilanka" },
              {
                name: "Register",
                href: "/programs/aws-restart-srilanka/register",
              },
            ])
          ),
        }}
      />
      <HeroBanner
        headline="AWS re/Start Program in Sri Lanka"
        subheadline="Apply now to start your free cloud computing training journey with AWS and Cultus."
        ctaText="Fill Out the Form Below"
        ctaHref="#register"
        compact
        logoSrc="/images/programs/AWS_Restart_Logo_RGB.png"
        logoAlt="AWS re/Start Program"
      />

      <section id="register" className="section-shell-tight bg-bg-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          <AWSRestartRegisterForm />
        </div>
      </section>
    </>
  );
}
