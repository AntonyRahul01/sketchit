import React from 'react';
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
import LogoLoop from './LogoLoop';
import AnimatedButton from './AnimatedButton';
import ScrollFloat from './ScrollFloat';
import AnimatedContent from './AnimatedContent';
import BlurText from './BlurText';
import TiltedCard from './TiltedCard';
import { HoverBorderGradient } from './HoverBorderGradient';
import RevealText from './RevealText';
import { ArrowRight, ArrowUpRight, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

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
          className="absolute -right-50 -top-25 bottom-0 w-[90%] md:w-4/5 lg:w-4/5 z-0 pointer-events-none"
        >
          <img
            src={ellipse}
            alt="Decorative ellipse"
            className="w-full h-full object-contain object-right"
          />
        </AnimatedContent>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pb-0">
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
              className="mb-6 md:mb-8 z-20"
            >
              <div className="bg-primary text-white px-5 py-2.5 rounded-full text-[16px] font-medium flex items-center gap-2 shine-effect relative">
                <img
                  src={discoverIcon}
                  alt="Discover icon"
                  className="w-4 h-4 relative z-10"
                />
                <span className="relative z-10">{t('hero.discoverProcess')}</span>
              </div>
            </AnimatedContent>

            {/* Main Headline - Centered */}
            <div className="relative text-center px-4">
              <BlurText
                text={`Creating High-Impact
Digital Experiences
With Purpose`}
                delay={100}
                animateBy="words"
                direction="top"
                className="text-[80px] font-[500] leading-[1.15] tracking-tight"
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
                className="absolute -top-12 md:-top-16 -right-8 md:-right-4 lg:-right-35 z-20 animate-bounce-custom"
              >
                <div className="relative">
                  {/* Arrow - Pointing towards center/headline */}
                  <div className="absolute bottom-0 left-0 z-10" style={{ transform: 'translate(-20px, 15px)' }}>
                    <img
                      src={downArrow}
                      alt="Arrow pointing to center"
                      className="w-4 h-4"
                    />
                  </div>
                  {/* Pill with neumorphic style */}
                  <div className="bg-background-secondary text-text w-[108px] h-[44px] rounded-full relative flex items-center justify-center" style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
                  }}>
                    <span className="text-sm font-medium">{t('hero.branding')}</span>
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
                className="absolute -bottom-12 md:-bottom-16 -left-8 md:-left-4 lg:-left-35 z-20 animate-bounce-custom"
              >
                <div className="relative">
                  {/* Arrow - Pointing towards center/headline */}
                  <div className="absolute top-0 right-0 z-10" style={{ transform: 'translate(20px, -15px)' }}>
                    <img
                      src={upArrow}
                      alt="Arrow pointing to center"
                      className="w-4 h-4"
                    />
                  </div>
                  {/* Pill with neumorphic style */}
                  <div className="bg-background-secondary text-text w-[125px] h-[44px] rounded-full relative flex items-center justify-center" style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
                  }}>
                    <span className="text-sm font-medium">{t('hero.uiuxDesign')}</span>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* Hero Banner Section */}
        <section className="relative pt-0 pb-10 px-15">
          <div className="max-w-[1800px] mx-auto">
            {/* Hero Banner Image */}
            <div className="relative flex justify-center">
              <img
                src={heroBanner}
                alt="FITFOX Website"
                className="w-full max-w-[1700px] h-auto object-cover rounded-[20px]"
              />
              {/* Start Design Button - Overlaid on Image */}
              <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10">
                <AnimatedButton
                  baseColor="#000000"
                  pillColor="#ffffff"
                  hoveredTextColor="#ffffff"
                  pillTextColor="#000000"
                  className="border-2 border-primary px-6 md:px-8 py-2.5 md:py-3 font-semibold text-sm md:text-base shadow-lg"
                >
                  {t('hero.startDesign')}
                </AnimatedButton>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Trusted By Section - Infinite Scroll */}
      <section className="relative py-12 md:py-16 bg-[#F6F6F9] overflow-hidden pt-0">
        <div className="max-w-[90%] mx-auto px-6">
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#13171D] mb-8 md:mb-12">
            We are Trusted by
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
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <ScrollFloat
              animationDuration={2.5}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="mb-0"
              textClassName="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1E1E1E] leading-tight"
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
              <div className="grid grid-cols-1 md:grid-cols-[auto_3fr_2.5fr] items-center gap-6 md:gap-8 lg:gap-12 py-8 md:py-12 border-b border-t border-[#D0D0D0] px-10">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-start justify-center pt-1">
                  <img src={brandingIdentityIcon} alt="Branding Identity" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <div className="flex ml-70">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1E1E1E] leading-tight whitespace-pre-line text-left">
                    {t('services.branding.title')}
                  </h3>
                </div>
                <div className="flex items-start">
                  <p className="text-base md:text-lg text-[#3B3B3B] leading-relaxed text-left">
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
              <div className="grid grid-cols-1 md:grid-cols-[auto_3fr_2.5fr] items-center gap-6 md:gap-8 lg:gap-12 py-8 md:py-12 border-b border-[#D0D0D0]  px-10">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-start justify-center pt-1">
                  <img src={webDesignIcon} alt="Web Design" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <div className="flex ml-70">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1E1E1E] leading-tight whitespace-pre-line text-left">
                    {t('services.webDesign.title')}
                  </h3>
                </div>
                <div className="flex items-start">
                  <p className="text-base md:text-lg text-[#3B3B3B] leading-relaxed text-left">
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
              <div className="grid grid-cols-1 md:grid-cols-[auto_3fr_2.5fr] items-center gap-6 md:gap-8 lg:gap-12 py-8 md:py-12 border-b border-[#D0D0D0]  px-10">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-start justify-center pt-1">
                  <img src={brandGrowthIcon} alt="Brand Growth" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                </div>
                <div className="flex ml-70">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1E1E1E] leading-tight whitespace-pre-line text-left">
                    {t('services.brandGrowth.title')}
                  </h3>
                </div>
                <div className="flex items-start">
                  <p className="text-base md:text-lg text-[#3B3B3B] leading-relaxed text-left">
                    {t('services.brandGrowth.description')}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-16 md:py-24 bg-[#1E1E1E]">
        <div className="max-w-[90%] mx-auto px-6">
          {/* Header Section */}
          <div className="mb-12 md:mb-16 relative">
            {/* Header Text with All Portfolio */}
            <div className="flex-1">
              <h2 className="text-[60px] md:text-5xl lg:text-6xl font-[500] text-white leading-tight" style={{ fontFamily: "'InterTight', sans-serif" }}>
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
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <img src={social1} alt="WhatsApp" className="w-[49px] h-[49px]" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <img src={social2} alt="Instagram" className="w-[49px] h-[49px]" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <img src={social3} alt="Facebook" className="w-[49px] h-[49px]" />
              </a>
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
                <div className="mb-4">
                  <TiltedCard
                    imageSrc={portfolio1}
                    altText="Fitfox Website Design"
                    captionText={t('portfolio.projectTitle')}
                    containerHeight="570px"
                    containerWidth="740px"
                    imageHeight="570px"
                    imageWidth="740px"
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
                <div className="mb-4">
                  <TiltedCard
                    imageSrc={portfolio2}
                    altText="Fitfox Website Design"
                    captionText={t('portfolio.projectTitle')}
                    containerHeight="570px"
                    containerWidth="740px"
                    imageHeight="570px"
                    imageWidth="740px"
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
                <div className="mb-4">
                  <TiltedCard
                    imageSrc={portfolio3}
                    altText="Fitfox Website Design"
                    captionText={t('portfolio.projectTitle')}
                    containerHeight="570px"
                    containerWidth="740px"
                    imageHeight="570px"
                    imageWidth="740px"
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
                <div className="mb-4">
                  <TiltedCard
                    imageSrc={portfolio4}
                    altText="Fitfox Website Design"
                    captionText={t('portfolio.projectTitle')}
                    containerHeight="570px"
                    containerWidth="740px"
                    imageHeight="570px"
                    imageWidth="740px"
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
          </div>
        </div>
      </section>

      {/* Visual Systems Section */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-[90%] mx-auto px-6">
          {/* Header with Date */}
          <div className="mb-12 md:mb-16 relative">
            <div className="flex justify-between items-start mb-8">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-[500] text-[#1E1E1E] leading-tight" style={{ fontFamily: "'InterTight', sans-serif" }}>
                  <RevealText
                    animationDuration={0.8}
                    ease="power3.out"
                    scrollStart="top bottom-=100px"
                    scrollEnd="top center"
                    stagger={0.05}
                    revealBy="words"
                    containerClassName=""
                    textClassName="font-[500]"
                  >
                    {t('visualSystems.header')}
                  </RevealText>
                </h2>
              </div>
              <div className="text-2xl md:text-3xl font-[500] text-[#1E1E1E]" style={{ fontFamily: "'InterTight', sans-serif" }}>
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
                <div className="w-full h-[600px] flex items-center justify-center">
                  <TiltedCard
                    imageSrc={visualDesign}
                    altText="Visual Design Brochure"
                    captionText="Visual Design Brochure"
                    containerHeight="582px"
                    containerWidth="100%"
                    imageHeight="600px"
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Description Text */}
            <div className="flex-1 max-w-2xl">
              <AnimatedContent
                animationDuration={0.8}
                ease="power3.out"
                scrollStart="top bottom-=100px"
                scrollEnd="top center"
                delay={0.3}
                yOffset={30}
              >
                <p className="text-base md:text-lg text-[#2B2B2B] leading-relaxed">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F1F1F1] text-[#000000] hover:bg-gray-300 transition-colors text-base md:text-lg"
              >
                <span>{t('visualSystems.viewAllWorks')}</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </AnimatedContent>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
