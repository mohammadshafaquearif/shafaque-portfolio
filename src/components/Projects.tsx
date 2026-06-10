import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { TechIconRow } from './TechIcon';
import TiltCard from './motion/TiltCard';
import { SectionTitle } from './motion/Reveal3D';

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="scene-3d section-padding relative z-10 bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          badge="Portfolio"
          title={
            <>
              Featured <span className="gradient-text">Projects</span>
            </>
          }
          subtitle="Tilt & explore — production apps and engineering projects in 3D."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {profile.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformPerspective: 1200 }}
            >
              <TiltCard
                maxTilt={14}
                glow
                className="group h-full overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-cyan/40"
              >
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative h-full"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="font-display text-xl font-bold text-text">{project.title}</h3>
                      <motion.div
                        animate={{ rotate: hovered === i ? 45 : 0, scale: hovered === i ? 1.2 : 1 }}
                        className="text-muted transition group-hover:text-cyan"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.div>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-muted">{project.description}</p>
                    <TechIconRow tools={project.tags} size="md" gap="gap-2" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
