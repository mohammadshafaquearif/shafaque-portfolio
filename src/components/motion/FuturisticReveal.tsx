import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

export type SlideFrom = 'left' | 'right' | 'top' | 'bottom' | 'zoom';

const offsets: Record<SlideFrom, { x: number; y: number; scale: number; rotate: number }> = {
  left: { x: -80, y: 20, scale: 0.92, rotate: -3 },
  right: { x: 80, y: 20, scale: 0.92, rotate: 3 },
  top: { x: 0, y: -70, scale: 0.9, rotate: 0 },
  bottom: { x: 0, y: 70, scale: 0.9, rotate: 0 },
  zoom: { x: 0, y: 0, scale: 0.75, rotate: 0 },
};

interface FuturisticRevealProps {
  children: ReactNode;
  from?: SlideFrom;
  delay?: number;
  className?: string;
  duration?: number;
}

export default function FuturisticReveal({
  children,
  from = 'left',
  delay = 0,
  className = '',
  duration = 0.85,
}: FuturisticRevealProps) {
  const o = offsets[from];

  return (
    <motion.div
      initial={{ opacity: 0, x: o.x, y: o.y, scale: o.scale, rotate: o.rotate, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = '',
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  from = 'left',
  className = '',
}: {
  children: ReactNode;
  from?: SlideFrom;
  className?: string;
}) {
  const o = offsets[from];
  const item: Variants = {
    hidden: { opacity: 0, x: o.x, y: o.y, scale: o.scale, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

const directions: SlideFrom[] = ['left', 'right', 'top', 'bottom', 'zoom'];

export function pickDirection(index: number): SlideFrom {
  return directions[index % directions.length];
}
