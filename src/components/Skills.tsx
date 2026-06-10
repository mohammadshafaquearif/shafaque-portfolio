import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';
import TiltCard from './motion/TiltCard';
import TechIcon from './TechIcon';
import { SectionTitle } from './motion/Reveal3D';

export default function Skills() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all'
      ? profile.skills
      : profile.skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="scene-3d section-padding relative z-10 bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          badge="Expertise"
          title={
            <>
              Skills & <span className="gradient-text">Technologies</span>
            </>
          }
          subtitle="Filter by category — hover icons to reveal proficiency."
          from="down"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {profile.skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === cat.id
                  ? 'bg-cyan text-bg shadow-lg shadow-cyan/30'
                  : 'border border-border text-muted hover:border-cyan/30 hover:text-cyan'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25, delay: i * 0.02 }}
              >
                <TiltCard maxTilt={8} className="glass flex h-full flex-col items-center p-4 text-center">
                  <TechIcon name={skill.name} size="lg" />
                  <motion.span
                    className="mt-3 text-sm font-bold text-cyan"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {skill.level}%
                  </motion.span>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan to-cyan-dim"
                    />
                  </div>
                  <span className="sr-only">{skill.name}</span>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
