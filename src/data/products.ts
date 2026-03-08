export type Badge = "Novo" | "Especial" | "Páscoa" | null;

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number; // valor em número para facilitar formatação
  category: string;
  badge: Badge;
  img: string;
}

export const CATEGORIES = ["Todos", "Trufas", "Bolos", "Cupcakes", "Frutas", "Kits"];

export const WHATSAPP_NUMBER = "5511989876344";

export const products: Product[] = [
  {
    id: 1,
    name: "Cone Trufado",
    desc: "Recheios cremosos em cone crocante",
    price: 10.0,
    category: "Trufas",
    badge: null,
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Trufa de Chocolate",
    desc: "Pura indulgência de chocolate",
    price: 8.0,
    category: "Trufas",
    badge: null,
    img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Bolo no Pote",
    desc: "Tradição de bolo e creme",
    price: 12.0,
    category: "Bolos",
    badge: "Novo",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Pão de Mel",
    desc: "Tradição e sabor",
    price: 13.0,
    category: "Trufas",
    badge: null,
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Cupcake Grande",
    desc: "Fofinho e decorado",
    price: 12.5,
    category: "Cupcakes",
    badge: null,
    img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Maçã do Amor",
    desc: "O clássico reinventado",
    price: 13.5,
    category: "Frutas",
    badge: "Especial",
    img: "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Morango do Amor",
    desc: "Fruta fresca coberta",
    price: 12.0,
    category: "Frutas",
    badge: null,
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Bala Baiana",
    desc: "Crocante e doce",
    price: 5.0,
    category: "Kits",
    badge: "Especial",
    img: "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=400&h=300&fit=crop",
  },
];

// 👇 Utilitário de formatação de preço
export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// 👇 Monta o link do WhatsApp com mensagem já preenchida
export const whatsappLink = (productName?: string) => {
  const msg = productName
    ? `Olá! Gostaria de pedir: ${productName} 🍬`
    : "Olá! Quero fazer um pedido 🍬";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};