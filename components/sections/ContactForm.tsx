"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
      <motion.div variants={fadeUp}>
        <label className="block text-sm font-medium text-text-dark mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          required
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
            required
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
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          placeholder="Company or institution name"
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <label className="block text-sm font-medium text-text-dark mb-1.5">
          I am a... *
        </label>
        <select
          required
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
          required
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
          placeholder="Tell us about your needs..."
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Button type="submit" size="lg" className="w-full">
          Send Message
        </Button>
      </motion.div>
    </motion.form>
  );
}
