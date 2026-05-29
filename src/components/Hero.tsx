import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590846406792-0adc7f928a18?q=80&w=2070&auto=format&fit=crop"
          alt="Rustic wood-fired oven"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <FadeIn delay={0.2}>
          <span className="block text-gold-400 text-sm md:text-base uppercase tracking-[0.3em] mb-6">
            Boutique Kitchen Experience
          </span>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
            Honest Food, <br />
            <span className="italic text-gold-400">Crafted with Fire</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.6}>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Salt-of-the-earth professional catering. We bring master butchery and generational family recipes directly to your table.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 bg-gold-400 text-charcoal-950 text-sm uppercase tracking-widest font-medium hover:bg-gold-500 transition-colors duration-300"
            >
              Order Now
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-widest font-medium hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
            >
              Our Story
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400 to-transparent"></div>
      </div>
    </section>
  );
}
