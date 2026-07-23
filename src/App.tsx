import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Hero, TrustBar } from './components/Hero';
import { Pillars } from './components/Pillars';
import { InteractiveCallout } from './components/InteractiveCallout';
import { OrbitSection } from './components/OrbitSection';
import { SolutionsPage } from './components/SolutionsPage';
import { PricingPage } from './components/PricingPage';
import { AboutPage } from './components/AboutPage';
import { DemoPage } from './components/DemoPage';
import type { Page } from './nav';

function App() {
  const [page, setPage] = useState<Page>('home');

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  useEffect(() => {
    document.title =
      page === 'home'
        ? 'AgriCore — The Operating System for Modern Agriculture'
        : `AgriCore — ${page[0].toUpperCase()}${page.slice(1)}`;
  }, [page]);

  return (
    <div className="min-h-screen bg-white">
      <NavBar page={page} onNavigate={navigate} />

      <main key={page} className="animate-fadeUp">
        {page === 'home' && (
          <>
            <Hero onNavigate={navigate} />
            <TrustBar />
            <OrbitSection />
            <Pillars />
            <InteractiveCallout />
          </>
        )}
        {page === 'solutions' && <SolutionsPage onNavigate={navigate} />}
        {page === 'pricing' && <PricingPage onNavigate={navigate} />}
        {page === 'about' && <AboutPage onNavigate={navigate} />}
        {page === 'demo' && <DemoPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
