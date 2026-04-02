"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  gender: string;
  age: string;
  district: string;
  province: string;
  previouslyJoined: string;
  hasComputer: string;
  englishProficiency: string;
  agreedToTerms: boolean;
}

const inputClasses =
  "w-full min-w-0 border border-gray-200 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base text-text-dark placeholder:text-text-secondary/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white";

const labelClasses = "block text-sm font-medium text-text-dark mb-1.5 break-words";

export default function AWSRestartRegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const renderTurnstile = useCallback(() => {
    if (
      turnstileRef.current &&
      !widgetIdRef.current &&
      typeof window !== "undefined" &&
      (window as unknown as Record<string, unknown>).turnstile
    ) {
      const turnstile = (window as unknown as Record<string, { render: (el: HTMLDivElement, opts: Record<string, unknown>) => string }>).turnstile;
      widgetIdRef.current = turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        theme: "light",
      });
    }
  }, []);

  useEffect(() => {
    renderTurnstile();
  }, [renderTurnstile]);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    age: "",
    district: "",
    province: "",
    previouslyJoined: "",
    hasComputer: "",
    englishProficiency: "",
    agreedToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setError("Please complete the verification.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/aws-restart-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit. Please try again."
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
          Registration Submitted!
        </h3>
        <p className="text-text-secondary">
          Thank you for your interest in the AWS re/Start program. Our team will
          review your application and get back to you shortly.
        </p>
        <div className="mt-6">
          <Button href="/programs/aws-restart" variant="outline">
            Back to AWS re/Start
          </Button>
        </div>
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
      className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 space-y-5 overflow-hidden"
    >
      {/* AWS Logo */}
      <div className="flex justify-center mb-2">
        <Image
          src="/images/programs/AWS_Restart_Logo_RGB.png"
          alt="AWS re/Start Program"
          width={200}
          height={65}
          className="object-contain"
        />
      </div>

      <p className="text-center text-text-secondary text-sm">
        Please apply by filling out the details below.
      </p>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Full Name */}
      <motion.div variants={fadeUp}>
        <label className={labelClasses}>
          Full Name *
        </label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Enter your full name"
        />
      </motion.div>

      {/* Phone & Email */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <div>
          <label className={labelClasses}>
            Phone Number (WhatsApp enabled) *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+94 77 123 4567"
          />
        </div>
        <div>
          <label className={labelClasses}>Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </motion.div>

      {/* Gender & Age */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <div>
          <label className={labelClasses}>Gender *</label>
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className={labelClasses}>Age *</label>
          <select
            name="age"
            required
            value={formData.age}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Please select</option>
            <option value="Under 18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55-64">55-64</option>
            <option value="65 or over">65 or over</option>
          </select>
        </div>
      </motion.div>

      {/* District & Province */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <div>
          <label className={labelClasses}>District *</label>
          <select
            name="district"
            required
            value={formData.district}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select district</option>
            <option value="Colombo">Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kalutara">Kalutara</option>
            <option value="Kandy">Kandy</option>
            <option value="Matale">Matale</option>
            <option value="Nuwara Eliya">Nuwara Eliya</option>
            <option value="Galle">Galle</option>
            <option value="Matara">Matara</option>
            <option value="Hambantota">Hambantota</option>
            <option value="Jaffna">Jaffna</option>
            <option value="Kilinochchi">Kilinochchi</option>
            <option value="Mannar">Mannar</option>
            <option value="Vavuniya">Vavuniya</option>
            <option value="Mullaitivu">Mullaitivu</option>
            <option value="Trincomalee">Trincomalee</option>
            <option value="Batticaloa">Batticaloa</option>
            <option value="Ampara">Ampara</option>
            <option value="Kurunegala">Kurunegala</option>
            <option value="Puttalam">Puttalam</option>
            <option value="Anuradhapura">Anuradhapura</option>
            <option value="Polonnaruwa">Polonnaruwa</option>
            <option value="Badulla">Badulla</option>
            <option value="Monaragala">Monaragala</option>
            <option value="Ratnapura">Ratnapura</option>
            <option value="Kegalle">Kegalle</option>
          </select>
        </div>
        <div>
          <label className={labelClasses}>Province *</label>
          <select
            name="province"
            required
            value={formData.province}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select province</option>
            <option value="Western Province">Western Province</option>
            <option value="Central Province">Central Province</option>
            <option value="Southern Province">Southern Province</option>
            <option value="Northern Province">Northern Province</option>
            <option value="Eastern Province">Eastern Province</option>
            <option value="North Western Province">North Western Province</option>
            <option value="North Central Province">North Central Province</option>
            <option value="Uva Province">Uva Province</option>
            <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
          </select>
        </div>
      </motion.div>

      {/* Previously Joined */}
      <motion.div variants={fadeUp}>
        <label className={labelClasses}>
          Have you ever joined the AWS re/Start training program before? *
        </label>
        <div className="flex gap-6 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="previouslyJoined"
              value="Yes"
              checked={formData.previouslyJoined === "Yes"}
              onChange={handleChange}
              required
              className="w-4 h-4 text-primary accent-primary"
            />
            <span className="text-sm text-text-dark">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="previouslyJoined"
              value="No"
              checked={formData.previouslyJoined === "No"}
              onChange={handleChange}
              className="w-4 h-4 text-primary accent-primary"
            />
            <span className="text-sm text-text-dark">No</span>
          </label>
        </div>
      </motion.div>

      {/* Computer Access */}
      <motion.div variants={fadeUp}>
        <label className={labelClasses}>
          I have access to a computer with the required specs (Intel i3/AMD 3,
          4GB RAM, 500GB hard drive, webcam, mic, speakers) *
        </label>
        <div className="flex gap-6 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="hasComputer"
              value="Yes"
              checked={formData.hasComputer === "Yes"}
              onChange={handleChange}
              required
              className="w-4 h-4 text-primary accent-primary"
            />
            <span className="text-sm text-text-dark">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="hasComputer"
              value="No"
              checked={formData.hasComputer === "No"}
              onChange={handleChange}
              className="w-4 h-4 text-primary accent-primary"
            />
            <span className="text-sm text-text-dark">No</span>
          </label>
        </div>
      </motion.div>

      {/* English Proficiency */}
      <motion.div variants={fadeUp}>
        <label className={labelClasses}>English Proficiency *</label>
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-2">
          {["Basic", "Intermediate", "Advanced"].map((level) => (
            <label
              key={level}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="englishProficiency"
                value={level}
                checked={formData.englishProficiency === level}
                onChange={handleChange}
                required
                className="w-4 h-4 text-primary accent-primary"
              />
              <span className="text-sm text-text-dark">{level}</span>
            </label>
          ))}
        </div>
      </motion.div>

      {/* Terms */}
      <motion.div variants={fadeUp}>
        <div className="bg-bg-light rounded-lg p-4 border border-gray-100">
          <p className="text-xs text-text-secondary leading-relaxed mb-3">
            <span className="font-semibold text-text-dark">
              General Information Terms and Conditions
            </span>{" "}
            — I declare that all the information I provide is true and complete
            to the best of my knowledge. I understand that this self-declaration
            will be reviewed and verified, and if any information is found to be
            falsified, I could be dropped from the AWS re/Start program
            selection process due to misinformation.
          </p>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="agreedToTerms"
              required
              checked={formData.agreedToTerms}
              onChange={handleChange}
              className="w-4 h-4 mt-0.5 text-primary accent-primary"
            />
            <span className="text-sm text-text-dark">
              I agree to the terms and conditions *
            </span>
          </label>
        </div>
      </motion.div>

      {/* Turnstile CAPTCHA */}
      <motion.div variants={fadeUp} className="flex justify-center overflow-hidden">
        <div ref={turnstileRef} className="scale-[0.85] sm:scale-100 origin-center" />
      </motion.div>

      {/* Submit */}
      <motion.div variants={fadeUp}>
        {(() => {
          const allRequiredFilled =
            formData.fullName.trim() !== "" &&
            formData.phone.trim() !== "" &&
            formData.email.trim() !== "" &&
            formData.gender !== "" &&
            formData.age !== "" &&
            formData.district !== "" &&
            formData.province !== "" &&
            formData.previouslyJoined !== "" &&
            formData.hasComputer !== "" &&
            formData.englishProficiency !== "" &&
            formData.agreedToTerms &&
            !!turnstileToken;

          return (
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting || !allRequiredFilled}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          );
        })()}
      </motion.div>

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad"
        strategy="afterInteractive"
        onLoad={renderTurnstile}
      />
    </motion.form>
  );
}
