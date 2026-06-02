import React, { useState } from "react";
import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARUSAL_IMAGES = [
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780405776/y45hiqdcbwgyrqr5omrv.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780405776/fjdibesaaqkkqdjnnoqm.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780405776/woidzdbr0ucwgchtixxq.jpg", // Start image (Index 2)
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/tni7bcxrfopdohznujto.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/yglatpbj0rgu1z3ghkja.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/ya67zo4gwoo9n3x6lkkx.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/nmueu1hroekuvu6ugzhy.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/qfwzl1yuo1a9nngaozfl.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419963/zaqo6w6rk8qt2fket1bi.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419961/bkhq7852pvs9zri1rdht.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419960/drsolg4j5zs2mkeog1ng.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419960/ocbqwnm2teckpxxw48kt.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419960/aa9qbwe0y7zphlsvdssq.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419960/g3paponj5zhjnalymem4.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419959/bxutkn8tb2neovqckr4r.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419959/sxbaqdyx57i452wsan2k.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419959/ft0k9q0o96oy9ujm9aho.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419958/jsxvjjo6turyhcrmb69h.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419958/iz36lm392krbnvayhmd2.jpg",
  "https://res.cloudinary.com/ddfuc0ktg/image/upload/v1780419958/ep7ymiadiudqhdz76qwq.jpg"
];

const MAX_VISIBILITY = 3;

interface CarouselCardProps {
  imageUrl: string;
  altText: string;
}

function CarouselCard({ imageUrl, altText }: CarouselCardProps) {
  return (
    <div className="carousel-card">
      <img
        src={imageUrl}
        alt={altText}
        crossOrigin="anonymous"
        loading="lazy"
      />
    </div>
  );
}

const getModulo = (n: number, m: number) => ((n % m) + m) % m;

function Carousel() {
  const [active, setActive] = useState(2); // Start at index 2 (third image)
  const count = CARUSAL_IMAGES.length;

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <button
          className="carousel-nav left"
          onClick={() => setActive((i) => i - 1)}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        
        {CARUSAL_IMAGES.map((url, i) => {
          const activeIdx = getModulo(active, count);
          let diff = i - activeIdx;
          
          // Shortest path circular calculations
          if (diff > count / 2) diff -= count;
          if (diff < -count / 2) diff += count;

          const offset = diff / 3;
          const direction = Math.sign(diff);
          const absOffset = Math.abs(diff) / 3;
          const isActive = i === activeIdx;

          return (
            <div
              key={url}
              className="card-container"
              style={{
                "--active": isActive ? 1 : 0,
                "--offset": offset,
                "--direction": direction,
                "--abs-offset": absOffset,
                pointerEvents: isActive ? "auto" : "none",
                opacity: absOffset >= MAX_VISIBILITY ? "0" : "1",
                display: absOffset > MAX_VISIBILITY ? "none" : "block",
                zIndex: isActive ? 10 : 5 - Math.round(absOffset * 10),
              } as React.CSSProperties}
            >
              <CarouselCard imageUrl={url} altText={`Family restaurant memory ${i + 1}`} />
            </div>
          );
        })}
        
        <button
          className="carousel-nav right"
          onClick={() => setActive((i) => i + 1)}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default function About() {
  const { theme } = useTheme();
  return (
    <section id="about" className="py-24 md:py-32 relative" style={{
      backgroundColor: "var(--bg-primary)"
    }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Side */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center" style={{ zIndex: 1 }}>
            <FadeIn direction="right" className="w-full">
              <Carousel />
            </FadeIn>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2" style={{ position: 'relative', zIndex: 20, isolation: 'isolate' }}>
            <FadeIn>
              <span className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 block">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Heart of the Home & <br />
                <span className="italic" style={{ color: "var(--text-secondary)" }}>The Butcher's Choice</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mb-6 font-light leading-relaxed text-lg" style={{ color: "var(--text-secondary)" }}>
                Rooted in the traditions of our Oumas and Oupas, Family Kitchen celebrates the essence of home-cooked heritage. We are home cooks cooking with family love, passing down the recipes of our grandmothers and grandfathers ("ouma en oupa se chefs") straight to your table.
              </p>
              <p className="mb-10 font-light leading-relaxed text-lg" style={{ color: "var(--text-secondary)" }}>
                Beyond the comforting classics, we pride ourselves on <strong style={{ color: "var(--text-primary)" }}>Butcher's Choice Selection</strong>. Drawing from our butchery background, we source and age the finest standard cuts. Whether it's our Signature 30cm Monster Burgers or our standard Aged Ribeye, you are tasting honest, down-to-earth family cooking.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex items-center gap-6">
                <img
                  src="/butcher_profile.png"
                  alt="Family Butchers & Home Cooks"
                  className="w-16 h-16 rounded-full object-cover border-2"
                  style={{ borderColor: "rgba(212, 175, 55, 0.5)" }}
                />
                <div>
                  <p className="font-serif text-xl" style={{ color: "var(--text-primary)" }}>The Family</p>
                  <p className="text-sm text-gold-400 uppercase tracking-wider">Kombuis chefs van die huis af & Butchers</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

