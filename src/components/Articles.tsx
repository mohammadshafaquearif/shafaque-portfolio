import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { profile } from '../data/profile';

export default function Articles() {
  return (
    <section id="articles" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Writing</span>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Latest <span className="gradient-text">Articles</span>
            </h2>
          </div>
          <a
            href={profile.devto}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition hover:border-cyan/40 hover:text-cyan"
          >
            View on DEV <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {profile.articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass flex flex-col rounded-2xl p-6 transition hover:border-cyan/30"
            >
              <span className="mb-3 w-fit rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                {article.tag}
              </span>
              <h3 className="flex-1 font-display text-base font-semibold leading-snug text-text transition group-hover:text-cyan">
                {article.title}
              </h3>
              <div className="mt-4 flex items-center justify-between text-xs text-muted">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {article.readTime}
                </span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
