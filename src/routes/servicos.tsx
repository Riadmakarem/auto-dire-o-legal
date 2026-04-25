import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, Car, Truck, Bus, GraduationCap, RefreshCw, FileCheck, Heart } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Direção Legal Autoescola" },
      { name: "description", content: "Conheça os serviços da Direção Legal: primeira habilitação, adição de categoria, renovação, reciclagem e mais." },
    ],
  }),
  component: Servicos,
});

const services = [
  { icon: Bike, title: "Categoria A — Moto", price: "R$ 1.490", desc: "Aulas práticas em moto, balão e simulado oficial." },
  { icon: Car, title: "Categoria B — Carro", price: "R$ 1.890", desc: "Aulas teóricas online + 20 aulas práticas em carros novos." },
  { icon: Truck, title: "Categoria C — Caminhão", price: "R$ 2.490", desc: "Treinamento em caminhões para transporte de cargas." },
  { icon: Bus, title: "Categoria D — Ônibus", price: "R$ 2.890", desc: "Habilitação para transporte coletivo de passageiros." },
  { icon: GraduationCap, title: "Primeira Habilitação", price: "Consultar", desc: "Acompanhamento completo do início ao fim do processo." },
  { icon: RefreshCw, title: "Renovação de CNH", price: "R$ 290", desc: "Renovação rápida com exames médicos no local." },
  { icon: FileCheck, title: "Adição de Categoria", price: "Consultar", desc: "Adicione novas categorias à sua CNH atual." },
  { icon: Heart, title: "Aulas Extras", price: "R$ 90/aula", desc: "Pratique mais e ganhe confiança ao volante." },
];

function Servicos() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-secondary text-secondary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Nossos serviços</span>
          <h1 className="text-5xl md:text-6xl font-black mt-2">Tudo para sua <span className="text-primary">habilitação</span></h1>
          <p className="mt-4 max-w-xl mx-auto text-secondary-foreground/70">Escolha o serviço ideal para você. Condições especiais e parcelamento em até 12x.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="p-6 border-2 hover:border-primary transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_oklch(0.86_0.19_95/0.4)]">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <div className="text-2xl font-black text-primary mt-1">{s.price}</div>
              <p className="text-sm text-muted-foreground mt-3">{s.desc}</p>
              <Button asChild variant="outline" className="w-full mt-5 border-primary/40 hover:bg-primary hover:text-primary-foreground">
                <Link to="/contato">Quero esse</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
