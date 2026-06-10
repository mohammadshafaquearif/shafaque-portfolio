import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { profile } from '../data/profile';

export default function Featured() {
  return (
    <section className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Featured</span>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Explore My <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {profile.featured.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group glass flex items-start gap-4 rounded-2xl p-6 transition hover:border-cyan/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                <Star className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-medium text-cyan">{item.tag}</span>
                <h3 className="mt-1 font-display font-semibold text-text transition group-hover:text-cyan">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition group-hover:text-cyan" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
