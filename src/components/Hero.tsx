import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playCount, setPlayCount] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle 2-play audio limit
    const handleEnded = () => {
      setPlayCount((prev) => {
        const nextCount = prev + 1;
        if (nextCount >= 2) {
          video.muted = true;
        }
        return nextCount;
      });
    };

    // Intersection Observer to stop video when scrolling away
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay with audio might be blocked by browser until interaction
            console.log("Autoplay blocked");
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    video.addEventListener("ended", handleEnded);
    observer.observe(video);

    return () => {
      video.removeEventListener("ended", handleEnded);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/ddfuc0ktg/video/upload/v1780138129/xfmdkg3imxd15vv7g3jh.mp4"
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{
          background: theme === "light"
            ? "linear-gradient(to bottom, rgba(245, 245, 245, 0.7), rgba(245, 245, 245, 0.5), rgba(245, 245, 245, 0.9))"
            : "linear-gradient(to bottom, rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 1))"
        }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <FadeIn delay={0.2}>
          <span className="block text-gold-400 text-sm md:text-base uppercase tracking-[0.3em] mb-6">
            Boutique Kitchen Experience
          </span>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight" style={{
            color: theme === "light" ? "#0a0a0a" : "#ffffff"
          }}>
            Honest Food, <br />
            <span className="italic text-gold-400">Crafted with Fire</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed" style={{
            color: theme === "light" ? "#525252" : "#a0a0a0"
          }}>
            Salt-of-the-earth family restaurant. Master butchery and generational family recipes, freshly prepared for collection at our shop.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://chat.whatsapp.com/KlhogF8oi3D3dqaqhzfw4d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gold-400 text-charcoal-950 text-sm uppercase tracking-widest font-medium hover:bg-gold-500 transition-colors duration-300"
            >
              Order via WhatsApp
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 border text-sm uppercase tracking-widest font-medium hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
              style={{
                borderColor: theme === "light" ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)",
                color: theme === "light" ? "#0a0a0a" : "#ffffff"
              }}
            >
              Our Story
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400 to-transparent" />
      </div>
    </section>
  );
}
