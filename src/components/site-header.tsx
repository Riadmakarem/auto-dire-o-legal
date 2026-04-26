import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo2.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] text-white">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Direção Legal" className="h-24 w-auto" />
        </Link>
        <nav className="hidden items-center md:flex gap-10">
          {[
            { to: "/", label: "Início" },
            { to: "/servicos", label: "Serviços" },
            { to: "/sobre", label: "Sobre" },
            { to: "/contato", label: "Contato" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-sm font-bold transition-colors hover:text-primary group"
              activeProps={{ className: "text-white" }}
              inactiveProps={{ className: "text-white/80" }}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"></div>
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="lg" className="font-bold bg-primary text-black hover:bg-primary/90 h-10 px-8 rounded-lg">
            <Link to="/contato">Matricule-se</Link>
          </Button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0a] px-4 py-4 flex flex-col gap-4">
          {[
            { to: "/", label: "Início" },
            { to: "/servicos", label: "Serviços" },
            { to: "/sobre", label: "Sobre" },
            { to: "/contato", label: "Contato" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="font-bold"
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-white/90" }}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="font-bold bg-primary text-black mt-2">
            <Link to="/contato">Matricule-se</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
