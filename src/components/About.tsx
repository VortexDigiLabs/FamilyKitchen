import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  return (
    <section id="about" className="py-24 md:py-32 relative" style={{
      backgroundColor: "var(--bg-primary)"
    }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <img
                  src="https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780225180/xbsm9dan5wgv4tfmmsov.jpg"
                  alt="Kiddos Meal Menu Poster"
                  className="w-full h-auto object-contain rounded-sm shadow-xl"
                  crossOrigin="anonymous"
                />
                {/* Decorative border */}
                <div className="absolute -inset-4 border rounded-sm -z-10 hidden md:block translate-x-8 translate-y-8" style={{
                  borderColor: "rgba(212, 175, 55, 0.3)"
                }} />
              </div>
            </FadeIn>


          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <span className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 block">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Heart of the Home & <br />
                <span className="italic" style={{ color: "var(--text-secondary)" }}>The Butcher's Edge</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mb-6 font-light leading-relaxed text-lg" style={{ color: "var(--text-secondary)" }}>
                Rooted in the traditions of our Oumas and Mas, Family Kitchen celebrates the essence of home-cooked heritage. Every recipe tells a story of generations past, freshly prepared for you to enjoy at our shop.
              </p>
              <p className="mb-10 font-light leading-relaxed text-lg" style={{ color: "var(--text-secondary)" }}>
                Beyond the comforting classics, we pride ourselves on <strong style={{ color: "var(--text-primary)" }}>The Butcher's Edge</strong>. Drawing from a professional butchery background, we source and age the finest cuts. Whether it's our Signature 30cm Monster Burgers or our beautifully marbled Aged Ribeye, you are tasting the pinnacle of meat craftsmanship.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex items-center gap-6">
                <img
                  src="/butcher_profile.png"
                  alt="Head Butcher & Chef"
                  className="w-16 h-16 rounded-full object-cover border-2"
                  style={{ borderColor: "rgba(212, 175, 55, 0.5)" }}
                />
                <div>
                  <p className="font-serif text-xl" style={{ color: "var(--text-primary)" }}>The Family</p>
                  <p className="text-sm text-gold-400 uppercase tracking-wider">Master Butchers & Chefs</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
