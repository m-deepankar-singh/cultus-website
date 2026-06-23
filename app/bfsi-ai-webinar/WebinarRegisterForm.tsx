"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const inputClasses =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-secondary/50 outline-none transition-all focus:border-teal focus:ring-2 focus:ring-teal/20";

const labelClasses = "mb-1.5 block text-sm font-medium text-text-dark";

export default function WebinarRegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/webinar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      // Facebook Pixel event tracking
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead");
        window.fbq("track", "CompleteRegistration");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to register. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const allFilled =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.consent;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-[0_24px_60px_-32px_rgba(15,45,92,0.5)] md:p-10"
      >
        <CheckCircle2 className="h-14 w-14 text-teal" />
        <h3 className="mt-4 text-2xl font-bold text-primary">
          You&apos;re registered!
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-body">
          Thank you for registering for{" "}
          <span className="font-semibold text-primary">
            Transforming BFSI Talent for the AI Era
          </span>
          . We&apos;ve saved your seat — joining details will be sent to your
          email closer to the date.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-[0_24px_60px_-32px_rgba(15,45,92,0.5)] sm:p-8"
    >
      <motion.div variants={fadeUp}>
        <h3 className="text-xl font-bold text-primary">Save Your Seat</h3>
        <p className="mt-1 text-sm text-text-body">
          Fill in your details and we&apos;ll send you the joining link.
        </p>
      </motion.div>

      {error && (
        <motion.div
          variants={fadeUp}
          className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </motion.div>
      )}

      <motion.div variants={fadeUp} className="mt-5">
        <label htmlFor="fullName" className={labelClasses}>
          Full Name *
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          required
          autoComplete="name"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Enter your full name"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="mt-4">
        <label htmlFor="email" className={labelClasses}>
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="you@company.com"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="mt-4">
        <label htmlFor="phone" className={labelClasses}>
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
          placeholder="+94 77 123 4567"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="mt-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 shrink-0 accent-teal"
          />
          <span className="text-sm leading-relaxed text-text-body">
            I agree to receive webinar updates and communications.
          </span>
        </label>
      </motion.div>

      <motion.button
        variants={fadeUp}
        type="submit"
        disabled={isSubmitting || !allFilled}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-teal px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Registering…
          </>
        ) : (
          "Register Now"
        )}
      </motion.button>
    </motion.form>
  );
}
