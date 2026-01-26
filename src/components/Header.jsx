import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import StaggeredMenu from './StaggeredMenu';
import logo from '../assets/images/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const headerRef = useRef(null);

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'es', name: 'ES' },
    { code: 'fr', name: 'FR' },
  ];


  // Menu items from translations
  const menuItems = [
    { label: t('nav.home'), ariaLabel: 'Go to home page', link: '#home' },
    { label: t('nav.solutions'), ariaLabel: 'View our solutions', link: '#solutions' },
    { label: t('nav.ourWork'), ariaLabel: 'View our work', link: '#work' },
    { label: t('nav.contact'), ariaLabel: 'Get in touch', link: '#contact' }
  ];

  // Social items (you can customize these)
  const socialItems = [
    { label: 'WhatsApp', link: '#' },
    { label: 'Instagram', link: '#' },
    { label: 'Facebook', link: '#' }
  ];

  // Detect scroll to show/hide menu
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show menu when scrolled down more than 100px
          if (currentScrollY > 100) {
            setShowMenu(true);
          } else {
            setShowMenu(false);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Always render both, but control visibility with opacity for smooth transitions
  return (
    <>
      {/* Regular Header - fades out when scrolled */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 bg-[#F6F6F9] border-b border-border transition-opacity duration-500 ease-in-out ${showMenu ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
          }`}
      >
        <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Logo - Far Left */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src={logo}
              alt="Sketchit Logo"
              className="h-6 md:h-8 w-auto object-contain"
            />
          </div>

          {/* Right Side: Navigation Links, Language Selector & CTA */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Navigation Links - Right Side */}
            <div className="hidden lg:flex items-center gap-6 md:gap-8">
              <a href="#home" className="text-[#13171D] hover:text-primary transition-colors text-[16px] font-[400]">
                {t('nav.home')}
              </a>
              <a href="#solutions" className="text-[#13171D] hover:text-primary transition-colors text-[16px] font-[400]">
                {t('nav.solutions')}
              </a>
              <a href="#work" className="text-[#13171D] hover:text-primary transition-colors text-[16px] font-[400]">
                {t('nav.ourWork')}
              </a>
              <a href="#contact" className="text-[#13171D] hover:text-primary transition-colors text-[16px] font-[400]">
                {t('nav.contact')}
              </a>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  const currentLang = languages.find(lang => lang.code === i18n.language)?.code || 'en';
                  const nextLang = languages[(languages.findIndex(l => l.code === currentLang) + 1) % languages.length];
                  i18n.changeLanguage(nextLang.code);
                }}
                className="flex items-center gap-1.5 text-text hover:text-primary transition-colors text-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="text-sm">{languages.find(lang => lang.code === i18n.language)?.name || 'EN'}</span>
              </button>
            </div>

            {/* Book a Call Button - Black with white circle arrow */}
            <div className="bg-primary text-white px-5 py-2.5 rounded-full font-normal flex items-center gap-2 text-sm relative pr-3 cursor-pointer w-[140px] h-[50px]">
              {t('cta.bookCall')}
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center absolute right-[10px]">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* StaggeredMenu - fades in when scrolled */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-500 ease-in-out ${showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#13171D"
          openMenuButtonColor="#13171D"
          changeMenuColorOnOpen={false}
          isFixed={true}
          accentColor="#13171D"
          closeOnClickAway={true}
          colors={['#13171D', '#1E1E1E']}
          logoUrl={null}
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>
    </>
  );
};

export default Header;
