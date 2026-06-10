import type { ReactNode } from 'react';
import { motion, type TargetAndTransition } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down' | 'scale';

const variants: Record<Direction, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  left: { initial: { opacity: 0, x: -48, filter: 'blur(6px)' }, animate: { opacity: 1, x: 0, filter: 'blur(0px)' } },
  right: { initial: { opacity: 0, x: 48, filter: 'blur(6px)' }, animate: { opacity: 1, x: 0, filter: 'blur(0px)' } },
  up: { initial: { opacity: 0, y: 40, filter: 'blur(6px)' }, animate: { opacity: 1, y: 0, filter: 'blur(0px)' } },
  down: { initial: { opacity: 0, y: -40, filter: 'blur(6px)' }, animate: { opacity: 1, y: 0, filter: 'blur(0px)' } },
  scale: { initial: { opacity: 0, scale: 0.92, filter: 'blur(8px)' }, animate: { opacity: 1, scale: 1, filter: 'blur(0px)' } },
};

interface HoloPanelProps {
  children: ReactNode;
  className?: string;
  from?: Direction;
  delay?: number;
  corners?: boolean;
}

export default function HoloPanel({
  children,
  className = '',
  from = 'up',
  delay = 0,
  corners = true,
}: HoloPanelProps) {
  const v = variants[from];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`holo-panel ${corners ? 'holo-panel-corners' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
