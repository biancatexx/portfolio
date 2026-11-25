import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/projetos/${project.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col transition-all group-hover:-translate-y-1 group-hover:border-primary/50">
        <div className="aspect-video rounded-t-lg bg-secondary" />
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2 text-lg">
            {project.title}
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </CardTitle>
          <CardDescription>{project.summary}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </Link>
  );
}
