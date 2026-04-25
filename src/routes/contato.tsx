import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Direção Legal Autoescola" },
      { name: "description", content: "Entre em contato com a Direção Legal. Matricule-se, tire dúvidas ou agende uma visita." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Toaster />
      <section className="bg-secondary text-secondary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Fale conosco</span>
          <h1 className="text-5xl md:text-6xl font-black mt-2">Vamos <span className="text-primary">conversar?</span></h1>
          <p className="mt-4 max-w-xl mx-auto text-secondary-foreground/70">Estamos prontos para te ajudar a começar essa jornada.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          <Card className="p-8 border-2">
            <h2 className="text-2xl font-black mb-6">Envie sua mensagem</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Mensagem enviada! Em breve entraremos em contato.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" required placeholder="Seu nome completo" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" required placeholder="voce@email.com" />
                </div>
                <div>
                  <Label htmlFor="tel">Telefone</Label>
                  <Input id="tel" required placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div>
                <Label htmlFor="msg">Mensagem</Label>
                <Textarea id="msg" required rows={5} placeholder="Como podemos ajudar?" />
              </div>
              <Button type="submit" size="lg" className="w-full font-bold h-12 shadow-[0_0_25px_oklch(0.86_0.19_95/0.4)]">
                Enviar mensagem
              </Button>
            </form>
          </Card>

          <div className="space-y-4">
            {[
              { icon: MapPin, t: "Endereço", d: "Av. Brasil, 1234 — Centro, São Paulo/SP" },
              { icon: Phone, t: "Telefone", d: "(11) 99999-9999" },
              { icon: Mail, t: "E-mail", d: "contato@direcaolegal.com.br" },
              { icon: Clock, t: "Horário", d: "Seg–Sex: 8h às 20h • Sáb: 8h às 14h" },
            ].map((c, i) => (
              <Card key={i} className="p-6 border-2 flex gap-4 items-start hover:border-primary transition-colors">
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <c.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-lg">{c.t}</div>
                  <div className="text-muted-foreground">{c.d}</div>
                </div>
              </Card>
            ))}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <div className="font-black text-xl">💬 Atendimento via WhatsApp</div>
              <p className="mt-1 opacity-90 text-sm">Resposta rápida em horário comercial.</p>
              <Button variant="secondary" className="mt-4 font-bold w-full">Chamar no WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
