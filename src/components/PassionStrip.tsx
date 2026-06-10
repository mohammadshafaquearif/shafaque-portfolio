import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import HoloPanel from './motion/HoloPanel';

export default function PassionStrip() {
  return (
    <section id="passion" className="relative z-10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <span className="holo-badge mb-6 inline-block">The Mindset</span>

          <blockquote className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            <span className="holo-shimmer">&ldquo;{profile.manifesto}&rdquo;</span>
          </blockquote>

          <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-50" />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {profile.philosophy.map((line, i) => (
              <HoloPanel
                key={line}
                from={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}
                delay={i * 0.12}
                className="p-5 text-left"
              >
                <span className="font-mono text-[10px] text-cyan/60">0{i + 1}</span>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{line}</p>
              </HoloPanel>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
