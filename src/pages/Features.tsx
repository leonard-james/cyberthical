/**
 * Features — lists the 3 interactive tools and renders the selected one
 * as a full-screen iframe view. Preserves all descriptions from f.html /
 * ctm.html / pm.html / ipt.html.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Lock, Mail, ArrowRight, X } from 'lucide-react';
import { features } from '../data/content';

const iconMap: Record<string, React.ElementType> = { Map, Lock, Mail };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function Features() {
  const [active, setActive] = useState<string | null>(null);
  const activeFeature = features.find(f => f.id === active);

  return (
    <main id="main-content" className="min-h-screen bg-cyber-bg">

      {/* ── Banner ──────────────────────────────────────── */}
      <div
        className="relative h-56 flex items-end pb-10 px-6 overflow-hidden"
        style={{ backgroundImage: "url('/assets/img/hero-carousel/ethicalhacking.jpeg')" }}
        aria-label="Features page banner"
      >
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Features</h1>
          <nav aria-label="Breadcrumb" className="text-cyber-muted text-sm mt-1 font-mono">
            <ol className="flex gap-1.5">
              <li><a href="/" className="hover:text-cyber-cyan transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-cyber-cyan" aria-current="page">Features</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ── Feature cards ──────────────────────────────── */}
      <section className="py-16 px-4" aria-label="Interactive security tools">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon] ?? Map;
              return (
                <motion.article
                  key={f.id}
                  {...fadeUp(0.1 * i)}
                  whileHover={{ y: -6, boxShadow: '0 0 28px rgba(0,242,254,0.2)' }}
                  className="glass-dark rounded-2xl p-6 border border-cyber-border hover:border-cyber-cyan/40
                             transition-all duration-300 flex flex-col gap-4"
                  aria-label={f.title}
                >
                  <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/20
                                  flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyber-cyan" aria-hidden="true" />
                  </div>

                  <h2 className="text-lg font-bold text-cyber-text">{f.title}</h2>
                  <p className="text-cyber-muted text-sm leading-relaxed flex-1">{f.description}</p>

                  <button
                    onClick={() => setActive(f.id)}
                    className="flex items-center gap-1.5 text-cyber-cyan text-sm font-mono
                               hover:gap-2.5 transition-all group mt-auto"
                  >
                    View
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Fullscreen iframe overlay ───────────────────── */}
      <AnimatePresence>
        {activeFeature && (
          <motion.div
            key="iframe-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-cyber-bg flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={activeFeature.title}
          >
            {/* Top bar */}
            <div className="h-12 flex items-center justify-between px-4 border-b border-cyber-border bg-cyber-surface flex-shrink-0">
              <span className="font-mono text-cyber-cyan text-sm font-semibold">
                {activeFeature.title}
              </span>
              <button
                onClick={() => setActive(null)}
                aria-label="Close tool"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold
                           bg-red-500/15 border border-red-500/50 text-red-400
                           hover:bg-red-500 hover:text-white hover:border-red-500
                           hover:shadow-[0_0_16px_rgba(239,68,68,0.6)]
                           active:scale-95 transition-all duration-150"
              >
                <X className="w-4 h-4" />
                CLOSE
              </button>
            </div>

            {/* iframe */}
            <iframe
              src={activeFeature.iframeSrc}
              title={activeFeature.title}
              className="flex-1 w-full border-none"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
