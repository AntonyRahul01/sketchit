import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "motion/react";

import AnimatedContent from "./AnimatedContent";
import RevealText from "./RevealText";
import ShinyText from "./ShinyText";
import CountUp from "./CountUp";

import ceoImage from "../assets/images/ceo.webp";
import starOutlineIcon from "../assets/icons/staroutline.svg";
import arrowLeftIcon from "../assets/icons/arrowleft.svg";
import arrowRightIcon from "../assets/icons/arrowright.svg";

// Testimonial Quote Component with Animation
const TestimonialQuote = ({ quote }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.p
      ref={ref}
      className="text-[20px] text-[#F6F6F9] leading-relaxed text-center max-w-[520px] mx-auto mb-10 font-normal tracking-[-0.01em]"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      "{quote}"
    </motion.p>
  );
};

// Testimonial Author Component with Animation
const TestimonialAuthor = ({ name, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <p className="text-white font-medium text-[18px]">{name}</p>
      <p className="text-[#C5C5C5] text-[15px] font-normal">{title}</p>
    </motion.div>
  );
};

export default function TestimonialsCeoSection() {
  const { t, i18n } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true }) || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-24 bg-white">
      <div className="max-w-[96%] mx-auto px-4 sm:px-6">
        {/* BLACK CONTAINER */}
        <AnimatedContent
          animationDuration={0.9}
          ease="power3.out"
          scrollStart="top bottom-=120px"
          scrollEnd="top center"
          delay={0}
          yOffset={60}
          startScale={0.98}
        >
          <div
            className="bg-[#09090B] rounded-[24px] lg:rounded-[32px] px-6 sm:px-8 md:px-10 lg:px-16 py-10 sm:py-12 md:py-14 lg:py-16 shadow-[0_60px_140px_rgba(0,0,0,0.35)]"
            style={{ width: "1617px", maxWidth: "100%" }}
          >
            {/* ================= TOP SECTION ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-[45%_55%]">
              {/* ================= LEFT ================= */}
              <AnimatedContent
                animationDuration={0.8}
                ease="power3.out"
                scrollStart="top bottom-=100px"
                scrollEnd="top center"
                yOffset={50}
                className="flex flex-col"
              >
                <div>
                  {/* Rating */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <CountUp
                        from={0}
                        to={parseFloat(t("testimonials.rating"))}
                        direction="up"
                        duration={1.5}
                        className="text-[40px] sm:text-[45px] lg:text-[50px] font-medium text-white"
                        startWhen={true}
                      />
                      <span className="text-[40px] sm:text-[45px] lg:text-[50px] font-semibold text-[#FFA300]">
                        *
                      </span>
                    </div>
                    <p className="text-[15px] text-[#C5C5C5] font-normal">
                      {t("testimonials.reviews")}
                    </p>
                  </div>

                  {/* Tagline */}
                  <ShinyText
                    text={t("testimonials.tagline")
                      .split(". ")
                      .map((part, index, arr) =>
                        index < arr.length - 1 ? `${part.trim()}.` : part.trim()
                      )
                      .join("\n")}
                    speed={2}
                    delay={0}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    className={`text-[#F6F6F9] leading-tight tracking-tight whitespace-pre-line font-medium ${i18n.language === "ta" ? "text-[28px] sm:text-[34px]" : "text-[34px] sm:text-[45px]"
                      }`}
                  />
                </div>

                {/* Navigation */}
                <div className="flex gap-4 mt-8 sm:mt-10 lg:mt-14">
                  <button
                    onClick={handlePrevious}
                    disabled={isAnimating}
                    className="w-9.5 h-9.5 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center hover:bg-[#222] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <img src={arrowLeftIcon} alt="Previous" className="w-[12px] h-[12px]" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className="w-9.5 h-9.5 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center hover:bg-[#222] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <img src={arrowRightIcon} alt="Next" className="w-[12px] h-[12px]" />
                  </button>
                </div>
              </AnimatedContent>

              {/* ================= RIGHT ================= */}
              <AnimatedContent
                animationDuration={0.8}
                ease="power3.out"
                scrollStart="top bottom-=100px"
                scrollEnd="top center"
                delay={0.2}
                yOffset={50}
                className="mt-10 lg:mt-0"
              >
                <div
                  className="relative h-[420px] sm:h-[480px] lg:h-[520px] flex items-start justify-center"
                  style={{ perspective: "1000px" }}
                >
                  {testimonials.map((testimonial, index) => {
                    const isCurrent = index === currentIndex;
                    const isBehind1 = index === (currentIndex + 1) % testimonials.length;
                    const isBehind2 = index === (currentIndex + 2) % testimonials.length;

                    if (!isCurrent && !isBehind1 && !isBehind2) return null;

                    const zIndex = isCurrent ? 10 : isBehind1 ? 8 : 6;
                    const translateY = isCurrent ? 0 : isBehind1 ? 24 : 48;
                    const scale = isCurrent ? 1 : isBehind1 ? 0.97 : 0.94;
                    const rotateX = isCurrent ? 0 : isBehind1 ? -2 : -4;
                    const opacity = isCurrent ? 1 : isBehind1 ? 0.85 : 0.65;
                    const blur = isCurrent ? 0 : isBehind1 ? 1.5 : 3;
                    const maxWidth = isCurrent ? 820 : 760;

                    return (
                      <motion.div
                        key={index}
                        className="absolute"
                        style={{
                          top: 0,
                          left: "50%",
                          transformOrigin: "top center",
                          zIndex,
                          pointerEvents: isCurrent ? "auto" : "none",
                        }}
                        animate={{
                          x: "-50%",
                          y: translateY,
                          scale: scale,
                          rotateX: rotateX,
                          opacity: opacity,
                          width: "100%",
                        }}
                        transition={{
                          duration: 0.6,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      >
                        <motion.div
                          className="w-full h-full"
                          animate={{ filter: `blur(${blur}px)` }}
                          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        >
                          {/* Card */}
                          <div
                            className="
                          relative
                          bg-[#131416]/90
                          backdrop-blur-sm
                          rounded-3xl
                          p-6 sm:p-10 lg:p-14
                          border border-[#202123]
                          shadow-[0_20px_30px_rgba(0,0,0,0.10)]
                        "
                            style={{ height: "400px", maxWidth, marginInline: "auto" }}
                          >
                            {/* Red line */}
                            <div className="absolute top-0 left-10 right-10 h-[3px] bg-gradient-to-r from-red-600 via-red-500 to-transparent rounded-full" />

                            {/* Stars */}
                            <div className="flex justify-center gap-2 mb-8">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <img
                                  key={i}
                                  src={starOutlineIcon}
                                  alt="Star"
                                  className="w-7 h-7"
                                  style={{
                                    filter:
                                      i <= testimonial.rating
                                        ? "brightness(0) saturate(100%) invert(35%) sepia(89%) saturate(3450%) hue-rotate(5deg)"
                                        : "brightness(0) saturate(100%) invert(25%)",
                                  }}
                                />
                              ))}
                            </div>

                            {/* Quote */}
                            <TestimonialQuote quote={testimonial.quote} />

                            {/* Author */}
                            <TestimonialAuthor name={testimonial.name} title={testimonial.title} />
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </AnimatedContent>
            </div>

            {/* ================= CEO CORNER ================= */}
            <AnimatedContent
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.3}
              yOffset={50}
            >
              {/* Gradient Border Wrapper */}
              <div
                className="relative rounded-3xl p-[1px]"
                style={{
                  background: "linear-gradient(105.96deg, #A4A4A4 0.09%, #131416 61.12%)",
                }}
              >
                {/* Card */}
                <div
                  className="relative rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(174.70deg, #131416 8.19%, #000000 80.92%, #FF0028 102.74%)",
                    boxShadow:
                      "0px 20px 30px rgba(0,0,0,0.25), 0 40px 120px rgba(0,0,0,0.9)",
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 items-center">
                    {/* CEO Image */}
                    <motion.div
                      className="shine-effect relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 w-full max-w-[380px] h-[320px] sm:h-[360px] md:h-[420px] md:w-full md:max-w-none lg:w-[380px] lg:h-[400px] mx-auto"
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                        delay: 0.2,
                      }}
                    >
                      <img
                        src={ceoImage}
                        alt="CEO"
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>

                    {/* CEO Content */}
                    <div className="flex flex-col h-full justify-center px-0 sm:px-6 md:px-0 lg:px-10 ml-0 lg:ml-14">
                      <p className="uppercase tracking-widest text-[14px] sm:text-[16px] md:text-[18px] text-[#F6F6F9] mb-4 font-normal">
                        <RevealText
                          animationDuration={0.8}
                          ease="power3.out"
                          scrollStart="top bottom-=100px"
                          scrollEnd="top center"
                          stagger={0.05}
                          revealBy="words"
                          containerClassName=""
                          textClassName=""
                        >
                          {t("ceoCorner.header")}
                        </RevealText>
                      </p>

                      <p
                        className={`font-medium text-[#F6F6F9] leading-[1.25] tracking-tight mb-6 whitespace-pre-line ${i18n.language === "ta"
                          ? "text-[26px] sm:text-[30px] lg:text-[32px]"
                          : "text-[30px] sm:text-[34px] lg:text-[40px]"
                          }`}
                      >
                        <RevealText
                          animationDuration={0.8}
                          ease="power3.out"
                          scrollStart="top bottom-=100px"
                          scrollEnd="top center"
                          stagger={0.05}
                          revealBy="words"
                          containerClassName=""
                          textClassName=""
                        >
                          {t("ceoCorner.headline")}
                        </RevealText>
                      </p>

                      <p className="text-[#FFFFFF] font-medium text-[20px] sm:text-[22px] lg:text-[25px]">
                        <RevealText
                          animationDuration={0.8}
                          ease="power3.out"
                          scrollStart="top bottom-=100px"
                          scrollEnd="top center"
                          stagger={0.05}
                          revealBy="words"
                          containerClassName=""
                          textClassName=""
                        >
                          {t("ceoCorner.name")}
                        </RevealText>
                      </p>
                      <p className="text-[#DDDDDD] text-[14px] sm:text-[15px] lg:text-[16px] font-normal">
                        <RevealText
                          animationDuration={0.8}
                          ease="power3.out"
                          scrollStart="top bottom-=100px"
                          scrollEnd="top center"
                          stagger={0.05}
                          revealBy="words"
                          containerClassName=""
                          textClassName=""
                        >
                          {t("ceoCorner.title")}
                        </RevealText>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

