import { Linkedin, Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Contact() {
  const whatsappLabel = profile.whatsapp.replace(/^55(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");

  return (
    <section id="contato" className="bg-marinho py-16 text-white">
      <div className="container">
        <h2 className="max-w-2xl text-3xl tracking-tight sm:text-4xl">Vamos conversar sobre o seu projeto?</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="rosa" size="lg" asChild>
            <a href={profile.linkedin.href} target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn {profile.linkedin.label}
            </a>
          </Button>
        </div>

        {(profile.email || profile.whatsapp) && (
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-white/85">
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
            )}
            {profile.whatsapp && (
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> {whatsappLabel}
              </a>
            )}
          </p>
        )}
      </div>
    </section>
  );
}
