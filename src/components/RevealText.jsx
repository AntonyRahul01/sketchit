import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RevealText = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 0.8,
  ease = 'power3.out',
  scrollStart = 'top bottom-=100px',
  scrollEnd = 'top center',
  stagger = 0.05,
  revealBy = 'words' // 'words' or 'chars'
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    
    if (revealBy === 'words') {
      const lines = text.split('\n');
      const elements = [];
      lines.forEach((line, lineIndex) => {
        const words = line.split(' ').filter(w => w.length > 0);
        words.forEach((word, wordIndex) => {
          elements.push({ type: 'word', content: word, lineIndex, wordIndex });
          if (wordIndex < words.length - 1) {
            elements.push({ type: 'space', content: ' ' });
          }
        });
        if (lineIndex < lines.length - 1) {
          elements.push({ type: 'newline', content: '\n' });
        }
      });
      return elements;
    } else {
      return text.split('').map((char, index) => ({
        type: char === '\n' ? 'newline' : char === ' ' ? 'space' : 'char',
        content: char === '\n' ? '\n' : char === ' ' ? ' ' : char
      }));
    }
  }, [children, revealBy]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const textElements = el.querySelectorAll('.reveal-text-item');

    const tween = gsap.fromTo(
      textElements,
      {
        opacity: 0,
        y: 50,
        willChange: 'opacity, transform'
      },
      {
        opacity: 1,
        y: 0,
        duration: animationDuration,
        ease: ease,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          toggleActions: 'play none none reverse'
        }
      }
    );

    // On tablet/mobile, layout can shift after images/fonts load; ensure triggers recalc.
    const refresh = () => ScrollTrigger.refresh();
    const rafId = requestAnimationFrame(refresh);
    const timeoutId = window.setTimeout(refresh, 200);
    window.addEventListener('load', refresh, { passive: true });
    window.addEventListener('resize', refresh, { passive: true });

    return () => {
      window.removeEventListener('load', refresh);
      window.removeEventListener('resize', refresh);
      cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      tween?.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <span ref={containerRef} className={`reveal-text ${containerClassName}`}>
      <span className={textClassName}>
        {splitText.map((item, index) => {
          if (item.type === 'newline') {
            return <br key={index} />;
          }
          if (item.type === 'space') {
            return <span key={index} className="reveal-text-item inline-block">{'\u00A0'}</span>;
          }
          return (
            <span key={index} className="reveal-text-item inline-block">
              {item.content}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default RevealText;
