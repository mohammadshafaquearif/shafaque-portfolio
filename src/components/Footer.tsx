import { Code2, Heart, Link2 } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold text-text">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
        </div>

        <div className="flex gap-3">
          {[
            { href: profile.linkedin, icon: Link2 },
            { href: profile.github, icon: Code2 },
            { href: profile.devto, icon: () => (
              <span className="text-xs font-bold">DEV</span>
            ) },
          ].map(({ href, icon: Icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-4 text-center text-xs text-muted sm:px-6">
        <p className="inline-flex items-center gap-1">
          Built with <Heart className="h-3 w-3 text-red-400" /> by {profile.shortName} &middot;{' '}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
