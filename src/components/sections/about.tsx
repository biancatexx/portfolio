import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { profile, skills } from "@/data/profile";

export function About() {
  return (
    <section id="sobre" className="border-t bg-muted/30 py-20">
      <div className="container">
        <SectionTitle eyebrow="Sobre mim" title="Quem sou eu" />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-foreground">{s.value}</p>
                  <p className="text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {skills.map((g) => (
              <Card key={g.group}>
                <CardContent className="p-5">
                  <p className="mb-3 font-semibold">{g.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <Badge key={item} variant="outline" className="px-3 py-1 text-sm font-medium">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
