import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Instagram, Facebook, ArrowRight, Menu as MenuIcon, X, ChevronRight } from "lucide-react";
import { cn } from "./lib/utils";

const LOGO_URL = "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/autumn-byteplus_a_I_only_need_the_logo.jpeg";
const HERO_IMAGE = "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/autumn-byteplus_a_Increase_the_text_si.jpeg";

const MENU_ITEMS = [
  {
    name: "Pap & Quarter Chicken",
    price: "R35",
    category: "mains",
    description: "Traditional pap served with a quarter chicken and your choice of sides.",
    image: "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/WhatsApp%20Image%202026-03-21%20at%2014.51.56%20(1).jpeg",
    special: false
  },
  {
    name: "Pap & Chuck",
    price: "R30",
    category: "mains",
    description: "Hearty pap with tender chuck meat in rich gravy.",
    image: "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/WhatsApp%20Image%202026-03-21%20at%2014.51.57%20(1).jpeg",
    special: false
  },
  {
    name: "Pap & Stew",
    price: "R50",
    category: "mains",
    description: "Traditional pap topped with slow-cooked stew.",
    image: "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/WhatsApp%20Image%202026-03-21%20at%2014.51.57%20(2).jpeg",
    special: true
  },
  {
    name: "Braaied Boerewors Roll",
    price: "R35",
    category: "rolls",
    description: "Lekker homemade boerewors, grilled and served in a fresh roll.",
    image: "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/WhatsApp%20Image%202026-03-21%20at%2014.51.57%20(1).jpeg",
    special: true
  },
  {
    name: "Russian Rolls & Chips",
    price: "R40",
    category: "rolls",
    description: "Tasty Russian sausages in a roll with crispy chips.",
    image: "https://z-cdn-media.chatglm.cn/files/4d1de408-e3a1-46bd-bae7-a9720a3356ad.jpeg?auth_key=1874098129-cc2ba75c44c84692a50b45f572394fda-0-c5c7dd2b0d812d6f15ba484232dabbe7",
    special: false
  },
  {
    name: "Grilled Hamburger with Chips",
    price: "R55",
    category: "rolls",
    description: "Juicy grilled hamburger patty with fresh toppings and crispy chips.",
    image: "https://z-cdn-media.chatglm.cn/files/951d6f5a-dc44-4c8d-a57e-2f19dd620c77.jpeg?auth_key=1874098129-13d4df1cc1ef4fecb5ae213ca53e859e-0-aa00af698aef2c1d535f340fcb37dc1f",
    special: false
  },
  {
    name: "Grilled Ham & Cheese",
    price: "R25",
    category: "rolls",
    description: "Classic grilled sandwich with ham and melted cheese.",
    image: "https://z-cdn-media.chatglm.cn/files/05693b66-ce7c-4118-bb30-9b578bd8dffa.jpeg?auth_key=1874098129-47aafb7e3c1a4db08e00170fee554623-0-48b074166b72869322154005a333fb98",
    special: false
  },
  {
    name: "Achar on the Side",
    price: "R5",
    category: "sides",
    description: "Traditional spicy pickle to complement your meal.",
    image: "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/WhatsApp%20Image%202026-03-21%20at%2014.51.58.jpeg",
    special: false
  },
  {
    name: "Ice Cold Drinks",
    price: "Various",
    category: "sides",
    description: "Coca-Cola, Fanta, Sprite and more available.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
    special: false
  }
];

