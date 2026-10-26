/**
 * FAQAccordion — smooth animated expand/collapse for all 6 FAQ items.
 * Only one question is open at a time.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, delay },
});

export default function FAQAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen(prev => (prev === id ? null : id));

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-24 px-4 bg-cyber-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto">

        {/* ── Heading ──────────────────────────────────── */}
        <motion.h2
          id="faq-heading"
          {...fadeUp()}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12"
        >
          <span className="text-white">Frequently Asked </span>
          <span className="text-cyber-cyan text-glow-cyan">Questions</span>
        </motion.h2>

        {/* ── Accordion items ───────────────────────────── */}
        <div className="space-y-3" role="list">
          {faqItems.map((item, i) => {
            const isOpen = open === item.id;

            return (
              <motion.div
                key={item.id}
                {...fadeUp(0.05 * i)}
                role="listitem"
                className={`glass-dark rounded-xl border transition-colors duration-200 overflow-hidden ${
                  isOpen ? 'border-cyber-cyan/40' : 'border-cyber-border hover:border-cyber-border/80'
                }`}
              >
                {/* Question button */}
                <button
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 gap-4"
                >
                  <span
                    className={`font-semibold text-sm sm:text-base transition-colors ${
                      isOpen ? 'text-cyber-cyan' : 'text-cyber-text'
                    }`}
                  >
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 ${isOpen ? 'text-cyber-cyan' : 'text-cyber-muted'}`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>

                {/* Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-cyber-muted text-sm leading-relaxed border-t border-cyber-border/50 pt-4">
                        {Array.isArray(item.answer) ? (
                          <ul className="space-y-2">
                            {(item.answer as string[]).map((line, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-cyber-cyan mt-0.5" aria-hidden="true">›</span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>{item.answer as string}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
