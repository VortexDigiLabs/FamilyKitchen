import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import React from "react";

const WHATSAPP_NUMBERS = ["27768563878", "27663022876", "27793813662"];

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    setStepperItem,
    clearCart,
    cartTotal,
  } = useCart();
  const { theme } = useTheme();
  const [worker, setWorker] = React.useState<Worker | null>(null);

  // Initialize worker
  React.useEffect(() => {
    if (typeof Worker !== "undefined") {
      const newWorker = new Worker(
        new URL("../workers/autoResetWorker.ts", import.meta.url)
      );
      newWorker.onmessage = (e) => {
        if (e.data === "reset") {
          clearCart();
        }
      };
      setWorker(newWorker);
      return () => newWorker.terminate();
    }
  }, [clearCart]);

  // Listen for user activity to reset the timer
  React.useEffect(() => {
    const handleUserActivity = () => {
      if (worker) worker.postMessage("reset-timer");
    };

    if (worker) {
      document.addEventListener("mousemove", handleUserActivity);
      document.addEventListener("keydown", handleUserActivity);
      document.addEventListener("touchstart", handleUserActivity);

      return () => {
        document.removeEventListener("mousemove", handleUserActivity);
        document.removeEventListener("keydown", handleUserActivity);
        document.removeEventListener("touchstart", handleUserActivity);
      };
    }
  }, [worker]);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // Start timer when navigating to WhatsApp
    if (worker) worker.postMessage("start");

    let message = `*FAMILY KITCHEN ORDER*\n---------------------------------------\n`;
    cart.forEach((item) => {
      message += `• ${item.quantity} x ${item.name} (R${item.price.toFixed(2)})\n`;
    });
    message += `---------------------------------------\n*Total Value: R${cartTotal.toFixed(2)}*\n\n*Collection Address:*\nShop 13, 509 Pretoria Road, Benoni\n`;

    const targetUrl = "https://chat.whatsapp.com/KlhogF8oi3D3dqaqhzfw4d?s=cl&p=a&ilr=2";

    // Attempt to copy the order summary to the clipboard for easy pasting into the group chat
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message)
        .then(() => {
          alert("Your order summary has been successfully copied to your clipboard! Once WhatsApp opens, simply paste (Ctrl+V or long-tap and select Paste) to submit your order to the group.");
        })
        .catch((err) => {
          console.error("Failed to copy order summary: ", err);
        })
        .finally(() => {
          window.open(targetUrl, "_blank");
        });
    } else {
      window.open(targetUrl, "_blank");
    }
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-40 transition-opacity"
        onClick={() => {
          setIsCartOpen(false);
          if (worker) worker.postMessage("cancel");
        }}
      />
      <div className="fixed inset-y-0 right-0 w-full md:w-96 border-l z-50 flex flex-col shadow-2xl transform transition-transform" style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)"
      }}>
        <div className="p-6 border-b flex justify-between items-center" style={{
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--border-color)"
        }}>
          <h2 className="font-serif text-2xl flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
            <ShoppingBag className="w-5 h-5 text-gold-400" />
            Your Cart
          </h2>
          <button
            onClick={() => {
              setIsCartOpen(false);
              if (worker) worker.postMessage("cancel");
            }}
            className="hover:text-gold-400 transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <p className="text-center mt-10" style={{ color: "var(--text-secondary)" }}>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b pb-6"
                style={{ borderColor: "var(--border-color)" }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-sm"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-lg" style={{ color: "var(--text-primary)" }}>{item.name}</h3>
                  <p className="text-gold-400 text-sm mb-2">R{item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-sm flex items-center justify-center hover:bg-gold-400 hover:text-charcoal-950 transition-colors"
                      style={{
                        backgroundColor: theme === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                        color: "var(--text-primary)"
                      }}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => setStepperItem(item)}
                      className="text-sm w-4 text-center hover:text-gold-400"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.quantity}
                    </button>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-sm flex items-center justify-center hover:bg-gold-400 hover:text-charcoal-950 transition-colors"
                      style={{
                        backgroundColor: theme === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                        color: "var(--text-primary)"
                      }}
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-xs hover:text-red-400 transition-colors uppercase tracking-wider"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t" style={{
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--border-color)"
        }}>
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
              Total
            </span>
            <span className="text-gold-400 text-2xl font-serif">
              R{cartTotal.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={cart.length === 0}
            className="w-full py-4 bg-gold-400 text-charcoal-950 font-medium uppercase tracking-widest text-sm hover:bg-gold-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4 flex justify-center items-center gap-2"
          >
            Confirm Order
          </button>

          <p className="text-xs text-center mb-2 italic" style={{ color: "var(--text-secondary)" }}>
            Orders via WhatsApp. Payment on collection in-store.
          </p>
          <p className="text-[10px] text-center leading-relaxed max-w-xs mx-auto" style={{ color: theme === "light" ? "#737373" : "#525252" }}>
            In accordance with SA POPIA legislation, your personal information is secure and will never be shared.
          </p>
        </div>
      </div>
    </>
  );
}
