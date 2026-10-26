/**
 * LearnMore — tabbed content for Online Safety, Cyber Threats,
 * and AI-Driven Security (preserves all content from Learn More.html).
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { learnMoreTabs } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function LearnMore() {
  const [active, setActive] = useState(learnMoreTabs[0].id);
  const tab = learnMoreTabs.find(t => t.id === active)!;

  return (
    <main id="main-content" className="min-h-screen bg-cyber-bg">

      {/* ── Page banner ────────────────────────────────── */}
      <div
        className="relative h-56 flex items-end pb-10 px-6 overflow-hidden"
        style={{ backgroundImage: "url('/img/hero-carousel/ethicalhacking.jpeg')" }}
        aria-label="Learn More page banner"
      >
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Learn More
          </h1>
          <nav aria-label="Breadcrumb" className="text-cyber-muted text-sm mt-1 font-mono">
            <ol className="flex gap-1.5">
              <li><a href="/" className="hover:text-cyber-cyan transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-cyber-cyan" aria-current="page">Learn More</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ── Tab nav ────────────────────────────────────── */}
      <section className="py-16 px-4" aria-label="Learn More content">
        <div className="max-w-6xl mx-auto">

          <div
            role="tablist"
            aria-label="Topic tabs"
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {learnMoreTabs.map(t => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={t.id === active}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(t.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  t.id === active
                    ? 'bg-gradient-to-r from-cyber-cyan to-cyber-teal text-cyber-bg shadow-glow-cyan'
                    : 'glass-dark text-cyber-muted hover:text-cyber-cyan'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ── Tab panels ─────────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              id={`panel-${active}`}
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Text side */}
              <div className="order-2 lg:order-1">
                <motion.h2
                  {...fadeUp()}
                  className="text-2xl font-bold text-cyber-cyan mb-4"
                >
                  {tab.heading}
                </motion.h2>
                <motion.p
                  {...fadeUp(0.05)}
                  className="text-cyber-muted leading-relaxed mb-6"
                >
                  {tab.intro}
                </motion.p>

                <motion.h3
                  {...fadeUp(0.1)}
                  className="font-semibold text-cyber-text mb-3"
                >
                  {tab.listHeading}
                </motion.h3>

                <ul className="space-y-3">
                  {tab.items.map((item, i) => (
                    <motion.li
                      key={i}
                      {...fadeUp(0.1 + i * 0.04)}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-cyber-emerald flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-cyber-muted text-sm leading-relaxed">
                        <strong className="text-cyber-text">{item.bold}</strong>
                        {' — '}
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Image side */}
              <motion.div
                {...fadeUp(0.1)}
                className="order-1 lg:order-2"
              >
                <img
                  src={tab.image}
                  alt={tab.imageAlt}
                  className="w-full rounded-2xl object-cover max-h-96 border border-cyber-border
                             shadow-glow-sm"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </main>
  );
}
