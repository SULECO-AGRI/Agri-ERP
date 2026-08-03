import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Hero, TrustBar } from "./components/Hero";
import { InteractiveCallout } from "./components/InteractiveCallout";
import { OrbitSection } from "./components/OrbitSection";
import { AgriculturalServices } from "./components/AgriculturalServices";
import { StatsBanner } from "./components/StatsBanner";
import { SolutionsPage } from "./pages/SolutionsPage";
import { PricingPage } from "./pages/PricingPage";
import { AboutPage } from "./pages/AboutPage";
import { DemoPage } from "./pages/DemoPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQSection } from "./components/FAQSection";
import type { Page } from "./nav";

function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  useEffect(() => {
    document.title =
      page === "home"
        ? "AgriCore — The Operating System for Modern Agriculture"
        : `AgriCore — ${page[0].toUpperCase()}${page.slice(1)}`;
  }, [page]);

  return (
    <div className="min-h-screen bg-white">
      <NavBar page={page} onNavigate={navigate} />

      <main key={page} className="animate-fadeUp">
        {page === "home" && (
          <>
            <Hero onNavigate={navigate} />
            <AgriculturalServices onNavigate={navigate} />
            <StatsBanner />
            <OrbitSection />
            <TrustBar />
            <InteractiveCallout />
            <FAQSection />
          </>
        )}
        {page === "solutions" && <SolutionsPage onNavigate={navigate} />}
        {page === "pricing" && <PricingPage onNavigate={navigate} />}
        {page === "about" && <AboutPage onNavigate={navigate} />}
        {page === "demo" && <DemoPage />}
        {page === "contact" && <ContactPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
