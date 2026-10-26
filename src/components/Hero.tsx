/**
 * Hero — full-viewport auto-playing image carousel with
 * crossfade transitions, cyber-grid overlay, and animated headline.
 */
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { heroSlides } from '../data/content';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);

  const next = useCallback(
    () => setCurrent(c => (c + 1) % heroSlides.length),
    []
  );
  const prev = () =>
    setCurrent(c => (c - 1 + heroSlides.length) % heroSlides.length);

  /* Auto-play every 5 s */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      id="hero"
      aria-label="Hero carousel"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slides ──────────────────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={heroSlides[current].src}
          alt={heroSlides[current].alt}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* ── Overlays ──────────────────────────────────────── */}
      {/* Gradient */}
      <div className="hero-overlay absolute inset-0 z-10" aria-hidden="true" />
      {/* Cyber grid */}
      <div
        className="absolute inset-0 z-10 bg-cyber-grid bg-grid opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full glass border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs tracking-widest uppercase"
        >
          <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
          Cybersecurity &amp; Ethical Hacking Educational Portal
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight"
        >
          <span className="text-cyber-cyan text-glow-cyan">CYBER</span>
          <span className="text-white">SECURITY</span>
          <br />
          <span className="text-cyber-emerald text-glow-green">&amp; ETHICAL HACKING</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-2xl text-cyber-muted text-base sm:text-lg mb-8 font-mono"
        >
          "Unmasking Threats, Strengthening Security — Where Awareness Meets Action."
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#cybersecurity"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,242,254,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-3.5 rounded-full font-semibold text-sm tracking-wider
                     bg-gradient-to-r from-cyber-cyan to-cyber-teal text-cyber-bg
                     shadow-glow-cyan transition-all duration-200"
        >
          Get Started
        </motion.a>
      </div>

      {/* ── Prev / Next controls ──────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass
                   text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/50
                   transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass
                   text-cyber-muted hover:text-cyber-cyan hover:border-cyber-cyan/50
                   transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ── Dot indicators ────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Slide indicators"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"
      >
        {heroSlides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-6 h-2 bg-cyber-cyan shadow-glow-sm'
                : 'w-2 h-2 bg-cyber-muted/50 hover:bg-cyber-muted'
            }`}
          />
        ))}
      </div>

      {/* ── Scroll hint ───────────────────────────────────── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-6 right-6 z-20 hidden sm:flex flex-col items-center gap-1
                   text-cyber-muted/60 text-xs font-mono"
        aria-hidden="true"
      >
        <span>SCROLL</span>
        <span className="h-5 w-px bg-cyber-muted/40" />
      </motion.div>
    </section>
  );
}
