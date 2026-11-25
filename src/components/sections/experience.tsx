import type { ReactNode } from "react";
import { Award, Check, GraduationCap } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { certifications, education, experiences } from "@/data/profile";

function InfoCard({ icon, title, lines }: { icon: ReactNode; title: string; lines: string[] }) {
  return (
    <div className="flex h-full gap-4 rounded-lg border bg-white p-5 transition-colors hover:border-marinho/40">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-rosa-claro text-marinho">
        {icon}
      </span>
      <div>
        <p className="font-bold">{title}</p>
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-foreground">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="Trajetória" title="Experiência profissional" />
        </Reveal>

        <ol className="relative">
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${exp.period}`}>
              <Reveal from="left" delay={i * 60}>
                <div className="group grid gap-2 border-t py-8 md:grid-cols-[14rem_1fr] md:gap-10">
                  <div>
                    <p className="text-sm font-bold">{exp.period}</p>
                    {exp.location && <p className="text-sm text-muted-foreground">{exp.location}</p>}
                  </div>
                  <div>
                    <h3 className="flex items-center gap-3 text-2xl tracking-tight">
                      <span
                        className="h-3 w-3 shrink-0 rounded-sm bg-marinho/15 transition-colors group-hover:bg-rosa"
                        aria-hidden="true"
                      />
                      {exp.role}
                    </h3>
                    <p className="mt-1 font-medium text-muted-foreground">{exp.company}</p>
                    <p className="mt-3 text-muted-foreground">{exp.description}</p>
                    {exp.highlights.length > 0 && (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex gap-2 text-sm">
                            <Check className="mt-0.5 h-4 w-4 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal from="left">
              <h3 className="mb-6 text-2xl tracking-tight">Formação</h3>
            </Reveal>
            <div className="grid gap-4">
              {education.map((ed, i) => (
                <Reveal key={`${ed.course}-${ed.institution}`} from="left" delay={i * 120}>
                  <InfoCard
                    icon={<GraduationCap className="h-5 w-5" />}
                    title={ed.course}
                    lines={[ed.institution, ed.period]}
                  />
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal from="right">
              <h3 className="mb-6 text-2xl tracking-tight">Certificações</h3>
            </Reveal>
            <div className="grid gap-4">
              {certifications.map((c, i) => (
                <Reveal key={`${c.name}-${c.issuer}`} from="right" delay={i * 120}>
                  <InfoCard
                    icon={<Award className="h-5 w-5" />}
                    title={c.name}
                    lines={[c.issuer, `Emitida em ${c.date}`]}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
