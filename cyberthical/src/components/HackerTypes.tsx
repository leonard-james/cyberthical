/**
 * HackerTypes — White Hat / Gray Hat / Black Hat
 * with color-coded glow badges and hover lift.
 */
import { motion } from 'framer-motion';
import { hackerTypes } from '../data/content';

/* Accent colour map — safe for Tailwind JIT */
const accentMap: Record<string, { border: string; text: string; badge: string; glow: string }> = {
  emerald: {
    border: 'border-cyber-emerald/40 hover:border-cyber-emerald/80',
    text:   'text-cyber-emerald',
    badge:  'bg-cyber-emerald/10 border-cyber-emerald/30 text-cyber-emerald',
    glow:   '0 0 28px rgba(16,185,129,0.25)',
  },
  yellow: {
    border: 'border-yellow-400/40 hover:border-yellow-400/80',
    text:   'text-yellow-400',
    badge:  'bg-yellow-400/10 border-yellow-400/30 text-yellow-400',
    glow:   '0 0 28px rgba(250,204,21,0.25)',
  },
  red: {
    border: 'border-red-500/40 hover:border-red-500/80',
    text:   'text-red-400',
    badge:  'bg-red-500/10 border-red-500/30 text-red-400',
    glow:   '0 0 28px rgba(239,68,68,0.25)',
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
});

export default function HackerTypes() {
  return (
    <section
      id="hacker-types"
      aria-labelledby="ht-heading"
      className="relative py-24 px-4 bg-cyber-surface overflow-hidden"
    >
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Heading ──────────────────────────────────── */}
        <motion.h2
          id="ht-heading"
          {...fadeUp()}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12"
        >
          <span className="text-white">Types of </span>
          <span className="text-cyber-cyan text-glow-cyan">Hacker</span>
        </motion.h2>

        {/* ── Cards ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hackerTypes.map((hacker, i) => {
            const accent = accentMap[hacker.color] ?? accentMap.emerald;

            return (
              <motion.article
                key={hacker.id}
                {...fadeUp(0.12 * i)}
                whileHover={{ y: -8, boxShadow: accent.glow }}
                className={`glass-dark rounded-2xl overflow-hidden border ${accent.border}
                            transition-all duration-300 group`}
                aria-label={hacker.title}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={hacker.image}
                    alt={hacker.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-card/90 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${accent.badge}`}
                    >
                      {hacker.id === 'white' ? '✓ Ethical'
                        : hacker.id === 'gray'  ? '~ Neutral'
                        :                         '✗ Malicious'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`text-lg font-bold mb-3 ${accent.text}`}>
                    {hacker.title}
                  </h3>
                  <p className="text-cyber-muted text-sm leading-relaxed">
                    {hacker.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
