import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { LogoMark } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/profile";
import { cn } from "@/lib/utils";

// capas alternadas nas cores de apoio da marca (texto sempre marinho)
const covers = ["bg-ceu", "bg-rosa-claro", "bg-marinho text-white"];

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link to={`/projetos/${project.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-marinho">
        <div className={cn("relative aspect-[4/3] overflow-hidden", covers[index % covers.length])}>
          <div className="absolute inset-0 flex items-end justify-between p-6 transition-transform duration-500 group-hover:scale-105">
            <span className="font-display text-6xl font-bold leading-none opacity-90">
              {String(index + 1).padStart(2, "0")}
            </span>
            <LogoMark className="h-12 opacity-90" />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="flex items-start justify-between gap-2">
            {project.title}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors group-hover:border-marinho group-hover:bg-marinho group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </CardTitle>
          <CardDescription>{project.summary}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </Link>
  );
}
