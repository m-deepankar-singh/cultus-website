"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Radio,
  Check,
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { WEBINAR_DATA } from "@/lib/data";
import { getIcon } from "@/lib/utils";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import WebinarRegisterForm from "./WebinarRegisterForm";

const REGISTER_HREF = "#register";
const LOGO_WHITE = "/images/Cultus Workforce Logo White.png";

const viewport = { once: true, margin: "-80px" } as const;

/* ----------------------------- Shared pieces ----------------------------- */

function RegisterButton({
  variant = "gold",
  className = "",
}: {
  variant?: "gold" | "teal";
  className?: string;
}) {
  const styles =
    variant === "gold"
      ? "bg-accent text-primary-deeper hover:brightness-105"
      : "bg-teal text-white hover:bg-teal-dark";
  return (
    <Link
      href={REGISTER_HREF}
      className={`group inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wide shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      Register Now
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

function CenterHeading({
  lead,
  highlight,
  theme = "light",
}: {
  lead: string;
  highlight: string;
  theme?: "light" | "dark";
}) {
  const lineColor = theme === "dark" ? "bg-white/25" : "bg-primary/20";
  const leadColor = theme === "dark" ? "text-white" : "text-primary";
  const hiColor = theme === "dark" ? "text-teal-bright" : "text-teal";
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`hidden h-px w-10 sm:block md:w-16 ${lineColor}`} />
      <h2
        className={`text-center text-2xl font-extrabold uppercase tracking-tight sm:text-3xl md:text-4xl ${leadColor}`}
      >
        {lead} <span className={hiColor}>{highlight}</span>
      </h2>
      <span className={`hidden h-px w-10 sm:block md:w-16 ${lineColor}`} />
    </div>
  );
}

/* --------------------------------- Page ---------------------------------- */

export default function WebinarContent() {
  const d = WEBINAR_DATA;

  return (
    <main className="overflow-x-hidden bg-white">
      {/* ============================== HERO ============================== */}
      <section className="relative isolate overflow-hidden bg-primary-deeper">
        <Image
          src={d.hero.image}
          alt="AI transforming the future of banking and finance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deeper via-primary-deeper/85 to-primary-deeper/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deeper via-transparent to-primary-deeper/40" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-10 sm:pt-12 lg:px-8">
          <Image
            src={LOGO_WHITE}
            alt="Cultus Workforce"
            width={446}
            height={151}
            priority
            className="h-10 w-auto sm:h-12"
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-12 max-w-2xl sm:mt-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.22em] text-accent sm:text-sm"
            >
              {d.hero.eyebrow}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-2 text-lg font-semibold text-white sm:text-xl"
            >
              {d.hero.audience}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {d.hero.titleLead}
              <br />
              {d.hero.titleMid}
              <br />
              {d.hero.titleTail}{" "}
              <span className="text-teal-bright">{d.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base font-medium text-white/85 sm:text-lg"
            >
              {d.hero.subtitle}
            </motion.p>

            {/* info chips */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                {
                  icon: Calendar,
                  main: d.hero.date,
                  sub: d.hero.day,
                },
                {
                  icon: Clock,
                  main: d.hero.time,
                  sub: d.hero.timezone,
                },
                {
                  icon: Radio,
                  main: d.hero.format,
                  sub: d.hero.formatNote,
                },
              ].map((chip) => (
                <div
                  key={chip.main}
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 py-2.5 backdrop-blur-sm"
                >
                  <chip.icon className="h-5 w-5 shrink-0 text-teal-bright" />
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-white">
                      {chip.main}
                    </p>
                    <p className="text-xs text-white/65">{chip.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <RegisterButton variant="gold" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== AUDIENCE STRIP (navy) ===================== */}
      <section className="bg-primary-dark">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="border-b border-white/10 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-accent">
            {d.hero.seats}
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="grid grid-cols-2 divide-white/10 py-8 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x"
          >
            {d.audienceTypes.map((a) => {
              const Icon = getIcon(a.icon);
              return (
                <motion.div
                  key={a.label}
                  variants={fadeUp}
                  className="flex flex-col items-center gap-3 px-3 py-4 text-center"
                >
                  <Icon className="h-8 w-8 text-teal-bright" strokeWidth={1.5} />
                  <span className="text-xs font-medium leading-snug text-white/85 sm:text-sm">
                    {a.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================= WHY ATTEND ========================= */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
              Why <span className="text-teal">Attend?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-body">
              {d.whyAttend.intro}
            </p>
            <p className="mt-7 text-lg font-bold text-primary">
              {d.whyAttend.listTitle}
            </p>
            <ul className="mt-4 space-y-3.5">
              {d.whyAttend.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-text-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={scaleIn}
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-[0_24px_60px_-32px_rgba(15,45,92,0.5)]"
          >
            <Image
              src={d.whyAttend.image}
              alt="AI adoption across the BFSI sector"
              width={688}
              height={435}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ====================== WHAT YOU'LL LEARN ====================== */}
      <section className="bg-bg-light py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <CenterHeading lead="What You’ll" highlight="Learn" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5"
          >
            {d.whatYoullLearn.map((card) => {
              const Icon = getIcon(card.icon);
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="group flex flex-col items-center rounded-2xl border border-primary/10 bg-white p-6 text-center shadow-[0_10px_30px_-18px_rgba(15,45,92,0.24)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/30 hover:shadow-[0_24px_50px_-30px_rgba(15,45,92,0.4)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition-colors duration-300 group-hover:bg-teal">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-base font-bold leading-snug text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-body">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===================== WHO SHOULD ATTEND ===================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <CenterHeading lead="Who Should" highlight="Attend?" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {d.whoShouldAttend.map((card) => {
              const Icon = getIcon(card.icon);
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="flex flex-col items-center rounded-2xl border border-primary/10 bg-bg-light p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(15,45,92,0.4)]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-base font-bold leading-snug text-teal">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-body">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ====================== MEET YOUR SPEAKERS ====================== */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_15%_0%,rgba(52,194,184,0.18),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(37,99,168,0.4),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <CenterHeading lead="Meet Your" highlight="Speakers" theme="dark" />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {/* Keynote */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8 lg:col-span-2"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="relative mx-auto h-56 w-44 shrink-0 overflow-hidden rounded-2xl bg-white/10 sm:mx-0">
                  <Image
                    src={d.speakers.keynote.image}
                    alt={d.speakers.keynote.name}
                    fill
                    sizes="176px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="inline-block rounded-full bg-teal px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {d.speakers.keynote.badge}
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold text-accent">
                    {d.speakers.keynote.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {d.speakers.keynote.title}
                  </p>
                  <p className="text-sm text-white/75">
                    {d.speakers.keynote.org}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/80">
                {d.speakers.keynote.bio}
              </p>
            </motion.div>

            {/* Side speakers */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              {d.speakers.others.map((s) => (
                <motion.div
                  key={s.name}
                  variants={fadeUp}
                  className="flex flex-1 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white/10 ring-2 ring-teal/40">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{s.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">
                      {s.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================== KEY TAKEAWAYS ======================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <CenterHeading lead="Key" highlight="Takeaways" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
          >
            {d.keyTakeaways.map((t) => {
              const Icon = getIcon(t.icon);
              return (
                <motion.div
                  key={t.text}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 text-[13px] leading-relaxed text-text-body">
                    {t.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= RESERVE YOUR SEAT / REGISTER ================= */}
      <section
        id="register"
        className="relative scroll-mt-6 overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-16 md:py-24"
      >
        <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(circle_at_85%_20%,rgba(52,194,184,0.2),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Reserve Your <span className="text-teal-bright">Seat Today</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
              {d.reserve.body}
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                {d.reserve.seats}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 text-sm text-white/85 sm:flex-row sm:flex-wrap sm:gap-x-8">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-teal-bright" />
                {d.hero.date}, {d.hero.day}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-teal-bright" />
                {d.hero.time} ({d.hero.timezone})
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={scaleIn}
          >
            <WebinarRegisterForm />
          </motion.div>
        </div>
      </section>

      {/* ===================== ABOUT CULTUS WORKFORCE ===================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={scaleIn}
            className="relative order-2 mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-[0_24px_60px_-32px_rgba(15,45,92,0.5)] lg:order-1"
          >
            <Image
              src={d.about.image}
              alt="Colombo cityscape"
              fill
              sizes="(max-width: 1024px) 100vw, 448px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
              About <span className="text-teal">Cultus Workforce</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-body">
              {d.about.body}
            </p>
            <p className="mt-5 font-bold text-primary">{d.about.missionLabel}</p>
            <p className="mt-1 text-lg font-bold text-teal">
              {d.about.mission}
            </p>
            <p className="mt-5 text-base leading-relaxed text-text-body">
              {d.about.closing}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {d.about.features.map((f) => {
                const Icon = getIcon(f.icon);
                return (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {f.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="bg-primary-deeper">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row lg:px-8">
          <Image
            src={LOGO_WHITE}
            alt="Cultus Workforce"
            width={446}
            height={151}
            className="h-9 w-auto"
          />
          <div className="flex flex-col items-center gap-4 text-sm text-white/85 sm:flex-row sm:gap-7">
            <a
              href={`mailto:${d.contact.email}`}
              className="flex items-center gap-2 transition-colors hover:text-teal-bright"
            >
              <Mail className="h-4 w-4 text-teal-bright" />
              {d.contact.email}
            </a>
            <a
              href={`tel:${d.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-teal-bright"
            >
              <Phone className="h-4 w-4 text-teal-bright" />
              {d.contact.phone}
            </a>
            <a
              href={d.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-teal-bright"
            >
              <Linkedin className="h-4 w-4 text-teal-bright" />
              {d.contact.linkedinLabel}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
