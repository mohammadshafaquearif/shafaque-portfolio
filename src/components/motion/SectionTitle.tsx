import { motion } from 'framer-motion';
import FuturisticReveal from './FuturisticReveal';

export function SectionTitle({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="relative mb-12 text-center">
      <FuturisticReveal from="top" className="mb-3">
        <span className="cyber-badge inline-block">{badge}</span>
      </FuturisticReveal>

      <FuturisticReveal from="left" delay={0.1}>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      </FuturisticReveal>

      {subtitle && (
        <FuturisticReveal from="right" delay={0.2}>
          <p className="mx-auto mt-3 max-w-lg text-muted">{subtitle}</p>
        </FuturisticReveal>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="cyber-line mx-auto mt-6 max-w-xs"
      />
    </div>
  );
}
