import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { CaseStudyView } from "@/components/case-study/case-study-view";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/profile";
import NotFound from "./not-found";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFound />;
  if (project.caseStudy) return <CaseStudyView project={{ ...project, caseStudy: project.caseStudy }} />;

  return (
    <article className="py-16">
      <div className="container max-w-3xl">
        <Button variant="ghost" size="sm" asChild className="mb-8 -ml-3">
          <Link to="/projetos">
            <ArrowLeft /> Voltar para projetos
          </Link>
        </Button>

        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>

        <div className="my-10 aspect-video rounded-lg border bg-secondary" />

        <p className="whitespace-pre-line text-lg leading-relaxed">{project.description}</p>

        {(project.link || project.repo) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {project.link && (
              <Button asChild>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <ExternalLink /> Ver online
                </a>
              </Button>
            )}
            {project.repo && (
              <Button variant="outline" asChild>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <Github /> Código
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
