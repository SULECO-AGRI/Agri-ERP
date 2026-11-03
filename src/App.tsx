import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Hero, TrustBar } from "./components/Hero";
import { OrbitSection } from "./components/OrbitSection";
import { AgriculturalServices } from "./components/AgriculturalServices";
import { PlatformWorkflow } from "./components/PlatformWorkflow";
import { ValueAndWhySpatio } from "./components/ValueAndWhySpatio";
import { SolutionsPage } from "./pages/SolutionsPage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import type { Page } from "./nav";

const VALID_PAGES: Page[] = ["home", "products", "solutions", "about", "demo", "contact", "pricing"];

function getPageFromPath(): Page {
  const clean = window.location.pathname.replace(/^\/|\/$/g, "").toLowerCase();
  if (!clean || clean === "home") return "home";
  if (VALID_PAGES.includes(clean as Page)) return clean as Page;
  return "home";
}

function App() {
  const [page, setPage] = useState<Page>(getPageFromPath);

  const navigate = (p: Page, replace = false) => {
    setPage(p);
    const targetPath = p === "home" ? "/" : `/${p}`;
    if (window.location.pathname !== targetPath) {
      if (replace) {
        window.history.replaceState({ page: p }, "", targetPath);
      } else {
        window.history.pushState({ page: p }, "", targetPath);
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
        {(page === "products" || page === "pricing") && <ProductsPage onNavigate={navigate} />}
        {page === "about" && <AboutPage onNavigate={navigate} />}
        {(page === "demo" || page === "contact") && <ContactPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
