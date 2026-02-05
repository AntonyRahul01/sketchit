import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import './i18n/config';
import { MobileMenuProvider, useMobileMenu } from './contexts/MobileMenuContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import CursorFollower from './components/CursorFollower';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function AppContent() {
  const { isMobileMenuOpen } = useMobileMenu();

  useEffect(() => {
    const lenis = new Lenis({
      // Slightly smoother scroll feel
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

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CursorFollower />
      <Header />
      <div className={isMobileMenuOpen ? 'blur-sm lg:blur-none transition-all duration-200' : 'transition-all duration-200'}>
        <Hero />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MobileMenuProvider>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </MobileMenuProvider>
    </BrowserRouter>
  );
}

export default App;
