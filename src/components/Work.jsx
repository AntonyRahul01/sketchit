import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Lenis from "lenis";
import Header from "./Header";
import TestimonialsCeoSection from "./TestimonialsCeoSection";
import Footer from "./Footer";
import CursorFollower from "./CursorFollower";
import ScrollToTop from "./ScrollToTop";
import ShinyText from "./ShinyText";
import workHeroBanner from "../assets/images/wherobanner.png";
import workHeroLogo from "../assets/images/wherologo.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";
import project8 from "../assets/images/project8.webp";
import project9 from "../assets/images/project9.webp";
import project10 from "../assets/images/project10.webp";
import project11 from "../assets/images/project11.webp";
import project12 from "../assets/images/project12.webp";
import project13 from "../assets/images/project13.webp";
import project14 from "../assets/images/project14.webp";
import aboutBg from "../assets/images/aboutbg.png";
import aboutLogo from "../assets/images/aboutlogo.png";
import toolIcon1 from "../assets/images/l1.png";
import toolIcon2 from "../assets/images/l2.png";
import toolIcon3 from "../assets/images/l3.png";
import toolIcon4 from "../assets/images/l4.png";
import toolIcon5 from "../assets/images/l5.png";
import toolIcon6 from "../assets/images/l6.png";
import toolIcon7 from "../assets/images/l7.png";
import toolIcon8 from "../assets/images/l8.png";
import ContactSection from "./ContactSection";
import AnimatedContent from "./AnimatedContent";

