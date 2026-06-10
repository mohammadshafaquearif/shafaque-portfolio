import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { profile } from '../data/profile';
import TiltCard from './motion/TiltCard';
import { SectionTitle } from './motion/Reveal3D';

export default function Experience() {
  return (
    <section id="experience" className="scene-3d section-padding relative z-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          badge="Career"
          title={
            <>
              Experience & <span className="gradient-text">Impact</span>
            </>
          }
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-cyan/50 via-border to-transparent md:left-1/2 md:-translate-x-px" />

          {profile.experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, rotateY: i % 2 === 0 ? -12 : 12 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              style={{ transformPerspective: 1200 }}
              className={`relative mb-10 flex md:mb-16 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden w-1/2 md:block" />

              <div
                className={`w-full pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <TiltCard maxTilt={8} className="glass group rounded-2xl p-6">
                  <span className="text-xs font-medium text-cyan">{exp.period}</span>
                  <h3 className="mt-1 font-display text-lg font-bold text-text">{exp.role}</h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted md:justify-end">
                    {i % 2 !== 0 && <Briefcase className="h-3.5 w-3.5 text-cyan" />}
                    {exp.company}
                    {i % 2 === 0 && <Briefcase className="h-3.5 w-3.5 text-cyan" />}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{exp.description}</p>
                  <ul
                    className={`mt-4 space-y-1.5 text-sm text-muted ${
                      i % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className={`flex items-start gap-2 ${
                          i % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>

              <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cyan bg-bg md:left-1/2">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
