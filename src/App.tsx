import { useState } from "react";
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
import { Settings } from "lucide-react";

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <ThemeProvider>
      <AssetProvider>
        <CartProvider>
          <div className="min-h-screen bg-charcoal-950 flex flex-col relative">
            <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />
            <CartDrawer />
            <QuantityStepperOverlay />
            <main className="flex-grow">
              <Hero />
              <About />
              <Menu />
            </main>
            <Footer />

            {/* Admin Dashboard Gear Button (Bottom Left) */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="fixed bottom-10 left-10 z-40 p-4 rounded-full border bg-charcoal-900/90 border-gold-400/30 hover:border-gold-400 text-gold-400 hover:text-white transition-all shadow-xl hover:scale-110 flex items-center justify-center group"
              style={{ backdropFilter: "blur(8px)" }}
              title="Open Asset Dashboard"
            >
              <Settings className="w-5 h-5 transition-transform group-hover:rotate-45 duration-500" />
            </button>

            {/* Admin Dashboard Sidebar Overlay */}
            {isAdminOpen && (
              <AdminDashboard onClose={() => setIsAdminOpen(false)} />
            )}
          </div>
        </CartProvider>
      </AssetProvider>
    </ThemeProvider>
  );
}
