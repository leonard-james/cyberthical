/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cyber Dark palette
        cyber: {
          bg:      '#0a0f1d',
          surface: '#111827',
          card:    '#0d1424',
          border:  '#1e293b',
          cyan:    '#00f2fe',
          teal:    '#0ea5e9',
          emerald: '#10b981',
          red:     '#ef4444',
          yellow:  '#f59e0b',
          muted:   '#94a3b8',
          text:    '#e2e8f0',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'cyber-grid': `linear-gradient(rgba(0,242,254,0.04) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(0,242,254,0.04) 1px, transparent 1px)`,
        'glow-cyan':  'radial-gradient(ellipse at center, rgba(0,242,254,0.15) 0%, transparent 70%)',
        'glow-green': 'radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'glow-cyan':    '0 0 20px rgba(0,242,254,0.3), 0 0 40px rgba(0,242,254,0.1)',
        'glow-emerald': '0 0 20px rgba(16,185,129,0.3), 0 0 40px rgba(16,185,129,0.1)',
        'glow-sm':      '0 0 10px rgba(0,242,254,0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'scan-line':  'scanLine 4s linear infinite',
      },
      keyframes: {
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
