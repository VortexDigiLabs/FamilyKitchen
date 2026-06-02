import { Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="pt-20 pb-10 border-t" style={{
      backgroundColor: "var(--bg-secondary)",
      borderColor: "var(--border-color)"
    }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block font-serif text-3xl font-semibold tracking-wider mb-6" style={{
              color: "var(--text-primary)"
            }}>
              Family Kitchen<span className="text-gold-400">.</span>
            </a>
            <p className="font-light text-sm leading-relaxed mb-6" style={{
              color: "var(--text-secondary)"
            }}>
              Salt-of-the-earth family restaurant. Butcher's Choice cuts and generational family recipes.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1DeewEb5nv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-300"
                style={{
                  backgroundColor: theme === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
                  color: "var(--text-secondary)"
                }}
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6" style={{ color: "var(--text-primary)" }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 font-light text-sm" style={{ color: "var(--text-secondary)" }}>
                <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
                <span>509 Pretoria Road, Shop nr 13,<br />Fairleads, Benoni, 1501</span>
              </li>
              <li className="flex items-center gap-3 font-light text-sm" style={{ color: "var(--text-secondary)" }}>
                <MessageCircle className="w-5 h-5 text-gold-400 shrink-0" />
                <a
                  href="https://chat.whatsapp.com/KlhogF8oi3D3dqaqhzfw4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  WhatsApp Group
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp Contacts */}
          <div>
            <h4 className="font-serif text-xl mb-6" style={{ color: "var(--text-primary)" }}>WhatsApp Contacts</h4>
            <ul className="space-y-3 text-sm font-light" style={{ color: "var(--text-secondary)" }}>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <a
                  href="https://wa.me/27768563878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  Anthea: 076 856 3878
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <a
                  href="https://wa.me/27793813662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  Rudi: 079 381 3662
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <a
                  href="https://wa.me/27663022876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  Stefhanie: 066 302 2876
                </a>
              </li>
            </ul>
          </div>

          {/* Trading Hours */}
          <div>
            <h4 className="font-serif text-xl mb-6" style={{ color: "var(--text-primary)" }}>Trading Hours</h4>
            <ul className="space-y-3 text-sm font-light" style={{ color: "var(--text-secondary)" }}>
              <li className="flex justify-between border-b pb-2" style={{ borderColor: "var(--border-color)" }}>
                <span>Monday - Saturday</span>
                <span style={{ color: "var(--text-primary)" }}>08:00 - 21:00</span>
              </li>
              <li className="flex justify-between border-b pb-2" style={{ borderColor: "var(--border-color)" }}>
                <span>Sunday</span>
                <span style={{ color: "var(--text-primary)" }}>08:30 - 16:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "var(--border-color)" }}>
          <p className="text-xs font-light" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} Family Kitchen. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-light" style={{ color: "var(--text-secondary)" }}>
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
