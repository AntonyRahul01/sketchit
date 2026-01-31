import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/images/logo.png';
import englishIcon from '../assets/icons/english.svg';
import tamilIcon from '../assets/icons/tamil.svg';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const langWrapRef = useRef(null);
  const langCloseTimeoutRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', icon: englishIcon },
    { code: 'ta', name: 'தமிழ்', icon: tamilIcon },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangOpen(false);
  };

  const openLang = () => {
    if (langCloseTimeoutRef.current) {
      clearTimeout(langCloseTimeoutRef.current);
      langCloseTimeoutRef.current = null;
    }
    setIsLangOpen(true);
  };

  const closeLangWithDelay = (ms = 140) => {
    if (langCloseTimeoutRef.current) clearTimeout(langCloseTimeoutRef.current);
    langCloseTimeoutRef.current = setTimeout(() => {
      setIsLangOpen(false);
      langCloseTimeoutRef.current = null;
    }, ms);
  };

  const closeLangImmediately = () => {
    if (langCloseTimeoutRef.current) {
      clearTimeout(langCloseTimeoutRef.current);
      langCloseTimeoutRef.current = null;
    }
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;

      // Always show near the top
      if (currentScrollY < 10) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide on scroll down, show on scroll up
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    return () => {
      if (langCloseTimeoutRef.current) clearTimeout(langCloseTimeoutRef.current);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#F6F6F9] border-b border-border transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
    >
      <nav className="container mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
        {/* Logo - Far Left */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src={logo}
            alt="Sketchit"
            className="h-7 md:h-8 w-auto object-contain ml-18"
          />
        </div>

        {/* Right Side: Navigation Links, Language Selector & CTA */}
        <div className="flex items-center gap-4 md:gap-4">
          {/* Navigation Links - Right Side */}
          <div className="hidden lg:flex items-center gap-1">
            <a
              href="#home"
              className="group relative px-4 py-2 rounded-full text-[#13171D] hover:bg-[#000000] transition-all duration-300 text-[15px] font-[400] overflow-hidden"
            >
              <span className="relative block h-[20px] leading-[20px] overflow-hidden">
                <span className="block leading-[20px] transition-transform duration-300 ease-out translate-y-0 group-hover:-translate-y-full">
                  {t('nav.home')}
                </span>
                <span className="absolute left-0 top-full block leading-[20px] transition-transform duration-300 ease-out group-hover:-translate-y-full text-white">
                  {t('nav.home')}
                </span>
              </span>
            </a>
            <a
              href="#solutions"
              className="group relative px-4 py-2 rounded-full text-[#13171D] hover:bg-[#000000] transition-all duration-300 text-[15px] font-[400] overflow-hidden"
            >
              <span className="relative block h-[20px] leading-[20px] overflow-hidden">
                <span className="block leading-[20px] transition-transform duration-300 ease-out translate-y-0 group-hover:-translate-y-full">
                  {t('nav.solutions')}
                </span>
                <span className="absolute left-0 top-full block leading-[20px] transition-transform duration-300 ease-out group-hover:-translate-y-full text-white">
                  {t('nav.solutions')}
                </span>
              </span>
            </a>
            <a
              href="#work"
              className="group relative px-4 py-2 rounded-full text-[#13171D] hover:bg-[#000000] transition-all duration-300 text-[15px] font-[400] overflow-hidden"
            >
              <span className="relative block h-[20px] leading-[20px] overflow-hidden">
                <span className="block leading-[20px] transition-transform duration-300 ease-out translate-y-0 group-hover:-translate-y-full">
                  {t('nav.ourWork')}
                </span>
                <span className="absolute left-0 top-full block leading-[20px] transition-transform duration-300 ease-out group-hover:-translate-y-full text-white">
                  {t('nav.ourWork')}
                </span>
              </span>
            </a>
            <a
              href="#contact"
              className="group relative px-4 py-2 rounded-full text-[#13171D] hover:bg-[#000000] transition-all duration-300 text-[15px] font-[400] overflow-hidden"
            >
              <span className="relative block h-[20px] leading-[20px] overflow-hidden">
                <span className="block leading-[20px] transition-transform duration-300 ease-out translate-y-0 group-hover:-translate-y-full">
                  {t('nav.contact')}
                </span>
                <span className="absolute left-0 top-full block leading-[20px] transition-transform duration-300 ease-out group-hover:-translate-y-full text-white">
                  {t('nav.contact')}
                </span>
              </span>
            </a>
          </div>

          {/* Language Selector (hover + click) */}
          <div
            className="relative"
            ref={langWrapRef}
            onMouseEnter={openLang}
            onMouseLeave={() => closeLangWithDelay(160)}
            onFocusCapture={openLang}
            onBlurCapture={(e) => {
              const next = e.relatedTarget;
              if (langWrapRef.current && next && langWrapRef.current.contains(next)) return;
              closeLangImmediately();
            }}
          >
            <button
              type="button"
              onClick={() => setIsLangOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') closeLangImmediately();
              }}
              className="group inline-flex items-center gap-2 h-[36px] px-3 rounded-full bg-white/60 hover:bg-white transition-colors border border-[#E7E7EA] text-[#13171D] cursor-pointer"
              aria-haspopup="menu"
              aria-expanded={isLangOpen}
            >
              <img
                src={languages.find((lang) => lang.code === i18n.language)?.icon || englishIcon}
                alt="Language"
                className="w-4 h-4 object-contain flex-shrink-0"
                style={{ width: '16px', height: '16px' }}
              />
              <span className="text-[14px] font-normal">
                {languages.find((lang) => lang.code === i18n.language)?.name || 'English'}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 min-w-[150px] bg-white/95 backdrop-blur-md border border-[#E0E0E0] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden z-50"
                  onMouseEnter={openLang}
                  onMouseLeave={() => closeLangWithDelay(160)}
                >
                  <div className="py-1.5">
                    {languages.map((lang) => (
                      <button
                        type="button"
                        role="menuitem"
                        key={lang.code}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-5 py-2.5 mx-1.5 text-left transition-all duration-200 text-[14px] font-medium relative rounded-xl cursor-pointer ${i18n.language === lang.code
                          ? 'text-white'
                          : 'text-[#13171D] hover:bg-[#F5F5F5]'
                          }`}
                      >
                        {i18n.language === lang.code && (
                          <div
                            className="absolute inset-0 bg-[#13171D] rounded-xl"
                          />
                        )}
                        <span className="relative z-10 flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2.5">
                            <img
                              src={lang.icon}
                              alt={lang.name}
                              className={`object-contain flex-shrink-0 ${i18n.language === lang.code
                                ? 'brightness-0 invert'
                                : ''
                                }`}
                              style={{ width: '20px', height: '20px' }}
                            />
                            <span className="font-medium">{lang.name}</span>
                          </span>
                          {i18n.language === lang.code && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Book a Call Button - Black with white circle arrow */}
          <div
            className={`
    group relative
    bg-primary text-white
    w-auto h-[45px]
    ${i18n.language === 'ta' ? 'min-w-[180px]' : 'min-w-[140px]'}
    px-4 pr-[48px]
    rounded-full
    font-normal
    flex items-center justify-center
    cursor-pointer
    overflow-hidden
  `}
          >
            {/* Flip text */}
            <span className="relative w-full text-center h-[18px] leading-[18px] overflow-hidden text-sm whitespace-nowrap">
              {/* Default text */}
              <span
                className="
        block leading-[18px]
        transition-transform duration-300 ease-out
        translate-y-0
        group-hover:-translate-y-full
      "
              >
                {t('cta.bookCall')}
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
                {t('cta.bookCall')}
              </span>
            </span>

            {/* Arrow */}
            <span
              className="
      absolute right-[8px] top-1/2 -translate-y-1/2
      w-8 h-8 rounded-full bg-white
      flex items-center justify-center
      overflow-hidden
    "
            >
              <span className="relative w-5 h-5 overflow-hidden">
                {/* Default arrow */}
                <ArrowUpRight
                  className="
          block w-5 h-5 text-primary
          transition-transform duration-300 ease-out
          translate-x-0 translate-y-0
          group-hover:translate-x-full group-hover:-translate-y-full
        "
                />

                {/* Hover arrow */}
                <ArrowUpRight
                  className="
          absolute left-[-100%] top-[100%]
          w-5 h-5 text-primary
          transition-transform duration-300 ease-out
          group-hover:translate-x-full group-hover:-translate-y-full
        "
                />
              </span>
            </span>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;

