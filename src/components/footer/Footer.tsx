// Footer melhorado
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="w-full bg-pink-50 border-t mt-10">
      <section className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

        <article className="space-y-1 text-sm text-pink-900">
          <h6 className="font-semibold text-pink-950">Contato</h6>
          <p className="flex items-center gap-2">
            <PhoneIcon size={16} />
            <span>(11) 98987-6344</span>
          </p>
        </article>

        <article className="text-sm text-pink-900">
          <h6 className="font-semibold text-pink-950 mb-2">Redes sociais</h6>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-pink-500 transition-colors">
              <FacebookLogoIcon size={22} weight="fill" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
              <InstagramLogoIcon size={22} weight="fill" />
            </a>
            <a href="https://wa.me/5511989876344" target="_blank" aria-label="WhatsApp" className="hover:text-pink-500 transition-colors">
              <WhatsappLogoIcon size={22} weight="fill" />
            </a>
          </div>
        </article>

        <article className="text-sm text-pink-900">
          <h6 className="font-semibold text-pink-950 mb-2">Links rápidos</h6>
          <ul className="space-y-1">
            {["Início", "Produtos", "Promoções", "Sobre nós", "Contato"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(" ", "").replace("ç", "c").replace("í", "i")}`} className="hover:text-pink-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="border-t">
        <p className="max-w-6xl mx-auto px-6 py-3 text-xs text-pink-700 text-center">
          © 2026 Maria Doces – Tabela sujeita a alterações
        </p>
      </section>
    </footer>
  );
}

export default Footer;
