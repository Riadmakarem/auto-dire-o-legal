import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, Car, Bus, GraduationCap, RefreshCw, FileCheck, Heart, Truck } from "lucide-react";

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
  { icon: Bike, title: "Categoria A — Moto", desc: "Aulas práticas em moto, balão e simulado oficial.", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80" },
  { icon: Car, title: "Categoria B — Carro", desc: "Aulas teóricas online + 20 aulas práticas em carros novos.", img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80" },
  { icon: Bus, title: "Categoria D — Ônibus", desc: "Habilitação para transporte coletivo de passageiros.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80" },
  { icon: Truck, title: "Categoria E — Carretas", desc: "Habilitação para condução de veículos articulados e carretas.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" },
  { icon: GraduationCap, title: "Primeira Habilitação", desc: "Acompanhamento completo do início ao fim do processo.", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80" },
  { icon: RefreshCw, title: "Renovação de CNH", desc: "Renovação rápida com exames médicos no local.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { icon: FileCheck, title: "Adição de Categoria", desc: "Adicione novas categorias à sua CNH atual.", img: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80" },
  { icon: Heart, title: "Aulas Extras", desc: "Pratique mais e ganhe confiança ao volante.", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" },
];

function Servicos() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfc]">
      <SiteHeader />

      {/* HEADER SECTION IS GONE FROM MOCK! Oh wait, I'll keep the simple header text, but the cards background should be lighter */}
      <section className="bg-background py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mt-2">Tudo para sua <span className="text-primary">habilitação</span></h1>
          <p className="mt-4 max-w-xl mx-auto text-secondary-foreground/70 font-medium">Escolha o serviço ideal para você. Condições especiais e parcelamento em até 12x.</p>
        </div>
      </section>

      <section className="pb-24 pt-4 bg-[#fdfdfc]">
        <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="group relative overflow-hidden bg-[#0a0a0a] rounded-[24px] border-0 text-left transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col min-h-[460px] md:min-h-[420px]">

              {/* IMAGE TOP HALF */}
              {s.img && (
                <div className="relative h-[220px] w-full overflow-hidden shrink-0">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {/* Floating Yellow Icon on the top-left */}
                  <div className="absolute top-5 left-5 h-12 w-12 rounded-[14px] bg-primary flex items-center justify-center shadow-lg">
                    <s.icon className="h-6 w-6 text-black" />
                  </div>
                  {/* Gradient to blend smoothly into black section */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>
              )}

              {/* BOTTOM BLACK SECTION */}
              <div className="relative z-10 flex flex-col flex-1 p-6 pt-2">
                {!s.img && (
                  <div className="h-12 w-12 rounded-[14px] bg-primary flex items-center justify-center shadow-lg mb-4">
                    <s.icon className="h-6 w-6 text-black" />
                  </div>
                )}
                <h3 className="text-[20px] font-bold text-white tracking-tight leading-snug">{s.title}</h3>
                <p className="text-[14px] text-white/70 mt-2 mb-8 leading-relaxed font-medium">{s.desc}</p>

                <div className="mt-auto">
                  <Button asChild className="w-full font-bold bg-transparent text-white border border-primary/50 rounded-lg hover:bg-primary hover:text-black hover:border-primary transition-colors h-[42px]">
                    <Link to="/contato">Quero esse</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
