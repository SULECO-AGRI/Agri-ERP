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

const PAGE_METADATA: Record<Page, { title: string; description: string }> = {
  home: {
    title: "Spatio Agri — Smart Plantation Management & Agricultural ERP",
    description:
      "Unified digital operating platform for commercial agricultural plantations. Track field operations, worker attendance, crop harvest logs, and piece-rate payroll.",
  },
  solutions: {
    title: "Field Operations & Solutions — Spatio Agri ERP",
    description:
      "Explore Spatio Agri modules: field tracking, worker directories, daily geofenced attendance, task management, harvest logging, store inventory, and payroll.",
  },
  products: {
    title: "Agricultural ERP Platforms & Hardware — Spatio Agri",
    description:
      "Explore Spatio Agri's software suite and precision agriculture hardware: mobile field apps, enterprise web portal, IoT telemetry, and drone surveys.",
  },
  about: {
    title: "About Us & Partners — Spatio Agri & Spatio Data Solutions",
    description:
      "Learn about Spatio Agri, Spatio Data Solutions (SDS), and our institutional partnerships with the Ministry of Agriculture, Survey Department, CAA, and Access.",
  },
  contact: {
    title: "Contact Us & Request Enterprise Demo — Spatio Agri",
    description:
      "Get in touch with Spatio Agri. Schedule a plantation walkthrough, request a quote, or call our direct hotline at +94 77 330 1274.",
  },
  demo: {
    title: "Request Live Plantation Demo — Spatio Agri",
    description:
      "Request an interactive walkthrough of Spatio Agri tailored to your commercial estate, tea plantation, or coconut farm.",
  },
  pricing: {
    title: "Plans & Enterprise Pricing — Spatio Agri",
    description:
      "Scalable digital plantation management plans for commercial farms, private estates, and regional plantation companies.",
  },
};

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
    const meta = PAGE_METADATA[page] || PAGE_METADATA.home;
    document.title = meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", meta.description);
    }

    const currentOrigin =
      typeof window !== "undefined" && window.location.origin.includes("spatio")
        ? window.location.origin
        : "https://agri.spatiosds.com";
    const fullUrl = `${currentOrigin}${page === "home" ? "/" : `/${page}`}`;

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", fullUrl);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", fullUrl);
    }
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
