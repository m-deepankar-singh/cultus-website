"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import { AWS_RESTART_DATA } from "@/lib/data";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { getIcon } from "@/lib/utils";
import {
  CheckCircle,
  Monitor,
  Wifi,
  Cpu,
  Laptop,
  ChevronRight,
  ClipboardList,
  MessageSquare,
  Users,
  Settings,
  Handshake,
  GraduationCap,
  Rocket,
} from "lucide-react";

const {
  cultusWay,
  overview,
  eligibility,
  requirements,
  benefits,
  technicalSkills,
  behavioralSkills,
  faqs,
} = AWS_RESTART_DATA;

export default function AWSRestartContent() {
  return (
    <>
      {/* The Cultus Way - Process Steps */}
      <section className="section-shell bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            tag="Our Approach"
            title="The Cultus Way"
            subtitle="A structured 4-step journey to launch your cloud computing career."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cultusWay.map((step) => {
              const Icon = getIcon(step.icon);
              return (
                <motion.div key={step.step} variants={fadeUp}>
                  <Card className="text-center h-full relative overflow-hidden group">
                    {/* Step number watermark */}
                    <span className="absolute top-3 right-4 text-6xl font-bold text-primary/[0.04] select-none">
                      {step.step}
                    </span>

                    <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/[0.07] flex items-center justify-center mb-5 group-hover:bg-primary/[0.12] transition-colors">
                      {Icon && (
                        <Icon className="w-7 h-7 text-primary" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-body text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-shell bg-bg-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/[0.08] text-xs font-semibold text-primary uppercase tracking-widest mb-5">
                Program Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight mb-6">
                {overview.title}
              </h2>
              <p className="text-text-body leading-relaxed text-base md:text-lg">
                {overview.description}
              </p>
              <div className="mt-8">
                <Button href="/programs/aws-restart-srilanka/register#register" size="lg" arrow>
                  Click Here to Apply Now
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* AWS re/Start logo + program details */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark border border-white/10 p-8 md:p-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/15 rounded-full blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-[50px]" />

                {/* AWS re/Start Logo */}
                <div className="relative flex justify-center mb-8">
                  <Image
                    src="/images/programs/AWS_Restart_Logo_RGB.png"
                    alt="AWS re/Start Program"
                    width={240}
                    height={80}
                    className="object-contain brightness-0 invert"
                  />
                </div>

                <div className="relative space-y-5">
                  {[
                    { label: "Duration", value: "12 Weeks" },
                    { label: "Format", value: "Online / Live Classes" },
                    { label: "Schedule", value: "3.5 hrs/day, Mon–Sat" },
                    { label: "Certification", value: "AWS Cloud Practitioner" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                    >
                      <span className="text-sm font-medium text-white/70">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-shell bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            tag="Why Join"
            title="What Benefits Will You Get?"
            subtitle="Everything you need to launch your cloud career — from free training to placement support."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {benefits.map((benefit) => {
              const Icon = getIcon(benefit.icon);
              return (
                <motion.div key={benefit.title} variants={scaleIn}>
                  <Card className="h-full flex gap-5">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary/[0.07] flex items-center justify-center">
                      {Icon && (
                        <Icon className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-dark mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-text-body text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="section-shell bg-bg-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            tag="How It Works"
            title="Registration Steps"
            subtitle="Your journey from application to career — here's what to expect."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Horizontal connector line - desktop only */}
            <div className="hidden lg:block absolute top-[3.25rem] left-[calc(100%/14)] right-[calc(100%/14)] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3">
              {[
                {
                  icon: ClipboardList,
                  title: "Registration",
                  subtitle: "No academic engineering background needed",
                },
                {
                  icon: MessageSquare,
                  title: "Interview",
                  subtitle: "A brief conversation to understand your goals",
                },
                {
                  icon: Users,
                  title: "Orientation Session",
                  subtitle: "Get introduced to the program structure",
                },
                {
                  icon: Settings,
                  title: "Learning Process",
                  subtitle: "12 weeks of hands-on cloud training",
                },
                {
                  icon: Handshake,
                  title: "Employer Meetings",
                  subtitle: "Interviews with prospective employers",
                },
                {
                  icon: GraduationCap,
                  title: "Graduation",
                  subtitle: "Earn your AWS Cloud Practitioner certification",
                },
                {
                  icon: Rocket,
                  title: "Career Launch",
                  subtitle: "Start your newest & best career journey",
                },
              ].map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    className="flex flex-col items-center text-center relative z-10"
                  >
                    {/* Circle with icon */}
                    <div className="w-[4.25rem] h-[4.25rem] rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25 ring-4 ring-white mb-4">
                      <StepIcon className="w-7 h-7 text-white" />
                    </div>

                    {/* Step number */}
                    <span className="text-xs font-bold text-primary/40 mb-1">
                      STEP {i + 1}
                    </span>

                    {/* Title */}
                    <h4 className="text-sm font-bold text-text-dark leading-snug mb-1">
                      {step.title}
                    </h4>

                    {/* Subtitle */}
                    <p className="text-xs text-text-secondary leading-relaxed max-w-[140px]">
                      {step.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills You'll Gain */}
      <section className="section-shell bg-bg-light section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            tag="Curriculum"
            title="Skills You'll Gain"
            subtitle="A balanced mix of technical cloud expertise and essential workplace skills."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.07] flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    Technical Skills
                  </h3>
                </div>
                <ul className="space-y-3">
                  {technicalSkills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary/70 flex-shrink-0 mt-0.5" />
                      <span className="text-text-body text-sm leading-relaxed">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Behavioral Skills */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/[0.12] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    Behavioral Skills & Mindset
                  </h3>
                </div>
                <ul className="space-y-3">
                  {behavioralSkills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent/70 flex-shrink-0 mt-0.5" />
                      <span className="text-text-body text-sm leading-relaxed">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="section-shell bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeading
            tag="Eligibility"
            title="Who Is This Program For?"
            subtitle="Check if you meet the criteria and have the technical setup to join the program."
          />

          {/* Eligibility - full width, highlighted */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <div className="relative rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/[0.04] via-white to-accent/[0.04] p-8 md:p-10 shadow-lg">
              <div className="absolute top-0 left-8 -translate-y-1/2">
                <span className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                  <CheckCircle className="w-4 h-4" />
                  Eligibility Criteria
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
                {eligibility.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-text-body text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technical Requirements */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mx-auto"
          >
            <Card className="h-full bg-primary/[0.02]">
              <h3 className="text-xl font-bold text-primary mb-6">
                Technical Requirements
              </h3>
              <ul className="space-y-4">
                {requirements.items.map((item, i) => {
                  const icons = [Laptop, Wifi, Monitor, Cpu];
                  const ReqIcon = icons[i] || Monitor;
                  return (
                    <li key={item} className="flex items-start gap-3">
                      <ReqIcon className="w-5 h-5 text-primary/60 flex-shrink-0 mt-0.5" />
                      <span className="text-text-body text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section
        className="section-shell relative overflow-hidden bg-primary"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/35 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] bg-white/10 rounded-full blur-[120px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto px-4 sm:px-8 text-center relative z-10"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Ready to Start Your Cloud Career?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Apply now for the AWS re/Start program and take your first step
            towards a rewarding career in cloud computing — completely free.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href="/programs/aws-restart-srilanka/register#register"
              variant="secondary"
              size="lg"
              arrow
              className="bg-white text-primary hover:bg-white shadow-2xl shadow-black/20"
            >
              Click Here to Apply Now
            </Button>
            <Button
              href="/programs"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Explore Other Programs
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="section-shell-tight bg-bg-light section-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
