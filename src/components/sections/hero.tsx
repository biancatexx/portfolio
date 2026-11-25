import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";

import { HeroBackdrop } from "@/components/hero-backdrop";
import { Reveal } from "@/components/reveal";
import { SocialIcon } from "@/components/social-icon";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <HeroBackdrop />
      <div className="container flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20 text-center">
        <Reveal>
          <p className="mb-8 inline-flex items-center gap-2 rounded-full bg-rosa-claro px-4 py-1.5 text-sm font-medium text-marinho">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rosa" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-marinho" />
            </span>
            Agenda aberta para novos projetos
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Olá, eu sou{" "}
            <span className="relative isolate inline-block whitespace-nowrap">
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-rosa sm:h-4" aria-hidden="true" />
              {profile.name}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {profile.role}. {profile.headline}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {profile.location}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link to="/projetos">
                Ver projetos <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/#contato">Fale comigo</Link>
            </Button>
            {profile.resumeUrl && (
              <Button size="lg" variant="ghost" asChild>
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  <Download /> Currículo
                </a>
              </Button>
            )}
            {profile.socials.map((s) => (
              <Button key={s.label} variant="outline" size="icon" className="h-11 w-11" asChild>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <SocialIcon icon={s.icon} />
                </a>
              </Button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <dl className="mt-16 grid grid-cols-3 gap-6 border-t pt-8 sm:gap-16">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-4xl font-bold sm:text-5xl">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Link
          to="/#sobre"
          aria-label="Rolar para Sobre"
          className="mt-12 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border text-muted-foreground transition-colors hover:text-marinho motion-reduce:animate-none"
        >
          <ArrowDown className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
