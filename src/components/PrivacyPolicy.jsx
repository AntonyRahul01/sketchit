import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Lenis from "lenis";
import Header from "./Header";
import Footer from "./Footer";
import CursorFollower from "./CursorFollower";

export default function PrivacyPolicy() {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const mainRef = useRef(null);
    const isInView = useInView(mainRef, { once: true, margin: "-100px" });

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

        // Store Lenis instance globally for access from other components
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Scroll to top on mount
        lenis.scrollTo(0, { immediate: true });

        return () => {
            lenis.destroy();
            window.lenis = null;
        };
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-[#F6F6F9]">
            <CursorFollower />
            <Header />

            {/* Content */}
            <main ref={mainRef} className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-20 sm:pb-24 lg:pb-32">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="max-w-5xl mx-auto">
                        {/* White Container - matching site design */}
                        <div className="relative bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 shadow-sm">
                            {/* Red top border - matching contact form */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#FF0028]" />

                            {/* Back Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8 sm:mb-10"
                            >
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-2 text-[#1E1E1E] hover:text-[#FF0028] transition-colors duration-200 group"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                                    <span className="text-sm sm:text-base font-medium">
                                        {t("privacyPolicy.backToHome") || "Back to Home"}
                                    </span>
                                </Link>
                            </motion.div>

                            {/* Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                className="mb-8 sm:mb-10"
                            >
                                <h1
                                    className={`text-[#1E1E1E] font-medium mb-4 leading-[1.1] ${i18n.language === "ta"
                                        ? "text-[36px] sm:text-[44px] lg:text-[52px]"
                                        : "text-[44px] sm:text-[52px] lg:text-[60px]"
                                        }`}
                                >
                                    {t("privacyPolicy.title") || "Privacy Policy"}
                                </h1>
                                <p className="text-[#666666] text-sm sm:text-base">
                                    {t("privacyPolicy.lastUpdated") || "Last updated:"} {t("privacyPolicy.lastUpdatedDate") || "January 2025"}
                                </p>
                            </motion.div>

                            {/* Content Sections */}
                            <div className="space-y-12 sm:space-y-16">
                                {/* Introduction */}
                                <motion.section
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <h2
                                        className={`text-[#1E1E1E] font-medium mb-4 sm:mb-6 ${i18n.language === "ta"
                                            ? "text-[24px] sm:text-[28px] lg:text-[32px]"
                                            : "text-[28px] sm:text-[32px] lg:text-[36px]"
                                            }`}
                                    >
                                        {t("privacyPolicy.introduction.title") || "Introduction"}
                                    </h2>
                                    <div
                                        className={`text-[#1E1E1E] leading-relaxed space-y-4 ${i18n.language === "ta"
                                            ? "text-[15px] sm:text-[16px] lg:text-[17px]"
                                            : "text-[16px] sm:text-[17px] lg:text-[18px]"
                                            }`}
                                    >
                                        <p>{t("privacyPolicy.introduction.content1") || ""}</p>
                                        <p>{t("privacyPolicy.introduction.content2") || ""}</p>
                                    </div>
                                </motion.section>

                                {/* Information We Collect */}
                                <motion.section
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <h2
                                        className={`text-[#1E1E1E] font-medium mb-4 sm:mb-6 ${i18n.language === "ta"
                                            ? "text-[24px] sm:text-[28px] lg:text-[32px]"
                                            : "text-[28px] sm:text-[32px] lg:text-[36px]"
                                            }`}
                                    >
                                        {t("privacyPolicy.informationWeCollect.title") || "Information We Collect"}
                                    </h2>
                                    <div
                                        className={`text-[#1E1E1E] leading-relaxed ${i18n.language === "ta"
                                            ? "text-[15px] sm:text-[16px] lg:text-[17px]"
                                            : "text-[16px] sm:text-[17px] lg:text-[18px]"
                                            }`}
                                    >
                                        <p className="mb-6">{t("privacyPolicy.informationWeCollect.content1") || ""}</p>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.informationWeCollect.item1") || ""}</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.informationWeCollect.item2") || ""}</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.informationWeCollect.item3") || ""}</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.informationWeCollect.item4") || ""}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.section>

                                {/* How We Use Your Information */}
                                <motion.section
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <h2
                                        className={`text-[#1E1E1E] font-medium mb-4 sm:mb-6 ${i18n.language === "ta"
                                            ? "text-[24px] sm:text-[28px] lg:text-[32px]"
                                            : "text-[28px] sm:text-[32px] lg:text-[36px]"
                                            }`}
                                    >
                                        {t("privacyPolicy.howWeUse.title") || "How We Use Your Information"}
                                    </h2>
                                    <div
                                        className={`text-[#1E1E1E] leading-relaxed ${i18n.language === "ta"
                                            ? "text-[15px] sm:text-[16px] lg:text-[17px]"
                                            : "text-[16px] sm:text-[17px] lg:text-[18px]"
                                            }`}
                                    >
                                        <p className="mb-6">{t("privacyPolicy.howWeUse.content1") || ""}</p>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.howWeUse.item1") || ""}</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.howWeUse.item2") || ""}</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.howWeUse.item3") || ""}</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.howWeUse.item4") || ""}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.section>

                                {/* Data Protection */}
                                <motion.section
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <h2
                                        className={`text-[#1E1E1E] font-medium mb-4 sm:mb-6 ${i18n.language === "ta"
                                            ? "text-[24px] sm:text-[28px] lg:text-[32px]"
                                            : "text-[28px] sm:text-[32px] lg:text-[36px]"
                                            }`}
                                    >
                                        {t("privacyPolicy.dataProtection.title") || "Data Protection"}
                                    </h2>
                                    <div
                                        className={`text-[#1E1E1E] leading-relaxed ${i18n.language === "ta"
                                            ? "text-[15px] sm:text-[16px] lg:text-[17px]"
                                            : "text-[16px] sm:text-[17px] lg:text-[18px]"
                                            }`}
                                    >
                                        <p>{t("privacyPolicy.dataProtection.content") || ""}</p>
                                    </div>
                                </motion.section>

                                {/* Your Rights */}
                                <motion.section
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <h2
                                        className={`text-[#1E1E1E] font-medium mb-4 sm:mb-6 ${i18n.language === "ta"
                                            ? "text-[24px] sm:text-[28px] lg:text-[32px]"
                                            : "text-[28px] sm:text-[32px] lg:text-[36px]"
                                            }`}
                                    >
                                        {t("privacyPolicy.yourRights.title") || "Your Rights"}
                                    </h2>
                                    <div
                                        className={`text-[#1E1E1E] leading-relaxed ${i18n.language === "ta"
                                            ? "text-[15px] sm:text-[16px] lg:text-[17px]"
                                            : "text-[16px] sm:text-[17px] lg:text-[18px]"
                                            }`}
                                    >
                                        <p className="mb-6">{t("privacyPolicy.yourRights.content") || ""}</p>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.yourRights.item1") || ""}</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.yourRights.item2") || ""}</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.yourRights.item3") || ""}</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-[#FF0028] mt-1.5 font-bold">•</span>
                                                <span>{t("privacyPolicy.yourRights.item4") || ""}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.section>

                                {/* Contact Us */}
                                <motion.section
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <h2
                                        className={`text-[#1E1E1E] font-medium mb-4 sm:mb-6 ${i18n.language === "ta"
                                            ? "text-[24px] sm:text-[28px] lg:text-[32px]"
                                            : "text-[28px] sm:text-[32px] lg:text-[36px]"
                                            }`}
                                    >
                                        {t("privacyPolicy.contactUs.title") || "Contact Us"}
                                    </h2>
                                    <div
                                        className={`text-[#1E1E1E] leading-relaxed ${i18n.language === "ta"
                                            ? "text-[15px] sm:text-[16px] lg:text-[17px]"
                                            : "text-[16px] sm:text-[17px] lg:text-[18px]"
                                            }`}
                                    >
                                        <p className="mb-4">{t("privacyPolicy.contactUs.content") || ""}</p>
                                        <p>
                                            <strong>{t("privacyPolicy.contactUs.email") || "Email:"}</strong>{" "}
                                            <a
                                                href="mailto:sketchit2025@gmail.com"
                                                className="text-[#FF0028] hover:underline"
                                            >
                                                sketchit2025@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </motion.section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
