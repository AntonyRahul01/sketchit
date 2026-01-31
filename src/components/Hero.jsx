import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ellipse from '../assets/images/ellipse.png';
import upArrow from '../assets/images/uparrow.png';
import downArrow from '../assets/images/downarrow.png';
import heroBanner from '../assets/images/herobanner.png';
import discoverIcon from '../assets/images/discover.png';
import logo1 from '../assets/images/img1.png';
import logo2 from '../assets/images/img2.png';
import logo3 from '../assets/images/img3.png';
import logo4 from '../assets/images/img4.png';
import logo5 from '../assets/images/img5.png';
import brandingIdentityIcon from '../assets/images/brandingidentity.png';
import webDesignIcon from '../assets/images/webdesign.png';
import brandGrowthIcon from '../assets/images/brandgrowth.png';
import portfolio1 from '../assets/images/portfolio1.png';
import portfolio2 from '../assets/images/portfolio2.png';
import portfolio3 from '../assets/images/portfolio3.png';
import portfolio4 from '../assets/images/portfolio4.png';
import social1 from '../assets/images/social1.png';
import social2 from '../assets/images/social2.png';
import social3 from '../assets/images/social3.png';
import visualDesign from '../assets/images/visualdesign.png';
import visualDesignLogo from '../assets/images/visualdesignlogo.png';
import ceoImage from '../assets/images/ceo.png';
import starOutlineIcon from '../assets/icons/staroutline.svg';
import arrowLeftIcon from '../assets/icons/arrowleft.svg';
import arrowRightIcon from '../assets/icons/arrowright.svg';
import LogoLoop from './LogoLoop';
import AnimatedButton from './AnimatedButton';
import ScrollFloat from './ScrollFloat';
import AnimatedContent from './AnimatedContent';
import BlurText from './BlurText';
import TiltedCard from './TiltedCard';
import { HoverBorderGradient } from './HoverBorderGradient';
import RevealText from './RevealText';
import ShinyText from './ShinyText';
import CountUp from './CountUp';
import hoverVideo1 from '../assets/videos/hovervdo1.mp4';
import hoverVideo2 from '../assets/videos/hovervdo2.mp4';
import hoverVideo3 from '../assets/videos/hovervdo3.mp4';
import { ArrowRight, ArrowUpRight, MessageCircle, Instagram, Facebook, Zap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useInView } from 'motion/react';
import contactImage from '../assets/images/contact.png';
import whiteIcon from '../assets/images/whiteicon.png';

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
      <p className="text-white font-medium text-[18px]">
        {name}
      </p>
      <p className="text-[#C5C5C5] text-[15px] font-normal">
        {title}
      </p>
    </motion.div>
  );
};

