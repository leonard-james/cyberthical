# CYBERTHICAL

> **Cybersecurity & Ethical Hacking** — an interactive educational portal built with React, Vite, and Tailwind CSS.

---

## Overview

CYBERTHICAL is a fully modernized single-page application rebuilt from a static Bootstrap/HTML site. It covers the fundamentals of cybersecurity and ethical hacking through interactive cards, animated sections, live search filters, a FAQ accordion, and embedded interactive security tools.

---

## Tech Stack

| Layer       | Technology                          | Version   |
|-------------|-------------------------------------|-----------|
| Framework   | React + TypeScript                  | 18 / 5.5  |
| Bundler     | Vite                                | 7         |
| Styling     | Tailwind CSS (custom cyber theme)   | 3.4       |
| Animations  | Framer Motion                       | 11        |
| Icons       | Lucide React                        | 0.441     |
| Routing     | React Router DOM                    | 6.26      |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Web-System-and-Technology.git
cd Web-System-and-Technology/cyberthical

# Install dependencies
npm install

# Start the development server
npm run dev
# → http://localhost:5173
```

### Available Scripts

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start local dev server (HMR)       |
| `npm run build`   | Type-check + production build      |
| `npm run preview` | Preview the production build locally |

---

## Pages & Routes

| Route         | Page         | Content                                              |
|---------------|--------------|------------------------------------------------------|
| `/`           | Home         | Hero carousel, Cybersecurity overview, Ethical Hacking grid, Hacker types, FAQ |
| `/learn-more` | Learn More   | Tabbed sections — Online Safety, Cyber Threats, AI-Driven Security |
| `/features`   | Features     | Cyberthreat Map, Password Strength Analyzer, Interactive Phishing Test |
| `/team`       | Team         | Member cards with social links and personal quotes   |

---

## Project Structure

```
cyberthical/
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite config — publicDir points to ../assets
├── tailwind.config.js          # Custom cyber dark colour palette
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
├── package.json
└── src/
    ├── App.tsx                 # BrowserRouter shell + ScrollToTop
    ├── main.tsx                # ReactDOM.createRoot entry
    ├── index.css               # Tailwind layers, flip card CSS, global utilities
    ├── lucide-react.d.ts       # Ambient type declarations for Lucide icons
    ├── data/
    │   └── content.ts          # All site content — zero data loss from original
    ├── components/
    │   ├── Navbar.tsx          # Fixed glassmorphic nav, mobile hamburger, stable active indicator
    │   ├── Hero.tsx            # Auto-playing crossfade carousel (6 slides)
    │   ├── CybersecurityOverview.tsx   # 6 CSS 3D flip cards + live search + YouTube embed
    │   ├── EthicalHackingGrid.tsx      # 10 hacking type cards (5×2 grid) + detail modal + live search
    │   ├── HackerTypes.tsx     # White / Gray / Black hat cards with colour-coded glow
    │   ├── FAQAccordion.tsx    # Animated accordion (6 Q&A items)
    │   └── Footer.tsx          # Site links + original UpConstruction/BootstrapMade credits
    └── pages/
        ├── Home.tsx            # Composes all home sections
        ├── LearnMore.tsx       # Animated tab switcher (3 topics)
        ├── Features.tsx        # Feature cards + fullscreen iframe overlay
        └── Team.tsx            # Member cards + quote section
```

---

## Key Features

- **Hero Carousel** — auto-playing 6-slide crossfade with pause-on-hover, prev/next controls, and dot indicators
- **Cybersecurity Flip Cards** — 6 CSS 3D flip cards with live search/filter
- **Ethical Hacking Grid** — 10 cards in a 5×2 layout with tag badges, hover glow, and a click-to-expand detail modal with live search
- **Hacker Types** — colour-coded White / Gray / Black Hat cards with neon border accents
- **FAQ Accordion** — smooth animated expand/collapse, one item open at a time
- **Interactive Tools** — Cyberthreat Map (Radware), Password Strength Analyzer, and Phishing Test each open fullscreen in an iframe overlay
- **Stable Navbar** — active underline uses `useLocation()` (not scroll events) so the spring animation never flickers mid-page
- **Responsive** — mobile-first layout with collapsible hamburger menu

---

## Image Assets

`vite.config.ts` sets `publicDir` to `../assets`, so the shared assets are
served from `/img/...` during development and copied into the production build
without including unrelated workspace or Git files.

```
Web-System-and-Technology/
├── assets/          ← served as static root by Vite
└── cyberthical/     ← React app
```

### Deploying

The Vite production build includes the shared image assets automatically.

For client-side routes on Vercel, keep the app's SPA fallback file in place by including a `vercel.json` rewrite so direct visits to `/learn-more`, `/features`, or `/team` resolve to `index.html` instead of returning a 404.

---

## Credits

© Copyright **UpConstruction** — All Rights Reserved  
Designed by [BootstrapMade](https://bootstrapmade.com/)

---

## Team

| Name                 | Course   | Role                        |
|----------------------|----------|-----------------------------|
| Bhea Marie Geul      | BSIT 2-2 | Developer & Designer        |
| Celena Scott         | BSIT 2-2 | Researcher & Tester         |
| Revin Gestiada       | BSIT 2-2 | Developer & Content         |
| Leonard James Gobris | BSIT 2-2 | Team Lead & Developer       |
