import { useState, type ReactNode, type MouseEvent } from 'react';
import { use3DTilt } from '../../hooks/use3DTilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glow?: boolean;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  glow = false,
}: TiltCardProps) {
  const { ref, style, onMouseMove, onMouseLeave } = use3DTilt({ maxTilt });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    onMouseMove(e);
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setGlare({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleLeave = () => {
    onMouseLeave();
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`tilt-card holo-panel relative ${glow ? 'tilt-card-glow' : ''} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(56,189,248,0.15) 0%, rgba(139,92,246,0.08) 30%, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
