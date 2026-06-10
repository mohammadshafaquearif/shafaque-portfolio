import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Link2, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import MagneticButton from './motion/MagneticButton';
import ProfilePhoto from './ProfilePhoto';

const creds = [
  'B.Tech CS · LPU',
  'SIH Finalist',
  '48 Certifications',
  'Oracle DevOps Pro',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 70);
    } else if (!deleting && displayText.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex]);

  return (
    <section className="scene-3d relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — slides in from left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="holo-badge !text-fire !border-fire/30 !bg-fire/5">
                Open to Work
              </span>
              <span className="font-mono text-[10px] tracking-widest text-muted">
                {profile.openToWork.preferences}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]"
            >
              I build systems
              <br />
              <span className="holo-shimmer">that scale.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 flex items-center gap-4"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-12 w-12 rounded-full border border-cyan/30 object-cover object-top shadow-lg shadow-cyan/10 lg:hidden"
              />
              <div>
                <p className="font-display text-lg font-semibold text-text sm:text-xl">
                  {profile.name}
                </p>
                <p className="mt-1 font-mono text-xs tracking-wide text-muted">
                  Software Developer @ ECT Cloud Solutions
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-4 h-px w-20 origin-left bg-gradient-to-r from-cyan via-violet to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-muted"
            >
              {profile.headline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-3 h-7 font-mono text-base font-medium tracking-wide text-cyan sm:text-lg"
            >
              <span className="text-muted/50">&gt; </span>
              {displayText}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-cyan align-middle" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 flex items-center gap-2 font-mono text-xs text-muted"
            >
              <MapPin className="h-3.5 w-3.5 text-cyan/70" />
              {profile.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <MagneticButton href="#projects" variant="primary">
                See My Work
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                Let&apos;s Connect
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95 }}
              className="mt-8 flex gap-3"
            >
              {[
                { href: profile.linkedin, icon: Link2, label: 'LinkedIn' },
                { href: profile.github, icon: Code2, label: 'GitHub' },
                { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.08 }}
                  className="flex h-10 w-10 items-center justify-center border border-cyan/15 bg-surface/50 text-muted backdrop-blur-sm transition hover:border-cyan/40 hover:text-cyan hover:shadow-lg hover:shadow-cyan/10"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {creds.map((cred, i) => (
                <span key={cred} className="flex items-center gap-4">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-muted/70">
                    {cred}
                  </span>
                  {i < creds.length - 1 && <span className="cred-divider hidden sm:block" />}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <ProfilePhoto />
          </motion.div>
        </div>

        <div className="mt-12 lg:hidden">
          <ProfilePhoto />
        </div>

        <motion.a
          href="#passion"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-20 flex flex-col items-center gap-2 font-mono text-muted transition hover:text-cyan"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
