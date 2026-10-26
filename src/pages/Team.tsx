/**
 * Team — 4 team members (Bhea, Celena, Revin, Leonard) + quote cards.
 * All names, courses, roles, social links, and quotes preserved verbatim.
 */
import { motion } from 'framer-motion';
import { Facebook, Instagram, Quote } from 'lucide-react';
import { teamMembers } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
});

export default function Team() {
  return (
    <main id="main-content" className="min-h-screen bg-cyber-bg">

      {/* ── Banner ──────────────────────────────────────── */}
      <div
        className="relative h-56 flex items-end pb-10 px-6 overflow-hidden"
        style={{ backgroundImage: "url('/img/hero-carousel/ethicalhacking.jpeg')" }}
        aria-label="Team page banner"
      >
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Team</h1>
          <nav aria-label="Breadcrumb" className="text-cyber-muted text-sm mt-1 font-mono">
            <ol className="flex gap-1.5">
              <li><a href="/" className="hover:text-cyber-cyan transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-cyber-cyan" aria-current="page">Team</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ── Section heading ─────────────────────────────── */}
      <section className="py-16 px-4" aria-label="Team members">
        <div className="max-w-6xl mx-auto">

          <motion.div {...fadeUp()} className="text-center mb-4">
            <span className="font-mono text-cyber-cyan text-xs tracking-[0.3em] uppercase">
            </span>
          </motion.div>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-3xl sm:text-4xl font-extrabold text-center mb-3"
          >
            <span className="text-white">Our </span>
            <span className="text-cyber-cyan text-glow-cyan">Team</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.15)}
            className="text-center text-cyber-muted text-sm mb-12"
          >
            Team members and their contributions
          </motion.p>

          {/* ── Member cards ───────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.article
                key={member.name}
                {...fadeUp(0.1 * i)}
                whileHover={{ y: -8, boxShadow: '0 0 28px rgba(0,242,254,0.2)' }}
                className="glass-dark rounded-2xl overflow-hidden border border-cyber-border
                           hover:border-cyber-cyan/40 transition-all duration-300 group"
                aria-label={member.name}
              >
                {/* Photo */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    loading="lazy"
                    className="w-full h-52 object-cover object-top transition-transform duration-500
                               group-hover:scale-105"
                  />
                  {/* Social overlay */}
                  <div className="absolute inset-0 bg-cyber-bg/70 opacity-0 group-hover:opacity-100
                                  transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Facebook`}
                      className="p-2.5 rounded-full bg-cyber-surface border border-cyber-cyan/30
                                 text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg transition-all"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Instagram`}
                      className="p-2.5 rounded-full bg-cyber-surface border border-cyber-cyan/30
                                 text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg transition-all"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="font-bold text-cyber-text text-base">{member.name}</h3>
                  <p className="text-cyber-cyan text-xs font-mono mt-0.5">{member.course}</p>
                  <p className="text-cyber-muted text-xs mt-1 mb-3">{member.role}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ── Quote cards ────────────────────────────── */}
          <motion.h2
            {...fadeUp(0.2)}
            className="text-2xl font-bold text-center mt-20 mb-8"
          >
            <span className="text-white">Team </span>
            <span className="text-cyber-emerald text-glow-green">Quotes</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {teamMembers.map((member, i) => (
              <motion.div
                key={`quote-${member.name}`}
                {...fadeUp(0.08 * i)}
                className="glass-dark rounded-xl p-5 border border-cyber-border flex gap-4 items-start"
              >
                <img
                  src={member.image}
                  alt=""
                  aria-hidden="true"
                  className="w-12 h-12 rounded-full object-cover object-top flex-shrink-0 border-2 border-cyber-cyan/30"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-cyber-text text-sm">{member.name}</h4>
                    <span className="text-cyber-muted text-xs font-mono">{member.course}</span>
                  </div>
                  <Quote
                    className="w-3 h-3 text-cyber-cyan/50 mb-1"
                    aria-hidden="true"
                  />
                  <p className="text-cyber-muted text-xs leading-relaxed italic">{member.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
