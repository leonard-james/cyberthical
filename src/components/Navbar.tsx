/**
 * Navbar — sticky, glassmorphic, collapsible on mobile.
 *
 * Active-link underline uses useLocation() to derive the active route
 * once, at the top level, so the indicator never flickers during scroll.
 * The layoutId animation is driven by a single <motion.span> rendered
 * absolutely under the active item — not remounted per item — which
 * prevents the "jumping" caused by each NavLink re-evaluating isActive
 * on every scroll-triggered re-render.
 */
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { to: '/',           label: 'Home'       },
  { to: '/learn-more', label: 'Learn More' },
  { to: '/features',   label: 'Features'   },
  { to: '/team',       label: 'Team'       },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname }            = useLocation();

  /* Background opacity on scroll — does NOT affect active-link state */
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setScrolled(window.scrollY > 40);
      }, 30);
    };
    setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const close = () => setOpen(false);

  /* Determine active route once, stably */
  const activeRoute = NAV_LINKS.slice()
    .reverse()
    .find(link =>
      link.to === '/'
        ? pathname === '/'
        : pathname.startsWith(link.to)
    )?.to ?? '/';

  return (
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-bg/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-cyber-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────── */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="CYBERTHICAL Home"
          onClick={close}
        >
          <Shield
            className="w-7 h-7 text-cyber-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,242,254,0.9)] transition-all"
            aria-hidden="true"
          />
          <span className="font-mono font-bold text-lg tracking-widest text-cyber-cyan text-glow-cyan">
            CYBERTHICAL
          </span>
        </Link>

        {/* ── Desktop nav ──────────────────────────────── */}
        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label }) => {
            const isActive = to === activeRoute;
            return (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={close}
                className={`relative px-4 py-1.5 text-sm font-medium tracking-wide rounded-md
                            transition-colors duration-200 ${
                              isActive
                                ? 'text-cyber-cyan text-glow-cyan'
                                : 'text-cyber-muted hover:text-cyber-text'
                            }`}
              >
                {label}

                {/* Single indicator anchored to the active item — stable layoutId */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-cyber-cyan shadow-glow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* ── Mobile hamburger ─────────────────────────── */}
        <button
          className="xl:hidden p-2 rounded-md text-cyber-muted hover:text-cyber-cyan transition-colors"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mobile dropdown ──────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden bg-cyber-surface/95 backdrop-blur-lg border-t border-cyber-border"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col py-2 px-4">
              {NAV_LINKS.map(({ to, label }) => {
                const isActive = to === activeRoute;
                return (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === '/'}
                      onClick={close}
                      className={`block py-3 px-2 text-sm font-medium border-b border-cyber-border/50
                                  last:border-0 transition-colors ${
                                    isActive
                                      ? 'text-cyber-cyan text-glow-cyan'
                                      : 'text-cyber-muted hover:text-cyber-text'
                                  }`}
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}