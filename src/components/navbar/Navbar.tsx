import { useState } from "react";
import { ShoppingCartIcon, WhatsappLogoIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { whatsappLink } from "../../data/products";

const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Produtos", to: "/products" },
  { label: "🐣 Páscoa", to: "/pascoa", seasonal: true },
];

function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-pink-50 shadow-sm sticky top-0 z-40">
      <section className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/">
          <img
            src="https://i.ibb.co/v4LP9MVm/Design-sem-nome-removebg-preview.png"
            alt="Logo Maria Doces"
            className="w-32 md:w-40"
          />
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-pink-900">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`hover:text-pink-500 transition-colors ${
                  link.seasonal ? "text-amber-600 font-semibold hover:text-amber-500" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Ações direita */}
        <div className="flex items-center gap-3">
          {/* Carrinho */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-1 text-pink-900 hover:text-pink-500 transition-colors"
          >
            <ShoppingCartIcon size={22} weight="bold" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* WhatsApp */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 active:scale-95 transition-all shadow-md shadow-emerald-100"
          >
            <WhatsappLogoIcon size={16} weight="fill" />
            <span className="hidden sm:inline">Peça pelo WhatsApp</span>
          </a>

          {/* Hamburguer — só mobile */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-1 text-pink-900 hover:text-pink-500 transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <XIcon size={24} weight="bold" /> : <ListIcon size={24} weight="bold" />}
          </button>
        </div>
      </section>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-pink-50 border-t border-pink-100 px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-pink-900">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block hover:text-pink-500 transition-colors ${
                    link.seasonal ? "text-amber-600 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;