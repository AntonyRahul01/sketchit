import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import whitelogo from "../assets/images/whitelogo.png";
import sketchitbig from "../assets/images/sketchitbig.png";
import arrowbend from "../assets/icons/arrowbend.svg";
import RevealText from "./RevealText";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const logoRef = useRef(null);
    const centerNavRef = useRef(null);
    const rightColumnRef = useRef(null);
    const bottomSectionRef = useRef(null);
    const topRowRef = useRef(null);
    const bigLogoRef = useRef(null);
    const logoInView = useInView(logoRef, { once: false, margin: "-100px" });
    const centerNavInView = useInView(centerNavRef, { once: false, margin: "-100px" });
    const rightColumnInView = useInView(rightColumnRef, { once: false, margin: "-100px" });
    const bottomSectionInView = useInView(bottomSectionRef, { once: false, margin: "-100px" });
    const topRowInView = useInView(topRowRef, { once: false, margin: "-100px" });
    const bigLogoInView = useInView(bigLogoRef, { once: false, margin: "-100px" });

    const scrollTo = (id) => {
        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#09090B] text-white pt-16 sm:pt-20 md:pt-24 lg:pt-28 overflow-hidden">
            <div className="relative max-w-[1728px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_0.4fr] gap-8 sm:gap-16 md:gap-14 lg:gap-20 items-start">
                    {/* LEFT */}
                    <div>
                        <motion.div
                            ref={logoRef}
                            className="mb-8 sm:mb-10 lg:mb-12 cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={logoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img
                                src={whitelogo}
                                alt="Sketchit"
                                className="w-[100px] sm:w-[110px] lg:w-[120px] h-auto"
                            />
                        </motion.div>

                        <h2 className={`leading-[1.05] font-normal max-w-[520px] ${i18n.language === 'ta'
                            ? 'text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px]'
                            : 'text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px]'
                            }`}>
                            <RevealText revealBy="words" stagger={0.05}>
                                {t("footer.tagline")}
                            </RevealText>
                        </h2>
                    </div>

                    {/* CENTER NAV */}
                    <motion.nav
                        ref={centerNavRef}
                        className="flex flex-col gap-3 sm:gap-4 lg:gap-5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={centerNavInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {[
                            ["hero", t("footer.home")],
                            ["portfolio", t("footer.ourWorks")],
                            ["services", t("footer.services")],
                            ["contact", t("footer.contact")],
                        ].map(([id, label], index) => {
                            const isActive = index === 0; // HOME active

                            return (
                                <motion.button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className={`
          text-left
          text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px]
          font-normal
          leading-tight
          transition-colors duration-200
          cursor-pointer
          ${isActive ? "text-white" : "text-[#AFAFAF] hover:text-white"}
        `}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={centerNavInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    {label}
                                </motion.button>
                            );
                        })}
                    </motion.nav>

                    {/* RIGHT */}
                    <motion.div
                        ref={rightColumnRef}
                        className="flex flex-col items-start"
                        initial={{ opacity: 0, y: 30 }}
                        animate={rightColumnInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* CTA */}
                        <motion.div
                            className={`
    group relative
    bg-white text-black
    ${i18n.language === 'ta' ? 'w-full sm:w-auto sm:min-w-[220px]' : 'w-[190px] sm:w-[197px]'} h-[48px] sm:h-[50px] lg:h-[52px]
    px-4 pr-[44px] sm:pr-[48px]
    rounded-full
    font-normal
    flex items-center
    cursor-pointer
    overflow-hidden
    mb-6 sm:mb-8 lg:mb-[40px]
  `}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={rightColumnInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        >
                            {/* Flip text */}
                            <span className="relative mx-auto h-[16px] sm:h-[18px] leading-[16px] sm:leading-[18px] overflow-hidden text-[14px] sm:text-[16px]">
                                {/* Default text */}
                                <span
                                    className="
        block leading-[18px]
        transition-transform duration-300 ease-out
        translate-y-0
        group-hover:-translate-y-full
      "
                                >
                                    {t("footer.letsGetStarted")}
                                </span>

                                {/* Hover text */}
                                <span
                                    className="
        absolute left-0 top-full
        block leading-[18px]
        transition-transform duration-300 ease-out
        group-hover:-translate-y-full
      "
                                >
                                    {t("footer.letsGetStarted")}
                                </span>
                            </span>

                            {/* Arrow */}
                            <span
                                className="
      absolute right-[6px] sm:right-[8px] top-1/2 -translate-y-1/2
      w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary
      flex items-center justify-center
      overflow-hidden
    "
                            >
                                <span className="relative w-5 h-5 sm:w-6 sm:h-6 overflow-hidden">
                                    {/* Default arrow */}
                                    <ArrowUpRight
                                        className="
          block w-5 h-5 sm:w-6 sm:h-6 text-white
          transition-transform duration-300 ease-out
          translate-x-0 translate-y-0
          group-hover:translate-x-full group-hover:-translate-y-full
        "
                                    />

                                    {/* Hover arrow */}
                                    <ArrowUpRight
                                        className="
          absolute left-[-100%] top-[100%]
          w-5 h-5 sm:w-6 sm:h-6 text-white
          transition-transform duration-300 ease-out
          group-hover:translate-x-full group-hover:-translate-y-full
        "
                                    />
                                </span>
                            </span>
                        </motion.div>
                        {/* CONTACT */}
                        <motion.div
                            className="text-left space-y-6 sm:space-y-8 w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={rightColumnInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <div>
                                <p className="text-xs uppercase tracking-widest text-[#AFAFAF] mb-2">
                                    {t("footer.contactUs")}
                                </p>
                                <a
                                    href={`mailto:${t("footer.email")}`}
                                    className="text-white text-sm hover:opacity-80"
                                >
                                    {t("footer.email")}
                                </a>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-widest text-[#AFAFAF] mb-2">
                                    {t("footer.visitUs")}
                                </p>
                                <p className="text-sm text-white">
                                    {t("footer.location")}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
            {/* BOTTOM */}
            <motion.div
                ref={bottomSectionRef}
                className="mt-12 sm:mt-14 md:mt-16 lg:mt-18 border-t border-[#4A4A4C] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 md:px-10 lg:px-20"
                initial={{ opacity: 0, y: 30 }}
                animate={bottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <div className="relative">
                    {/* Top Row - Privacy Policy, Social Links, Copyright */}
                    <motion.div
                        ref={topRowRef}
                        className={`flex flex-col lg:flex-row items-center lg:items-start mb-12 sm:mb-16 lg:mb-20 relative gap-4 lg:gap-0 ${i18n.language === 'ta'
                            ? 'lg:justify-between'
                            : 'lg:justify-between'
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={topRowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* Privacy Policy - Left */}
                        <motion.div
                            className={`text-center lg:text-left w-full lg:w-auto ${i18n.language === 'ta' ? 'flex-shrink-0' : ''
                                }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={topRowInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <Link
                                to="/privacy-policy"
                                className="text-white text-sm md:text-base hover:opacity-80 transition-opacity"
                            >
                                {t("footer.privacyPolicy")}
                            </Link>
                        </motion.div>

                        {/* Social Media Links - Center */}
                        <div className={`flex flex-wrap items-center gap-2 justify-center ${i18n.language === 'ta'
                            ? 'flex-1 lg:flex-1 lg:justify-center'
                            : 'w-full lg:w-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2'
                            }`}>
                            {[
                                { name: "Facebook", url: "#" },
                                { name: "Twitter", url: "#" },
                                { name: "Instagram", url: "#" },
                                { name: "LinkedIn", url: "#" },
                            ].map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex items-center gap-1.5 sm:gap-2 md:gap-2.5
                                        px-3 py-2 sm:px-3.5 sm:py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-3
                                        rounded-full
                                        border border-[#222224]
                                        bg-[#09090B]
                                        text-white text-[10px] sm:text-xs md:text-sm
                                        hover:bg-white/10 hover:border-white/40
                                        transition-all duration-200
                                    "
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={topRowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <span>{social.name}</span>
                                    <img src={arrowbend} alt="arrow" className="w-3 h-1.5 sm:w-3.5 sm:h-2 md:w-4 md:h-2.5 lg:w-3.5 lg:h-2" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Copyright - Right */}
                        <motion.p
                            className={`text-white text-xs md:text-base sm:text-sm w-full lg:w-auto text-center lg:text-left ${i18n.language === 'ta'
                                ? 'flex-shrink-0'
                                : 'lg:ml-auto'
                                }`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={topRowInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        >
                            {t("footer.copyright")}
                        </motion.p>
                    </motion.div>

                    {/* Large Sketchit Logo - Center */}
                    <motion.div
                        ref={bigLogoRef}
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={bigLogoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <img
                            src={sketchitbig}
                            alt="Sketchit"
                            className="max-w-[90%] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px] w-full h-auto"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
