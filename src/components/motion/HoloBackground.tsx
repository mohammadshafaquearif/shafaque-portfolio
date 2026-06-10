import { motion } from 'framer-motion';

const hudLabels = [
  { text: 'SYS.ONLINE', style: { top: '18%', left: '4%' }, delay: 0 },
  { text: 'DEV.MODE', style: { top: '32%', right: '3%' }, delay: 1.2 },
  { text: 'CLOUD.SYNC', style: { bottom: '28%', left: '2%' }, delay: 2.4 },
  { text: 'BUILD.ACTIVE', style: { bottom: '15%', right: '5%' }, delay: 0.8 },
];

export default function HoloBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Ambient light pools */}
      <div className="ambient-light ambient-light-cyan" />
      <div className="ambient-light ambient-light-violet" />
      <div className="ambient-light ambient-light-rose" />

      {/* Perspective grid floor */}
      <div className="holo-grid-floor" />

      {/* Fine overlay grid */}
      <div className="holo-grid-overlay" />

      {/* Scan line */}
      <div className="scanline-track">
        <div className="scanline-beam" />
      </div>

      {/* Subtle scanlines texture */}
      <div className="scanlines-texture" />

      {/* Floating HUD markers */}
      {hudLabels.map((label) => (
        <motion.div
          key={label.text}
          className="hud-label absolute font-mono"
          style={label.style}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0.2, 0.35] }}
          transition={{ duration: 6, delay: label.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="hud-dot" />
          {label.text}
        </motion.div>
      ))}

      {/* Corner brackets */}
      <div className="holo-corner holo-corner-tl" />
      <div className="holo-corner holo-corner-tr" />
      <div className="holo-corner holo-corner-bl" />
      <div className="holo-corner holo-corner-br" />
    </div>
  );
}
