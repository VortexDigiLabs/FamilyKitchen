import { useState } from "react";
import FadeIn from "./FadeIn";
import { useCart } from "../context/CartContext";
import { categories, menuItems } from "../data/menuData";
import { Plus } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();
  const { theme } = useTheme();

  const filteredMenu =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-24 md:py-32 border-y"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 block">
            Gastronomy
          </span>
          <h2 className="text-4xl md:text-5xl mb-8">Our Signature Menu</h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors duration-300 ${
                    activeCategory === category
                      ? "border-gold-400 text-gold-400"
                      : "border-transparent"
                }`}
                  style={{
                    color:
                      activeCategory === category
                        ? "#d4af37"
                        : "var(--text-secondary)",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredMenu.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1} direction="up">
              <div className="group flex flex-col sm:flex-row gap-6 items-start">
                {item.image && (
                  <div className="w-full sm:w-32 h-48 sm:h-32 shrink-0 overflow-hidden rounded-sm relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      crossOrigin="anonymous"
                    />
                    {item.isMealOfDay && (
                      <div className="absolute top-2 left-2 bg-gold-400 text-charcoal-950 text-[10px] font-bold uppercase tracking-[0.15em] px-2 py-1 rounded-sm">
                        Special
                      </div>
                    )}
                  </div>
                )}
                <div className="flex-grow w-full">
                  <div className="flex justify-between items-baseline mb-2 gap-4">
                    <h3 className="text-xl">{item.name}</h3>
                    <div className="flex-grow border-t border-dashed relative top-[-6px]" style={{ borderColor: "var(--border-color)" }} />
                    <span className="text-xl text-gold-400">R{item.price.toFixed(2)}</span>
                  </div>
                  {item.description && (
                    <p
                      className="mb-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.description}
                    </p>
                  )}
                  <button
                    onClick={() => addToCart(item)}
                    className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 hover:text-white transition-colors"
                  >
                    <Plus className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
