import { X, Minus, Plus, ShoppingCart, WhatsappLogo } from "@phosphor-icons/react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../data/products";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    checkoutWhatsApp,
  } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-all duration-500 ${
        isCartOpen ? "visible" : "invisible"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-pink-950/20 backdrop-blur-sm transition-opacity duration-500 ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-pink-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart size={24} weight="bold" className="text-pink-500" />
            <h2 className="text-lg font-bold text-pink-950">Seu Carrinho</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-pink-50 rounded-full text-pink-400 transition-colors"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-300">
                <ShoppingCart size={32} />
              </div>
              <div>
                <p className="text-pink-950 font-semibold">Carrinho vazio</p>
                <p className="text-sm text-pink-400">Que tal adicionar alguns doces?</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-sm font-bold text-pink-500 hover:text-pink-600 transition-colors"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.recheio ?? "sem"}`}
                className="flex gap-4"
              >
                <img
                  src={item.product.img}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-xl border border-pink-100 shrink-0"
                />
                <div className="flex-1 space-y-1 min-w-0">
                  {/* Nome + botão remover */}
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-sm font-bold text-pink-950 leading-tight">
                      {item.product.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.recheio)}
                      className="text-pink-300 hover:text-pink-500 transition-colors shrink-0"
                    >
                      <X size={16} weight="bold" />
                    </button>
                  </div>

                  {/* Atributos */}
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                      {item.product.chocoType}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
                      {item.product.type}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
                      {item.product.category}
                    </span>
                  </div>

                  {/* Recheio (se tiver) */}
                  {item.recheio && (
                    <p className="text-[10px] text-pink-500 font-medium">
                      🍫 Recheio: {item.recheio}
                    </p>
                  )}

                  {/* Preço + quantidade */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm font-bold text-pink-600">
                      {formatPrice(item.product.price)}
                    </span>
                    <div className="flex items-center gap-2 border border-pink-100 rounded-lg p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1, item.recheio)
                        }
                        className="p-1 hover:bg-pink-50 rounded text-pink-500 transition-colors"
                      >
                        <Minus size={12} weight="bold" />
                      </button>
                      <span className="text-xs font-bold text-pink-950 w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1, item.recheio)
                        }
                        className="p-1 hover:bg-pink-50 rounded text-pink-500 transition-colors"
                      >
                        <Plus size={12} weight="bold" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-pink-100 space-y-4 bg-pink-50/50">
            {/* Aviso encomenda */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-[11px] text-amber-800 leading-relaxed text-center">
                ⏰ <strong>Pedidos por encomenda.</strong> Após o contato e informado o endereço, o prazo de entrega será acertado pelo WhatsApp.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-pink-900">Subtotal</span>
              <span className="text-xl font-bold text-pink-950">
                {formatPrice(totalPrice)}
              </span>
            </div>

            <button
              onClick={checkoutWhatsApp}
              className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] transition-all text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-200"
            >
              <WhatsappLogo size={24} weight="fill" />
              Finalizar pelo WhatsApp
            </button>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-sm font-bold text-pink-400 hover:text-pink-600 transition-colors py-2"
            >
              Continuar comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
}