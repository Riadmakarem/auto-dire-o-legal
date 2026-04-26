import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo2.png";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <img src={logo} alt="Direção Legal" className="h-20 w-auto mb-4" />
          <p className="text-sm text-secondary-foreground/70">Sua autoescola de confiança. Habilitação rápida, segura e descomplicada.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-primary">Navegação</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><Link to="/" className="hover:text-primary">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
            <li><Link to="/sobre" className="hover:text-primary">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-primary">Contato</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/70">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Av. Brasil, 1234 — Centro</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (92) 9227-7979</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> contato@direcaolegal.com.br</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-primary">Siga-nos</h4>
          <div className="flex gap-3">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 py-6 text-center text-xs text-secondary-foreground/50">
        © {new Date().getFullYear()} Direção Legal. Todos os direitos reservados.
      </div>
    </footer>
  );
}
