import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import { useTheme } from "../context/ThemeContext";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playCount, setPlayCount] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle 2-play audio limit
    const handleEnded = () => {
      setPlayCount((prev) => {
        const nextCount = prev + 1;
        if (nextCount >= 2) {
          video.muted = true;
          setIsMuted(true);
        }
        return nextCount;
      });
    };

    // Intersection Observer to stop video when scrolling away
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((error) => {
            console.log("Autoplay blocked:", error);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    video.addEventListener("ended", handleEnded);
    observer.observe(video);

    // Initial attempt to play
    video.play().catch(() => {
      console.log("Initial autoplay blocked - waiting for interaction");
    });

    return () => {
      video.removeEventListener("ended", handleEnded);
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
      if (!newMuteState) {
        videoRef.current.play();
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-28 md:py-0">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/ddfuc0ktg/video/upload/v1780138129/xfmdkg3imxd15vv7g3jh.mp4"
          autoPlay
          muted={isMuted}
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

      {/* Mute/Unmute Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-24 right-10 z-20 p-4 rounded-full border transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: "rgba(212, 175, 55, 0.1)",
          borderColor: "rgba(212, 175, 55, 0.5)",
          color: "var(--gold-400)"
        }}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-gold-400" />
        ) : (
          <Volume2 className="w-6 h-6 text-gold-400" />
        )}
      </button>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-28 md:mt-20">
        <FadeIn delay={0.2}>
          <span className="block text-gold-400 text-sm md:text-base uppercase tracking-[0.3em] mb-6">
            Warm Family Kitchen
          </span>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight" style={{
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
            Salt-of-the-earth family restaurant. Butcher's Choice cuts and generational family recipes, freshly prepared for collection at our shop.
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <a
              href="https://chat.whatsapp.com/KlhogF8oi3D3dqaqhzfw4d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-gold-400 text-charcoal-950 text-sm uppercase tracking-wider font-medium hover:bg-gold-500 transition-colors duration-300 text-center"
            >
              Order via WhatsApp
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 border text-sm uppercase tracking-wider font-medium hover:border-gold-400 hover:text-gold-400 transition-colors duration-300 text-center"
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
