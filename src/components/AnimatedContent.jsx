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
  xOffset = 0,
  startScale = 1,
  opacity = true
}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Set initial state immediately to prevent flash
    gsap.set(el, {
      opacity: opacity ? 0 : 1,
      x: xOffset,
      y: yOffset,
      scale: startScale,
      willChange: 'opacity, transform'
    });

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const tween = gsap.to(
      el,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: animationDuration,
        ease: ease,
        delay: delay,
        onComplete: () => {
          // Avoid keeping will-change enabled after animation (can hurt scroll perf)
          el.style.willChange = 'auto';
        },
        onReverseComplete: () => {
          el.style.willChange = 'auto';
        },
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
      tween?.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, delay, yOffset, xOffset, startScale, opacity]);

  return (
    <div 
      ref={contentRef} 
      className={className}
      style={{
        opacity: opacity ? 0 : 1,
        transform: `translate(${xOffset}px, ${yOffset}px) scale(${startScale})`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
