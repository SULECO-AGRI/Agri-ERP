import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Hero, TrustBar } from "./components/Hero";
import { OrbitSection } from "./components/OrbitSection";
import { AgriculturalServices } from "./components/AgriculturalServices";
import { PlatformWorkflow } from "./components/PlatformWorkflow";
import { ValueAndWhySpatio } from "./components/ValueAndWhySpatio";
import { SolutionsPage } from "./pages/SolutionsPage";
import { PricingPage } from "./pages/PricingPage";
import { AboutPage } from "./pages/AboutPage";
import { DemoPage } from "./pages/DemoPage";
import { ContactPage } from "./pages/ContactPage";
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
        ? "Spatio Agri — Smart Plantation & Agriculture Operating System"
        : `Spatio Agri — ${page[0].toUpperCase()}${page.slice(1)}`;
  }, [page]);

  return (
    <div className="min-h-screen bg-white">
      <NavBar page={page} onNavigate={navigate} />

      <main key={page} className="animate-fadeUp">
        {page === "home" && (
          <>
            <Hero onNavigate={navigate} />
            <AgriculturalServices onNavigate={navigate} />
            <PlatformWorkflow onNavigate={navigate} />
            <OrbitSection onNavigate={navigate} />
            <TrustBar />
            <ValueAndWhySpatio onNavigate={navigate} />
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
