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

const descriptions = {
  Tradicional: "Casca maciça de chocolate com sabor clássico.",
  Crocante: "Chocolate com pedaços crocantes na casca.",
  Trufado: "Casca de chocolate com recheio trufado cremoso.",
  Recheado: "Chocolate com recheio cremoso generoso.",
  "Ovo de Colher": "Casca de chocolate com recheio para comer de colher."
};

const productImages = {
  Tradicional: "https://i.ibb.co/6RwTXsNM/Sabores-de-ovos-de-Pascoa-saiba-quais-os-melhores-para-apostar-1024x685.jpg",
  Crocante: "https://i.ibb.co/vxCtfWx0/tamanho-padrao-gc-8-4.jpg",
  Trufado: "https://i.ibb.co/1Yw4bMcD/thumb-small.webp",
  Recheado: "https://i.ibb.co/xxD8z63/images.jpg",
  "Ovo de Colher": "https://i.ibb.co/8LNGQ4cb/aprenda-a-fazer-ovo-de-pascoa-de-colher-e-aumente-a-sua-renda-13920.jpg",
  TradicionalBranco: "https://i.ibb.co/BVy3LY7z/UMG3-DLAZHNAZ7-JWLLWUMZRNM6-A.avif",
  CrocanteBranco: "https://i.ibb.co/Y70C8CTK/776766408d6c8ec90ba0c4bbaffb183e.jpg",
  TrufadoBranco: "https://i.ibb.co/2YWgSkby/VN235.jpg",
  RecheadoBranco: "https://i.ibb.co/D6GjHHJ/receita-ovo-trufado-limao.jpg",
  "Ovo de ColherBranco": "https://i.ibb.co/XrVgBnsB/images-1.jpg"
};

