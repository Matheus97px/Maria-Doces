import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, CheckIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { products, whatsappLink, formatPrice, RECHEIOS, type Product } from "../../data/products";
import { useCart } from "../../context/CartContext";

// Pega os destaques: produtos com badge primeiro, senão os 4 primeiros
const featured = (
  products.filter((p) => p.badge).length >= 2
    ? products.filter((p) => p.badge)
    : products
).slice(0, 4);

// ─── FeaturedCard — mesmo padrão da página Páscoa ────────────────────────────

function FeaturedCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [recheio, setRecheio] = useState("");

  const canOrder = !product.hasRecheio || recheio !== "";

  const handleAddToCart = () => {
    if (!canOrder) return;
    addToCart(product, product.hasRecheio ? recheio : undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const badgeColor =
    product.badge === "Novo"
      ? "bg-pink-500"
      : product.badge === "Páscoa"
      ? "bg-amber-400"
      : "bg-rose-400";

  const productDetails = `${product.name} - ${product.type} - ${product.chocoType} - ${product.category}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-pink-100 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Imagem */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${badgeColor}`}>
            {product.badge}
          </span>
        )}
        <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 text-pink-700 backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      {/* Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-pink-950 leading-tight">{product.name}</h3>
          <p className="text-xs text-pink-400 mt-0.5 line-clamp-1">{product.desc}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
            {product.chocoType}
          </span>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
            {product.type}
          </span>
        </div>

        {/* Dropdown recheio */}
        {product.hasRecheio && (
          <div>
            <label className="text-[10px] font-semibold text-pink-400 uppercase tracking-wide block mb-1">
              Escolha o recheio
            </label>
            <select
              value={recheio}
              onChange={(e) => setRecheio(e.target.value)}
              className="w-full text-xs rounded-xl border border-pink-200 bg-white text-pink-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 transition cursor-pointer"
            >
              <option value="">Selecione...</option>
              {RECHEIOS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        )}

        {/* Preço */}
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-pink-600">{formatPrice(product.price)}</span>
        </div>

        {/* Botões */}
        <div className="grid grid-cols-5 gap-2">
          <button
            onClick={handleAddToCart}
            disabled={!canOrder}
            className={`col-span-2 flex items-center justify-center gap-1.5 rounded-xl border transition-all text-[11px] font-bold py-2 ${
              !canOrder
                ? "bg-gray-50 border-gray-200 text-gray-300 cursor-not-allowed"
                : added
                ? "bg-pink-50 border-pink-200 text-pink-600"
                : "bg-white border-pink-200 text-pink-500 hover:bg-pink-50 hover:border-pink-300"
            }`}
          >
            {added ? (
              <><CheckIcon size={14} weight="bold" /><span>Adicionado!</span></>
            ) : (
              <><ShoppingCartIcon size={14} weight="bold" /><span>Add</span></>
            )}
          </button>

          <a
            href={canOrder ? whatsappLink(productDetails, recheio || undefined) : "#"}
            target={canOrder ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={(e) => { if (!canOrder) e.preventDefault(); }}
            className={`col-span-3 flex items-center justify-center gap-1.5 rounded-xl transition-all text-white text-[11px] font-bold py-2 ${
              canOrder
                ? "bg-emerald-500 hover:bg-emerald-600 active:scale-95 shadow-sm shadow-emerald-100"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <WhatsappLogoIcon size={14} weight="fill" />
            <span>{canOrder ? "Pedir agora" : "Escolha o recheio"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── HomePage ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="max-w-6xl mx-auto px-6 pt-12 pb-10 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Texto */}
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
            🐣 Páscoa 2025
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-pink-950 leading-tight">
            Ovos de Páscoa{" "}
            <span className="text-pink-500 italic">artesanais</span>
            <br />
            feitos com amor
          </h1>
          <p className="text-sm text-pink-700 max-w-sm leading-relaxed">
            Tradicionais, trufados, recheados e de colher — em chocolate ao
            leite, amargo ou branco. Fresquinhos e feitos na hora para você.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pink-500 hover:bg-pink-600 active:scale-95 transition-all px-6 py-3 text-sm font-semibold text-white shadow-md shadow-pink-200"
            >
              Fazer pedido pelo WhatsApp
            </a>
            <Link
              to="/pascoa"
              className="text-sm font-medium text-pink-600 hover:text-pink-800 transition-colors underline underline-offset-2"
            >
              Ver todos os ovos →
            </Link>
          </div>
        </div>

        {/* Imagem blob */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] overflow-hidden shadow-xl shadow-pink-200">
            <img
              src="https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&h=600&fit=crop"
              alt="Ovos de Páscoa artesanais"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-amber-200 -z-10" />
          <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-pink-300 -z-10" />
        </div>
      </section>

      {/* ── Destaques ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-pink-950">🥚 Destaques da Páscoa</h2>
          <Link
            to="/pascoa"
            className="text-xs font-medium text-pink-500 hover:text-pink-700 transition-colors underline underline-offset-2"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((p) => (
            <FeaturedCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}