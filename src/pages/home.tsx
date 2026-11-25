import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Trajectory } from "@/components/sections/trajectory";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {projects.length > 0 && (
        <section id="projetos" className="container py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle title="Projetos" />
            <Button variant="ghost" asChild className="mb-8">
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
        </section>
      )}
      <Trajectory />
      <Contact />
    </>
  );
}
