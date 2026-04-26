import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, GraduationCap, ShieldCheck, Clock, Award, Users, CheckCircle2, Star } from "lucide-react";
import heroImg from "@/assets/hero-driving.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Direção Legal — Autoescola | CNH rápida e segura" },
      { name: "description", content: "Autoescola Direção Legal: habilitação CNH categorias A, B, C, D e E. Aulas práticas, teóricas e instrutores qualificados. Matricule-se já!" },
      { property: "og:title", content: "Direção Legal — Autoescola" },
      { property: "og:description", content: "Sua habilitação rápida, segura e descomplicada com a Direção Legal." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1536} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-36 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-6">
              ⭐ Treinamento nº 1 da região
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-secondary-foreground">
              Sua CNH<br />
              <span className="text-primary drop-shadow-[0_0_30px_oklch(0.86_0.19_95/0.6)]">com tudo de bom.</span>
            </h1>
            <p className="mt-6 text-lg text-secondary-foreground/80 max-w-lg">
              Direção Legal é o treinamento para habilitados que acaba com o seu medo e garante sua segurança. Instrutores certificados, frota nova e aprovação garantida.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base font-bold h-14 px-8 shadow-[0_0_30px_oklch(0.86_0.19_95/0.5)] hover:scale-105 transition-transform">
                <Link to="/contato">Quero me matricular</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base font-bold h-14 px-8 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/servicos">Ver serviços</Link>
              </Button>
            </div>
            <div className="mt-10 flex gap-8">
              <div><div className="text-3xl font-black text-primary">5k</div><div className="text-xs text-secondary-foreground/60">Alunos formados</div></div>
              <div><div className="text-3xl font-black text-primary">14</div><div className="text-xs text-secondary-foreground/60">Anos de história</div></div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
            <img src={heroImg} alt="Aluna e instrutor da Direção Legal" className="relative rounded-3xl shadow-[0_20px_60px_-15px_oklch(0.86_0.19_95/0.55)] border-4 border-primary" width={1536} height={1024} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Por que Direção Legal</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">Tudo que você precisa<br />para dirigir com confiança</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Segurança total", desc: "Carros novos, revisados e instrutores certificados pelo DETRAN." },
              { icon: Clock, title: "Horários flexíveis", desc: "Aulas de segunda a sábado, manhã, tarde ou noite. Você escolhe." },
              { icon: Award, title: "Alta aprovação", desc: "98% dos nossos alunos passam de primeira no exame prático." },
              { icon: GraduationCap, title: "Aulas teóricas online", desc: "Estude de onde quiser, com material exclusivo e simulados." },
              { icon: Users, title: "Atendimento humano", desc: "Equipe próxima, te apoiando do começo ao fim do processo." },
              { icon: Car, title: "Frota completa", desc: "Categorias A, B, C, D e E em veículos modernos e confortáveis." },
            ].map((f, i) => (
              <Card key={i} className="p-8 border-2 hover:border-primary transition-all hover:shadow-[0_10px_40px_-10px_oklch(0.86_0.19_95/0.4)] hover:-translate-y-1 group">
                <div className="h-14 w-14 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <f.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Nossos serviços</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">Categorias <span className="text-primary">de habilitação</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cat: "A", desc: "Motos", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80" },
              { cat: "B", desc: "Carros", img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80" },
              { cat: "D", desc: "Ônibus", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80" },
              { cat: "E", desc: "Carretas", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" },
            ].map((c) => (
              <Link to="/servicos" key={c.cat} className="group relative overflow-hidden bg-black rounded-2xl text-center transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_oklch(0.86_0.19_95/0.4)] h-64 md:h-80 flex flex-col justify-end p-8 border border-primary/20 hover:border-primary">
                <div className="absolute inset-0 z-0">
                  <img src={c.img} alt={c.desc} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="relative z-10 text-white">
                  <div className="text-7xl font-black text-primary drop-shadow-md group-hover:text-primary-foreground transition-colors">{c.cat}</div>
                  <div className="mt-3 text-lg font-bold opacity-90">{c.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - DESATIVADO POR ENQUANTO */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Depoimentos</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">O que nossos alunos dizem</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Mariana S.", text: "Passei de primeira! Os instrutores são incríveis e muito pacientes. Recomendo!" },
              { name: "Carlos R.", text: "Ambiente top, aulas práticas excelentes. A Direção Legal mudou meu medo de dirigir." },
              { name: "Juliana P.", text: "Atendimento maravilhoso, horários que cabem na minha rotina. 10 de 10!" },
            ].map((t, i) => (
              <Card key={i} className="p-8 border-2 bg-gradient-to-br from-card to-primary/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground/80 italic">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center font-black text-primary-foreground">{t.name[0]}</div>
                  <div className="font-bold">{t.name}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(1_0_0/0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-6xl font-black max-w-3xl mx-auto leading-tight">Pronto para tirar sua CNH?</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto opacity-80">Matricule-se hoje e ganhe condições especiais para começar suas aulas.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base font-bold h-14 px-8 hover:scale-105 transition-transform">
              <Link to="/contato">Falar com a equipe</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Sem taxas escondidas</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Parcele em até 12x</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Aulas extras grátis</div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
