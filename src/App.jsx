import { useEffect } from 'react';
import Lenis from 'lenis';
import './i18n/config';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  useEffect(() => {
    // const lenis = new Lenis({
    //   duration: 1.2,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //   orientation: 'vertical',
    //   gestureOrientation: 'vertical',
    //   smoothWheel: true,
    //   wheelMultiplier: 1,
    //   smoothTouch: false,
    //   touchMultiplier: 2,
    //   infinite: false,
    // });

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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CursorFollower />
      <Header />
      <Hero />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
