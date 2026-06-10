import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link2, Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative z-10 bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Contact</span>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            Interested in collaboration or a new project? Drop a message — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 lg:col-span-2"
          >
            {[
              { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
              { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
              { icon: Link2, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
            ].map((item) => (
              <div key={item.label} className="glass flex items-center gap-4 rounded-2xl p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-text transition hover:text-cyan"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-text">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass space-y-4 rounded-2xl p-6 lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-12 w-12 text-emerald-400" />
                <h3 className="font-display text-xl font-bold text-text">Opening your email client…</h3>
                <p className="mt-2 text-sm text-muted">Your message is ready to send.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-cyan hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20"
                    placeholder="Tell me about your goals or project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan py-3.5 text-sm font-semibold text-bg transition hover:bg-cyan-dim sm:w-auto sm:px-8"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
