import { Link } from "react-router-dom";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/profile";
import { cn } from "@/lib/utils";
import { BeforeAfter } from "./before-after";
import { BrowserFrame } from "./browser-frame";

export function CaseStudyView({ project }: { project: Project & { caseStudy: NonNullable<Project["caseStudy"]> } }) {
  const cs = project.caseStudy;

  const meta = [
    { label: "Cliente", value: cs.client },
    { label: "Meu papel", value: cs.role },
    { label: "Período", value: cs.period },
    { label: "Equipe", value: cs.team },
  ];

  return (
    <article>
      {/* Abertura */}
      <header className="container pb-12 pt-10">
        <Button variant="ghost" size="sm" asChild className="-ml-3 mb-8">
          <Link to="/projetos">
            <ArrowLeft /> Voltar para projetos
          </Link>
        </Button>

        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-sm font-bold">
            <span className="h-3 w-3 rounded-sm bg-rosa" aria-hidden="true" />
            Estudo de caso
          </p>
          <h1 className="max-w-4xl text-4xl leading-[1.05] tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-xl text-muted-foreground">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t} variant="outline" className="bg-white px-3 py-1 text-sm font-medium">
                {t}
              </Badge>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <dl className="mt-12 grid gap-6 border-t pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-sm text-muted-foreground">{m.label}</dt>
                <dd className="mt-1 font-bold">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {project.cover && (
          <Reveal delay={250} className="mt-12">
            <BrowserFrame>
              <img src={project.cover} alt={`${project.title}, nova home`} className="block w-full" />
            </BrowserFrame>
          </Reveal>
        )}
      </header>

      {/* Visão geral */}
      <section className="bg-white py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal from="left">
            <SectionTitle eyebrow="Visão geral" title="Uma escola que vende, ensina e administra pelo mesmo site" />
            <p className="text-lg leading-relaxed text-muted-foreground">{cs.overview}</p>
          </Reveal>
          <Reveal from="right" className="space-y-6 lg:pt-16">
            <div>
              <p className="mb-3 font-bold">O que entrou no projeto</p>
              <ul className="space-y-2">
                {cs.platforms.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-bold">Ferramentas</p>
              <div className="flex flex-wrap gap-2">
                {cs.stack.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Desafio */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="O desafio" title="Onde o site antigo travava" description={cs.challenge.intro} />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {cs.challenge.problems.map((p, i) => (
              <Reveal key={p.title} from={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 120} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-white">
                  {p.image && (
                    <div className="aspect-[16/9] overflow-hidden border-b">
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover object-top" loading="lazy" />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="mb-2 font-display text-sm font-bold text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="bg-marinho py-20 text-white">
        <div className="container">
          <Reveal>
            <p className="mb-3 flex items-center gap-2 text-sm font-bold">
              <span className="h-3 w-3 rounded-sm bg-rosa" aria-hidden="true" />
              Processo
            </p>
            <h2 className="max-w-2xl text-3xl tracking-tight sm:text-4xl">Do desenho ao código</h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {cs.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <li className="border-t border-white/20 pt-5">
                  <span className="font-display text-4xl font-bold text-rosa">{i + 1}</span>
                  <h3 className="mt-3 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Solução: antes e depois */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="A solução"
              title="Antes e depois"
              description="Arraste a linha no meio de cada imagem para comparar o site antigo com o novo."
            />
          </Reveal>
          <div className="space-y-20">
            {cs.solutions.map((s, i) => (
              <div
                key={s.title}
                className={cn(
                  "grid items-center gap-10",
                  s.mobile ? "lg:grid-cols-[1fr_1fr]" : "lg:grid-cols-[1fr_2fr]",
                )}
              >
                <Reveal from={i % 2 === 0 ? "left" : "right"} className={cn(i % 2 === 1 && "lg:order-2")}>
                  <p className="mb-2 font-display text-sm font-bold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl tracking-tight sm:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{s.text}</p>
                </Reveal>
                <Reveal from={i % 2 === 0 ? "right" : "left"} delay={120}>
                  {s.before && s.after ? (
                    s.mobile ? (
                      <div className="grid grid-cols-2 gap-4 sm:gap-8">
                        {[
                          { src: s.before, label: "Antes", cls: "bg-marinho text-white" },
                          { src: s.after, label: "Depois", cls: "bg-rosa text-marinho" },
                        ].map((m) => (
                          <figure key={m.label} className="text-center">
                            <BrowserFrame mobile>
                              <img src={m.src} alt={`${s.title}, ${m.label.toLowerCase()}`} className="block w-full" loading="lazy" />
                            </BrowserFrame>
                            <figcaption className={cn("mt-3 inline-block rounded-full px-2.5 py-1 text-xs font-bold", m.cls)}>
                              {m.label}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : (
                      <BrowserFrame>
                        <BeforeAfter before={s.before} after={s.after} alt={s.title} />
                      </BrowserFrame>
                    )
                  ) : (
                    s.after && (
                      <BrowserFrame>
                        <img src={s.after} alt={s.title} className="block w-full" loading="lazy" />
                      </BrowserFrame>
                    )
                  )}
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-white py-20">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Mais telas" title="O novo Aprender por dentro" />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {cs.gallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 120}>
                <figure>
                  <BrowserFrame>
                    <img src={g.src} alt={g.caption} className="block w-full" loading="lazy" />
                  </BrowserFrame>
                  <figcaption className="mt-3 text-sm text-muted-foreground">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <SectionTitle eyebrow="Resultados" title="O que mudou" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cs.results.map((r, i) => (
              <Reveal key={r.label} delay={i * 100} className="h-full">
                <div className="h-full rounded-lg bg-rosa-claro p-6">
                  <p className="font-display text-4xl font-bold">{r.value}</p>
                  <p className="mt-2 text-sm">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <Reveal from="left">
              <h3 className="mb-5 text-2xl tracking-tight">Detalhes que fazem diferença</h3>
              <ul className="space-y-3">
                {cs.extras.map((e) => (
                  <li key={e} className="flex gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-rosa" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal from="right">
              <h3 className="mb-5 text-2xl tracking-tight">O que aprendi</h3>
              <ul className="space-y-4">
                {cs.learnings.map((l) => (
                  <li key={l} className="border-l-2 border-marinho pl-4 text-muted-foreground">
                    {l}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {project.link && (
            <Reveal className="mt-14">
              <Button size="lg" asChild>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <ExternalLink /> Ver o site no ar
                </a>
              </Button>
            </Reveal>
          )}
        </div>
      </section>
    </article>
  );
}
