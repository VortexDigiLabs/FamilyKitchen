import { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-charcoal-950/90 backdrop-blur-md py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <UtensilsCrossed className="w-6 h-6 text-gold-400 transition-transform group-hover:scale-110 duration-300" />
          <span className="font-serif text-2xl font-semibold tracking-wider text-white">
            Family Restaurant<span className="text-gold-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#reservations"
            className="px-6 py-2.5 border border-gold-400 text-gold-400 text-sm uppercase tracking-widest hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-300"
          >
            Book Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-gold-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-charcoal-950 border-t border-white/10 shadow-2xl">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-4 text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-6 pb-2">
              <a
                href="#reservations"
                className="block text-center px-6 py-3 bg-gold-400 text-charcoal-950 text-sm uppercase tracking-widest font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
