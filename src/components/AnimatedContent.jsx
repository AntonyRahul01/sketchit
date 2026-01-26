import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  scrollContainerRef,
  className = '',
  animationDuration = 0.8,
  ease = 'power3.out',
  scrollStart = 'top bottom-=100px',
  scrollEnd = 'top center',
  delay = 0,
  yOffset = 50,
  opacity = true
}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Set initial state immediately to prevent flash
    gsap.set(el, {
      opacity: opacity ? 0 : 1,
      y: yOffset,
      willChange: 'opacity, transform'
    });

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    gsap.to(
      el,
      {
        opacity: 1,
        y: 0,
        duration: animationDuration,
        ease: ease,
        delay: delay,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, delay, yOffset, opacity]);

  return (
    <div 
      ref={contentRef} 
      className={className}
      style={{
        opacity: opacity ? 0 : 1,
        transform: `translateY(${yOffset}px)`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
