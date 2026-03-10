import { useState, useMemo } from "react";
import {
  MagnifyingGlassIcon,
  WhatsappLogoIcon,
  ShoppingCartIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import {
  products,
  CATEGORIES,
  CATEGORIESCHOC,
  CATEGORIESTIPO,
  RECHEIOS,
  formatPrice,
  whatsappLink,
  type Product,
} from "../../data/products";
import { useCart } from "../../context/CartContext";

// ─── ProductCard ──────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
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
          <h3 className="text-sm font-semibold text-pink-950 leading-tight">
            {product.name}
          </h3>
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

        {/* Dropdown de recheio */}
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
          <span className="text-base font-bold text-pink-600">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Botões */}
        <div className="grid grid-cols-5 gap-2">
          {/* Add ao carrinho — bloqueado se precisa de recheio e não selecionou */}
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

          {/* Pedir direto no WhatsApp */}
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

// ─── FilterGroup ──────────────────────────────────────────────────────────────

interface FilterGroupProps {
  label: string;
  options: string[];
  active: string;
  onChange: (value: string) => void;
}

function FilterGroup({ label, options, active, onChange }: FilterGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold text-pink-400 uppercase tracking-wider">
        {label}
      </span>
      <div className="flex gap-2 flex-wrap">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              active === opt
                ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                : "bg-white text-pink-600 border border-pink-200 hover:border-pink-400"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── PascoaPage ───────────────────────────────────────────────────────────────

export default function Pascoa() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeChoc, setActiveChoc]         = useState("Todos");
  const [activeTipo, setActiveTipo]         = useState("Todos");
  const [search, setSearch]                 = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat    = activeCategory === "Todos" || p.category  === activeCategory;
      const matchChoc   = activeChoc     === "Todos" || p.chocoType === activeChoc;
      const matchTipo   = activeTipo     === "Todos" || p.type      === activeTipo;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase().trim());
      return matchCat && matchChoc && matchTipo && matchSearch;
    });
  }, [activeCategory, activeChoc, activeTipo, search]);

  const hasActiveFilters =
    activeCategory !== "Todos" || activeChoc !== "Todos" || activeTipo !== "Todos" || search !== "";

  const clearFilters = () => {
    setActiveCategory("Todos");
    setActiveChoc("Todos");
    setActiveTipo("Todos");
    setSearch("");
  };

  return (
    <section id="pascoa" className="max-w-6xl mx-auto px-6 py-10">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-pink-950">🐣 Ovos de Páscoa</h2>
          <p className="text-xs text-pink-400 mt-1">Use os filtros para encontrar o ovo ideal</p>
        </div>
        <div className="relative w-full md:w-64">
          <MagnifyingGlassIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-300" />
          <input
            type="text"
            placeholder="Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full border border-pink-200 bg-white text-sm text-pink-900 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          />
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-pink-50/60 rounded-2xl p-4 mb-8 space-y-4 border border-pink-100">
        <FilterGroup label="Peso"              options={CATEGORIES}     active={activeCategory} onChange={setActiveCategory} />
        <FilterGroup label="Tipo de Chocolate" options={CATEGORIESCHOC} active={activeChoc}     onChange={setActiveChoc} />
        <FilterGroup label="Tipo de Ovo"       options={CATEGORIESTIPO} active={activeTipo}     onChange={setActiveTipo} />
      </div>

      {/* Contador + limpar */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-pink-400">
          {filtered.length} produto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
        </p>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-xs text-pink-500 underline underline-offset-2 hover:text-pink-700 transition-colors">
            Limpar filtros
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div className="text-center py-20 text-pink-400">
          <p className="text-4xl mb-3">🥚</p>
          <p className="text-sm font-medium">Nenhum ovo encontrado com esses filtros.</p>
          <button onClick={clearFilters} className="mt-3 text-xs text-pink-500 underline underline-offset-2 hover:text-pink-700 transition-colors">
            Limpar filtros
          </button>
        </div>
      )}
    </section>
  );
}