import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="w-full bg-pink-50  mt-10">
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Coluna 1: Contato */}
        <article className="space-y-4">
          <h6 className="font-bold text-pink-950 uppercase tracking-wider text-xs">Contato</h6>
          <div className="space-y-2 text-sm text-pink-700">
            <p>(11) 98987-6344</p>
           
          </div>
        </article>

        {/* Coluna 2: Redes Sociais */}
        <article className="space-y-4">
          <h6 className="font-bold text-pink-950 uppercase tracking-wider text-xs">Redes sociais</h6>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-pink-900 hover:text-pink-500 transition-colors">
              <FacebookLogoIcon size={22} weight="fill" />
            </a>
            <a href="#" aria-label="Instagram" className="text-pink-900 hover:text-pink-500 transition-colors">
              <InstagramLogoIcon size={22} weight="fill" />
            </a>
            <a href="https://wa.me/5511989876344" target="_blank" aria-label="WhatsApp" className="text-pink-900 hover:text-pink-500 transition-colors">
              <WhatsappLogoIcon size={22} weight="fill" />
            </a>
          </div>
        </article>

        {/* Coluna 3: Links Rápidos */}
        <article className="space-y-4">
          <h6 className="font-bold text-pink-950 uppercase tracking-wider text-xs">Links rápidos</h6>
          <ul className="grid grid-cols-2 gap-2 text-sm text-pink-700">
            {["Início", "Pascoa"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(" ", "").replace("ç", "c").replace("í", "i")}`} className="hover:text-pink-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="border-t border-pink-100 py-6">
        <p className="text-center text-[10px] text-pink-700 uppercase tracking-widest font-medium">
          © 2026 Maria Doces – Tabela sujeita a alterações
        </p>
      </section>
    </footer>
  );
}

export default Footer;
