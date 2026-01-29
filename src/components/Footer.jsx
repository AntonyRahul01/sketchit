import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import logo from '../assets/images/logo.png';
import RevealText from './RevealText';

const Footer = () => {
  const { t } = useTranslation();

  const handleGetStarted = () => {
    // Scroll to contact section or handle navigation
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#09090B] text-white py-16 md:py-20">
      <div className="max-w-[96%] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Logo and Tagline */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-5 h-5">
                <img src={logo} alt="Sketchit" className="w-full h-full object-contain" />
              </div>
              <span className="text-white text-lg font-medium">Sketchit</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight whitespace-pre-line">
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
                {t("footer.tagline")}
              </RevealText>
            </h2>
          </div>

          {/* Middle Column - Navigation Links */}
          <div className="flex flex-col">
            <nav className="flex flex-col gap-5 md:gap-6">
              <a
                href="#"
                onClick={(e) => handleNavClick(e, 'hero')}
                className="text-white text-sm md:text-base font-medium hover:text-[#FF0028] transition-colors uppercase tracking-wider"
              >
                {t("footer.home")}
              </a>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, 'portfolio')}
                className="text-white text-sm md:text-base font-medium hover:text-[#FF0028] transition-colors uppercase tracking-wider"
              >
                {t("footer.ourWorks")}
              </a>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-white text-sm md:text-base font-medium hover:text-[#FF0028] transition-colors uppercase tracking-wider"
              >
                {t("footer.services")}
              </a>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-white text-sm md:text-base font-medium hover:text-[#FF0028] transition-colors uppercase tracking-wider"
              >
                {t("footer.contact")}
              </a>
            </nav>
          </div>

          {/* Right Column - CTA Button and Contact Info */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Let's Get Started Button */}
            <button
              onClick={handleGetStarted}
              className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-full font-medium hover:bg-[#F5F5F5] transition-colors group w-fit"
            >
              <span className="text-sm md:text-base">{t("footer.letsGetStarted")}</span>
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center group-hover:bg-[#1E1E1E] transition-colors flex-shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>

            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[#A4A4A4] text-xs md:text-sm mb-2 uppercase tracking-wider font-normal">
                  {t("footer.contactUs")}
                </p>
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="text-white text-sm md:text-base hover:text-[#FF0028] transition-colors"
                >
                  {t("footer.email")}
                </a>
              </div>
              <div>
                <p className="text-[#A4A4A4] text-xs md:text-sm mb-2 uppercase tracking-wider font-normal">
                  {t("footer.visitUs")}
                </p>
                <p className="text-white text-sm md:text-base">
                  {t("footer.location")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-[#2A2A2A]">
          <p className="text-[#A4A4A4] text-xs text-center font-normal">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
