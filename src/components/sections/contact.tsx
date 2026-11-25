import { Mail } from "lucide-react";

import { SocialIcon } from "@/components/social-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contato" className="border-t py-20">
      <div className="container">
        <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background">
          <CardContent className="flex flex-col items-center p-10 text-center sm:p-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Contato</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vamos conversar?</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Estou aberta a novas oportunidades, parcerias e projetos. Me mande uma mensagem e eu respondo assim que
              possível.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <a href={`mailto:${profile.email}`}>
                  <Mail /> {profile.email}
                </a>
              </Button>
              {profile.socials.map((s) => (
                <Button key={s.label} size="lg" variant="outline" asChild>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <SocialIcon icon={s.icon} /> {s.label}
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
