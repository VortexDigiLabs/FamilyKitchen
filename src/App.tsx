import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import QuantityStepperOverlay from "./components/QuantityStepperOverlay";
import AdminDashboard from "./components/AdminDashboard";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AssetProvider } from "./context/AssetContext";

export default function App() {
  // Simple native router
  const [path, setPath] = useState(() => window.location.pathname.toLowerCase());
  const [hash, setHash] = useState(() => window.location.hash.toLowerCase());

  useEffect(() => {
    const handleUrlChange = () => {
      setPath(window.location.pathname.toLowerCase());
      setHash(window.location.hash.toLowerCase());
    };
    
    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("hashchange", handleUrlChange);
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("hashchange", handleUrlChange);
    };
  }, []);

  const isDashboardRoute = 
    path === "/admin" || 
    path === "/dashboard" || 
    hash === "#admin" || 
    hash === "#dashboard";

  const navigateToAdmin = () => {
    window.history.pushState({}, "", "/admin");
    window.dispatchEvent(new Event("popstate"));
  };

  const navigateToHome = () => {
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new Event("popstate"));
  };

  if (isDashboardRoute) {
    return (
      <ThemeProvider>
        <AssetProvider>
          <AdminDashboard onBackToHome={navigateToHome} />
        </AssetProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <AssetProvider>
        <CartProvider>
          <div className="min-h-screen bg-charcoal-950 flex flex-col relative">
            <Navbar onOpenAdmin={navigateToAdmin} />
            <CartDrawer />
            <QuantityStepperOverlay />
            <main className="flex-grow">
              <Hero />
              <About />
              <Menu />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AssetProvider>
    </ThemeProvider>
  );
}
