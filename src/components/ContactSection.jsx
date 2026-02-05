import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

import contactImage from "../assets/images/contact.webp";
import whiteIcon from "../assets/images/whiteicon.png";

// Contact Section Headline Component with Animation
const ContactSectionHeadline = ({ headline }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { i18n } = useTranslation();

  return (
    <motion.h2
      ref={ref}
      className={`leading-[1.1] font-medium text-[#1E1E1E] text-left ${i18n.language === "ta"
        ? "text-[32px] sm:text-[40px] lg:text-[48px]"
        : "text-[40px] sm:text-[50px] lg:text-[60px]"
        }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {(() => {
        // For Tamil, split at " / " to create two lines
        if (i18n.language === "ta") {
          if (headline.includes(" / ")) {
            const parts = headline.split(" / ");
            return (
              <>
                <span>{parts[0].trim()}</span>
                <br />
                <span>{parts[1].trim()}</span>
              </>
            );
          }
        } else {
          // For English, split at "something" to create two lines
          const parts = headline.split(/(something)/);
          if (parts.length > 1) {
            return (
              <>
                <span>{parts[0].replace(" / ", "").trim()}</span>
                <br />
                <span>{parts.slice(1).join("").trim()}</span>
              </>
            );
          }
        }
        return headline;
      })()}
    </motion.h2>
  );
};

// Contact Section Description Component with Animation
const ContactSectionDescription = ({ description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { i18n } = useTranslation();

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-start gap-4 self-end mb-8 sm:mb-12 lg:mb-28 lg:self-end md:mt-8 mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px] rounded-full bg-black flex items-center justify-center shrink-0">
        <img src={whiteIcon} alt="Icon" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[23px] lg:h-[23px]" />
      </div>
      <p
        className={`leading-[1.6] text-[#1E1E1E] pt-3 font-normal ${i18n.language === "ta" ? "text-[14px] max-w-[480px]" : "text-[14px] max-w-[290px]"
          }`}
      >
        {description}
      </p>
    </motion.div>
  );
};

// Contact Form Content Component (separated for remounting)
const ContactFormContent = ({ formKey, onSuccess }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [state, handleSubmit] = useForm("xdadqbrl");
  const [privacyChecked, setPrivacyChecked] = React.useState(false);
  const [privacyError, setPrivacyError] = React.useState("");

  // Handle privacy policy link click
  const handlePrivacyLinkClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (location.pathname === '/privacy-policy') {
      // Already on privacy policy page, scroll to top
      // Use Lenis if available, otherwise use native scroll
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: false, duration: 1.2 });
      } else {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Navigate to privacy policy page
      window.location.href = '/privacy-policy';
    }
  };

  // Reset form after 3 seconds when successful
  useEffect(() => {
    if (state.succeeded && onSuccess) {
      const timer = setTimeout(() => {
        onSuccess();
        setPrivacyChecked(false);
        setPrivacyError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onSuccess]);

  // Reset privacy checkbox when form key changes
  useEffect(() => {
    setPrivacyChecked(false);
    setPrivacyError("");
  }, [formKey]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!privacyChecked) {
      setPrivacyError(t("contact.privacyRequired") || "Please accept the privacy policy to continue.");
      return;
    }
    setPrivacyError("");
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <div className="mb-4">
          <svg
            className="w-16 h-16 mx-auto text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-[#1E1E1E] text-lg sm:text-xl font-medium mb-2">
          {t("contact.successMessage") || "Thank you for your message!"}
        </p>
        <p className="text-[#1E1E1E] text-sm sm:text-base text-[#666666]">
          {t("contact.successSubMessage") || "We'll get back to you soon."}
        </p>
      </div>
    );
  }

  return (
    <form key={formKey} onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="name" className="text-[14px] sm:text-[16px] text-[#1E1E1E] mb-2 block">
            {t("contact.name") || "Name"} <span className="text-[#FF0000]">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full border-b border-[#E0E0E0] pb-2 text-[13px] sm:text-[14px] focus:outline-none focus:border-[#FF0028] transition bg-transparent"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-[#FF0028] text-xs mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="text-[14px] sm:text-[16px] text-[#1E1E1E] mb-2 block">
            {t("contact.email") || "Email"} <span className="text-[#FF0000]">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full border-b border-[#E0E0E0] pb-2 text-[13px] sm:text-[14px] focus:outline-none focus:border-[#FF0028] transition bg-transparent"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[#FF0028] text-xs mt-1" />
        </div>
      </div>

      {/* Project Idea */}
      <div>
        <label htmlFor="projectidea" className="text-[14px] sm:text-[16px] text-[#000000] mb-2 block">
          {t("contact.projectIdea") || "Your project idea"}
        </label>
        <textarea
          id="projectidea"
          name="projectidea"
          rows={4}
          className="w-full border-b border-[#E0E0E0] pb-2 text-[13px] sm:text-[14px] resize-none focus:outline-none focus:border-[#FF0028] transition bg-transparent"
        />
        <ValidationError prefix="Project Idea" field="projectidea" errors={state.errors} className="text-[#FF0028] text-xs mt-1" />
      </div>

      {/* Privacy Policy Checkbox */}
      <div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="privacy"
            checked={privacyChecked}
            onChange={(e) => {
              setPrivacyChecked(e.target.checked);
              if (e.target.checked) {
                setPrivacyError("");
              }
            }}
            className="w-4 h-4 accent-[#FF0028] cursor-pointer rounded-sm"
          />
          <label htmlFor="privacy" className="text-[13px] sm:text-[15px] lg:text-[16px] text-[#1E1E1E] cursor-pointer">
            {i18n.language === "ta" ? (
              <>
                {t("contact.acceptPrivacy") || "எங்கள்"}{" "}
                <Link
                  to="/privacy-policy"
                  onClick={handlePrivacyLinkClick}
                  className="underline hover:text-[#FF0028] transition-colors"
                >
                  {t("contact.privacyPolicyLink") || "தனியுரிமை கொள்கையை ஏற்கவும்"}
                </Link>{" "}
                <span className="text-[#FF0000]">*</span>
              </>
            ) : (
              <>
                {t("contact.acceptPrivacy") || "Accept our"}{" "}
                <Link
                  to="/privacy-policy"
                  onClick={handlePrivacyLinkClick}
                  className="underline hover:text-[#FF0028] transition-colors"
                >
                  {t("contact.privacyPolicyLink") || "privacy policy"}
                </Link>{" "}
                <span className="text-[#FF0000]">*</span>
              </>
            )}
          </label>
        </div>
        {privacyError && (
          <p className="text-[#FF0028] text-xs mt-1">{privacyError}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className={`
    group relative
    bg-[#F1F1F1] text-white
    ${i18n.language === "ta" ? "w-full sm:w-[270px]" : "w-[130px] sm:w-[140px]"} h-[42px] sm:h-[45px]
    pl-[44px] sm:pl-[48px] pr-3 sm:pr-4
    rounded-full
    font-normal
    flex items-center
    cursor-pointer
    overflow-hidden
    disabled:opacity-50 disabled:cursor-not-allowed
  `}
      >
        {/* Arrow */}
        <span
          className="
      absolute left-[8px] top-1/2 -translate-y-1/2
      w-8 h-8 rounded-full bg-[#000000]
      flex items-center justify-center
      overflow-hidden
    "
        >
          <span className="relative w-5 h-5 overflow-hidden">
            {/* Default arrow */}
            <ArrowUpRight
              className="
          block w-5 h-5 text-[#FFFFFF]
          transition-transform duration-300 ease-out
          translate-x-0 translate-y-0
          group-hover:translate-x-full group-hover:-translate-y-full
        "
            />

            {/* Hover arrow */}
            <ArrowUpRight
              className="
          absolute left-[-100%] top-[100%]
          w-5 h-5 text-[#FFFFFF]
          transition-transform duration-300 ease-out
          group-hover:translate-x-full group-hover:-translate-y-full
        "
            />
          </span>
        </span>

        {/* Flip text */}
        <span className="relative ml-auto h-[18px] leading-[18px] overflow-hidden text-sm">
          {/* Default text */}
          <span
            className="
        block leading-[18px]
        transition-transform duration-300 ease-out
        translate-y-0
        group-hover:-translate-y-full
        text-[#000000]
      "
          >
            {state.submitting ? (t("contact.submitting") || "Submitting...") : (t("contact.submit") || "Submit form")}
          </span>

          {/* Hover text */}
          <span
            className="
        absolute left-0 top-full
        block leading-[18px]
        transition-transform duration-300 ease-out
        group-hover:-translate-y-full
        text-[#000000]
      "
          >
            {state.submitting ? (t("contact.submitting") || "Submitting...") : (t("contact.submit") || "Submit form")}
          </span>
        </span>
      </button>
    </form>
  );
};

// Contact Section Form Component with Animation
const ContactSectionForm = ({ image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { t, i18n } = useTranslation();
  const [formKey, setFormKey] = React.useState(0);

  const handleFormReset = () => {
    setFormKey((prev) => prev + 1);
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-0"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Image */}
      <div className="flex justify-center w-full lg:w-auto">
        <img
          src={image}
          alt="Meeting"
          className="w-full max-w-[280px] h-auto sm:max-w-[304px] lg:w-[304px] lg:h-[422px] object-cover"
        />
      </div>

      {/* Form */}
      <div className="relative bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10 shadow-sm w-full max-w-full lg:w-[580px] lg:h-[632px]">
        {/* Red top border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#FF0028]" />

        {/* Form Header */}
        <div className={i18n.language === "ta" ? "mb-8 sm:mb-12 lg:mb-14" : "mb-10 sm:mb-16 lg:mb-20"}>
          <p
            className={`text-[#8D9194] mb-3 sm:mb-4 ${i18n.language === "ta" ? "text-[14px] sm:text-[15px] lg:text-[16px]" : "text-[15px] sm:text-[16px] lg:text-[18px]"
              }`}
          >
            ({t("contact.quickContact") || "Quick Contact"})
          </p>
          <p
            className={`text-[#000000] leading-[1.5] ${i18n.language === "ta" ? "text-[16px] sm:text-[18px] lg:text-[20px]" : "text-[18px] sm:text-[21px] lg:text-[24px]"
              }`}
          >
            {t("contact.cta") || "Tell us about your idea, we'd love to build something great."}
          </p>
        </div>

        {/* Form */}
        <ContactFormContent formKey={formKey} onSuccess={handleFormReset} />
      </div>
    </motion.div>
  );
};

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative pt-10 sm:pt-12 md:pt-16 lg:pt-24 pb-0 bg-[#EBEBEB]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Headline */}
        <ContactSectionHeadline headline={t("contact.headline") || "Ready to build something impactful?"} />

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-start">
          {/* LEFT SIDE - Description with Icon */}
          <ContactSectionDescription
            description={
              t("contact.description") ||
              "Whether you're building a brand, launching a website or growing a product, we're here to help. Share your goals - We'll handle the strategy."
            }
          />

          {/* RIGHT SIDE - Image and Form */}
          <ContactSectionForm image={contactImage} />
        </div>
      </div>
    </section>
  );
}

