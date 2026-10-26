/**
 * EthicalHackingGrid — 10 ethical hacking types displayed as
 * interactive cards with hover glow + click-to-expand modal.
 * Live search bar at top filters cards in real time.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Tag } from 'lucide-react';
import { hackingTypes, type HackingType } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, delay },
});

/* ── Card component ─────────────────────────────────────── */
function HackCard({
  item,
  onClick,
}: {
  item: HackingType;
  onClick: () => void;
}) {
  return (
    <motion.article
      {...fadeUp()}
      whileHover={{ y: -6, boxShadow: '0 0 28px rgba(0,242,254,0.25)' }}
      className="glass-dark rounded-xl overflow-hidden cursor-pointer group"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      role="button"
      aria-label={`Read more about ${item.title}`}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-cyber-card/20 to-transparent" />

        {/* Tag badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {item.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium
                         bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="font-bold text-cyber-text text-base mb-2 group-hover:text-cyber-cyan transition-colors">
          {item.title}
        </h3>
        <p className="text-cyber-muted text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>
        <span className="inline-block mt-3 text-cyber-cyan text-xs font-mono
                         group-hover:underline">
          Click to expand →
        </span>
      </div>
    </motion.article>
  );
}

/* ── Modal ──────────────────────────────────────────────── */
function DetailModal({
  item,
  onClose,
}: {
  item: HackingType;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

      <motion.div
        className="relative z-10 glass-dark rounded-2xl max-w-2xl w-full overflow-hidden
                   border border-cyber-cyan/20"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-card to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full glass text-cyber-muted
                       hover:text-cyber-cyan transition-colors"
            aria-label="Close detail panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-cyber-cyan mb-2">{item.title}</h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map(tag => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono
                           bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald"
              >
                <Tag className="w-3 h-3" aria-hidden="true" /> {tag}
              </span>
            ))}
          </div>

          <p className="text-cyber-muted leading-relaxed">{item.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main section ───────────────────────────────────────── */
export default function EthicalHackingGrid() {
  const [query, setQuery]       = useState('');
  const [selected, setSelected] = useState<HackingType | null>(null);

  const filtered = hackingTypes.filter(h =>
    h.title.toLowerCase().includes(query.toLowerCase()) ||
    h.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
    h.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section
      id="ethical-hacking"
      aria-labelledby="eh-heading"
      className="relative py-24 px-4 bg-cyber-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Heading ──────────────────────────────────── */}
        <motion.h2
          id="eh-heading"
          {...fadeUp()}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6"
        >
          <span className="text-white">Ethical </span>
          <span className="text-cyber-emerald text-glow-green">Hacking</span>
        </motion.h2>

        <motion.div {...fadeUp(0.2)} className="max-w-3xl mx-auto text-center text-cyber-muted leading-relaxed mb-4">
          <p>
            Ethical hacking is the practice of testing an IT system for vulnerabilities by duplicating the intent
            and actions of malicious hackers. Ethical hackers use their findings to improve system security, often
            by suggesting changes to system design or configuration.
          </p>
          <p className="mt-3">
            Ethical hacking is also known as penetration testing, intrusion testing, or red teaming. It is used to
            identify and address security vulnerabilities in a system. Ethical hackers are security professionals
            who use their hacking skills for defensive purposes.
          </p>
        </motion.div>

        <motion.h3 {...fadeUp(0.25)} className="text-center text-cyber-text font-semibold text-base mb-8">
          Types of Ethical Hacking
        </motion.h3>

        {/* ── Live search ──────────────────────────────── */}
        <motion.div {...fadeUp(0.3)} className="flex justify-center mb-10">
          <label htmlFor="eh-search" className="sr-only">Search hacking types</label>
          <div className="relative w-full max-w-md">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-muted"
              aria-hidden="true"
            />
            <input
              id="eh-search"
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search hacking types or tags…"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-cyber-card border border-cyber-border
                         text-cyber-text placeholder:text-cyber-muted/60 focus:outline-none
                         focus:border-cyber-emerald/60 focus:shadow-[0_0_10px_rgba(16,185,129,0.2)]
                         transition-all"
            />
          </div>
        </motion.div>

        {/* ── Grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-cyber-muted font-mono py-10">
              No results for "{query}"
            </p>
          )}
          {filtered.map(item => (
            <HackCard key={item.id} item={item} onClick={() => setSelected(item)} />
          ))}
        </div>

        {/* ── YouTube embed ─────────────────────────────── */}
        <motion.div {...fadeUp(0.1)} className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-cyber-text mb-2">
            Learn More About Ethical Hacking
          </h3>
          <p className="text-cyber-muted text-sm mb-6">
            Watch the video below for a deeper dive.
          </p>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden
                          border border-cyber-border shadow-glow-sm">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XLvPpirlmEs?si=MlQQDDu73iXhqMW7"
              title="Ethical Hacking explainer video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>

      {/* ── Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <DetailModal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
