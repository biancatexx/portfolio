import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/profile";

export default function Projects() {
  const tags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))).sort(), []);
  const [active, setActive] = useState<string | null>(null);
  const visible = active ? projects.filter((p) => p.tags.includes(active)) : projects;

  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle
          eyebrow="Portfólio"
          title="Todos os projetos"
          description="Uma seleção de trabalhos que desenvolvi. Clique em um projeto para ver os detalhes."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          <Button size="sm" variant={active === null ? "default" : "outline"} onClick={() => setActive(null)}>
            Todos
          </Button>
          {tags.map((t) => (
            <Button key={t} size="sm" variant={active === t ? "default" : "outline"} onClick={() => setActive(t)}>
              {t}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)} />
          ))}
        </div>
      </div>
    </section>
  );
}
