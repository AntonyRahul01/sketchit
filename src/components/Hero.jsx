import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ellipse from '../assets/images/ellipse.png';
import upArrow from '../assets/images/uparrow.png';
import downArrow from '../assets/images/downarrow.png';
import heroBanner from '../assets/images/herobanner.webp';
import mobileHeroBanner from '../assets/images/mherobanner.webp';
import discoverIcon from '../assets/images/discover.png';
import logo1 from '../assets/images/img1.png';
import logo2 from '../assets/images/img2.png';
import logo3 from '../assets/images/img3.png';
import logo4 from '../assets/images/img4.png';
import logo5 from '../assets/images/img5.png';
import brandingIdentityIcon from '../assets/images/brandingidentity.png';
import webDesignIcon from '../assets/images/webdesign.png';
import brandGrowthIcon from '../assets/images/brandgrowth.png';
import portfolio1 from '../assets/images/portfolio1.webp';
import portfolio2 from '../assets/images/portfolio2.webp';
import portfolio3 from '../assets/images/portfolio3.webp';
import portfolio4 from '../assets/images/portfolio4.webp';
import social1 from '../assets/images/social1.png';
import social2 from '../assets/images/social2.png';
import social3 from '../assets/images/social3.png';
import visualDesign from '../assets/images/visualdesign.webp';
import visualDesignLogo from '../assets/images/visualdesignlogo.png';
import LogoLoop from './LogoLoop';
import AnimatedButton from './AnimatedButton';
import ScrollFloat from './ScrollFloat';
import AnimatedContent from './AnimatedContent';
import BlurText from './BlurText';
import TiltedCard from './TiltedCard';
import { HoverBorderGradient } from './HoverBorderGradient';
import RevealText from './RevealText';
import TestimonialsCeoSection from './TestimonialsCeoSection';
import hoverVideo1 from '../assets/videos/hovervdo1.mp4';
import hoverVideo2 from '../assets/videos/hovervdo2.mp4';
import hoverVideo3 from '../assets/videos/hovervdo3.mp4';
import { ArrowRight, ArrowUpRight, MessageCircle, Instagram, Facebook, Zap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useInView } from 'motion/react';
import ContactSection from './ContactSection';

