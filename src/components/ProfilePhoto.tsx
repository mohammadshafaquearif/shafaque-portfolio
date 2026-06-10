import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import TechIcon from './TechIcon';
import HoloPanel from './motion/HoloPanel';

const orbitTools = [
  { name: 'React.js', style: { top: '4%', left: '8%' } },
  { name: 'AWS', style: { top: '12%', right: '4%' } },
  { name: 'Docker', style: { bottom: '18%', left: '0%' } },
  { name: 'Kubernetes', style: { bottom: '8%', right: '6%' } },
  { name: 'Node.js', style: { top: '42%', right: '-2%' } },
  { name: 'Java', style: { top: '38%', left: '-2%' } },
];

export default function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        {orbitTools.map((tool, i) => (
          <motion.div
            key={tool.name}
            className="absolute"
            style={tool.style}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.5 + i * 0.1, duration: 0.5 },
              scale: { delay: 0.5 + i * 0.1, duration: 0.5 },
              y: { duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <TechIcon name={tool.name} size="sm" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]"
      >
        <div className="holo-ring-glow" />
        <div className="holo-ring" />

        <div className="relative h-full w-full overflow-hidden rounded-full border border-cyan/20 bg-surface shadow-2xl shadow-cyan/5">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-cyan/5" />
          <div className="scanlines-texture !absolute inset-0 opacity-10" />
        </div>
      </motion.div>

      <HoloPanel from="up" delay={0.6} className="mt-6 p-5 text-center lg:text-left">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan">
          // Currently
        </p>
        <p className="mt-2 font-display text-sm font-bold leading-snug text-text">
          Shipping code at ECT Cloud Solutions · Building side projects · Writing about DevOps & Cloud
        </p>
      </HoloPanel>
    </div>
  );
}
