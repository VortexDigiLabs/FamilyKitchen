import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import QuantityStepperOverlay from "./components/QuantityStepperOverlay";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-charcoal-950 flex flex-col relative">
          <Navbar />
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
    </ThemeProvider>
  );
}
