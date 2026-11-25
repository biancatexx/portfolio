import { SectionTitle } from "@/components/section-title";
import { certifications, timeline } from "@/data/profile";

function Row({ left, title, sub }: { left: string; title: string; sub: string }) {
  return (
    <li className="grid gap-1 border-t py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <span className="font-bold">{left}</span>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-muted-foreground">{sub}</p>
      </div>
    </li>
  );
}

export function Trajectory() {
  return (
    <section id="trajetoria" className="container py-16">
      <SectionTitle title="Trajetória" />
      <ul>
        {timeline.map((t) => (
          <Row key={`${t.period}-${t.title}`} left={t.period} title={t.title} sub={t.place} />
        ))}
      </ul>

      {certifications.length > 0 && (
        <>
          <h3 className="mb-4 mt-14 text-2xl tracking-tight">Certificações</h3>
          <ul>
            {certifications.map((c) => (
              <Row key={c.name} left={c.date} title={c.name} sub={c.issuer} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
