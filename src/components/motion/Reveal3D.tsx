import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down';

interface Reveal3DProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: Direction;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  left: { x: -60, y: 20 },
  right: { x: 60, y: 20 },
  up: { x: 0, y: 50 },
  down: { x: 0, y: -50 },
};

export default function Reveal3D({
  children,
  className = '',
  delay = 0,
  from = 'up',
}: Reveal3DProps) {
  const o = offsets[from];

  return (
    <motion.div
      initial={{ opacity: 0, x: o.x, y: o.y, rotateX: from === 'up' ? 12 : 0, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  from = 'up',
}: {
  badge: string;
  title: ReactNode;
  subtitle?: string;
  from?: Direction;
}) {
  return (
    <Reveal3D from={from} className="mb-14 text-center">
      <div className="mx-auto mb-4 flex items-center justify-center gap-3">
        <span className="holo-line w-8" />
        <span className="holo-badge">{badge}</span>
        <span className="holo-line w-8" />
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-base">
          {subtitle}
        </p>
      )}
    </Reveal3D>
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.body.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeEventListener('mouseleave', leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[5] h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl transition-opacity duration-500"
        style={{
          left: pos.x,
          top: pos.y,
          background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed z-[5] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/10 opacity-40"
        style={{ left: pos.x, top: pos.y }}
        aria-hidden
      />
    </>
  );
}
