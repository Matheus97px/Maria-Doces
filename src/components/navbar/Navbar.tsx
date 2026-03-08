import { ShoppingCartIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-pink-50 shadow-sm">
     <section className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <article className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/v4LP9MVm/Design-sem-nome-removebg-preview.png"
            alt="Logo Maria Doces"
            className="w-32 md:w-40"
          />
        </article>

        <article className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium text-pink-900">
            <li> <Link to="/" className="hover:text-pink-500 transition-colors">Início</Link></li>
            <li><Link to="/product" className="hover:text-pink-500 transition-colors">Produtos</Link></li>
            <li><Link to="" className="hover:text-pink-500 transition-colors">Pascoa</Link></li>
          </ul>
        </article>

        <article className="flex items-center gap-3">
          <button className="relative p-1 text-pink-900 hover:text-pink-500 transition-colors">
            <ShoppingCartIcon size={22} weight="bold" />
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>

          
            <a href="https://wa.me/55SEUNUMERO"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
          >
            <WhatsappLogoIcon size={16} weight="fill" />
            <span>Peça pelo WhatsApp</span>
          </a>
        </article>
      </section>
    </nav>
  );
}

export default Navbar;
