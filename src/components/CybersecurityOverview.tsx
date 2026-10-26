/**
 * CybersecurityOverview — introduces Cybersecurity with the 6 category
 * flip-cards and an embedded YouTube explainer video.
 * Filter/search bar lets users instantly narrow the cards.
 *
 * NOTE: 3D flip CSS lives in index.css (.flip-scene / .flip-inner /
 * .flip-face / .flip-face-back) to avoid Tailwind JIT arbitrary-property
 * issues with transform-style and backface-visibility.
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { cyberCategories } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
});

export default function CybersecurityOverview() {
  const [query, setQuery] = useState('');

  const filtered = cyberCategories.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section
      id="cybersecurity"
      aria-labelledby="cs-heading"
      className="relative py-24 px-4 bg-cyber-surface overflow-hidden"
    >
      {/* Grid texture */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section heading ───────────────────────────── */}
        <motion.div {...fadeUp()} className="text-center mb-4">
          <span className="font-mono text-cyber-cyan text-xs tracking-[0.3em] uppercase">
            // Introduction
          </span>
        </motion.div>

        <motion.h2
          id="cs-heading"
          {...fadeUp(0.1)}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6"
        >
          <span className="text-white">Cyber</span>
          <span className="text-cyber-cyan text-glow-cyan">security</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="max-w-3xl mx-auto text-center text-cyber-muted leading-relaxed mb-4"
        >
          Cybersecurity is the practice of defending computers, servers, mobile devices, electronic
          systems, networks, and data from malicious attacks. It's also known as information
          technology security or electronic information security.
        </motion.p>

        <motion.p
          {...fadeUp(0.25)}
          className="max-w-3xl mx-auto text-center text-cyber-muted leading-relaxed mb-10"
        >
          The term{' '}
          <em className="text-cyber-cyan not-italic font-semibold">"CYBERSECURITY"</em> applies in a
          variety of contexts, from business to mobile computing, and can be divided into a few
          common categories:
        </motion.p>

        {/* ── Search / filter ───────────────────────────── */}
        <motion.div {...fadeUp(0.3)} className="flex justify-center mb-10">
          <label htmlFor="cs-search" className="sr-only">Search cybersecurity categories</label>
          <div className="relative w-full max-w-md">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-muted"
              aria-hidden="true"
            />
            <input
              id="cs-search"
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Filter categories…"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-cyber-card border border-cyber-border
                         text-cyber-text placeholder:text-cyber-muted/60 focus:outline-none
                         focus:border-cyber-cyan/60 focus:shadow-glow-sm transition-all"
            />
          </div>
        </motion.div>

        {/* ── Flip cards grid ───────────────────────────── */}
        <div role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-cyber-muted font-mono py-10">
              No results for "{query}"
            </p>
          )}

          {filtered.map((cat, i) => (
            <motion.div
              key={cat.id}
              role="listitem"
              {...fadeUp(0.05 * i)}
              /* flip-scene sets perspective + h-64; hover triggers the flip via CSS */
              className="flip-scene"
              aria-label={cat.title}
              tabIndex={0}
            >
              {/* flip-inner rotates on hover */}
              <div className="flip-inner">

                {/* ── Front face ──────────────────────── */}
                <div className="flip-face neon-border">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* gradient overlay so title is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg leading-snug drop-shadow-lg">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* ── Back face ───────────────────────── */}
                <div className="flip-face flip-face-back">
                  <p className="text-cyber-muted text-sm leading-relaxed text-center">
                    {cat.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ── YouTube embed ─────────────────────────────── */}
        <motion.div {...fadeUp(0.1)} className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-cyber-text mb-2">
            Learn More About Cybersecurity
          </h3>
          <p className="text-cyber-muted text-sm mb-6">
            Watch the video below for a deeper dive.
          </p>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden
                          border border-cyber-border shadow-glow-sm">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/inWWhr5tnEA?si=WjL2KeciRzvRvTZG"
              title="Cybersecurity explainer video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
