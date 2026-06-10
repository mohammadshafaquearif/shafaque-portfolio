import { profile } from '../data/profile';

export default function Testimonials() {
  const items = [...profile.testimonials, ...profile.testimonials];

  return (
    <section className="relative z-10 overflow-hidden border-y border-border/60 bg-surface/30 py-14">
      <div className="mb-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Testimonials</span>
        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
          What People <span className="gradient-text">Say</span>
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

        <div className="animate-marquee flex w-max gap-5">
          {items.map((t, i) => (
            <div
              key={`${t.author}-${i}`}
              className="glass w-80 shrink-0 rounded-2xl p-6"
            >
              <p className="text-sm leading-relaxed text-muted">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4 border-t border-border/60 pt-4">
                <p className="text-sm font-semibold text-text">{t.author}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
