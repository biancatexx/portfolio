import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/profile";

export function FeaturedProjects() {
  return (
    <section id="projetos" className="bg-white py-24">
      <div className="container">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Portfólio" title="Projetos em destaque" />
          <Button variant="outline" asChild className="mb-10">
            <Link to="/projetos">
              Ver todos <ArrowRight />
            </Link>
          </Button>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 120} className="h-full">
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
