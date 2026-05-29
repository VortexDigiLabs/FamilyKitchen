import { useCart } from "../context/CartContext";
import { X, Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function QuantityStepperOverlay() {
  const { stepperItem, setStepperItem, updateQuantity, removeFromCart } = useCart();
  const { theme } = useTheme();

  if (!stepperItem) return null;

  const handleQuantityChange = (delta: number) => {
    const newQuantity = stepperItem.quantity + delta;
    updateQuantity(stepperItem.id, newQuantity);
  };

  const handleDelete = () => {
    removeFromCart(stepperItem.id);
    setStepperItem(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="rounded-lg p-6 max-w-sm w-full mx-4 border" style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)"
      }}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-serif" style={{ color: "var(--text-primary)" }}>{stepperItem.name}</h3>
          <button
            onClick={() => setStepperItem(null)}
            className="hover:text-gold-400"
            style={{ color: "var(--text-secondary)" }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mb-6">
          <p className="mb-2" style={{ color: "var(--text-secondary)" }}>Quantity</p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={stepperItem.quantity <= 1}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-charcoal-950 transition-colors disabled:opacity-50"
              style={{
                backgroundColor: theme === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                color: "var(--text-primary)"
              }}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-3xl font-bold min-w-[60px] text-center" style={{ color: "var(--text-primary)" }}>
              {stepperItem.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-charcoal-950 transition-colors"
              style={{
                backgroundColor: theme === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                color: "var(--text-primary)"
              }}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleDelete}
            className="flex-1 py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-red-500/20 transition-colors"
            style={{
              borderColor: "rgba(239, 68, 68, 0.5)",
              color: "#ef4444"
            }}
          >
            <Trash2 className="w-4 h-4" /> Delete
          </button>
          <button
            onClick={() => setStepperItem(null)}
            className="flex-1 py-3 border rounded-lg flex items-center justify-center gap-2 hover:border-gold-400 hover:text-gold-400 transition-colors"
            style={{
              borderColor: theme === "light" ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)",
              color: "var(--text-primary)"
            }}
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
      </div>
    </div>
  );
}
