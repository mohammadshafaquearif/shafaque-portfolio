import { motion } from 'framer-motion';

const orbs = [
  { size: 500, x: '5%', y: '10%', color: 'rgba(56, 189, 248, 0.04)', duration: 28 },
  { size: 400, x: '70%', y: '5%', color: 'rgba(244, 63, 94, 0.03)', duration: 32 },
  { size: 600, x: '50%', y: '70%', color: 'rgba(56, 189, 248, 0.03)', duration: 36 },
];

export default function AmbientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
