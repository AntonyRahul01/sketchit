import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedButton = ({
  children,
  className = '',
  baseColor = '#000000',
  pillColor = '#ffffff',
  hoveredTextColor = '#ffffff',
  pillTextColor = '#000000',
  ease = 'power3.easeOut',
  onClick,
  ...props
}) => {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const labelRef = useRef(null);
  const hoverLabelRef = useRef(null);
  const tlRef = useRef(null);
  const activeTweenRef = useRef(null);

  const resolvedPillTextColor = pillTextColor || baseColor;

  useEffect(() => {
    const layout = () => {
      const circle = circleRef.current;
      const button = buttonRef.current;
      if (!circle || !button) return;

      const rect = button.getBoundingClientRect();
      const { width: w, height: h } = rect;
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`
      });

      const label = labelRef.current;
      const hoverLabel = hoverLabelRef.current;

      if (label) gsap.set(label, { y: 0 });
      if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

      tlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

      if (label) {
        tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
      }

      if (hoverLabel) {
        gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
        tl.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
      }

      tlRef.current = tl;
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => { });
    }

    return () => window.removeEventListener('resize', onResize);
  }, [ease, children]);

  const handleEnter = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredTextColor,
    ['--pill-text']: resolvedPillTextColor,
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden inline-flex items-center justify-center rounded-full cursor-pointer ${className}`}
      style={{
        background: 'var(--pill-bg)',
        color: 'var(--pill-text)',
        ...cssVars,
        ...props.style
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
      {...props}
    >
      <span
        className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
        style={{
          background: 'var(--base)',
          willChange: 'transform'
        }}
        aria-hidden="true"
        ref={circleRef}
      />
      <span className="label-stack relative inline-block leading-[1] z-[2]">
        <span
          className="pill-label relative z-[2] inline-block leading-[1]"
          style={{ willChange: 'transform' }}
          ref={labelRef}
        >
          {children}
        </span>
        <span
          className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
          style={{
            color: 'var(--hover-text)',
            willChange: 'transform, opacity'
          }}
          aria-hidden="true"
          ref={hoverLabelRef}
        >
          {children}
        </span>
      </span>
    </button>
  );
};

export default AnimatedButton;
