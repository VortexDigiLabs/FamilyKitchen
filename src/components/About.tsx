import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop"
                  alt="Premium dry-aged beef"
                  className="w-full h-full object-cover rounded-sm"
                  referrerPolicy="no-referrer"
                />
                {/* Decorative border */}
                <div className="absolute -inset-4 border border-gold-400/30 rounded-sm -z-10 hidden md:block translate-x-8 translate-y-8"></div>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3} className="absolute -bottom-8 -left-8 md:-left-12 bg-charcoal-900 p-6 md:p-8 border border-white/5 shadow-2xl max-w-[250px]">
              <p className="font-serif text-4xl text-gold-400 mb-2">Wood-Fired</p>
              <p className="text-sm uppercase tracking-widest text-gray-400">Artisan Craft</p>
            </FadeIn>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <span className="text-gold-400 text-sm uppercase tracking-[0.2em] mb-4 block">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Heart of the Home & <br />
                <span className="italic text-gray-400">The Butcher's Edge</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-gray-400 mb-6 font-light leading-relaxed text-lg">
                Rooted in the traditions of our Oumas and Mas, Family Kitchen celebrates the essence of home-cooked heritage. We bring the warmth of the family hearth to your table, where every recipe tells a story of generations past.
              </p>
              <p className="text-gray-400 mb-10 font-light leading-relaxed text-lg">
                Beyond the comforting classics, we pride ourselves on <strong className="text-white">The Butcher's Edge</strong>. Drawing from a professional butchery background, we source and age the finest cuts. Whether it's our Signature 30cm Monster Burgers or our beautifully marbled Aged Ribeye, you are tasting the pinnacle of meat craftsmanship.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex items-center gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=200&auto=format&fit=crop" 
                  alt="Head Butcher & Chef" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-400/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-serif text-xl text-white">The Family</p>
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
