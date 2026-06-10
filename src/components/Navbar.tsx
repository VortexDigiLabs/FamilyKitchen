import { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ onOpenAdmin }: { onOpenAdmin: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
  ];

  return (
    <nav
      style={{
        backgroundColor: isScrolled
          ? "var(--bg-secondary)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.3)"
          : "none",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <UtensilsCrossed className="w-6 h-6 text-gold-400 transition-transform group-hover:scale-110 duration-300" />
          <span className="font-serif text-2xl font-semibold tracking-wider">
            Family Kitchen<span className="text-gold-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={onOpenAdmin}
                className="text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300 cursor-pointer font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Admin
              </button>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-400 hover:text-charcoal-950 transition-colors cursor-pointer"
            style={{ color: "var(--text-primary)" }}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <a
            href="https://chat.whatsapp.com/KlhogF8oi3D3dqaqhzfw4d"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-gold-400 text-gold-400 text-sm uppercase tracking-widest hover:bg-gold-400 transition-all duration-300"
            style={
              theme === "light"
                ? { color: "#0a0a0a" }
                : {}
            }
          >
            Order via WhatsApp
          </a>
        </div>

        {/* Mobile Nav Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            style={{ color: "var(--text-primary)" }}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            className="text-gray-400 hover:text-gold-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderTop: "1px solid var(--border-color)",
          }}
          className="md:hidden absolute top-full left-0 right-0 shadow-2xl"
        >
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-4 text-sm uppercase tracking-widest border-b transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                    borderBottomColor: "var(--border-color)",
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  onOpenAdmin();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left block py-4 text-sm uppercase tracking-widest border-b transition-colors"
                style={{
                  color: "var(--text-secondary)",
                  borderBottomColor: "var(--border-color)",
                }}
              >
                Admin Panel
              </button>
            </li>
            <li className="pt-6 pb-2">
              <a
                href="https://chat.whatsapp.com/KlhogF8oi3D3dqaqhzfw4d"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-gold-400 text-charcoal-950 text-sm uppercase tracking-widest font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Order via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
