import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { Product, WHATSAPP_NUMBER } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  recheio?: string; // recheio escolhido (apenas para produtos com hasRecheio: true)
}

interface CartContextData {
  items: CartItem[];
  addToCart: (product: Product, recheio?: string) => void;
  removeFromCart: (productId: number, recheio?: string) => void;
  updateQuantity: (productId: number, quantity: number, recheio?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  checkoutWhatsApp: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

// Gera uma chave única por produto + recheio
// Assim o mesmo produto com recheios diferentes vira itens separados no carrinho
const itemKey = (productId: number, recheio?: string) =>
  recheio ? `${productId}-${recheio}` : `${productId}`;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, recheio?: string) => {
    setItems((prev) => {
      const key = itemKey(product.id, recheio);
      const existing = prev.find(
        (item) => itemKey(item.product.id, item.recheio) === key
      );
      if (existing) {
        return prev.map((item) =>
          itemKey(item.product.id, item.recheio) === key
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, recheio }];
    });
  };

  const removeFromCart = (productId: number, recheio?: string) => {
    const key = itemKey(productId, recheio);
    setItems((prev) =>
      prev.filter((item) => itemKey(item.product.id, item.recheio) !== key)
    );
  };

  const updateQuantity = (productId: number, quantity: number, recheio?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, recheio);
      return;
    }
    const key = itemKey(productId, recheio);
    setItems((prev) =>
      prev.map((item) =>
        itemKey(item.product.id, item.recheio) === key
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );

  const checkoutWhatsApp = () => {
    if (items.length === 0) return;

    const itemsText = items
      .map((item) => {
        const attrs = [
          item.product.type,
          item.product.chocoType,
          item.product.category,
          item.recheio ? `Recheio: ${item.recheio}` : null,
        ]
          .filter(Boolean)
          .join(" | ");

        const priceStr = item.product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        return `• ${item.quantity}x ${item.product.name} (${attrs}) — ${priceStr} cada`;
      })
      .join("\n");

    const totalText = totalPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const message =
      `Olá! Gostaria de fazer um pedido:\n\n${itemsText}\n\n*Total: ${totalText}*\n\n` +
      `⏰ Após o contato e informado o endereço de entrega, o prazo será acertado pelo WhatsApp.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        checkoutWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);