export const products: Product[] = [
  // ── Ao Leite ──────────────────────────────────────────────
  { id: 1,  name: "Ovo Tradicional", desc: descriptions["Tradicional"], price: 40.0,  category: "250g", chocoType: "Ao Leite", type: "Tradicional",   img: productImages.Tradicional, badge: null, hasRecheio: false },
  { id: 2,  name: "Ovo Tradicional", desc: descriptions["Tradicional"], price: 50.0,  category: "350g", chocoType: "Ao Leite", type: "Tradicional",   img: productImages.Tradicional, badge: null, hasRecheio: false },
  { id: 3,  name: "Ovo Tradicional", desc: descriptions["Tradicional"], price: 60.0,  category: "500g", chocoType: "Ao Leite", type: "Tradicional",   img: productImages.Tradicional, badge: null, hasRecheio: false },

  { id: 7,  name: "Ovo Crocante", desc: descriptions["Crocante"], price: 50.0, category: "250g", chocoType: "Ao Leite", type: "Crocante", img: productImages.Crocante, badge: null, hasRecheio: false },
  { id: 8,  name: "Ovo Crocante", desc: descriptions["Crocante"], price: 60.0, category: "350g", chocoType: "Ao Leite", type: "Crocante", img: productImages.Crocante, badge: null, hasRecheio: false },
  { id: 9,  name: "Ovo Crocante", desc: descriptions["Crocante"], price: 70.0, category: "500g", chocoType: "Ao Leite", type: "Crocante", img: productImages.Crocante, badge: null, hasRecheio: false },

  { id: 13, name: "Ovo Trufado", desc: descriptions["Trufado"], price: 50.0, category: "250g", chocoType: "Ao Leite", type: "Trufado", img: productImages.Trufado, badge: null, hasRecheio: true },
  { id: 14, name: "Ovo Trufado", desc: descriptions["Trufado"], price: 60.0, category: "350g", chocoType: "Ao Leite", type: "Trufado", img: productImages.Trufado, badge: null, hasRecheio: true },
  { id: 15, name: "Ovo Trufado", desc: descriptions["Trufado"], price: 80.0, category: "500g", chocoType: "Ao Leite", type: "Trufado", img: productImages.Trufado, badge: null, hasRecheio: true },

  { id: 19, name: "Ovo Recheado", desc: descriptions["Recheado"], price: 70.0, category: "250g", chocoType: "Ao Leite", type: "Recheado", img: productImages.Recheado, badge: null, hasRecheio: true },
  { id: 20, name: "Ovo Recheado", desc: descriptions["Recheado"], price: 80.0, category: "350g", chocoType: "Ao Leite", type: "Recheado", img: productImages.Recheado, badge: null, hasRecheio: true },
  { id: 21, name: "Ovo Recheado", desc: descriptions["Recheado"], price: 100.0, category: "500g", chocoType: "Ao Leite", type: "Recheado", img: productImages.Recheado, badge: null, hasRecheio: true },

  { id: 25, name: "Ovo de Colher", desc: descriptions["Ovo de Colher"], price: 60.0, category: "250g", chocoType: "Ao Leite", type: "Ovo de Colher", img: productImages["Ovo de Colher"], badge: null, hasRecheio: true },
  { id: 26, name: "Ovo de Colher", desc: descriptions["Ovo de Colher"], price: 70.0, category: "350g", chocoType: "Ao Leite", type: "Ovo de Colher", img: productImages["Ovo de Colher"], badge: null, hasRecheio: true },
  { id: 27, name: "Ovo de Colher", desc: descriptions["Ovo de Colher"], price: 80.0, category: "500g", chocoType: "Ao Leite", type: "Ovo de Colher", img: productImages["Ovo de Colher"], badge: null, hasRecheio: true },

  // ── Amargo ────────────────────────────────────────────────
  { id: 4,  name: "Ovo Tradicional", desc: descriptions["Tradicional"], price: 40.0, category: "250g", chocoType: "Amargo", type: "Tradicional", img: productImages.Tradicional, badge: null, hasRecheio: false },
  { id: 5,  name: "Ovo Tradicional", desc: descriptions["Tradicional"], price: 50.0, category: "350g", chocoType: "Amargo", type: "Tradicional", img: productImages.Tradicional, badge: null, hasRecheio: false },
  { id: 6,  name: "Ovo Tradicional", desc: descriptions["Tradicional"], price: 60.0, category: "500g", chocoType: "Amargo", type: "Tradicional", img: productImages.Tradicional, badge: null, hasRecheio: false },

  { id: 10, name: "Ovo Crocante", desc: descriptions["Crocante"], price: 50.0, category: "250g", chocoType: "Amargo", type: "Crocante", img: productImages.Crocante, badge: null, hasRecheio: false },
  { id: 11, name: "Ovo Crocante", desc: descriptions["Crocante"], price: 60.0, category: "350g", chocoType: "Amargo", type: "Crocante", img: productImages.Crocante, badge: null, hasRecheio: false },
  { id: 12, name: "Ovo Crocante", desc: descriptions["Crocante"], price: 70.0, category: "500g", chocoType: "Amargo", type: "Crocante", img: productImages.Crocante, badge: null, hasRecheio: false },

  { id: 16, name: "Ovo Trufado", desc: descriptions["Trufado"], price: 50.0, category: "250g", chocoType: "Amargo", type: "Trufado", img: productImages.Trufado, badge: null, hasRecheio: true },
  { id: 17, name: "Ovo Trufado", desc: descriptions["Trufado"], price: 60.0, category: "350g", chocoType: "Amargo", type: "Trufado", img: productImages.Trufado, badge: null, hasRecheio: true },
  { id: 18, name: "Ovo Trufado", desc: descriptions["Trufado"], price: 80.0, category: "500g", chocoType: "Amargo", type: "Trufado", img: productImages.Trufado, badge: null, hasRecheio: true },

  { id: 22, name: "Ovo Recheado", desc: descriptions["Recheado"], price: 70.0, category: "250g", chocoType: "Amargo", type: "Recheado", img: productImages.Recheado, badge: null, hasRecheio: true },
  { id: 23, name: "Ovo Recheado", desc: descriptions["Recheado"], price: 80.0, category: "350g", chocoType: "Amargo", type: "Recheado", img: productImages.Recheado, badge: null, hasRecheio: true },
  { id: 24, name: "Ovo Recheado", desc: descriptions["Recheado"], price: 100.0, category: "500g", chocoType: "Amargo", type: "Recheado", img: productImages.Recheado, badge: null, hasRecheio: true },

  { id: 28, name: "Ovo de Colher", desc: descriptions["Ovo de Colher"], price: 60.0, category: "250g", chocoType: "Amargo", type: "Ovo de Colher", img: productImages["Ovo de Colher"], badge: null, hasRecheio: true },
  { id: 29, name: "Ovo de Colher", desc: descriptions["Ovo de Colher"], price: 70.0, category: "350g", chocoType: "Amargo", type: "Ovo de Colher", img: productImages["Ovo de Colher"], badge: null, hasRecheio: true },
  { id: 30, name: "Ovo de Colher", desc: descriptions["Ovo de Colher"], price: 80.0, category: "500g", chocoType: "Amargo", type: "Ovo de Colher", img: productImages["Ovo de Colher"], badge: null, hasRecheio: true },

  // ── Branco ────────────────────────────────────────────────
  { id: 31, name: "Ovo Tradicional", desc: descriptions["Tradicional"], price: 50.0, category: "250g", chocoType: "Branco", type: "Tradicional", img: productImages.TradicionalBranco, badge: null, hasRecheio: false },
  { id: 32, name: "Ovo Tradicional", desc: descriptions["Tradicional"], price: 60.0, category: "350g", chocoType: "Branco", type: "Tradicional", img: productImages.TradicionalBranco, badge: null, hasRecheio: false },
  { id: 33, name: "Ovo Tradicional", desc: descriptions["Tradicional"], price: 70.0, category: "500g", chocoType: "Branco", type: "Tradicional", img: productImages.TradicionalBranco, badge: null, hasRecheio: false },

  { id: 34, name: "Ovo Crocante", desc: descriptions["Crocante"], price: 55.0, category: "250g", chocoType: "Branco", type: "Crocante", img: productImages.CrocanteBranco, badge: null, hasRecheio: false },
  { id: 35, name: "Ovo Crocante", desc: descriptions["Crocante"], price: 60.0, category: "350g", chocoType: "Branco", type: "Crocante", img: productImages.CrocanteBranco, badge: null, hasRecheio: false },
  { id: 36, name: "Ovo Crocante", desc: descriptions["Crocante"], price: 80.0, category: "500g", chocoType: "Branco", type: "Crocante", img: productImages.CrocanteBranco, badge: null, hasRecheio: false },

  { id: 37, name: "Ovo Trufado", desc: descriptions["Trufado"], price: 60.0, category: "250g", chocoType: "Branco", type: "Trufado", img: productImages.TrufadoBranco, badge: null, hasRecheio: true },
  { id: 38, name: "Ovo Trufado", desc: descriptions["Trufado"], price: 70.0, category: "350g", chocoType: "Branco", type: "Trufado", img: productImages.TrufadoBranco, badge: null, hasRecheio: true },
  { id: 39, name: "Ovo Trufado", desc: descriptions["Trufado"], price: 90.0, category: "500g", chocoType: "Branco", type: "Trufado", img: productImages.TrufadoBranco, badge: null, hasRecheio: true },

  { id: 40, name: "Ovo Recheado", desc: descriptions["Recheado"], price: 70.0, category: "250g", chocoType: "Branco", type: "Recheado", img: productImages.RecheadoBranco, badge: null, hasRecheio: true },
  { id: 41, name: "Ovo Recheado", desc: descriptions["Recheado"], price: 90.0, category: "350g", chocoType: "Branco", type: "Recheado", img: productImages.RecheadoBranco, badge: null, hasRecheio: true },
  { id: 42, name: "Ovo Recheado", desc: descriptions["Recheado"], price: 110.0, category: "500g", chocoType: "Branco", type: "Recheado", img: productImages.RecheadoBranco, badge: null, hasRecheio: true },

  { id: 43, name: "Ovo de Colher", desc: descriptions["Ovo de Colher"], price: 70.0, category: "250g", chocoType: "Branco", type: "Ovo de Colher", img: productImages["Ovo de ColherBranco"], badge: null, hasRecheio: true },
  { id: 44, name: "Ovo de Colher", desc: descriptions["Ovo de Colher"], price: 80.0, category: "350g", chocoType: "Branco", type: "Ovo de Colher", img: productImages["Ovo de ColherBranco"], badge: null, hasRecheio: true },
  { id: 45, name: "Ovo de Colher", desc: descriptions["Ovo de Colher"], price: 90.0, category: "500g", chocoType: "Branco", type: "Ovo de Colher", img: productImages["Ovo de ColherBranco"], badge: null, hasRecheio: true },
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