const Hero = () => {
  const { t, i18n } = useTranslation();

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

  // Track window size for responsive arrow transforms
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


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
          className="absolute -right-20 sm:-right-30 md:-right-30 lg:-right-50 top-0 sm:top-0 md:-top-2 lg:-top-25 w-[100%] sm:w-[100%] md:w-4/5 lg:w-4/5 z-0 pointer-events-none opacity-50 md:opacity-100 overflow-hidden"
          style={{ maxHeight: '100vh', height: 'auto' }}
        >
          <img
            src={ellipse}
            alt="Decorative ellipse"
            className="w-full h-full object-contain object-[100%_0%] md:object-right"
            style={{ maxHeight: '100%' }}
          />
        </AnimatedContent>

        {/* Hero Section */}
        <section className="relative min-h-[60vh] sm:min-h-[80vh] md:min-h-[60vh] lg:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 overflow-x-hidden pt-0 pb-0 sm:pt-0 sm:pb-0 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0">
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
              className="mb-2 sm:mb-4 md:mb-6 z-20"
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
            <div className="relative text-center px-2 sm:px-4 lg:px-4 w-full overflow-visible">
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
                className="absolute -top-26 sm:-top-8 md:-top-36 lg:-top-16 right-0 sm:-right-4 md:-right-0 lg:right-10 z-20 animate-bounce-custom"
              >
                <div className="relative">
                  {/* Arrow - Pointing towards center/headline */}
                  <div className="absolute bottom-0 left-0 z-10" style={{
                    transform: isDesktop ? 'translate(-20px, 15px)' : 'translate(-12px, 12px)'
                  }}>
                    <img
                      src={downArrow}
                      alt="Arrow pointing to center"
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 lg:w-4 lg:h-4"
                    />
                  </div>
                  {/* Pill with neumorphic style */}
                  <div className="bg-background-secondary text-text w-[85px] sm:w-[95px] md:w-[100px] lg:w-[108px] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] rounded-full relative flex items-center justify-center" style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
                  }}>
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-sm font-medium">{t('hero.branding')}</span>
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
                className="absolute -bottom-20 sm:-bottom-8 md:-bottom-30 lg:-bottom-16 left-0 sm:-left-4 md:left-0 lg:left-10 z-20 animate-bounce-custom"
              >
                <div className="relative">
                  {/* Arrow - Pointing towards center/headline */}
                  <div className="absolute top-0 right-0 z-10" style={{
                    transform: isDesktop ? 'translate(20px, -15px)' : 'translate(12px, -12px)'
                  }}>
                    <img
                      src={upArrow}
                      alt="Arrow pointing to center"
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 lg:w-4 lg:h-4"
                    />
                  </div>
                  {/* Pill with neumorphic style */}
                  <div className={`bg-background-secondary text-text h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] rounded-full relative flex items-center justify-center ${i18n.language === 'ta'
                    ? 'w-auto min-w-[130px] sm:min-w-[150px] md:min-w-[160px] lg:min-w-[160px] px-2.5 sm:px-3 md:px-4 lg:px-4'
                    : 'w-[90px] sm:w-[100px] md:w-[110px] lg:w-[125px]'
                    }`} style={{
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
                    }}>
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-sm font-medium whitespace-nowrap">{t('hero.uiuxDesign')}</span>
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
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Mobile Image */}
              <img
                src={mobileHeroBanner}
                alt="FITFOX Website"
                className="w-full max-w-[1700px] h-auto object-cover rounded-[10px] sm:rounded-[15px] md:rounded-[20px] md:hidden"
              />
              {/* Desktop Image */}
              <img
                src={heroBanner}
                alt="FITFOX Website"
                className="hidden md:block w-full max-w-[1700px] h-auto object-cover rounded-[10px] sm:rounded-[15px] md:rounded-[20px]"
              />
              {/* Start Design Button - Overlaid on Image */}
              <motion.div
                className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-[90%] sm:max-w-none flex justify-center"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
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
              </motion.div>
            </motion.div>
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
      <section className="relative py-10 sm:py-14 md:py-20 lg:py-24 bg-white">
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

        <div className="max-w-[96%] mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <ScrollFloat
              animationDuration={2.5}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="mb-0"
              textClassName="text text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-[#1E1E1E] leading-tight"
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
                className="grid grid-cols-1 md:grid-cols-[auto_3fr_2.5fr] items-start md:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-6 sm:py-8 md:py-12 border-b border-t border-[#D0D0D0] px-4 sm:px-6 md:px-10 cursor-pointer lg:cursor-pointer"
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    setHoveredServiceIndex(0);
                    setIsServicesPreviewOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) {
                    setIsServicesPreviewOpen(false);
                    setHoveredServiceIndex(null);
                  }
                }}
                onMouseMove={handleServicesPreviewMove}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-start justify-center pt-1 md:pt-0">
                  <img src={brandingIdentityIcon} alt="Branding Identity" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <div className="flex md:ml-20 lg:ml-70">
                  <h3 className={`font-semibold text-[#1E1E1E] leading-tight whitespace-pre-line text-left ${i18n.language === 'ta'
                    ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                    : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                    }`}>
                    {t('services.branding.title')}
                  </h3>
                </div>
                <div className="flex items-start mt-2 md:mt-0">
                  <p className={`text-[#3B3B3B] leading-relaxed text-left font-normal ${i18n.language === 'ta'
                    ? 'text-sm sm:text-base md:text-md'
                    : 'text-sm sm:text-base md:text-md'
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
                className="grid grid-cols-1 md:grid-cols-[auto_3fr_2.5fr] items-start md:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-6 sm:py-8 md:py-12 border-b border-[#D0D0D0] px-4 sm:px-6 md:px-10 cursor-pointer lg:cursor-pointer"
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    setHoveredServiceIndex(1);
                    setIsServicesPreviewOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) {
                    setIsServicesPreviewOpen(false);
                    setHoveredServiceIndex(null);
                  }
                }}
                onMouseMove={handleServicesPreviewMove}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-start justify-center pt-1 md:pt-0">
                  <img src={webDesignIcon} alt="Web Design" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <div className="flex md:ml-20 lg:ml-70">
                  <h3 className={`font-semibold text-[#1E1E1E] leading-tight whitespace-pre-line text-left ${i18n.language === 'ta'
                    ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                    : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                    }`}>
                    {t('services.webDesign.title')}
                  </h3>
                </div>
                <div className="flex items-start mt-2 md:mt-0">
                  <p className={`text-[#3B3B3B] leading-relaxed text-left font-normal ${i18n.language === 'ta'
                    ? 'text-sm sm:text-base md:text-md'
                    : 'text-sm sm:text-base md:text-lg'
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
                className="grid grid-cols-1 md:grid-cols-[auto_3fr_2.5fr] items-start md:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-6 sm:py-8 md:py-12 border-b border-[#D0D0D0] px-4 sm:px-6 md:px-10 cursor-pointer lg:cursor-pointer"
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    setHoveredServiceIndex(2);
                    setIsServicesPreviewOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) {
                    setIsServicesPreviewOpen(false);
                    setHoveredServiceIndex(null);
                  }
                }}
                onMouseMove={handleServicesPreviewMove}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-start justify-center pt-1 md:pt-0">
                  <img src={brandGrowthIcon} alt="Brand Growth" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <div className="flex md:ml-20 lg:ml-70">
                  <h3 className={`font-semibold text-[#1E1E1E] leading-tight whitespace-pre-line text-left ${i18n.language === 'ta'
                    ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                    : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                    }`}>
                    {t('services.brandGrowth.title')}
                  </h3>
                </div>
                <div className="flex items-start mt-2 md:mt-0">
                  <p className={`text-[#3B3B3B] leading-relaxed text-left font-normal ${i18n.language === 'ta'
                    ? 'text-sm sm:text-base md:text-md'
                    : 'text-sm sm:text-base md:text-lg'
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
      <section className="relative py-10 sm:py-14 md:py-20 lg:py-24 bg-[#1E1E1E]">
        <div className="max-w-[96%] mx-auto px-4 sm:px-6">
          {/* Header Section */}
          <div className="mb-10 sm:mb-12 md:mb-16 relative">
            {/* Header Text with All Portfolio */}
            <div className="flex-1">
              <h2 className={`font-medium text-[#F6F6F9] leading-tight ${i18n.language === 'ta'
                ? 'text-2xl sm:text-3xl md:text-4xl lg:text-[50px]'
                : 'text-3xl sm:text-4xl md:text-5xl lg:text-[55px]'
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
                {/* Desktop-only: keep inline "All Portfolio" */}
                <AnimatedContent
                  animationDuration={0.6}
                  ease="power3.out"
                  scrollStart="top bottom-=100px"
                  scrollEnd="top center"
                  delay={0.3}
                  yOffset={30}
                  className="hidden lg:inline-flex items-center align-middle ml-1 sm:ml-2 md:ml-3"
                >
                  <HoverBorderGradient
                    as="a"
                    href="#portfolio"
                    containerClassName="rounded-full"
                    className="flex items-center gap-1.5 sm:gap-2 text-white text-sm sm:text-base md:text-lg"
                    duration={1}
                    clockwise={true}
                  >
                    <span>{t('portfolio.allPortfolio')}</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </HoverBorderGradient>
                </AnimatedContent>
              </h2>
            </div>

            {/* Mobile + tablet: move CTA + socials to next line */}
            <div className="mt-4 flex items-center justify-between gap-4 lg:hidden">
              <AnimatedContent
                animationDuration={0.6}
                ease="power3.out"
                scrollStart="top bottom-=100px"
                scrollEnd="top center"
                delay={0.3}
                yOffset={30}
                className="inline-flex items-center"
              >
                <HoverBorderGradient
                  as="a"
                  href="#portfolio"
                  containerClassName="rounded-full"
                  className="flex items-center gap-1.5 sm:gap-2 text-white text-sm sm:text-base md:text-lg"
                  duration={1}
                  clockwise={true}
                >
                  <span>{t('portfolio.allPortfolio')}</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </HoverBorderGradient>
              </AnimatedContent>

              <AnimatedContent
                animationDuration={0.6}
                ease="power3.out"
                scrollStart="top bottom-=100px"
                scrollEnd="top center"
                delay={0.4}
                yOffset={30}
                className="flex items-center gap-2 sm:gap-3 md:gap-4"
              >
                <HoverBorderGradient
                  as="a"
                  href="#"
                  containerClassName="rounded-[10px] w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[49px] md:h-[49px]"
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
                  containerClassName="rounded-[10px] w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[49px] md:h-[49px]"
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
                  containerClassName="rounded-[10px] w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[49px] md:h-[49px]"
                  className="flex items-center justify-center w-full h-full p-0"
                  duration={1}
                  clockwise={true}
                  aria-label="Facebook"
                >
                  <img src={social3} alt="Facebook" className="w-full h-full object-cover rounded-[10px]" />
                </HoverBorderGradient>
              </AnimatedContent>
            </div>

            {/* Social Media Icons - Right End */}
            <AnimatedContent
              animationDuration={0.6}
              ease="power3.out"
              scrollStart="top bottom-=100px"
              scrollEnd="top center"
              delay={0.4}
              yOffset={30}
              className="hidden lg:flex absolute bottom-0 right-0 items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6"
            >
              <HoverBorderGradient
                as="a"
                href="#"
                containerClassName="rounded-[10px] w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[49px] md:h-[49px]"
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
                containerClassName="rounded-[10px] w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[49px] md:h-[49px]"
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
                containerClassName="rounded-[10px] w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] md:w-[49px] md:h-[49px]"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 sm:gap-y-6 md:gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
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
                <div className="mb-3 sm:mb-4 w-full max-w-[740px] h-[240px] sm:h-[320px] md:h-[420px] lg:h-[570px] mx-auto">
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
                <h3 className="text-white text-base sm:text-lg md:text-xl font-medium">
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
                <div className="mb-3 sm:mb-4 w-full max-w-[740px] h-[240px] sm:h-[320px] md:h-[420px] lg:h-[570px] mx-auto">
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
                <h3 className="text-white text-base sm:text-lg md:text-xl font-medium">
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
                <div className="mb-3 sm:mb-4 w-full max-w-[740px] h-[240px] sm:h-[320px] md:h-[420px] lg:h-[570px] mx-auto">
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
                <h3 className="text-white text-base sm:text-lg md:text-xl font-medium">
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
                <div className="mb-3 sm:mb-4 w-full max-w-[740px] h-[240px] sm:h-[320px] md:h-[420px] lg:h-[570px] mx-auto">
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
                <h3 className="text-white text-base sm:text-lg md:text-xl font-medium">
                  {t('portfolio.projectTitle')}
                </h3>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Visual Systems Section */}
      <section className="relative py-10 sm:py-12 md:py-14 lg:py-24 bg-white">
        <div className="max-w-[96%] mx-auto px-4 sm:px-6">
          {/* Header with Date */}
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 sm:mb-8">
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
              <div className="mt-3 lg:mt-0 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#1E1E1E]">
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
              <div className="flex items-center justify-center relative">
                {/* Brochure Image with TiltedCard */}
                <div className="w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-[500px] flex items-center justify-center">
                  <TiltedCard
                    imageSrc={visualDesign}
                    altText="Visual Design Brochure"
                    captionText="Visual Design Brochure"
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
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
          <div className="flex flex-col md:flex-row lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* Description Text */}
            <div className="flex-1 max-w-full sm:max-w-lg lg:max-w-md">
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
              className="w-full sm:w-auto"
            >
              <a
                href="#works"
                className="
    group relative
    inline-flex items-center
    w-full sm:w-[176px] h-[52px]
    pl-5 pr-[52px]
    rounded-full
    bg-[#F1F1F1]
    overflow-hidden
    justify-center sm:justify-start
    mx-auto sm:mx-0
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

      <TestimonialsCeoSection />

      <ContactSection />


    </>
  );
};

export default Hero;