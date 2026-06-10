import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { profile } from '../data/profile';
import HoloPanel from './motion/HoloPanel';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="holo-shimmer">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="scene-3d relative z-10 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 sm:px-6 md:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <HoloPanel
            key={stat.label}
            from={i % 2 === 0 ? 'left' : 'right'}
            delay={i * 0.1}
            className="p-5 text-center"
          >
            <motion.p
              whileInView={{ scale: [0.5, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              className="font-display text-3xl font-bold sm:text-4xl"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
            </motion.p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              {stat.label}
            </p>
          </HoloPanel>
        ))}
      </div>
    </section>
  );
}
