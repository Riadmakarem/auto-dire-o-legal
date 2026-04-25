import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Award, Users, Heart, Target } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Direção Legal Autoescola" },
      { name: "description", content: "Há mais de 20 anos formando motoristas conscientes e seguros. Conheça a história da Direção Legal." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-secondary text-secondary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Sobre nós</span>
          <h1 className="text-5xl md:text-6xl font-black mt-2">Há 20 anos<br /><span className="text-primary">formando motoristas</span></h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-4">Nossa <span className="text-primary">história</span></h2>
            <p className="text-muted-foreground leading-relaxed">
              A Direção Legal nasceu em 2005 com uma missão clara: transformar o processo de habilitação em uma experiência leve, segura e acessível. Hoje, somos referência na região, com mais de 15 mil alunos formados e uma das maiores taxas de aprovação do estado.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Acreditamos que dirigir é mais que uma habilidade — é uma responsabilidade. Por isso, formamos motoristas conscientes, preparados e confiantes para enfrentar qualquer estrada.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, n: "98%", t: "Aprovação" },
              { icon: Users, n: "+15k", t: "Alunos" },
              { icon: Heart, n: "20", t: "Anos" },
              { icon: Target, n: "5★", t: "Avaliação" },
            ].map((s, i) => (
              <div key={i} className="bg-secondary text-secondary-foreground rounded-2xl p-6 text-center border-2 border-primary/20">
                <s.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-black text-primary">{s.n}</div>
                <div className="text-sm opacity-80">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[
            { t: "Missão", d: "Formar motoristas seguros e conscientes através de uma educação de qualidade." },
            { t: "Visão", d: "Ser a autoescola mais confiável e admirada da região." },
            { t: "Valores", d: "Respeito, segurança, transparência e dedicação a cada aluno." },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="text-2xl font-black mb-3">{v.t}</h3>
              <p className="opacity-90">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
