import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const programLinks = [
  { label: "AI & Data", href: "/programs#artificial-intelligence-data" },
  { label: "Finance & Fintech", href: "/programs#finance-fintech" },
  { label: "Technology & Cloud", href: "/programs#technology-cloud" },
  { label: "Green Energy", href: "/programs#green-energy" },
  { label: "Bootcamps", href: "/programs#bootcamps-workshops" },
];

const audienceLinks = [
  { label: "For Learners", href: "/for-learners" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "For Governments", href: "/for-governments" },
  { label: "For Universities", href: "/for-universities" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-deeper text-white relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/25 rounded-full blur-[150px]" />
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-primary-light/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 md:py-24 relative section-divider">
        {/* Top section - Brand statement */}
        <div className="mb-14 md:mb-16 pt-10">
          <Link href="/" className="focus-ring inline-block rounded-sm">
            <Image
              src="/images/Cultus-white (1).png"
              alt="Cultus – Skilling & Jobtech"
              width={160}
              height={46}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 text-white/55 text-sm leading-relaxed max-w-md font-light">
            Bridging Talent To Tomorrow. We build tomorrow&apos;s workforce by
            transforming learners into job-ready talent, skilling them for the
            future and connecting them directly to high-demand careers.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-16">
          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="focus-ring rounded-sm text-sm text-white/65 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="focus-ring rounded-sm text-sm text-white/65 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Audience */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-5">
              Solutions
            </h4>
            <ul className="space-y-3">
              {audienceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="focus-ring rounded-sm text-sm text-white/65 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-white/35" />
                <a
                  href="mailto:sales@cultusedu.com"
                  className="focus-ring rounded-sm text-sm text-white/65 hover:text-white transition-colors"
                >
                  sales@cultusedu.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-white/35 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-white/50 leading-relaxed">
                  <p className="text-white/70 text-sm mb-0.5">Bangalore</p>
                  <p>PSP SQUARE, 4th Floor, Bellandur ORR</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-white/35 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-white/50 leading-relaxed">
                  <p className="text-white/70 text-sm mb-0.5">Hyderabad</p>
                  <p>Green Channel Apartments, Khairtabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35 tracking-wide">
            &copy; {new Date().getFullYear()} Cultus Education and Technology Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="focus-ring rounded-sm text-xs text-white/40 hover:text-white/70 transition-colors tracking-wide">
              Privacy Policy
            </Link>
            <Link href="/terms" className="focus-ring rounded-sm text-xs text-white/40 hover:text-white/70 transition-colors tracking-wide">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
