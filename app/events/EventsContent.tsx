"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, Radio, ArrowRight, CalendarClock } from "lucide-react";
import { EVENTS } from "@/lib/data";
import type { EventItem } from "@/lib/types";
import { fadeUp, staggerContainer } from "@/lib/animations";

const viewport = { once: true, margin: "-80px" } as const;

function EventCard({ event }: { event: EventItem }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group grid overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_24px_60px_-32px_rgba(15,45,92,0.4)] lg:grid-cols-2"
    >
      {/* Visual */}
      <div className="relative min-h-[240px] overflow-hidden lg:min-h-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deeper/70 via-primary-deeper/10 to-transparent" />

        {/* Status badge */}
        <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-deeper">
          {event.status === "upcoming" ? "Upcoming" : "Past"}
        </span>

        {/* Date chip */}
        <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-4 py-2.5 backdrop-blur-sm shadow-lg">
          <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
            {event.day}
          </p>
          <p className="text-lg font-bold leading-tight text-primary">
            {event.date}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col p-7 sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
          {event.eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-extrabold leading-tight text-primary sm:text-3xl">
          {event.title}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-text-body">
          {event.description}
        </p>

        {/* Meta */}
        <div className="mt-6 space-y-2.5 text-sm text-text-body">
          <span className="flex items-center gap-2.5">
            <Calendar className="h-4 w-4 text-primary" />
            {event.date}, {event.day}
          </span>
          <span className="flex items-center gap-2.5">
            <Clock className="h-4 w-4 text-primary" />
            {event.time} ({event.timezone})
          </span>
          <span className="flex items-center gap-2.5">
            <Radio className="h-4 w-4 text-primary" />
            {event.format}
          </span>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7 pt-2">
          <Link
            href={event.href}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light"
          >
            {event.ctaText}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function EventsContent() {
  const upcoming = EVENTS.filter((e) => e.status === "upcoming");
  const past = EVENTS.filter((e) => e.status === "past");

  return (
    <section className="section-shell bg-bg-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Upcoming */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="flex items-center gap-3"
        >
          <span className="divider-line" />
          <h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
            Upcoming Events
          </h2>
        </motion.div>

        {upcoming.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="mt-8 grid gap-8"
          >
            {upcoming.map((event) => (
              <EventCard key={event.href} event={event} />
            ))}
          </motion.div>
        ) : (
          <div className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-primary/15 bg-white px-6 py-16 text-center">
            <CalendarClock className="h-12 w-12 text-primary/40" />
            <p className="mt-4 text-lg font-semibold text-primary">
              No upcoming events right now
            </p>
            <p className="mt-1 text-sm text-text-body">
              Check back soon — we host webinars and workshops regularly.
            </p>
          </div>
        )}

        {/* Past */}
        {past.length > 0 && (
          <>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              className="mt-20 flex items-center gap-3"
            >
              <span className="divider-line" />
              <h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
                Past Events
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer}
              className="mt-8 grid gap-8"
            >
              {past.map((event) => (
                <EventCard key={event.href} event={event} />
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
