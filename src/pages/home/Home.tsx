import { products, whatsappLink, formatPrice } from "../../data/products";

// Pega os 4 produtos com badge para destaque, ou os 4 primeiros
const featured = products.filter((p) => p.badge).slice(0, 4).length >= 2
  ? products.filter((p) => p.badge).slice(0, 4)
  : products.slice(0, 4);

function FeaturedCard({ product }: { product: (typeof products)[0] }) {
  return (
    <a
      href={whatsappLink(product.name)}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white rounded-2xl overflow-hidden border border-pink-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {product.badge && (
        <span
          className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${
            product.badge === "Novo" ? "bg-pink-500" : "bg-amber-400"
          }`}
        >
          {product.badge}
        </span>
      )}
      <div className="p-3">
        <p className="text-sm font-semibold text-pink-950 leading-tight">{product.name}</p>
        <p className="text-xs text-pink-400 mt-0.5">{product.desc}</p>
        <p className="text-sm font-bold text-pink-600 mt-1">{formatPrice(product.price)}</p>
      </div>
    </a>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="max-w-6xl mx-auto px-6 pt-12 pb-10 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Texto */}
        <div className="flex-1 space-y-5">
     
          <h1 className="font-serif text-4xl md:text-5xl text-pink-950 leading-tight">
            Os doces mais{" "}
            <span className="text-pink-500 italic">apaixonantes</span>
            <br />
            da cidade
          </h1>
          <p className="text-sm text-pink-700 max-w-sm leading-relaxed">
            Brigadeiros, trufas, bolos no pote e muito mais — fresquinhos,
            feitos na hora e entregues com carinho.
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
            <a
              href="#produtos"
              className="text-sm font-medium text-pink-600 hover:text-pink-800 transition-colors underline underline-offset-2"
            >
              Ver produtos →
            </a>
          </div>
        </div>

        {/* Imagem blob orgânico */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] overflow-hidden shadow-xl shadow-pink-200">
            <img
              src="https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&h=600&fit=crop"
              alt="Doces Maria Doces"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decoração */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-amber-200 -z-10" />
          <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-pink-300 -z-10" />
        </div>
      </section>

      {/* ── Destaques ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-pink-950">
            ✨ Destaques
          </h2>
          <a
            href="#produtos"
            className="text-xs font-medium text-pink-500 hover:text-pink-700 transition-colors underline underline-offset-2"
          >
            Ver todos →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((p: (typeof products)[0]) => (
            <FeaturedCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}