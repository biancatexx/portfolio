import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { profile, skills } from "@/data/profile";

export function About() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="container grid gap-14 lg:grid-cols-[1.1fr_1fr]">
        <Reveal from="left">
          <SectionTitle eyebrow="Sobre mim" title="Antes da tela bonita, vem a pergunta certa." />
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-4 lg:pt-16">
          {skills.map((g, i) => (
            <Reveal key={g.group} from="right" delay={i * 120}>
              <div className="rounded-lg border bg-papel p-6 transition-colors hover:border-marinho/40">
                <p className="mb-4 flex items-center gap-3 font-display text-lg font-bold">
                  <span className="font-sans text-xs font-bold text-muted-foreground">0{i + 1}</span>
                  {g.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <Badge key={item} variant="outline" className="bg-white px-3 py-1 text-sm font-medium">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
