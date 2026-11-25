import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicos" className="container py-16">
      <SectionTitle title="Como posso ajudar" />
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s, i) => (
          <Card
            key={s.title}
            className={cn("border-transparent", i === services.length - 1 && services.length % 3 === 1 && "md:col-span-3")}
          >
            <CardContent className="p-6">
              <span className="mb-4 block h-4 w-4 rounded bg-rosa" aria-hidden="true" />
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
