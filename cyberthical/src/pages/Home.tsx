/**
 * Home — index page composed from section components.
 */
import Hero                  from '../components/Hero';
import CybersecurityOverview from '../components/CybersecurityOverview';
import EthicalHackingGrid    from '../components/EthicalHackingGrid';
import HackerTypes           from '../components/HackerTypes';
import FAQAccordion          from '../components/FAQAccordion';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <CybersecurityOverview />
      <EthicalHackingGrid />
      <HackerTypes />
      <FAQAccordion />
    </main>
  );
}
