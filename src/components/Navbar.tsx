import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-cyan/10 bg-bg/80 py-3 backdrop-blur-2xl'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="group flex items-center gap-3">
          <div className="relative">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-9 w-9 rounded-full border border-cyan/30 object-cover object-top transition group-hover:border-cyan/60 group-hover:shadow-lg group-hover:shadow-cyan/20"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-emerald-400 shadow-sm shadow-emerald-400/50" />
          </div>
          <span className="hidden font-mono text-xs font-medium uppercase tracking-widest text-text sm:block">
            {profile.shortName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted transition hover:text-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="holo-btn holo-btn-primary hidden px-5 py-2 font-mono text-[10px] md:inline-block"
        >
          Connect
        </a>

        <button
          type="button"
          className="p-2 text-muted hover:text-cyan md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="holo-panel mx-4 mt-2 p-4 md:hidden"
        >
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-cyan"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