// Contact Section Headline Component with Animation
const ContactSectionHeadline = ({ headline }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { i18n } = useTranslation();

  return (
    <motion.h2
      ref={ref}
      className={`leading-[1.1] font-medium text-[#1E1E1E] text-left ${i18n.language === 'ta'
        ? 'text-[48px]'
        : 'text-[60px]'
        }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {(() => {
        // For Tamil, split at " / " to create two lines
        if (i18n.language === 'ta') {
          if (headline.includes(' / ')) {
            const parts = headline.split(' / ');
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
      className="flex flex-col items-start gap-4 self-end mb-28"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="w-[56px] h-[56px] rounded-full bg-black flex items-center justify-center shrink-0">
        <img src={whiteIcon} alt="Icon" className="w-[23px] h-[23px]" />
      </div>
      <p className={`leading-[1.6] text-[#1E1E1E] pt-3 font-normal ${i18n.language === 'ta'
        ? 'text-[14px] max-w-[480px]'
        : 'text-[14px] max-w-[290px]'
        }`}>
        {description}
      </p>
    </motion.div>
  );
};

// Contact Section Form Component with Animation
const ContactSectionForm = ({ image, t }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { i18n } = useTranslation();


  return (
    <motion.div
      ref={ref}
      className="flex flex-row items-end"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt="Meeting"
          className="w-[304px] h-[422px] object-cover"
        />
      </div>

      {/* Form */}
      <div className="relative bg-white px-10 py-10 shadow-sm w-[580px] h-[632px]">
        {/* Red top border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#FF0028]" />

        {/* Form Header */}
        <div className={i18n.language === 'ta' ? 'mb-14' : 'mb-20'}>
          <p className={`text-[#8D9194] mb-4 ${i18n.language === 'ta'
            ? 'text-[16px]'
            : 'text-[18px]'
            }`}>
            ({t("contact.quickContact") || "Quick Contact"})
          </p>
          <p className={`text-[#000000] leading-[1.5] ${i18n.language === 'ta'
            ? 'text-[20px]'
            : 'text-[24px]'
            }`}>
            {t("contact.cta") || "Tell us about your idea, we'd love to build something great."}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* Name and Email Row */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-[16px] text-[#1E1E1E] mb-2 block">
                {t("contact.name") || "Name"} <span className="text-[#FF0000]">*</span>
              </label>
              <input
                type="text"
                className="w-full border-b border-[#E0E0E0] pb-2 text-[14px] focus:outline-none focus:border-[#FF0028] transition bg-transparent"
              />
            </div>
            <div>
              <label className="text-[16px] text-[#1E1E1E] mb-2 block">
                {t("contact.email") || "Email"} <span className="text-[#FF0000]">*</span>
              </label>
              <input
                type="email"
                className="w-full border-b border-[#E0E0E0] pb-2 text-[14px] focus:outline-none focus:border-[#FF0028] transition bg-transparent"
              />
            </div>
          </div>

          {/* Project Idea */}
          <div>
            <label className="text-[16px] text-[#000000] mb-2 block">
              {t("contact.projectIdea") || "Your project idea"}
            </label>
            <textarea
              rows={4}
              className="w-full border-b border-[#E0E0E0] pb-2 text-[14px] resize-none focus:outline-none focus:border-[#FF0028] transition bg-transparent"
            />
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy"
              className="w-4 h-4 accent-[#FF0028] cursor-pointer rounded-sm"
            />
            <label htmlFor="privacy" className="text-[16px] text-[#1E1E1E] cursor-pointer">
              {i18n.language === 'ta' ? (
                <>
                  {t("contact.acceptPrivacy") || "எங்கள்"}{" "}
                  <span className="underline">
                    {t("contact.privacyPolicyLink") || "தனியுரிமை கொள்கையை ஏற்கவும்"}
                  </span>
                </>
              ) : (
                <>
                  {t("contact.acceptPrivacy") || "Accept our"}{" "}
                  <span className="underline">
                    {t("contact.privacyPolicyLink") || "privacy policy"}
                  </span>
                </>
              )}
            </label>
          </div>

          {/* Submit Button */}
          <div
            className={`
    group relative
    bg-[#F1F1F1] text-white
    ${i18n.language === 'ta' ? 'w-[270px]' : 'w-[140px]'} h-[45px]
    pl-[48px] pr-4
    rounded-full
    font-normal
    flex items-center
    cursor-pointer
    overflow-hidden
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
                {t("contact.submit") || "Submit form"}
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
                {t("contact.submit") || "Submit form"}
              </span>
            </span>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true }) || [];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Services hover preview video (desktop only)
  const [isServicesPreviewOpen, setIsServicesPreviewOpen] = React.useState(false);
  const [hoveredServiceIndex, setHoveredServiceIndex] = React.useState(null);
  const previewX = useMotionValue(-1000);
  const previewY = useMotionValue(-1000);
  const previewXSpring = useSpring(previewX, { stiffness: 280, damping: 30, mass: 0.25 });
  const previewYSpring = useSpring(previewY, { stiffness: 280, damping: 30, mass: 0.25 });
  const videoRef = React.useRef(null);

  const serviceVideos = [hoverVideo1, hoverVideo2, hoverVideo3];

  const handleServicesPreviewMove = (e) => {
    // Offset so it doesn't sit directly under the cursor
    previewX.set(e.clientX + 60);
    previewY.set(e.clientY - 40);
  };

  React.useEffect(() => {
    if (videoRef.current) {
      if (isServicesPreviewOpen && hoveredServiceIndex !== null) {
        videoRef.current.play().catch(() => {
          // Autoplay might be blocked, that's okay
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isServicesPreviewOpen, hoveredServiceIndex]);

  const handlePrevious = () => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating || testimonials.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 600);
  };


  const logos = [
    { src: logo1, alt: 'Logo 1' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
  ];

  return (
    <>
      <div className="relative overflow-x-hidden bg-[#F6F6F9]">
        {/* Ellipse Decorative Element - Covers Hero and Hero Banner sections only */}
        <AnimatedContent
          animationDuration={1.2}
          ease="power3.out"
          scrollStart="top bottom"
          scrollEnd="top center"
          delay={0}
          yOffset={30}
          className="absolute -right-20 md:-right-50 -top-10 md:-top-25 bottom-0 w-[120%] sm:w-[100%] md:w-4/5 lg:w-4/5 z-0 pointer-events-none opacity-50 md:opacity-100"
        >
          <img
            src={ellipse}
            alt="Decorative ellipse"
            className="w-full h-full object-contain object-right"
          />
        </AnimatedContent>

        {/* Hero Section */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[95vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden pb-5 py-5">
          {/* Main Headline Container - Centered */}
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
            {/* Discover Our Process - Centered Above Headline */}
            <AnimatedContent
              animationDuration={2.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.5}
              yOffset={50}
              className="mb-3 sm:mb-4 md:mb-6 z-20"
            >
              <div className="bg-[#13171D] text-white px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-[16px] font-medium flex items-center gap-1.5 sm:gap-2 shine-effect relative">
                <img
                  src={discoverIcon}
                  alt="Discover icon"
                  className="w-3 h-3 sm:w-4 sm:h-4 relative z-10"
                />
                <span className="relative z-10">{t('hero.discoverProcess')}</span>
              </div>
            </AnimatedContent>

            {/* Main Headline - Centered */}
            <div className="relative text-center px-2 sm:px-4">
              <BlurText
                text={t('hero.headline')}
                delay={100}
                animateBy="words"
                direction="top"
                className={`font-medium leading-[1.15] tracking-tight ${i18n.language === 'ta'
                  ? 'text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px]'
                  : 'text-[32px] sm:text-[42px] md:text-[56px] lg:text-[75px]'
                  }`}
                style={{ color: '#13171D' }}
              />


              {/* Branding Pill - Top Right, Above and to the Right of Headline */}
              <AnimatedContent
                animationDuration={1}
                ease="power3.out"
                scrollStart="top bottom"
                scrollEnd="top center"
                delay={0.3}
                yOffset={30}
                className="absolute -top-8 sm:-top-10 md:-top-12 lg:-top-16 -right-4 sm:-right-6 md:-right-8 lg:-right-35 z-20 animate-bounce-custom"
              >
                <div className="relative">
                  {/* Arrow - Pointing towards center/headline */}
                  <div className="absolute bottom-0 left-0 z-10" style={{ transform: 'translate(-20px, 15px)' }}>
                    <img
                      src={downArrow}
                      alt="Arrow pointing to center"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                  </div>
                  {/* Pill with neumorphic style */}
                  <div className="bg-background-secondary text-text w-[90px] sm:w-[100px] md:w-[108px] h-[36px] sm:h-[40px] md:h-[44px] rounded-full relative flex items-center justify-center" style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
                  }}>
                    <span className="text-xs sm:text-sm font-medium">{t('hero.branding')}</span>
                  </div>
                </div>
              </AnimatedContent>

              {/* UI/UX Design Pill - Bottom Left, Below and to the Left of Headline */}
              <AnimatedContent
                animationDuration={1}
                ease="power3.out"
                scrollStart="top bottom"
                scrollEnd="top center"
                delay={0.4}
                yOffset={30}
                className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 lg:-bottom-16 -left-4 sm:-left-6 md:-left-8 lg:-left-35 z-20 animate-bounce-custom"
              >
                <div className="relative">
                  {/* Arrow - Pointing towards center/headline */}
                  <div className="absolute top-0 right-0 z-10" style={{ transform: 'translate(20px, -15px)' }}>
                    <img
                      src={upArrow}
                      alt="Arrow pointing to center"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    />
                  </div>
                  {/* Pill with neumorphic style */}
                  <div className={`bg-background-secondary text-text h-[36px] sm:h-[40px] md:h-[44px] rounded-full relative flex items-center justify-center ${i18n.language === 'ta'
                    ? 'w-auto min-w-[140px] sm:min-w-[160px] px-3 sm:px-4'
                    : 'w-[100px] sm:w-[110px] md:w-[125px]'
                    }`} style={{
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
                    }}>
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{t('hero.uiuxDesign')}</span>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* Hero Banner Section */}
        <section className="relative pt-0 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10">
          <div className="max-w-[1800px] mx-auto">
            {/* Hero Banner Image */}
            <div className="relative flex justify-center">
              <img
                src={heroBanner}
                alt="FITFOX Website"
                className="w-full max-w-[1700px] h-auto object-cover rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
              />
              {/* Start Design Button - Overlaid on Image */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-[90%] sm:max-w-none flex justify-center">
                <AnimatedButton
                  baseColor="#000000"
                  pillColor="#ffffff"
                  hoveredTextColor="#ffffff"
                  pillTextColor="#000000"
                  className={`border-2 border-primary py-2 sm:py-2.5 md:py-3 font-semibold text-xs sm:text-sm md:text-base shadow-lg whitespace-nowrap ${i18n.language === 'ta'
                    ? 'px-4 sm:px-6 md:px-8 lg:px-12'
                    : 'px-4 sm:px-5 md:px-6 lg:px-8'
                    }`}
                  key={i18n.language}
                >
                  {t('hero.startDesign')}
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Trusted By Section - Infinite Scroll */}
      <section className="relative py-14 md:py-24 bg-[#F6F6F9] overflow-hidden">
        <div className="max-w-[96%] mx-auto px-6">
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl font-semibold  text-[#13171D] mb-8 md:mb-12">
            {t('trustedBy.title')}
          </h2>

          {/* Infinite Scroll Container */}
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={logos}
              speed={100}
              direction="left"
              logoHeight={32}
              gap={64}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#F6F6F9"
              ariaLabel="Trusted by partners"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-14 md:py-24 bg-white">
        {/* Hover preview tooltip video */}
        <motion.div
          className="pointer-events-none fixed z-[9999] hidden lg:block"
          style={{ left: previewXSpring, top: previewYSpring }}
          animate={{
            opacity: isServicesPreviewOpen ? 1 : 0,
            scale: isServicesPreviewOpen ? 1 : 0.96
          }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        >
          {hoveredServiceIndex !== null && (
            <div className="rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.22)] border border-black/10 bg-black">
              <video
                key={hoveredServiceIndex}
                ref={videoRef}
                src={serviceVideos[hoveredServiceIndex]}
                className="w-[500px] h-[320px] object-cover"
                loop
                muted
                playsInline
                autoPlay
              />
            </div>
          )}
        </motion.div>

        <div className="max-w-[96%] mx-auto px-6">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <ScrollFloat
              animationDuration={2.5}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="mb-0"
              textClassName="text-4xl md:text-5xl lg:text-6xl  font-semibold text-[#1E1E1E] leading-tight"
            >
              {t('services.header')}
            </ScrollFloat>
          </div>

          {/* Services List */}
          <div className="space-y-0">
            {/* Branding Identity */}
            <AnimatedContent
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0}
              yOffset={50}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-[auto_3fr_2.5fr] items-center gap-6 md:gap-8 lg:gap-12 py-8 md:py-12 border-b border-t border-[#D0D0D0] px-10 cursor-pointer"
                onMouseEnter={() => {
                  setHoveredServiceIndex(0);
                  setIsServicesPreviewOpen(true);
                }}
                onMouseLeave={() => {
                  setIsServicesPreviewOpen(false);
                  setHoveredServiceIndex(null);
                }}
                onMouseMove={handleServicesPreviewMove}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-start justify-center pt-1">
                  <img src={brandingIdentityIcon} alt="Branding Identity" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <div className="flex ml-70">
                  <h3 className={`font-semibold text-[#1E1E1E] leading-tight whitespace-pre-line text-left ${i18n.language === 'ta'
                    ? 'text-2xl md:text-3xl lg:text-4xl'
                    : 'text-3xl md:text-4xl lg:text-5xl'
                    }`}>
                    {t('services.branding.title')}
                  </h3>
                </div>
                <div className="flex items-start">
                  <p className={`text-[#3B3B3B] leading-relaxed text-left font-normal ${i18n.language === 'ta'
                    ? 'text-sm md:text-md'
                    : 'text-base md:text-md'
                    }`}>
                    {t('services.branding.description')}
                  </p>
                </div>
              </div>
            </AnimatedContent>

            {/* Web Design */}
            <AnimatedContent
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.1}
              yOffset={50}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-[auto_3fr_2.5fr] items-center gap-6 md:gap-8 lg:gap-12 py-8 md:py-12 border-b border-[#D0D0D0]  px-10 cursor-pointer"
                onMouseEnter={() => {
                  setHoveredServiceIndex(1);
                  setIsServicesPreviewOpen(true);
                }}
                onMouseLeave={() => {
                  setIsServicesPreviewOpen(false);
                  setHoveredServiceIndex(null);
                }}
                onMouseMove={handleServicesPreviewMove}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-start justify-center pt-1">
                  <img src={webDesignIcon} alt="Web Design" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <div className="flex ml-70">
                  <h3 className={`font-semibold text-[#1E1E1E] leading-tight whitespace-pre-line text-left ${i18n.language === 'ta'
                    ? 'text-2xl md:text-3xl lg:text-4xl'
                    : 'text-3xl md:text-4xl lg:text-5xl'
                    }`}>
                    {t('services.webDesign.title')}
                  </h3>
                </div>
                <div className="flex items-start">
                  <p className={`text-[#3B3B3B] leading-relaxed text-left font-normal ${i18n.language === 'ta'
                    ? 'text-sm md:text-md'
                    : 'text-base md:text-lg'
                    }`}>
                    {t('services.webDesign.description')}
                  </p>
                </div>
              </div>
            </AnimatedContent>

            {/* Brand Growth */}
            <AnimatedContent
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.2}
              yOffset={50}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-[auto_3fr_2.5fr] items-center gap-6 md:gap-8 lg:gap-12 py-8 md:py-12 border-b border-[#D0D0D0]  px-10 cursor-pointer"
                onMouseEnter={() => {
                  setHoveredServiceIndex(2);
                  setIsServicesPreviewOpen(true);
                }}
                onMouseLeave={() => {
                  setIsServicesPreviewOpen(false);
                  setHoveredServiceIndex(null);
                }}
                onMouseMove={handleServicesPreviewMove}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-start justify-center pt-1">
                  <img src={brandGrowthIcon} alt="Brand Growth" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <div className="flex ml-70">
                  <h3 className={`font-semibold text-[#1E1E1E] leading-tight whitespace-pre-line text-left ${i18n.language === 'ta'
                    ? 'text-2xl md:text-3xl lg:text-4xl'
                    : 'text-3xl md:text-4xl lg:text-5xl'
                    }`}>
                    {t('services.brandGrowth.title')}
                  </h3>
                </div>
                <div className="flex items-start">
                  <p className={`text-[#3B3B3B] leading-relaxed text-left font-normal ${i18n.language === 'ta'
                    ? 'text-sm md:text-md'
                    : 'text-base md:text-lg'
                    }`}>
                    {t('services.brandGrowth.description')}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-14 md:py-24 bg-[#1E1E1E]">
        <div className="max-w-[96%] mx-auto px-6">
          {/* Header Section */}
          <div className="mb-12 md:mb-16 relative">
            {/* Header Text with All Portfolio */}
            <div className="flex-1">
              <h2 className={`font-medium text-[#F6F6F9] leading-tight ${i18n.language === 'ta'
                ? 'text-[50px]'
                : 'text-[55px]'
                }`}>
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
                  {t('portfolio.header')}
                </RevealText>
                {' '}
                <AnimatedContent
                  animationDuration={0.6}
                  ease="power3.out"
                  scrollStart="top bottom-=100px"
                  scrollEnd="top center"
                  delay={0.3}
                  yOffset={30}
                  className="inline-flex items-center align-middle ml-3"
                >
                  <HoverBorderGradient
                    as="a"
                    href="#portfolio"
                    containerClassName="rounded-full"
                    className="flex items-center gap-2 text-white text-base md:text-lg"
                    duration={1}
                    clockwise={true}
                  >
                    <span>{t('portfolio.allPortfolio')}</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </HoverBorderGradient>
                </AnimatedContent>
              </h2>
            </div>
            {/* Social Media Icons - Right End */}
            <AnimatedContent
              animationDuration={0.6}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.4}
              yOffset={30}
              className="absolute bottom-0 right-0 flex items-center gap-4 md:gap-6"
            >
              <HoverBorderGradient
                as="a"
                href="#"
                containerClassName="rounded-[10px] w-[49px] h-[49px]"
                className="flex items-center justify-center w-full h-full p-0"
                duration={1}
                clockwise={true}
                aria-label="WhatsApp"
              >
                <img src={social1} alt="WhatsApp" className="w-full h-full object-cover rounded-[10px]" />
              </HoverBorderGradient>
              <HoverBorderGradient
                as="a"
                href="#"
                containerClassName="rounded-[10px] w-[49px] h-[49px]"
                className="flex items-center justify-center w-full h-full p-0"
                duration={1}
                clockwise={true}
                aria-label="Instagram"
              >
                <img src={social2} alt="Instagram" className="w-full h-full object-cover rounded-[10px]" />
              </HoverBorderGradient>
              <HoverBorderGradient
                as="a"
                href="#"
                containerClassName="rounded-[10px] w-[49px] h-[49px]"
                className="flex items-center justify-center w-full h-full p-0"
                duration={1}
                clockwise={true}
                aria-label="Facebook"
              >
                <img src={social3} alt="Facebook" className="w-full h-full object-cover rounded-[10px]" />
              </HoverBorderGradient>
            </AnimatedContent>
          </div>

          {/* Projects Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-8 md:gap-x-12">
            {/* Project 1 */}
            <AnimatedContent
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0}
              yOffset={50}
            >
              <div className="group cursor-pointer">
                <div className="mb-4 w-full max-w-[740px] h-[570px] mx-auto">
                  <TiltedCard
                    imageSrc={portfolio1}
                    altText="Fitfox Website Design"
                    captionText={t('portfolio.projectTitle')}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                </div>
                <h3 className="text-white text-lg md:text-xl font-medium">
                  {t('portfolio.projectTitle')}
                </h3>
              </div>
            </AnimatedContent>

            {/* Project 2 */}
            <AnimatedContent
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.1}
              yOffset={50}
            >
              <div className="group cursor-pointer">
                <div className="mb-4 w-full max-w-[740px] h-[570px] mx-auto">
                  <TiltedCard
                    imageSrc={portfolio2}
                    altText="Fitfox Website Design"
                    captionText={t('portfolio.projectTitle')}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                </div>
                <h3 className="text-white text-lg md:text-xl font-medium ">
                  {t('portfolio.projectTitle')}
                </h3>
              </div>
            </AnimatedContent>

            {/* Project 3 */}
            <AnimatedContent
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.2}
              yOffset={50}
            >
              <div className="group cursor-pointer">
                <div className="mb-4 w-full max-w-[740px] h-[570px] mx-auto">
                  <TiltedCard
                    imageSrc={portfolio3}
                    altText="Fitfox Website Design"
                    captionText={t('portfolio.projectTitle')}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                </div>
                <h3 className="text-white text-lg md:text-xl font-medium ">
                  {t('portfolio.projectTitle')}
                </h3>
              </div>
            </AnimatedContent>

            {/* Project 4 */}
            <AnimatedContent
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.3}
              yOffset={50}
            >
              <div className="group cursor-pointer">
                <div className="mb-4 w-full max-w-[740px] h-[570px] mx-auto">
                  <TiltedCard
                    imageSrc={portfolio4}
                    altText="Fitfox Website Design"
                    captionText={t('portfolio.projectTitle')}
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                </div>
                <h3 className="text-white text-lg md:text-xl font-medium ">
                  {t('portfolio.projectTitle')}
                </h3>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Visual Systems Section */}
      <section className="relative py-14 md:py-24 bg-white">
        <div className="max-w-[96%] mx-auto px-6">
          {/* Header with Date */}
          <div className="mb-12 md:mb-16 relative">
            <div className="flex justify-between items-center mb-8">
              <div className="flex-1">
                <h2 className={`font-medium text-[#1E1E1E] leading-tight ${i18n.language === 'ta'
                  ? 'text-3xl md:text-4xl lg:text-5xl'
                  : 'text-4xl md:text-5xl lg:text-6xl'
                  }`}>
                  <RevealText
                    animationDuration={0.8}
                    ease="power3.out"
                    scrollStart="top bottom-=100px"
                    scrollEnd="top center"
                    stagger={0.05}
                    revealBy="words"
                    containerClassName=""
                    textClassName=" font-medium"
                  >
                    {t('visualSystems.header')}
                  </RevealText>
                </h2>
              </div>
              <div className="text-2xl md:text-3xl  font-medium text-[#1E1E1E]">
                {t('visualSystems.date')}
              </div>
            </div>
          </div>

          {/* Brochure Image with Logo */}
          <div className="mb-12 md:mb-16 flex justify-center">
            <AnimatedContent
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.2}
              yOffset={50}
              className="w-full max-w-5xl relative"
            >
              <div className=" flex items-center justify-center relative">
                {/* Brochure Image with TiltedCard */}
                <div className="w-full h-[500px] flex items-center justify-center">
                  <TiltedCard
                    imageSrc={visualDesign}
                    altText="Visual Design Brochure"
                    captionText="Visual Design Brochure"
                    containerHeight="482px"
                    containerWidth="90%"
                    imageHeight="500px"
                    imageWidth="90%"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="relative w-full h-full">
                        <img src={visualDesignLogo} alt="Akaram Logo" className="absolute top-4 left-4 md:top-8 md:left-10 h-8 md:h-10 w-auto" />
                      </div>
                    }
                  />
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* Bottom Section - Description and View All Works */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Description Text */}
            <div className="flex-1 max-w-lg md:max-w-md">
              <AnimatedContent
                animationDuration={0.8}
                ease="power3.out"
                scrollStart="top bottom-=100px"
                scrollEnd="top center"
                delay={0.3}
                yOffset={30}
              >
                <p className={`text-[#2B2B2B] leading-relaxed font-normal ${i18n.language === 'ta'
                  ? 'text-sm md:text-md'
                  : 'text-base md:text-lg'
                  }`}>
                  {t('visualSystems.description')}
                </p>
              </AnimatedContent>
            </div>

            {/* View All Works Button - Light Grey Oval */}
            <AnimatedContent
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.4}
              yOffset={30}
            >
              <a
                href="#works"
                className="
    group relative
    inline-flex items-center
    w-[176px] h-[52px]
    pl-5 pr-[52px]
    rounded-full
    bg-[#F1F1F1]
    overflow-hidden
  "
              >
                {/* Flip text */}
                <span className="relative mx-auto h-[20px] leading-[20px] overflow-hidden">
                  {/* Default text */}
                  <span
                    className="
        block text-[16px] font-normal leading-[20px] text-black
        transition-transform duration-300 ease-out
        translate-y-0
        group-hover:-translate-y-full
      "
                  >
                    {t('visualSystems.viewAllWorks')}
                  </span>

                  {/* Hover text */}
                  <span
                    className="
        absolute left-0 top-full
        block text-[16px] font-normal leading-[20px] text-black
        transition-transform duration-300 ease-out
        group-hover:-translate-y-full
      "
                  >
                    {t('visualSystems.viewAllWorks')}
                  </span>
                </span>

                {/* Arrow */}
                <span
                  className="
      absolute right-[8px] top-1/2 -translate-y-1/2
      w-9 h-9 rounded-full bg-black
      flex items-center justify-center
      overflow-hidden
    "
                >
                  <span className="relative w-4 h-4 overflow-hidden">
                    {/* Default arrow */}
                    <ArrowUpRight
                      className="
          block w-4 h-4 text-white
          transition-transform duration-300 ease-out
          translate-x-0 translate-y-0
          group-hover:translate-x-full group-hover:-translate-y-full
        "
                    />

                    {/* Hover arrow */}
                    <ArrowUpRight
                      className="
          absolute left-[-100%] top-[100%]
          w-4 h-4 text-white
          transition-transform duration-300 ease-out
          group-hover:translate-x-full group-hover:-translate-y-full
        "
                    />
                  </span>
                </span>
              </a>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Testimonials & CEO Corner Section */}
      <section className="relative py-14 md:py-24 bg-white">
        <div className="max-w-[96%] mx-auto px-6">

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
            <div className="bg-[#09090B] rounded-[32px] px-16 md:px-20 py-16 md:py-20 shadow-[0_60px_140px_rgba(0,0,0,0.35)]" style={{ width: '1617px', maxWidth: '100%' }}>

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
                          className="text-[50px] font-medium text-white"
                          startWhen={true}
                        />
                        <span className="text-[50px] font-semibold text-[#FFA300]">
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
                        .split('. ')
                        .map((part, index, arr) =>
                          index < arr.length - 1 ? `${part.trim()}.` : part.trim()
                        )
                        .join('\n')}
                      speed={2}
                      delay={0}
                      color="#b5b5b5"
                      shineColor="#ffffff"
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover={false}
                      disabled={false}
                      className={`text-[#F6F6F9] leading-tight tracking-tight whitespace-pre-line font-medium ${i18n.language === 'ta'
                        ? 'text-[34px]'
                        : 'text-[45px]'
                        }`}
                    />
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-4 mt-14">
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
                >
                  <div
                    className="relative h-[520px] flex items-start justify-center"
                    style={{ perspective: "1000px" }}
                  >
                    {testimonials.map((testimonial, index) => {
                      const isCurrent = index === currentIndex;
                      const isBehind1 =
                        index === (currentIndex + 1) % testimonials.length;
                      const isBehind2 =
                        index === (currentIndex + 2) % testimonials.length;

                      if (!isCurrent && !isBehind1 && !isBehind2) return null;

                      const zIndex = isCurrent ? 10 : isBehind1 ? 8 : 6;
                      const translateY = isCurrent ? 0 : isBehind1 ? 24 : 48;
                      const scale = isCurrent ? 1 : isBehind1 ? 0.97 : 0.94;
                      const rotateX = isCurrent ? 0 : isBehind1 ? -2 : -4;
                      const opacity = isCurrent ? 1 : isBehind1 ? 0.85 : 0.65;
                      const blur = isCurrent ? 0 : isBehind1 ? 1.5 : 3;
                      const width = isCurrent ? 820 : 760;

                      return (
                        <motion.div
                          key={index}
                          className="absolute"
                          style={{
                            top: 0,
                            left: "50%",
                            maxWidth: "100%",
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
                            width: width,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                        >
                          <motion.div
                            className="w-full h-full"
                            animate={{
                              filter: `blur(${blur}px)`,
                            }}
                            transition={{
                              duration: 0.6,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                          >
                            {/* Card */}
                            <div
                              className="
                          relative
                          bg-[#131416]/90
                          backdrop-blur-sm
                          rounded-3xl
                          p-14
                          border border-[#202123]
                          shadow-[0_20px_30px_rgba(0,0,0,0.10)]
                        "
                              style={{ height: "400px" }}
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
                    background:
                      "linear-gradient(105.96deg, #A4A4A4 0.09%, #131416 61.12%)",
                  }}
                >
                  {/* Card */}
                  <div
                    className="relative rounded-3xl p-10 md:p-10 overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(174.70deg, #131416 8.19%, #000000 80.92%, #FF0028 102.74%)",
                      boxShadow:
                        "0px 20px 30px rgba(0,0,0,0.25), 0 40px 120px rgba(0,0,0,0.9)",
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-6 items-center">

                      {/* CEO Image */}
                      <motion.div
                        className="shine-effect relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                          duration: 0.8,
                          ease: [0.4, 0, 0.2, 1],
                          delay: 0.2
                        }}
                      >
                        <img
                          src={ceoImage}
                          alt="CEO"
                          className="w-[380px] h-[400px] object-cover object-center"
                        />
                      </motion.div>

                      {/* CEO Content */}
                      <div className="flex flex-col h-full justify-center px-10 ml-14">
                        <p className="uppercase tracking-widest text-[18px] text-[#F6F6F9] mb-4 font-normal">
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

                        <p className={`font-medium text-[#F6F6F9] leading-[1.25] tracking-tight mb-6 whitespace-pre-line ${i18n.language === 'ta'
                          ? 'text-[32px]'
                          : 'text-[40px]'
                          }`}>
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

                        <p className="text-[#FFFFFF]  font-medium text-[25px]">
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
                        <p className="text-[#DDDDDD] text-[16px] font-normal">
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

      {/* Contact Section */}
      <section className="relative pt-14 md:pt-24 pb-0 bg-[#EBEBEB]">
        <div className="max-w-[1400px] mx-auto">
          {/* Headline */}
          <ContactSectionHeadline headline={t("contact.headline") || "Ready to build something impactful?"} />
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-start">
            {/* LEFT SIDE - Description with Icon */}
            <ContactSectionDescription
              description={t("contact.description") || "Whether you're building a brand, launching a website or growing a product, we're here to help. Share your goals - We'll handle the strategy."}
            />

            {/* RIGHT SIDE - Image and Form */}
            <ContactSectionForm image={contactImage} t={t} />
          </div>
        </div>
      </section>


    </>
  );
};

export default Hero;