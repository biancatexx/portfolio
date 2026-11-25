import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/profile";

export function FeaturedProjects() {
  return (
    <section id="projetos" className="border-t bg-muted/30 py-20">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Portfólio" title="Projetos em destaque" />
          <Button variant="ghost" asChild className="mb-10">
            <Link to="/projetos">
              Ver todos <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