const GALLERY_IMAGES = [
  "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/WhatsApp%20Image%202026-03-21%20at%2014.51.56%20(1).jpeg",
  "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/WhatsApp%20Image%202026-03-21%20at%2014.51.58%20(2).jpeg",
  "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/WhatsApp%20Image%202026-03-21%20at%2014.51.57%20(1).jpeg",
  "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/WhatsApp%20Image%202026-03-21%20at%2014.51.57%20(2).jpeg"
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-black/5 py-3" : "bg-transparent py-6"
        )}
      >
        <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10 shadow-sm transition-transform duration-500 group-hover:scale-105">
              <img src={LOGO_URL} alt="Family Kitchen Logo" className="w-full h-full object-cover" />
            </div>
            <span className={cn(
              "font-serif text-2xl font-semibold tracking-tight transition-colors duration-500",
              isScrolled ? "text-[#1A1A1A]" : "text-white"
            )}>
              Family Kitchen
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Menu", "Specials", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full",
                  isScrolled ? "text-[#1A1A1A]/70 hover:text-[#1A1A1A] after:bg-[#1A1A1A]" : "text-white/80 hover:text-white after:bg-white"
                )}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                isScrolled 
                  ? "bg-[#8B2F24] text-white border-[#8B2F24] hover:bg-[#7A281F]" 
                  : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#1A1A1A]"
              )}
            >
              Order Now
            </a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon className={cn("w-6 h-6", isScrolled ? "text-[#1A1A1A]" : "text-white")} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#FAF8F5] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10">
                  <img src={LOGO_URL} alt="Family Kitchen Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-serif text-2xl font-semibold text-[#1A1A1A]">Family Kitchen</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[#1A1A1A]">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-6">
              {["Menu", "Specials", "Gallery", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-[#1A1A1A] flex items-center justify-between border-b border-black/5 pb-4"
                >
                  {item}
                  <ChevronRight className="w-5 h-5 text-[#8B2F24]" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-[#8B2F24] text-white text-center py-4 rounded-xl font-medium"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={HERO_IMAGE} 
          alt="Family Kitchen Hero" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#1A1A1A]" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[30vh]"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl md:text-4xl text-white font-medium max-w-3xl mx-auto text-balance drop-shadow-lg mt-[168px] sm:mt-[96px]"
        >
          Delicious, freshly prepared meals made with love. From our family to your table — taste the difference of true homemade goodness.
        </motion.p>
      </motion.div>
    </section>
  );
}

function Specials() {
  return (
    <section id="specials" className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-medium mb-6">Weekly Specials</h2>
          <div className="w-16 h-[1px] bg-[#C9A962] mx-auto mb-6"></div>
          <p className="text-white/60 max-w-xl mx-auto text-lg font-light">
            Don't miss out on our delicious weekly deals — fresh, affordable, and made with love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              day: "Friday Special",
              title: "Braaied Boerewors Rolls",
              price: "R35",
              desc: "Lekker homemade boerewors rolls, grilled to perfection. Ice cold drinks also available.",
              img: "https://huprbedahpwszatolkce.supabase.co/storage/v1/object/public/Family%20Kitchen/WhatsApp%20Image%202026-03-21%20at%2014.51.57%20(2).jpeg"
            },
            {
              day: "Thursday Special",
              title: "Grilled Hamburger",
              price: "R55",
              desc: "Freshly made grilled hamburger with chips. Also available: Grilled Ham & Cheese for R25.",
              img: "https://z-cdn-media.chatglm.cn/files/951d6f5a-dc44-4c8d-a57e-2f19dd620c77.jpeg?auth_key=1874098129-13d4df1cc1ef4fecb5ae213ca53e859e-0-aa00af698aef2c1d535f340fcb37dc1f"
            }
          ].map((special, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={special.img} 
                  alt={special.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[#C9A962] text-xs font-medium tracking-widest uppercase block mb-2">{special.day}</span>
                    <h3 className="font-serif text-3xl font-medium">{special.title}</h3>
                  </div>
                  <span className="bg-[#8B2F24] text-white px-4 py-2 rounded-full font-medium shrink-0">{special.price}</span>
                </div>
                <p className="text-white/60 font-light leading-relaxed">{special.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const [activeTab, setActiveTab] = useState("all");
  const categories = [
    { id: "all", label: "All Items" },
    { id: "mains", label: "Mains" },
    { id: "rolls", label: "Rolls & Sandwiches" },
    { id: "sides", label: "Sides" }
  ];

  const filteredMenu = activeTab === "all" ? MENU_ITEMS : MENU_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-[#1A1A1A] mb-6">Crafted With Love</h2>
          <div className="w-16 h-[1px] bg-[#8B2F24] mx-auto mb-6"></div>
          <p className="text-[#8C8C8C] max-w-xl mx-auto text-lg font-light">
            Every dish is prepared fresh daily using quality ingredients and time-honored family recipes.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === cat.id 
                  ? "bg-[#1A1A1A] text-white" 
                  : "bg-white text-[#1A1A1A] border border-black/5 hover:border-black/20"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.name}
                className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden bg-[#F5F5F5]">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#8C8C8C]/30">
                      <span className="font-serif italic text-2xl">Family Kitchen</span>
                    </div>
                  )}
                  {item.special && (
                    <div className="absolute top-4 left-4 bg-[#8B2F24] text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                      Special
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#1A1A1A] font-semibold px-4 py-2 rounded-full shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-medium text-[#1A1A1A] mb-2">{item.name}</h3>
                  <p className="text-[#8C8C8C] font-light text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (hoveredIdx !== null) {
        setHoveredIdx(null);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hoveredIdx]);

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-[#1A1A1A] mb-4">From Our Kitchen</h2>
            <div className="w-16 h-[1px] bg-[#8B2F24]"></div>
          </div>
          <p className="text-[#8C8C8C] max-w-sm text-lg font-light">
            A glimpse of what we serve. Every plate tells a story of tradition and taste.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={cn(
                "relative rounded-2xl transition-all duration-500",
                idx === 0 || idx === 3 ? "aspect-square md:aspect-[3/4]" : "aspect-square",
                hoveredIdx === idx ? "z-50 scale-[1.5] md:scale-[1.75] shadow-2xl ring-4 ring-white" : "z-10 overflow-hidden"
              )}
            >
              <img 
                src={img} 
                alt="Gallery image" 
                className={cn(
                  "w-full h-full transition-all duration-500 rounded-2xl",
                  hoveredIdx === idx ? "object-contain bg-[#1A1A1A]" : "object-cover"
                )}
              />
              {hoveredIdx !== idx && (
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-[#1A1A1A] mb-6">Ready to Order?</h2>
            <div className="w-16 h-[1px] bg-[#8B2F24] mb-8"></div>
            <p className="text-[#8C8C8C] text-lg font-light mb-12 max-w-md">
              We're here to serve you delicious home-cooked meals. Reach out to place your order or ask about our daily specials.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#8B2F24]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#1A1A1A] mb-1">Location</h4>
                  <p className="text-[#8C8C8C] font-light">Crystal Park, Benoni</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-[#8B2F24]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#1A1A1A] mb-1">Call Us</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:0663022876" className="text-[#8C8C8C] font-light hover:text-[#8B2F24] transition-colors">Stephanie: 066 302 2876</a>
                    <a href="tel:0768563876" className="text-[#8C8C8C] font-light hover:text-[#8B2F24] transition-colors">Anthea: 076 856 3876</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 border border-black/5"
          >
            <h3 className="font-serif text-3xl font-medium text-[#1A1A1A] mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Name</label>
                  <input type="text" className="w-full bg-[#FAF8F5] border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B2F24] focus:ring-1 focus:ring-[#8B2F24] transition-all" placeholder="John Doe" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Phone</label>
                  <input type="tel" className="w-full bg-[#FAF8F5] border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B2F24] focus:ring-1 focus:ring-[#8B2F24] transition-all" placeholder="066 123 4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Message</label>
                <textarea rows={4} className="w-full bg-[#FAF8F5] border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B2F24] focus:ring-1 focus:ring-[#8B2F24] transition-all resize-none" placeholder="I'd like to order..."></textarea>
              </div>
              <button className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-medium hover:bg-[#8B2F24] transition-colors duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white">
              <img src={LOGO_URL} alt="Family Kitchen Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-medium">Family Kitchen</h3>
              <p className="text-white/50 text-sm font-light">Premium Home Cooked Meals</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#1A1A1A] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#1A1A1A] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} Family Kitchen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      <main>
        <Hero />
        <Specials />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
