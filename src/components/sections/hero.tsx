import { Link } from "react-router-dom";

import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="container grid items-center gap-12 pb-20 pt-12 md:grid-cols-[1.5fr_1fr] md:pb-28 md:pt-16">
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-rosa-claro px-3 py-1 text-sm font-medium text-marinho">
          <span className="h-2 w-2 rounded-full bg-marinho" />
          Agenda aberta para novos projetos
        </p>
        <h1 className="text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{profile.headline}</h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <Link to="/#contato">Pedir uma proposta</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/#servicos">Ver serviços</Link>
          </Button>
        </div>
      </div>

      <div className="hidden justify-center text-marinho md:flex">
        <LogoMark className="h-56 lg:h-64" />
      </div>
    </section>
  );
}
