export type Badge = "Novo" | "Especial" | "Páscoa" | null;

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number; // valor em número para facilitar formatação
  category: string;
  chocoType: string;
  type: string;
  badge: Badge;
  img: string;
}

export const CATEGORIES = ["Todos","500g","350g",'250g'];
export const CATEGORIESCHOC = ["Todos","Ao Leite","Branco","Amargo"];
export const CATEGORIESTIPO = ["Todos","Tradicional","Crocante","Trufado","Recheado","Ovo de Colher"];


export const WHATSAPP_NUMBER = "5511989876344";

export const products: Product[] = [
 {
   id: 1,
   name: "Ovo Tradicional",
   desc: "Chocolate premium nos sabores clássicos",
   price: 40.0,
   category: "250g",
   chocoType: "Ao Leite",
   type: "Tradicional",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 2,
   name: "Ovo Tradicional",
   desc: "Chocolate premium nos sabores clássicos",
   price: 50.0,
   category: "350g",
   chocoType: "Ao Leite",
   type: "Tradicional",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 3,
   name: "Ovo Tradicional",
   desc: "Chocolate premium nos sabores clássicos",
   price: 60.0,
   category: "500g",
   chocoType: "Ao Leite",
   type: "Tradicional",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 }, {
   id: 4,
   name: "Ovo Tradicional",
   desc: "Chocolate premium nos sabores clássicos",
   price: 40.0,
   category: "250g",
   chocoType: "Amargo",
   type: "Tradicional",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 5,
   name: "Ovo Tradicional",
   desc: "Chocolate premium nos sabores clássicos",
   price: 50.0,
   category: "350g",
   chocoType: "Amargo",
   type: "Tradicional",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 6,
   name: "Ovo Tradicional",
   desc: "Chocolate premium nos sabores clássicos",
   price: 60.0,
   category: "500g",
   chocoType: "Amargo",
   type: "Tradicional",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 7,
   name: "Ovo Crocante",
   desc: "Chocolate Crocante nos sabores clássicos",
   price: 50.0,
   category: "250g",
   chocoType: "Ao Leite",
   type: "Crocante",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 8,
   name: "Ovo Crocante",
   desc: "Chocolate Crocante nos sabores clássicos",
   price: 60.0,
   category: "350g",
   chocoType: "Ao Leite",
   type: "Crocante",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 9,
   name: "Ovo Crocante",
   desc: "Chocolate Crocante nos sabores clássicos",
   price: 70.0,
   category: "500g",
   chocoType: "Ao Leite",
   type: "Crocante",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 10,
   name: "Ovo Crocante",
   desc: "Chocolate Crocante nos sabores clássicos",
   price: 50.0,
   category: "250g",
   chocoType: "Amargo",
   type: "Crocante",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 11,
   name: "Ovo Crocante",
   desc: "Chocolate Crocante nos sabores clássicos",
   price: 60.0,
   category: "350g",
   chocoType: "Amargo",
   type: "Crocante",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 12,
   name: "Ovo Crocante",
   desc: "Chocolate Crocante nos sabores clássicos",
   price: 70.0,
   category: "500g",
   chocoType: "Amargo",
   type: "Crocante",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 13,
   name: "Ovo Trufado",
   desc: "Chocolate Trufado nos sabores clássicos",
   price: 50.0,
   category: "250g",
   chocoType: "Ao Leite",
   type: "Trufado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 14,
   name: "Ovo Trufado",
   desc: "Chocolate Trufado nos sabores clássicos",
   price: 60.0,
   category: "350g",
   chocoType: "Ao Leite",
   type: "Trufado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 15,
   name: "Ovo Trufado",
   desc: "Chocolate Trufado nos sabores clássicos",
   price: 80.0,
   category: "500g",
   chocoType: "Ao Leite",
   type: "Trufado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 16,
   name: "Ovo Trufado",
   desc: "Chocolate Trufado nos sabores clássicos",
   price: 50.0,
   category: "250g",
   chocoType: "Amargo",
   type: "Trufado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 17,
   name: "Ovo Trufado",
   desc: "Chocolate Trufado nos sabores clássicos",
   price: 60.0,
   category: "350g",
   chocoType: "Amargo",
   type: "Trufado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 18,
   name: "Ovo Trufado",
   desc: "Chocolate Trufado nos sabores clássicos",
   price: 80.0,
   category: "500g",
   chocoType: "Amargo",
   type: "Trufado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 19,
   name: "Ovo Recheado",
   desc: "Chocolate Recheado nos sabores clássicos",
   price: 70.0,
   category: "250g",
   chocoType: "Ao Leite",
   type: "Recheado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 20,
   name: "Ovo Recheado",
   desc: "Chocolate Recheado nos sabores clássicos",
   price: 80.0,
   category: "350g",
   chocoType: "Ao Leite",
   type: "Recheado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 21,
   name: "Ovo Recheado",
   desc: "Chocolate Recheado nos sabores clássicos",
   price: 100.0,
   category: "500g",
   chocoType: "Ao Leite",
   type: "Recheado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 22,
   name: "Ovo Recheado",
   desc: "Chocolate Recheado nos sabores clássicos",
   price: 70.0,
   category: "250g",
   chocoType: "Amargo",
   type: "Recheado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 23,
   name: "Ovo Recheado",
   desc: "Chocolate Recheado nos sabores clássicos",
   price: 80.0,
   category: "350g",
   chocoType: "Amargo",
   type: "Recheado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 24,
   name: "Ovo Recheado",
   desc: "Chocolate Recheado nos sabores clássicos",
   price: 100.0,
   category: "500g",
   chocoType: "Amargo",
   type: "Recheado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 25,
   name: "Ovo de Colher",
   desc: "Chocolate de Colher nos sabores clássicos",
   price: 60.0,
   category: "250g",
   chocoType: "Ao Leite",
   type: "Ovo de Colher",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 26,
   name: "Ovo de Colher",
   desc: "Chocolate de Colher nos sabores clássicos",
   price: 70.0,
   category: "350g",
   chocoType: "Ao Leite",
   type: "Ovo de Colher",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 27,
   name: "Ovo de Colher",
   desc: "Chocolate de Colher nos sabores clássicos",
   price: 80.0,
   category: "500g",
   chocoType: "Ao Leite",
   type: "Ovo de Colher",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 28,
   name: "Ovo de Colher",
   desc: "Chocolate de Colher nos sabores clássicos",
   price: 60.0,
   category: "250g",
   chocoType: "Amargo",
   type: "Ovo de Colher",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 29,
   name: "Ovo de Colher",
   desc: "Chocolate de Colher nos sabores clássicos",
   price: 70.0,
   category: "350g",
   chocoType: "Amargo",
   type: "Ovo de Colher",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 30,
   name: "Ovo de Colher",
   desc: "Chocolate de Colher nos sabores clássicos",
   price: 80.0,
   category: "500g",
   chocoType: "Amargo",
   type: "Ovo de Colher",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 31,
   name: "Ovo Tradicional",
   desc: "Chocolate Tradicional nos sabores clássicos",
   price: 50.0,
   category: "250g",
   chocoType: "Branco",
   type: "Tradicional",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 32,
   name: "Ovo Tradicional",
   desc: "Chocolate Tradicional nos sabores clássicos",
   price: 60.0,
   category: "350g",
   chocoType: "Branco",
   type: "Tradicional",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 33,
   name: "Ovo Tradicional",
   desc: "Chocolate Tradicional nos sabores clássicos",
   price: 70.0,
   category: "500g",
   chocoType: "Branco",
   type: "Tradicional",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 34,
   name: "Ovo Crocante",
   desc: "Chocolate Crocante nos sabores clássicos",
   price: 55.0,
   category: "250g",
   chocoType: "Branco",
   type: "Crocante",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 35,
   name: "Ovo Crocante",
   desc: "Chocolate Crocante nos sabores clássicos",
   price: 60.0,
   category: "350g",
   chocoType: "Branco",
   type: "Crocante",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 36,
   name: "Ovo Crocante",
   desc: "Chocolate Crocante nos sabores clássicos",
   price: 80.0,
   category: "500g",
   chocoType: "Branco",
   type: "Crocante",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 37,
   name: "Ovo Trufado",
   desc: "Chocolate Trufado nos sabores clássicos",
   price: 60.0,
   category: "250g",
   chocoType: "Branco",
   type: "Trufado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 38,
   name: "Ovo Trufado",
   desc: "Chocolate Trufado nos sabores clássicos",
   price: 70.0,
   category: "350g",
   chocoType: "Branco",
   type: "Trufado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 39,
   name: "Ovo Trufado",
   desc: "Chocolate Trufado nos sabores clássicos",
   price: 90.0,
   category: "500g",
   chocoType: "Branco",
   type: "Trufado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 40,
   name: "Ovo Recheado",
   desc: "Chocolate Recheado nos sabores clássicos",
   price: 70.0,
   category: "250g",
   chocoType: "Branco",
   type: "Recheado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 41,
   name: "Ovo Recheado",
   desc: "Chocolate Recheado nos sabores clássicos",
   price: 90.0,
   category: "350g",
   chocoType: "Branco",
   type: "Recheado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 42,
   name: "Ovo Recheado",
   desc: "Chocolate Recheado nos sabores clássicos",
   price: 110.0,
   category: "500g",
   chocoType: "Branco",
   type: "Recheado",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 43,
   name: "Ovo de Colher",
   desc: "Chocolate de Colher nos sabores clássicos",
   price: 70.0,
   category: "250g",
   chocoType: "Branco",
   type: "Ovo de Colher",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 44,
   name: "Ovo de Colher",
   desc: "Chocolate de Colher nos sabores clássicos",
   price: 80.0,
   category: "350g",
   chocoType: "Branco",
   type: "Ovo de Colher",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
 },
 {
   id: 45,
   name: "Ovo de Colher",
   desc: "Chocolate de Colher nos sabores clássicos",
   price: 90.0,
   category: "500g",
   chocoType: "Branco",
   type: "Ovo de Colher",
   img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
   badge: null
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