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
          subtitle="Live demos and production apps — click to visit."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {profile.projects.map((project, i) => {
            const inner = (
              <TiltCard
                maxTilt={14}
                glow
                className={`group h-full overflow-hidden rounded-2xl border border-border bg-surface transition-colors ${
                  project.url ? 'hover:border-cyan/40 cursor-pointer' : 'hover:border-cyan/40'
                }`}
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
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-text group-hover:text-cyan transition-colors">
                        {project.title}
                      </h3>
                      {project.url && (
                        <motion.div
                          animate={{ rotate: hovered === i ? 45 : 0, scale: hovered === i ? 1.2 : 1 }}
                          className="shrink-0 text-muted transition group-hover:text-cyan"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </motion.div>
                      )}
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-muted">{project.description}</p>
                    <TechIconRow tools={project.tags} size="md" gap="gap-2" />
                    {project.url && (
                      <p className="mt-4 truncate font-mono text-[10px] text-cyan/60 group-hover:text-cyan/90">
                        {project.url.replace(/^https?:\/\//, '')}
                      </p>
                    )}
                  </div>
                </div>
              </TiltCard>
            );

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformPerspective: 1200 }}
              >
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    aria-label={`Visit ${project.title}`}
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
