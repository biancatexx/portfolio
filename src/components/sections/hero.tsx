import { Link } from "react-router-dom";
import { ArrowRight, Download, MapPin } from "lucide-react";

import { SocialIcon } from "@/components/social-icon";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_60%)]" />
      <div className="container grid items-center gap-12 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Aberta a novas oportunidades
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Olá, eu sou <span className="text-primary">{profile.name}</span>
          </h1>
          <p className="mt-3 text-xl font-medium text-muted-foreground">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.headline}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link to="/projetos">
                Ver projetos <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/#contato">Fale comigo</Link>
            </Button>
            {profile.resumeUrl && (
              <Button size="lg" variant="ghost" asChild>
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  <Download /> Currículo
                </a>
              </Button>
            )}
          </div>

          <div className="mt-8 flex gap-2">
            {profile.socials.map((s) => (
              <Button key={s.label} variant="outline" size="icon" asChild>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <SocialIcon icon={s.icon} />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mx-auto">
          {/* Para usar uma foto: coloque o arquivo em public/foto.jpg e troque este bloco por <img src="/foto.jpg" ... /> */}
          <div className="flex aspect-square w-64 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/40 p-1.5 shadow-xl sm:w-80">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-6xl font-bold text-primary sm:text-7xl">
              {profile.initials}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
