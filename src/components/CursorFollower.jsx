import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';

const isTouchDevice = () => {
    if (typeof window === 'undefined') return false;
    return (
        'ontouchstart' in window ||
        (navigator?.maxTouchPoints ?? 0) > 0 ||
        (navigator?.msMaxTouchPoints ?? 0) > 0
    );
};

export default function CursorFollower() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [variant, setVariant] = useState('default'); // default | interactive | text
    const [visible, setVisible] = useState(false);

    const variants = useMemo(
        () => ({
            default: {
                scale: 1,
                opacity: 1, // Fade in on normal cursor
            },
            interactive: {
                scale: 1,
                opacity: 0, // Fade out on interactive elements
            },
            text: {
                scale: 1,
                opacity: 0, // Fade out on text inputs
            },
        }),
        []
    );

    useEffect(() => {
        if (isTouchDevice()) return;

        const onMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };

        const onLeave = () => setVisible(false);

        const onOver = (e) => {
            const el = e.target;
            if (!el) return;
            if (el.closest('input, textarea, [contenteditable="true"]')) {
                setVariant('text');
                return;
            }
            if (el.closest('a, button, [role="button"], [data-cursor="interactive"]')) {
                setVariant('interactive');
                return;
            }
            setVariant('default');
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mouseleave', onLeave, { passive: true });
        document.addEventListener('pointerover', onOver, { passive: true });

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
            document.removeEventListener('pointerover', onOver);
        };
    }, [visible]);

    if (isTouchDevice()) return null;

    return (
        <div className="cursor-layer" data-variant={variant} aria-hidden="true">
            {/* dot follower */}
            <motion.div
                className="cursor-dot"
                animate={{
                    x: pos.x,
                    y: pos.y,
                    opacity: visible ? 1 : 0,
                    ...variants[variant],
                }}
                transition={{
                    x: { type: 'spring', stiffness: 400, damping: 35, mass: 0.5 },
                    y: { type: 'spring', stiffness: 400, damping: 35, mass: 0.5 },
                    opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }, // Smoother fade transition
                    scale: { type: 'spring', stiffness: 300, damping: 25, mass: 0.5 },
                }}
            />
        </div>
    );
}
