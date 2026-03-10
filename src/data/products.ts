export type Badge = "Novo" | "Especial" | "Páscoa" | null;

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  chocoType: string;
  type: string;
  badge: Badge;
  img: string;
  hasRecheio: boolean; // true = exibe dropdown de recheio no card
}

export const CATEGORIES = ["Todos", "500g", "350g", "250g"];
export const CATEGORIESCHOC = ["Todos", "Ao Leite", "Branco", "Amargo"];
export const CATEGORIESTIPO = ["Todos", "Tradicional", "Crocante", "Trufado", "Recheado", "Ovo de Colher"];

export const RECHEIOS = [
  "Brigadeiro",
  "Prestígio",
  "Creme torta de Limão",
  "Mousse de Chocolate",
  "Negresco",
  "Creme torta de Maracujá",
  "Cocada Cremosa",
  "Ovo Maltine",
  "Paçoca Crocante",
];

export const WHATSAPP_NUMBER = "5511989876344";

export const products: Product[] = [
  // ── Ao Leite ──────────────────────────────────────────────
  { id: 1,  name: "Ovo Tradicional", desc: "Chocolate premium nos sabores clássicos",   price: 40.0,  category: "250g", chocoType: "Ao Leite", type: "Tradicional",   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 2,  name: "Ovo Tradicional", desc: "Chocolate premium nos sabores clássicos",   price: 50.0,  category: "350g", chocoType: "Ao Leite", type: "Tradicional",   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 3,  name: "Ovo Tradicional", desc: "Chocolate premium nos sabores clássicos",   price: 60.0,  category: "500g", chocoType: "Ao Leite", type: "Tradicional",   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 7,  name: "Ovo Crocante",    desc: "Chocolate crocante nos sabores clássicos",  price: 50.0,  category: "250g", chocoType: "Ao Leite", type: "Crocante",      img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 8,  name: "Ovo Crocante",    desc: "Chocolate crocante nos sabores clássicos",  price: 60.0,  category: "350g", chocoType: "Ao Leite", type: "Crocante",      img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 9,  name: "Ovo Crocante",    desc: "Chocolate crocante nos sabores clássicos",  price: 70.0,  category: "500g", chocoType: "Ao Leite", type: "Crocante",      img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 13, name: "Ovo Trufado",     desc: "Chocolate trufado nos sabores clássicos",   price: 50.0,  category: "250g", chocoType: "Ao Leite", type: "Trufado",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 14, name: "Ovo Trufado",     desc: "Chocolate trufado nos sabores clássicos",   price: 60.0,  category: "350g", chocoType: "Ao Leite", type: "Trufado",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 15, name: "Ovo Trufado",     desc: "Chocolate trufado nos sabores clássicos",   price: 80.0,  category: "500g", chocoType: "Ao Leite", type: "Trufado",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 19, name: "Ovo Recheado",    desc: "Chocolate recheado nos sabores clássicos",  price: 70.0,  category: "250g", chocoType: "Ao Leite", type: "Recheado",      img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 20, name: "Ovo Recheado",    desc: "Chocolate recheado nos sabores clássicos",  price: 80.0,  category: "350g", chocoType: "Ao Leite", type: "Recheado",      img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 21, name: "Ovo Recheado",    desc: "Chocolate recheado nos sabores clássicos",  price: 100.0, category: "500g", chocoType: "Ao Leite", type: "Recheado",      img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 25, name: "Ovo de Colher",   desc: "Chocolate de colher nos sabores clássicos", price: 60.0,  category: "250g", chocoType: "Ao Leite", type: "Ovo de Colher", img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 26, name: "Ovo de Colher",   desc: "Chocolate de colher nos sabores clássicos", price: 70.0,  category: "350g", chocoType: "Ao Leite", type: "Ovo de Colher", img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 27, name: "Ovo de Colher",   desc: "Chocolate de colher nos sabores clássicos", price: 80.0,  category: "500g", chocoType: "Ao Leite", type: "Ovo de Colher", img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },

  // ── Amargo ────────────────────────────────────────────────
  { id: 4,  name: "Ovo Tradicional", desc: "Chocolate premium nos sabores clássicos",   price: 40.0,  category: "250g", chocoType: "Amargo", type: "Tradicional",    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 5,  name: "Ovo Tradicional", desc: "Chocolate premium nos sabores clássicos",   price: 50.0,  category: "350g", chocoType: "Amargo", type: "Tradicional",    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 6,  name: "Ovo Tradicional", desc: "Chocolate premium nos sabores clássicos",   price: 60.0,  category: "500g", chocoType: "Amargo", type: "Tradicional",    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 10, name: "Ovo Crocante",    desc: "Chocolate crocante nos sabores clássicos",  price: 50.0,  category: "250g", chocoType: "Amargo", type: "Crocante",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 11, name: "Ovo Crocante",    desc: "Chocolate crocante nos sabores clássicos",  price: 60.0,  category: "350g", chocoType: "Amargo", type: "Crocante",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 12, name: "Ovo Crocante",    desc: "Chocolate crocante nos sabores clássicos",  price: 70.0,  category: "500g", chocoType: "Amargo", type: "Crocante",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 16, name: "Ovo Trufado",     desc: "Chocolate trufado nos sabores clássicos",   price: 50.0,  category: "250g", chocoType: "Amargo", type: "Trufado",        img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 17, name: "Ovo Trufado",     desc: "Chocolate trufado nos sabores clássicos",   price: 60.0,  category: "350g", chocoType: "Amargo", type: "Trufado",        img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 18, name: "Ovo Trufado",     desc: "Chocolate trufado nos sabores clássicos",   price: 80.0,  category: "500g", chocoType: "Amargo", type: "Trufado",        img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 22, name: "Ovo Recheado",    desc: "Chocolate recheado nos sabores clássicos",  price: 70.0,  category: "250g", chocoType: "Amargo", type: "Recheado",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 23, name: "Ovo Recheado",    desc: "Chocolate recheado nos sabores clássicos",  price: 80.0,  category: "350g", chocoType: "Amargo", type: "Recheado",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 24, name: "Ovo Recheado",    desc: "Chocolate recheado nos sabores clássicos",  price: 100.0, category: "500g", chocoType: "Amargo", type: "Recheado",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 28, name: "Ovo de Colher",   desc: "Chocolate de colher nos sabores clássicos", price: 60.0,  category: "250g", chocoType: "Amargo", type: "Ovo de Colher",  img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 29, name: "Ovo de Colher",   desc: "Chocolate de colher nos sabores clássicos", price: 70.0,  category: "350g", chocoType: "Amargo", type: "Ovo de Colher",  img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 30, name: "Ovo de Colher",   desc: "Chocolate de colher nos sabores clássicos", price: 80.0,  category: "500g", chocoType: "Amargo", type: "Ovo de Colher",  img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },

  // ── Branco ────────────────────────────────────────────────
  { id: 31, name: "Ovo Tradicional", desc: "Chocolate branco nos sabores clássicos",    price: 50.0,  category: "250g", chocoType: "Branco", type: "Tradicional",    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 32, name: "Ovo Tradicional", desc: "Chocolate branco nos sabores clássicos",    price: 60.0,  category: "350g", chocoType: "Branco", type: "Tradicional",    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 33, name: "Ovo Tradicional", desc: "Chocolate branco nos sabores clássicos",    price: 70.0,  category: "500g", chocoType: "Branco", type: "Tradicional",    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 34, name: "Ovo Crocante",    desc: "Chocolate branco crocante",                 price: 55.0,  category: "250g", chocoType: "Branco", type: "Crocante",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 35, name: "Ovo Crocante",    desc: "Chocolate branco crocante",                 price: 60.0,  category: "350g", chocoType: "Branco", type: "Crocante",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 36, name: "Ovo Crocante",    desc: "Chocolate branco crocante",                 price: 80.0,  category: "500g", chocoType: "Branco", type: "Crocante",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: false },
  { id: 37, name: "Ovo Trufado",     desc: "Chocolate branco trufado",                  price: 60.0,  category: "250g", chocoType: "Branco", type: "Trufado",        img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 38, name: "Ovo Trufado",     desc: "Chocolate branco trufado",                  price: 70.0,  category: "350g", chocoType: "Branco", type: "Trufado",        img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 39, name: "Ovo Trufado",     desc: "Chocolate branco trufado",                  price: 90.0,  category: "500g", chocoType: "Branco", type: "Trufado",        img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 40, name: "Ovo Recheado",    desc: "Chocolate branco recheado",                 price: 70.0,  category: "250g", chocoType: "Branco", type: "Recheado",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 41, name: "Ovo Recheado",    desc: "Chocolate branco recheado",                 price: 90.0,  category: "350g", chocoType: "Branco", type: "Recheado",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 42, name: "Ovo Recheado",    desc: "Chocolate branco recheado",                 price: 110.0, category: "500g", chocoType: "Branco", type: "Recheado",       img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 43, name: "Ovo de Colher",   desc: "Chocolate branco de colher",                price: 70.0,  category: "250g", chocoType: "Branco", type: "Ovo de Colher",  img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 44, name: "Ovo de Colher",   desc: "Chocolate branco de colher",                price: 80.0,  category: "350g", chocoType: "Branco", type: "Ovo de Colher",  img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
  { id: 45, name: "Ovo de Colher",   desc: "Chocolate branco de colher",                price: 90.0,  category: "500g", chocoType: "Branco", type: "Ovo de Colher",  img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop", badge: null, hasRecheio: true },
];

// Utilitário de formatação de preço
export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Monta o link do WhatsApp — agora aceita recheio opcional
export const whatsappLink = (productName?: string, recheio?: string) => {
  let msg = productName
    ? `Olá! Gostaria de pedir: ${productName} 🍫`
    : "Olá! Quero fazer um pedido 🍫";
  if (recheio) msg += ` | Recheio: ${recheio}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};