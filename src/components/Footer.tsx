/**
 * Footer — credits preserved verbatim (UpConstruction / BootstrapMade).
 */
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      id="footer"
      role="contentinfo"
      className="bg-cyber-card border-t border-cyber-border"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center gap-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <Shield
            className="w-6 h-6 text-cyber-cyan group-hover:drop-shadow-[0_0_6px_rgba(0,242,254,0.8)] transition-all"
            aria-hidden="true"
          />
          <span className="font-mono font-bold text-base tracking-widest text-cyber-cyan">
            CYBERTHICAL
          </span>
        </Link>

        {/* Quick links */}
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { to: '/',            label: 'Home'       },
            { to: '/learn-more',  label: 'Learn More' },
            { to: '/features',    label: 'Features'   },
            { to: '/team',        label: 'Team'       },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-cyber-muted hover:text-cyber-cyan text-sm transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full border-t border-cyber-border" />

        {/* Copyright — preserved verbatim */}
        <p className="text-cyber-muted text-xs text-center">
          © <span>Copyright</span>{' '}
          <strong className="text-cyber-text">UpConstruction</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        <p className="text-cyber-muted text-xs text-center">
          Designed by{' '}
          <a
            href="https://bootstrapmade.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-cyan hover:underline"
          >
            BootstrapMade
          </a>
        </p>
      </div>
    </footer>
  );
}
