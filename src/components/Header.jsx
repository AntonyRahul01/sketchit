import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Globe } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const langWrapRef = useRef(null);
  const langCloseTimeoutRef = useRef(null);

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'es', name: 'ES' },
    { code: 'fr', name: 'FR' },
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
            className="h-6 md:h-7 w-auto object-contain ml-18"
          />
        </div>

        {/* Right Side: Navigation Links, Language Selector & CTA */}
        <div className="flex items-center gap-4 md:gap-4">
          {/* Navigation Links - Right Side */}
          <div className="hidden lg:flex items-center gap-1">
            <a
              href="#home"
              className="group relative px-4 py-2 rounded-full text-[#13171D] hover:bg-[#000000] transition-all duration-300 text-[16px] font-[400] overflow-hidden"
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
              className="group relative px-4 py-2 rounded-full text-[#13171D] hover:bg-[#000000] transition-all duration-300 text-[16px] font-[400] overflow-hidden"
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
              className="group relative px-4 py-2 rounded-full text-[#13171D] hover:bg-[#000000] transition-all duration-300 text-[16px] font-[400] overflow-hidden"
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
              className="group relative px-4 py-2 rounded-full text-[#13171D] hover:bg-[#000000] transition-all duration-300 text-[16px] font-[400] overflow-hidden"
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
              className="group inline-flex items-center gap-2 h-[36px] px-3 rounded-full bg-white/60 hover:bg-white transition-colors border border-[#E7E7EA] text-[#13171D]"
              aria-haspopup="menu"
              aria-expanded={isLangOpen}
            >
              <Globe className="w-4 h-4" />
              <span className="text-[14px] font-normal">
                {languages.find((lang) => lang.code === i18n.language)?.name || 'EN'}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isLangOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 min-w-[120px] bg-white border border-[#E7E7EA] rounded-[14px] shadow-lg overflow-hidden z-50"
                onMouseEnter={openLang}
                onMouseLeave={() => closeLangWithDelay(160)}
              >
                {languages.map((lang) => (
                  <button
                    type="button"
                    role="menuitem"
                    key={lang.code}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full px-4 py-2 text-left transition-colors text-[14px] ${i18n.language === lang.code
                      ? 'bg-[#F1F1F1] text-[#13171D]'
                      : 'hover:bg-[#F6F6F9] text-[#13171D]'
                      }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book a Call Button - Black with white circle arrow */}
          <div
            className="
    group relative
    bg-primary text-white
    w-[140px] h-[45px]
    px-4 pr-[48px]
    rounded-full
    font-normal
    flex items-center
    cursor-pointer
    overflow-hidden
  "
          >
            {/* Flip text */}
            <span className="relative mx-auto h-[18px] leading-[18px] overflow-hidden text-sm">
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
              <span className="relative w-4 h-4 overflow-hidden">
                {/* Default arrow */}
                <ArrowUpRight
                  className="
          block w-4 h-4 text-primary
          transition-transform duration-300 ease-out
          translate-x-0 translate-y-0
          group-hover:translate-x-full group-hover:-translate-y-full
        "
                />

                {/* Hover arrow */}
                <ArrowUpRight
                  className="
          absolute left-[-100%] top-[100%]
          w-4 h-4 text-primary
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

