import { Briefcase, Check, GraduationCap } from "lucide-react";

import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { education, experiences } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="border-t py-20">
      <div className="container">
        <SectionTitle eyebrow="Trajetória" title="Experiência profissional" />

        <ol className="relative space-y-8 border-l pl-8">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative">
              <span className="absolute -left-[45px] top-1 flex h-7 w-7 items-center justify-center rounded-full border bg-background text-primary">
                <Briefcase className="h-3.5 w-3.5" />
              </span>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold">
                  {exp.role} <span className="text-primary">· {exp.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  {exp.period}
                  {exp.location && ` · ${exp.location}`}
                </p>
              </div>
              <p className="mt-2 text-muted-foreground">{exp.description}</p>
              {exp.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        <Separator className="my-14" />

        <h3 className="mb-6 text-2xl font-bold tracking-tight">Formação</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((ed) => (
            <Card key={`${ed.course}-${ed.institution}`}>
              <CardContent className="flex gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{ed.course}</p>
                  <p className="text-sm text-muted-foreground">{ed.institution}</p>
                  <p className="text-sm text-muted-foreground">{ed.period}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