export default function Work() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const mainRef = useRef(null);
    const heroRef = useRef(null);
    const isInView = useInView(heroRef, { once: true, margin: "-100px" });

    // Projects array for bento grid - easily add more projects here
    // Layout: 3x3 grid structure
    const projects = [
        {
            id: 1,
            image: project1,
            alt: "Project 1",
            colStart: "col-start-1 row-start-1 md:col-start-1 md:row-start-1",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: 0.1
        },
        {
            id: 2,
            image: project2,
            alt: "Project 2",
            colStart: "col-start-2 row-start-1 md:col-start-2 md:row-start-1",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: 0.2
        },
        {
            id: 3,
            image: project3,
            alt: "Project 3",
            colStart: "col-start-3 row-start-1 md:col-start-3 md:row-start-1",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: 0.3
        },
        {
            id: 4,
            image: project4,
            alt: "Project 4",
            colStart: "col-start-1 row-start-2 md:col-start-1 md:row-start-2",
            colSpan: "col-span-2 md:col-span-2",
            rowSpan: "md:row-span-1",
            delay: 0.4
        },
        {
            id: 5,
            image: project5,
            alt: "Project 5",
            colStart: "col-start-3 row-start-2 md:col-start-3 md:row-start-2",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: 0.5
        },
        {
            id: 6,
            image: project6,
            alt: "Project 6",
            colStart: "col-start-1 row-start-3 md:col-start-1 md:row-start-3",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: 0.6
        },
        {
            id: 7,
            image: project7,
            alt: "Project 7",
            colStart: "col-start-2 row-start-3 md:col-start-2 md:row-start-3",
            colSpan: "col-span-2 md:col-span-2",
            rowSpan: "md:row-span-1",
            delay: 0.7
        },
        {
            id: 8,
            image: project8,
            alt: "Project 8",
            colStart: "col-start-1 row-start-4 md:col-start-1 md:row-start-4",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: 0.8
        },
        {
            id: 9,
            image: project9,
            alt: "Project 9",
            colStart: "col-start-2 row-start-4 md:col-start-2 md:row-start-4",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: 0.9
        },
        {
            id: 10,
            image: project10,
            alt: "Project 10",
            colStart: "col-start-3 row-start-4 md:col-start-3 md:row-start-4",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: 1.0
        },
        {
            id: 11,
            image: project11,
            alt: "Project 11",
            colStart: "col-start-1 row-start-5 md:col-start-1 md:row-start-5",
            colSpan: "col-span-2 md:col-span-2",
            rowSpan: "md:row-span-1",
            delay: 1.1
        },
        {
            id: 12,
            image: project12,
            alt: "Project 12",
            colStart: "col-start-3 row-start-5 md:col-start-3 md:row-start-5",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: 1.2
        },
        {
            id: 13,
            image: project13,
            alt: "Project 13",
            colStart: "col-start-1 row-start-6 md:col-start-1 md:row-start-6",
            colSpan: "md:col-span-1",
            rowSpan: "md:row-span-1",
            delay: 1.3
        },
        {
            id: 14,
            image: project14,
            alt: "Project 14",
            colStart: "col-start-2 row-start-6 md:col-start-2 md:row-start-6",
            colSpan: "col-span-2 md:col-span-2",
            rowSpan: "md:row-span-1",
            delay: 1.4
        }
    ];



    // Initialize Lenis smooth scroll
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.6,
            lerp: 0.085,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.9,
            smoothTouch: true,
            touchMultiplier: 1.5,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Store lenis instance globally for other components (e.g., ScrollToTop)
        window.lenis = lenis;

        // Scroll to top on mount immediately
        lenis.scrollTo(0, { immediate: true });

        return () => {
            lenis.destroy();
            delete window.lenis; // Clean up global instance
        };
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden">
            <CursorFollower />
            <Header />

            {/* Hero Section */}
            <main ref={mainRef} className="bg-white relative min-h-screen flex items-center justify-center pt-0 sm:pt-24 md:pt-28 lg:pt-2 px-4 sm:px-6 md:px-8 lg:px-4">
                {/* Container with black background and rounded corners */}
                <div className="relative w-full max-w-9xl mx-auto bg-black rounded-xl sm:rounded-2xl overflow-hidden min-h-[50px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[900px]">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
                        style={{
                            backgroundImage: `url(${workHeroBanner})`,
                        }}
                    />

                    {/* Content Container */}
                    <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[900px]">
                            {/* Left Content */}
                            <motion.div
                                ref={heroRef}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                className="space-y-2 sm:space-y-3 md:space-y-4 self-center lg:self-center"
                            >
                                {/* Subtitle */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-white uppercase tracking-widest text-[10px] sm:text-xs md:text-sm lg:text-[16px] font-normal"
                                >
                                    {t("work.subtitle") || "STRATEGIC DESIGN"}
                                </motion.p>

                                {/* Headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className={`font-[500] leading-tight whitespace-pre-line ${i18n.language === "ta"
                                        ? "text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
                                        : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                        }`}
                                >
                                    <ShinyText
                                        text={t("work.headline") || "BUILDING BRANDS\nWITH CLARITY"}
                                        color="#b5b5b5"
                                        shineColor="#ffffff"
                                        speed={3}
                                        spread={120}
                                        className={`font-[500] leading-tight ${i18n.language === "ta"
                                            ? "text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
                                            : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                                            }`}
                                    />
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className={`text-white leading-relaxed font-normal ${i18n.language === "ta"
                                        ? "text-xs sm:text-sm md:text-base lg:text-lg"
                                        : "text-sm sm:text-base md:text-lg lg:text-[18px]"
                                        } max-w-full sm:max-w-md md:max-w-lg`}
                                >
                                    {t("work.description") || "Clear thinking. Strong design. Brands that communicate with confidence."}
                                </motion.p>

                                {/* Start Design Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="pt-2 sm:pt-3 md:pt-4"
                                >
                                    <a
                                        href="#contact"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // Scroll to contact section on the same page
                                            const contactEl = document.getElementById('contact');
                                            if (contactEl) {
                                                if (window.lenis) {
                                                    window.lenis.scrollTo(contactEl, { offset: -100, duration: 1.2 });
                                                } else {
                                                    contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                }
                                            }
                                        }}
                                        className={`group relative
                                            bg-white text-black
                                            w-auto h-[40px] sm:h-[42px] md:h-[45px]
                                            ${i18n.language === 'ta' ? 'min-w-[160px] sm:min-w-[170px] md:min-w-[180px]' : 'min-w-[120px] sm:min-w-[130px] md:min-w-[140px]'}
                                            px-3 sm:px-4 pr-[40px] sm:pr-[44px] md:pr-[48px]
                                            rounded-full
                                            font-normal
                                            items-center justify-center
                                            cursor-pointer
                                            overflow-hidden
                                            inline-flex
                                            text-xs sm:text-sm
                                        `}
                                    >
                                        {/* Flip text */}
                                        <span className="relative w-full text-center h-[16px] sm:h-[17px] md:h-[18px] leading-[16px] sm:leading-[17px] md:leading-[18px] overflow-hidden whitespace-nowrap">
                                            {/* Default text */}
                                            <span
                                                className="
                                                    block leading-[16px] sm:leading-[17px] md:leading-[18px]
                                                    transition-transform duration-300 ease-out
                                                    translate-y-0
                                                    group-hover:-translate-y-full
                                                "
                                            >
                                                {t("work.startDesign") || "Start Design"}
                                            </span>

                                            {/* Hover text */}
                                            <span
                                                className="
                                                    absolute left-0 top-full
                                                    block leading-[16px] sm:leading-[17px] md:leading-[18px]
                                                    transition-transform duration-300 ease-out
                                                    group-hover:-translate-y-full
                                                "
                                            >
                                                {t("work.startDesign") || "Start Design"}
                                            </span>
                                        </span>

                                        {/* Arrow */}
                                        <span
                                            className="
                                                absolute right-[6px] sm:right-[7px] md:right-[8px] top-1/2 -translate-y-1/2
                                                w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black
                                                flex items-center justify-center
                                                overflow-hidden
                                            "
                                        >
                                            <span className="relative w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 overflow-hidden">
                                                {/* Default arrow */}
                                                <ArrowUpRight
                                                    className="
                                                        block w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white
                                                        transition-transform duration-300 ease-out
                                                        translate-x-0 translate-y-0
                                                        group-hover:translate-x-full group-hover:-translate-y-full
                                                    "
                                                />

                                                {/* Hover arrow */}
                                                <ArrowUpRight
                                                    className="
                                                        absolute left-[-100%] top-[100%]
                                                        w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white
                                                        transition-transform duration-300 ease-out
                                                        group-hover:translate-x-full group-hover:-translate-y-full
                                                    "
                                                />
                                            </span>
                                        </span>
                                    </a>
                                </motion.div>
                            </motion.div>

                            {/* Right Visual - Lightning Bolt */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: 30 }}
                                transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                className="relative flex items-center sm:items-end justify-center lg:justify-end self-center sm:self-end mt-6 sm:mt-8 md:mt-10 lg:mt-0"
                            >
                                <div className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-md lg:max-w-3xl">
                                    {/* Lightning Bolt Icon */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                        className="relative z-10"
                                    >
                                        <img
                                            src={workHeroLogo}
                                            alt="Lightning Bolt"
                                            className="w-full h-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:w-[800px] lg:h-[830px] drop-shadow-2xl"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Portfolio Section - Bento Grid */}
            <section id="portfolio" className="relative py-10 sm:py-14 md:py-20 lg:py-24 bg-white">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-12">
                    {/* Section Header */}
                    <AnimatedContent
                        animationDuration={0.8}
                        ease="power3.out"
                        scrollStart="top bottom-=100px"
                        scrollEnd="top center"
                        delay={0}
                        yOffset={30}
                    >
                        <h2 className={`text-[#1E1E1E] max-w-5xl font-medium mb-8 sm:mb-12 lg:mb-16 ${i18n.language === "ta"
                            ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                            : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                            }`}>
                            {t("work.selectedProjects") || "Selected projects showcasing our design approach."}
                        </h2>
                    </AnimatedContent>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-6 gap-2 md:gap-2">
                        {projects.map((project) => (
                            <AnimatedContent
                                key={project.id}
                                animationDuration={0.8}
                                ease="power3.out"
                                scrollStart="top bottom-=100px"
                                scrollEnd="top center"
                                delay={project.delay}
                                yOffset={50}
                                className={`${project.colStart || ''} ${project.colSpan || ''} ${project.rowSpan || ''}`}
                            >
                                <div className="group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer ">

                                    <img
                                        src={project.image}
                                        alt={project.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>

                </div>
            </section>

            {/* About Section - Sketchit Designing with Purpose */}
            <section className="relative py-10 sm:py-14 md:py-20 lg:py-24 bg-[#0A0A0A]">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-12">
                    <AnimatedContent
                        animationDuration={0.8}
                        ease="power3.out"
                        scrollStart="top bottom-=100px"
                        scrollEnd="top center"
                        delay={0}
                        yOffset={30}
                    >

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-center lg:items-stretch justify-center">
                            {/* Left: 3D Metallic Logo Placeholder - Square */}
                            <div className="flex justify-center lg:justify-start">
                                <div
                                    className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden"
                                    style={{
                                        width: '400px',
                                        height: '430px'
                                    }}
                                >
                                    <img
                                        src={aboutLogo}
                                        alt="Sketchit Logo"
                                        className="w-[246px] h-[299px] object-contain"
                                    />
                                </div>
                            </div>

                            {/* Right: Text Content with Background Image - Rectangle */}
                            <div
                                className="relative rounded-2xl overflow-hidden border border-[#2A2A2A]"
                                style={{
                                    width: '1060px',
                                    height: '430px'
                                }}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-no-repeat opacity-100"
                                    style={{
                                        backgroundImage: `url(${aboutBg})`,
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'right center',
                                        width: '100%',
                                        height: '100%'
                                    }}
                                />
                                {/* Overlay for better text readability */}
                                {/* <div className="absolute inset-0 bg-[#0A0A0A]/80"></div> */}

                                {/* Text Content */}
                                <div className="relative z-10 h-full p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 sm:space-y-6 flex flex-col justify-center max-w-[690px]">
                                    <h2 className={`text-white font-normal ${i18n.language === "ta"
                                        ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                                        : "text-3xl sm:text-4xl md:text-5xl lg:text-[33px]"
                                        }`}>
                                        {t("work.about.headline") || "Sketchit - Designing with Purpose"}
                                    </h2>
                                    <p className={`text-[#C5C5C5] leading-relaxed ${i18n.language === "ta"
                                        ? "text-sm sm:text-base md:text-lg"
                                        : "text-base sm:text-lg md:text-[16px]"
                                        }`}>
                                        {t("work.about.description1") || "Sketchit is a design studio with over 7 years of experience, specializing in UI/UX and Graphic Design. We help brands communicate clearly, connect with their audience, and leave a lasting impression through thoughtful, purpose-driven design."}
                                    </p>
                                    <p className={`text-[#C5C5C5] leading-relaxed ${i18n.language === "ta"
                                        ? "text-sm sm:text-base md:text-lg"
                                        : "text-base sm:text-lg md:text-[16px]"
                                        }`}>
                                        {t("work.about.description2") || "Our expertise spans digital interfaces, branding, visual identity, and creative campaigns, combining strategy and creativity to craft solutions that are both aesthetically refined and functionally effective."}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </AnimatedContent>
                </div>
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-12 pt-10">
                    <AnimatedContent
                        animationDuration={0.8}
                        ease="power3.out"
                        scrollStart="top bottom-=100px"
                        scrollEnd="top center"
                        delay={0.2}
                        yOffset={30}
                    >

                        <div className="w-full h-[152px] rounded-2xl border border-[#2A2A2A] px-15 py-5 flex items-center gap-10 bg-[#0B0B0D]">

                            {/* LEFT TEXT */}
                            <div className="min-w-[250px]">
                                <p className="text-white text-[22px] font-medium">
                                    {t("work.tools.headline") || "Tools Behind the Work"}
                                </p>
                                <p className="text-[#C5C5C5] text-[16px]">
                                    {t("work.tools.subtitle") || "Mastered for every project."}
                                </p>
                            </div>

                            {/* RIGHT ICON ROW */}
                            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">

                                {[
                                    toolIcon1, toolIcon2, toolIcon3, toolIcon4,
                                    toolIcon5, toolIcon6, toolIcon7, toolIcon8
                                ].map((icon, i) => (
                                    <div
                                        key={i}
                                        className="w-[56px] h-[56px] rounded-[10px] border border-[#2A2A2F] flex items-center justify-center bg-[#0F0F12] shrink-0"
                                    >
                                        <img
                                            src={icon}
                                            alt={`Tool ${i + 1}`}
                                            className="w-7 h-7 object-contain"
                                        />
                                    </div>
                                ))}
                                {/* Placeholder Icons */}
                                {[...Array(7)].map((_, i) => (
                                    <div key={i} className="w-[56px] h-[56px] rounded-[10px] border border-[#2A2A2F] flex items-center justify-center bg-[#0F0F12] shrink-0"></div>
                                ))}

                            </div>
                        </div>


                    </AnimatedContent>
                </div>
            </section>

            <TestimonialsCeoSection />
            <ContactSection />
            <Footer />
            <ScrollToTop />
        </div>
    );
}
