"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  type: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-text-dark mb-2">
          Thank You!
        </h3>
        <p className="text-text-secondary">
          We&apos;ve received your message and will get back to you shortly.
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
      className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-5"
    >
      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <motion.div variants={fadeUp}>
        <label className="block text-sm font-medium text-text-dark mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          placeholder="Your name"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1.5">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            placeholder="+91 98765 43210"
          />
        </div>
      </motion.div>

      <motion.div variants={fadeUp}>
        <label className="block text-sm font-medium text-text-dark mb-1.5">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          placeholder="Company or institution name"
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <label className="block text-sm font-medium text-text-dark mb-1.5">
          I am a... *
        </label>
        <select
          name="type"
          required
          value={formData.type}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
        >
          <option value="">Select one</option>
          <option value="learner">Learner / Student</option>
          <option value="business">Business / Employer</option>
          <option value="government">Government Body</option>
          <option value="university">University / Institution</option>
          <option value="other">Other</option>
        </select>
      </motion.div>

      <motion.div variants={fadeUp}>
        <label className="block text-sm font-medium text-text-dark mb-1.5">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
          placeholder="Tell us about your needs..."
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
    </motion.form>
  );
}
