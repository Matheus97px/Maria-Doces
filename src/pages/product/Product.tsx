import { useState, useMemo } from "react";
import { MagnifyingGlassIcon, WhatsappLogoIcon, ShoppingCartIcon, CheckIcon } from "@phosphor-icons/react";
import { products, CATEGORIES, formatPrice, whatsappLink, type Product } from "../../data/products";
import { useCart } from "../../context/CartContext";

// ─── ProductCard ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const badgeColor =
    product.badge === "Novo"
      ? "bg-pink-500"
      : product.badge === "Páscoa"
      ? "bg-amber-400"
      : "bg-rose-400";

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
          <span
            className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${badgeColor}`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-pink-950 leading-tight">
            {product.name}
          </h3>
          <p className="text-xs text-pink-400 mt-0.5 line-clamp-1">{product.desc}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-pink-600">
            {formatPrice(product.price)}
          </span>
        </div>

        <div className="grid grid-cols-5 gap-2">
          <button
            onClick={handleAddToCart}
            className={`col-span-2 flex items-center justify-center gap-1.5 rounded-xl border transition-all text-[11px] font-bold py-2 ${
              added
                ? "bg-pink-50 border-pink-200 text-pink-600"
                : "bg-white border-pink-200 text-pink-500 hover:bg-pink-50 hover:border-pink-300"
            }`}
          >
            {added ? (
              <>
                <CheckIcon size={14} weight="bold" />
                <span>Adicionado!</span>
              </>
            ) : (
              <>
                <ShoppingCartIcon size={14} weight="bold" />
                <span>Add</span>
              </>
            )}
          </button>

          <a
            href={whatsappLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all text-white text-[11px] font-bold py-2 shadow-sm shadow-emerald-100"
          >
            <WhatsappLogoIcon size={14} weight="fill" />
            <span>Pedir agora</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── ProductsPage ─────────────────────────────────────────────────────────────

export default function Product() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat =
        activeCategory === "Todos" || p.category === activeCategory;
      const matchSearch = p.name
        .toLowerCase()
        .includes(search.toLowerCase().trim());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <section id="produtos" className="max-w-6xl mx-auto px-6 py-10">
      {/* Cabeçalho da seção */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2 className="text-2xl font-semibold text-pink-950">
          Nossos produtos
        </h2>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <MagnifyingGlassIcon
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-300"
          />
          <input
            type="text"
            placeholder="Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full border border-pink-200 bg-white text-sm text-pink-900 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          />
        </div>
      </div>

      {/* Filtros de categoria */}
      <div className="flex gap-2 flex-wrap mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              activeCategory === cat
                ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                : "bg-white text-pink-600 border border-pink-200 hover:border-pink-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de produtos */}
      {filtered.length > 0 ? (
        <>
          <p className="text-xs text-pink-400 mb-4">
            {filtered.length} produto{filtered.length !== 1 ? "s" : ""}{" "}
            encontrado{filtered.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-20 text-pink-400">
          <p className="text-4xl mb-3">🍬</p>
          <p className="text-sm font-medium">Nenhum produto encontrado.</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("Todos");
            }}
            className="mt-3 text-xs text-pink-500 underline underline-offset-2 hover:text-pink-700 transition-colors"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </section>
  );
}