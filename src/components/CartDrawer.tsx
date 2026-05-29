import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBERS = [
  '27768563878', // Anthea
  '27663022876', // Stephanie
  '27793813662'  // Rudi
];

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // Randomly select a WhatsApp number
    const targetNumber = WHATSAPP_NUMBERS[Math.floor(Math.random() * WHATSAPP_NUMBERS.length)];
    
    let message = `Hi, I'd like to place an order from the Family Kitchen:\n\n`;
    cart.forEach(item => {
      message += `${item.quantity}x ${item.name} - R${item.price * item.quantity}\n`;
    });
    message += `\n*Total: R${cartTotal}*\n\n`;
    message += `I understand payment is on collection in-store.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${targetNumber}?text=${encodedMessage}`, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 z-40 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-charcoal-900 border-l border-white/10 z-50 flex flex-col shadow-2xl transform transition-transform">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-charcoal-950">
          <h2 className="font-serif text-2xl text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold-400" />
            Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-white/5 pb-6">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-sm" />
                <div className="flex-1">
                  <h3 className="text-white font-serif text-lg">{item.name}</h3>
                  <p className="text-gold-400 text-sm mb-2">R{item.price}</p>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-sm bg-white/10 flex items-center justify-center text-white hover:bg-gold-400 hover:text-charcoal-950 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-white text-sm w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-sm bg-white/10 flex items-center justify-center text-white hover:bg-gold-400 hover:text-charcoal-950 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-xs text-gray-500 hover:text-red-400 transition-colors uppercase tracking-wider"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 bg-charcoal-950 border-t border-white/10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400 text-lg uppercase tracking-wider">Total</span>
            <span className="text-gold-400 text-2xl font-serif">R{cartTotal}</span>
          </div>
          
          <button 
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="w-full py-4 bg-gold-400 text-charcoal-950 font-medium uppercase tracking-widest text-sm hover:bg-gold-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4 flex justify-center items-center gap-2"
          >
            Order via WhatsApp
          </button>
          
          <p className="text-xs text-gray-500 text-center mb-2 italic">
            Orders via WhatsApp. Payment on collection in-store.
          </p>
          <p className="text-[10px] text-gray-600 text-center leading-relaxed max-w-xs mx-auto">
            In accordance with SA POPIA legislation, your personal information is secure and will never be shared.
          </p>
        </div>
      </div>
    </>
  );
}
