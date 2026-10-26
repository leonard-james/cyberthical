/**
 * App — router root. All pages share the Navbar + Footer shell.
 * Smooth scroll restoration on route changes.
 */
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar    from './components/Navbar';
import Footer    from './components/Footer';
import Home      from './pages/Home';
import LearnMore from './pages/LearnMore';
import Features  from './pages/Features';
import Team      from './pages/Team';

/**
 * Scroll to top on route change.
 * Uses requestAnimationFrame so the new page renders first,
 * then jumps instantly — this prevents the scroll event from
 * firing mid-navigation and interrupting the navbar animation.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // rAF ensures the new route has painted before we reset scroll,
    // so the navbar's scroll listener doesn't fire during the
    // layoutId spring animation.
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      {/* Skip-to-content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100]
                   focus:px-4 focus:py-2 focus:bg-cyber-cyan focus:text-cyber-bg focus:rounded-lg
                   focus:font-semibold"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/"           element={<Home />}      />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/features"   element={<Features />}  />
        <Route path="/team"       element={<Team />}      />
        {/* Catch-all → home */}
        <Route path="*"           element={<Home />}      />
      </Routes>

      <Footer />
    </>
  );
}
