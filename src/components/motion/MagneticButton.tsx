import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function MagneticButton({
  children,
  href,
  className = '',
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22 });
  const springY = useSpring(y, { stiffness: 280, damping: 22 });

  const base =
    variant === 'primary'
      ? 'holo-btn-primary'
      : 'holo-btn-secondary';

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      className={`magnetic-btn holo-btn inline-block px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] ${base} ${className}`}
    >
      {children}
    </motion.a>
  );
}
