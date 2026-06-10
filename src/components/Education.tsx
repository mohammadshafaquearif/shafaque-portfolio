import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, ChevronDown } from 'lucide-react';
import { profile } from '../data/profile';

const INITIAL_VISIBLE = 9;

export default function Education() {
  const [certFilter, setCertFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const featured = profile.certifications.filter((c) => c.featured);
  const filtered =
    certFilter === 'all'
      ? profile.certifications.filter((c) => !c.featured)
      : profile.certifications.filter((c) => !c.featured && c.category === certFilter);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  return (
    <section id="education" className="section-padding relative z-10 bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Background</span>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
            {profile.certifications.length} professional certifications across cloud, DevOps, full stack, and AI.
          </p>
        </motion.div>

        <div className="mb-14">
          <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-text">
            <GraduationCap className="h-5 w-5 text-cyan" /> Education
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {profile.education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-text">{edu.degree}</h4>
                    <p className="mt-0.5 text-sm text-cyan">{edu.school}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                    {edu.grade}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted">{edu.period}</p>
                {edu.highlights.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {edu.highlights.map((h) => (
                      <span key={h} className="text-xs text-muted">
                        · {h}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 flex items-center gap-2 font-display text-lg font-bold text-text">
            <Award className="h-5 w-5 text-cyan" /> Featured Certifications
          </h3>
          <p className="mb-5 text-sm text-muted">Top credentials from Oracle, AWS, Edureka, and Forage.</p>

          <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="glass rounded-2xl border-cyan/10 p-4 transition hover:border-cyan/30 hover:shadow-lg hover:shadow-cyan/5"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber/10 text-amber">
                    <Award className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-cyan">{cert.issuer}</span>
                </div>
                <p className="text-sm font-semibold leading-snug text-text">{cert.name}</p>
                <p className="mt-2 text-xs text-muted">
                  Issued {cert.issued}
                  {cert.expires ? ` · Expires ${cert.expires}` : ''}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {profile.certificationCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setCertFilter(cat.id);
                  setShowAll(false);
                }}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  certFilter === cat.id
                    ? 'bg-cyan text-bg'
                    : 'border border-border text-muted hover:border-cyan/30 hover:text-cyan'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((cert) => (
                <motion.div
                  key={cert.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="glass rounded-xl p-4 transition hover:border-cyan/20"
                >
                  <p className="text-xs font-medium text-cyan">{cert.issuer}</p>
                  <p className="mt-1 text-sm font-medium leading-snug text-text">{cert.name}</p>
                  <p className="mt-2 text-xs text-muted">
                    {cert.issued}
                    {cert.expires ? ` · Exp ${cert.expires}` : ''}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length > INITIAL_VISIBLE && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition hover:border-cyan/40 hover:text-cyan"
              >
                {showAll ? 'Show less' : `Show all ${filtered.length} certifications`}
                <ChevronDown
                  className={`h-4 w-4 transition ${showAll ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
