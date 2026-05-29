import { Facebook, Instagram, MapPin, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block font-serif text-3xl font-semibold tracking-wider text-white mb-6">
              Family Kitchen<span className="text-gold-400">.</span>
            </a>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              A premium Boutique Kitchen digital experience. Salt-of-the-earth professional catering.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 font-light text-sm">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
                <span>509 Pretoria Road, Shop nr 13,<br />Fairleads, Benoni, 1501</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-light text-sm">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <a href="mailto:familykitchen@gmail.com" className="hover:text-gold-400 transition-colors">familykitchen@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-light text-sm">
                <MessageCircle className="w-5 h-5 text-gold-400 shrink-0" />
                <span>Orders via WhatsApp</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Trading Hours</h4>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Monday - Saturday</span>
                <span className="text-white">08:00 - 21:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-white">08:30 - 16:00</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Location</h4>
            <div className="w-full h-40 bg-gray-800 rounded-sm overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.493863481615!2d28.3408801!3d-26.155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9531959bb4bfa1%3A0x6b24d9c72e259e87!2s509%20Pretoria%20Rd%2C%20Fairleads%2C%20Benoni%2C%201501%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Family Kitchen Location"
              ></iframe>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light">
            &copy; {new Date().getFullYear()} Family Kitchen. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-light">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
