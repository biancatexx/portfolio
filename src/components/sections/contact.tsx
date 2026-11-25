import { Mail, MessageCircle } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SocialIcon } from "@/components/social-icon";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Contact() {
  const whatsappLabel = profile.whatsapp.replace(/^55(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");

  return (
    <section id="contato" className="bg-marinho py-24 text-white">
      <div className="container">
        <Reveal className="flex flex-col items-center text-center">
          <p className="mb-4 flex items-center gap-2 text-sm font-bold">
            <span className="h-3 w-3 rounded-sm bg-rosa" aria-hidden="true" />
            Contato
          </p>
          <h2 className="max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl">
            Vamos conversar sobre o seu projeto?
          </h2>
          <p className="mt-5 max-w-lg text-white/80">
            Estou aberta a novas oportunidades, parcerias e projetos. Me mande uma mensagem e eu respondo assim que
            possível.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {profile.socials.map((s) => (
              <Button key={s.label} variant="rosa" size="lg" asChild>
                <a href={s.href} target="_blank" rel="noreferrer">
                  <SocialIcon icon={s.icon} /> {s.label}
                </a>
              </Button>
            ))}
            {profile.email && (
              <Button size="lg" variant="secondary" asChild>
                <a href={`mailto:${profile.email}`}>
                  <Mail /> {profile.email}
                </a>
              </Button>
            )}
            {profile.whatsapp && (
              <Button size="lg" variant="secondary" asChild>
                <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                  <MessageCircle /> {whatsappLabel}
                </a>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
