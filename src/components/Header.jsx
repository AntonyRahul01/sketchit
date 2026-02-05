import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/images/logo.png';
import englishIcon from '../assets/icons/english.svg';
import tamilIcon from '../assets/icons/tamil.svg';
import menuIcon from '../assets/icons/menu.svg';
import closeIcon from '../assets/icons/close.svg';
import { useMobileMenu } from '../contexts/MobileMenuContext';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
  const langWrapRef = useRef(null);
  const langCloseTimeoutRef = useRef(null);
  const headerContainerRef = useRef(null);

  // Check if we're on privacy policy page
  const isPrivacyPolicyPage = location.pathname === '/privacy-policy';

  // Handle Book a Call button click
  const handleBookCallClick = (e) => {
    e.preventDefault();
    if (isPrivacyPolicyPage) {
      // Navigate to home page first
      navigate('/');

      // Wait for navigation and page load, then scroll to contact
      // Use multiple attempts with increasing delays to ensure the element is found
      const attemptScroll = (attempt = 1) => {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          // Wait a bit for Lenis to be initialized on home page
          setTimeout(() => {
            // Use Lenis if available, otherwise native scroll
            if (window.lenis) {
              window.lenis.scrollTo(contactEl, { offset: -100, duration: 1.2 });
            } else {
              contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 150);
          return true;
        }

        // Retry if element not found and we haven't exceeded max attempts
        if (attempt < 5) {
          setTimeout(() => attemptScroll(attempt + 1), 200 * attempt);
        }
        return false;
      };

      // Start attempting after initial navigation delay
      setTimeout(() => attemptScroll(), 400);
    } else {
      // On home page, just scroll to contact
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        // Use Lenis if available, otherwise native scroll
        if (window.lenis) {
          window.lenis.scrollTo(contactEl, { offset: -100, duration: 1.2 });
        } else {
          contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

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
    return () => {
      if (langCloseTimeoutRef.current) clearTimeout(langCloseTimeoutRef.current);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <motion.div
          ref={headerContainerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="relative bg-[#FFFFFF] border border-[#E8E8E8] rounded-4xl px-4 md:px-6 py-2 md:py-3 flex items-center justify-between"
        >
          {/* Logo - Far Left */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={logo}
              alt="Sketchit"
              className="h-7 md:h-8 w-auto object-contain ml-6"
            />
          </motion.div>

          {/* Right Side: Navigation Links, Language Selector & CTA */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-4 md:gap-4"
          >
            {/* Mobile Menu Button - Show on mobile/tablet, hide on desktop */}
            <div className="lg:hidden relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="p-2 rounded-full hover:bg-white/60 transition-colors relative z-[80] pointer-events-auto cursor-pointer"
                aria-label="Toggle menu"
              >
                <img
                  src={isMobileMenuOpen ? closeIcon : menuIcon}
                  alt={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                  className="w-6 h-6"
                />
              </button>
            </div>

            {/* Navigation Links - Right Side - Desktop Only */}
            {!isPrivacyPolicyPage && (
              <div className="hidden lg:flex items-center gap-1">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
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
            )}

            {/* Language Selector (hover + click) - Desktop Only */}
            <div
              className="hidden lg:block relative"
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
                <Globe className="w-4 h-4" />
                <span className="text-[14px] font-normal uppercase">
                  {i18n.language === 'en' ? 'EN' : 'TA'}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute right-0 mt-6 w-[140px] bg-[#F6F6F9]/70 backdrop-blur-3xl border border-[#E7E7EA]/80 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden z-50"
                    onMouseEnter={openLang}
                    onMouseLeave={() => closeLangWithDelay(160)}
                  >
                    <div className="p-1.5">
                      {languages.map((lang) => (
                        <button
                          type="button"
                          role="menuitem"
                          key={lang.code}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full px-3 py-2.5 rounded-xl text-left transition-all duration-200 text-[14px] font-medium relative cursor-pointer ${i18n.language === lang.code
                            ? 'bg-[#13171D] text-white shadow-sm'
                            : 'text-[#13171D] hover:bg-white/80'
                            }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <img
                              src={lang.icon}
                              alt={lang.name}
                              className={`object-contain flex-shrink-0 transition-all duration-200 ${i18n.language === lang.code
                                ? 'brightness-0 invert'
                                : 'opacity-70'
                                }`}
                              style={{ width: '16px', height: '16px' }}
                            />
                            <span className="font-medium">{lang.name}</span>
                            {i18n.language === lang.code && (
                              <motion.svg
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className="w-3.5 h-3.5 ml-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </motion.svg>
                            )}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book a Call Button - Black with white circle arrow - Desktop Only */}
            <a
              href="#contact"
              onClick={handleBookCallClick}
              className={`hidden lg:flex group relative
    bg-primary text-white
    w-auto h-[45px]
    ${i18n.language === 'ta' ? 'min-w-[180px]' : 'min-w-[140px]'}
    px-4 pr-[48px]
    rounded-full
    font-normal
    items-center justify-center
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
            </a>

          </motion.div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && !isPrivacyPolicyPage && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[60] lg:hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Mobile Menu Dropdown Panel - Positioned relative to header */}
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="mobile-menu-container absolute top-full right-0 mt-2 w-[calc(100vw-2rem)] max-w-[320px] bg-[#FFFFFF] border border-[#E8E8E8] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[70] lg:hidden overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-2">
                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1 mb-2">
                      <a
                        href="#home"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-4 py-3 rounded-xl text-[#13171D] hover:bg-[#13171D] hover:text-white transition-all duration-200 text-[15px] font-medium"
                      >
                        {t('nav.home')}
                      </a>
                      <a
                        href="#solutions"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-4 py-3 rounded-xl text-[#13171D] hover:bg-[#13171D] hover:text-white transition-all duration-200 text-[15px] font-medium"
                      >
                        {t('nav.solutions')}
                      </a>
                      <a
                        href="#work"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-4 py-3 rounded-xl text-[#13171D] hover:bg-[#13171D] hover:text-white transition-all duration-200 text-[15px] font-medium"
                      >
                        {t('nav.ourWork')}
                      </a>
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          const el = document.getElementById('contact');
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="px-4 py-3 rounded-xl text-[#13171D] hover:bg-[#13171D] hover:text-white transition-all duration-200 text-[15px] font-medium"
                      >
                        {t('nav.contact')}
                      </a>
                    </nav>

                    {/* Divider */}
                    <div className="h-px bg-[#E7E7EA] my-2" />

                    {/* Language Selector - Mobile */}
                    <div className="mb-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-[14px] font-medium ${i18n.language === lang.code
                            ? 'bg-[#13171D] text-white'
                            : 'text-[#13171D] hover:bg-white/80'
                            }`}
                        >
                          <img
                            src={lang.icon}
                            alt={lang.name}
                            className={`w-4 h-4 object-contain ${i18n.language === lang.code ? 'brightness-0 invert' : ''
                              }`}
                          />
                          <span className="font-medium">{lang.name}</span>
                          {i18n.language === lang.code && (
                            <motion.svg
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              className="w-3.5 h-3.5 ml-auto"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </motion.svg>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-[#E7E7EA] my-2" />

                    {/* Book a Call Button - Mobile */}
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        handleBookCallClick(e);
                      }}
                      className="group relative bg-primary text-white w-full h-[45px] px-4 pr-[48px] rounded-full font-medium flex items-center justify-center cursor-pointer overflow-hidden"
                    >
                      <span className="relative z-10 text-sm">{t('cta.bookCall')}</span>
                      <span className="absolute right-[8px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </span>
                    </a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;

