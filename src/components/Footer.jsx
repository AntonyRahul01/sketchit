import { useTranslation } from "react-i18next";
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
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#09090B] text-white pt-28 overflow-hidden">
            <div className="relative max-w-[1728px] mx-auto px-20">
                <div className="grid grid-cols-[1.4fr_1fr_0.4fr] gap-20 items-start">

                    {/* LEFT */}
                    <div>
                        <motion.div
                            ref={logoRef}
                            className="mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={logoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <img
                                src={whitelogo}
                                alt="Sketchit"
                                className="w-[120px] h-auto"
                            />
                        </motion.div>

                        <h2 className={`leading-[1.05] font-normal max-w-[520px] ${i18n.language === 'ta'
                            ? 'text-[48px]'
                            : 'text-[60px]'
                            }`}>
                            <RevealText revealBy="words" stagger={0.05}>
                                {t("footer.tagline")}
                            </RevealText>
                        </h2>
                    </div>

                    {/* CENTER NAV */}
                    <motion.nav
                        ref={centerNavRef}
                        className="flex flex-col gap-5"
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
          text-[40px]
          font-normal
          leading-tight
          transition-colors duration-200
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
    ${i18n.language === 'ta' ? 'w-auto min-w-[220px]' : 'w-[197px]'} h-[52px]
    px-4 pr-[48px]
    rounded-full
    font-normal
    flex items-center
    cursor-pointer
    overflow-hidden
    mb-[40px]
  `}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={rightColumnInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        >
                            {/* Flip text */}
                            <span className="relative mx-auto h-[18px] leading-[18px] overflow-hidden text-[16px]">
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
      absolute right-[8px] top-1/2 -translate-y-1/2
      w-10 h-10 rounded-full bg-primary
      flex items-center justify-center
      overflow-hidden
    "
                            >
                                <span className="relative w-6 h-6 overflow-hidden">
                                    {/* Default arrow */}
                                    <ArrowUpRight
                                        className="
          block w-6 h-6 text-white
          transition-transform duration-300 ease-out
          translate-x-0 translate-y-0
          group-hover:translate-x-full group-hover:-translate-y-full
        "
                                    />

                                    {/* Hover arrow */}
                                    <ArrowUpRight
                                        className="
          absolute left-[-100%] top-[100%]
          w-6 h-6 text-white
          transition-transform duration-300 ease-out
          group-hover:translate-x-full group-hover:-translate-y-full
        "
                                    />
                                </span>
                            </span>
                        </motion.div>
                        {/* CONTACT */}
                        <motion.div
                            className="text-left space-y-8 w-full"
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
                className="mt-18 border-t border-[#4A4A4C] py-12 px-20"
                initial={{ opacity: 0, y: 30 }}
                animate={bottomSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <div className="relative">
                    {/* Top Row - Privacy Policy, Social Links, Copyright */}
                    <motion.div
                        ref={topRowRef}
                        className={`flex items-center mb-20 relative ${i18n.language === 'ta'
                            ? 'justify-between gap-4'
                            : 'justify-between'
                            }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={topRowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* Privacy Policy - Left */}
                        <motion.a
                            href="#"
                            className={`text-white text-sm hover:opacity-80 transition-opacity ${i18n.language === 'ta' ? 'flex-shrink-0' : ''
                                }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={topRowInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        >
                            {t("footer.privacyPolicy")}
                        </motion.a>

                        {/* Social Media Links - Center */}
                        <div className={`flex items-center gap-2 ${i18n.language === 'ta'
                            ? 'flex-1 justify-center'
                            : 'absolute left-1/2 -translate-x-1/2'
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
                                        flex items-center gap-2
                                        px-5 py-3
                                        rounded-full
                                        border border-[#222224]
                                        bg-[#09090B]
                                        text-white text-xs
                                        hover:bg-white/10 hover:border-white/40
                                        transition-all duration-200
                                    "
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={topRowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <span>{social.name}</span>
                                    <img src={arrowbend} alt="arrow" className="w-3.5 h-2" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Copyright - Right */}
                        <motion.p
                            className={`text-white text-sm ${i18n.language === 'ta'
                                ? 'flex-shrink-0'
                                : 'ml-auto'
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
                            className="max-w-[700px] w-full h-auto"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
