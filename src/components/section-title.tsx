export function SectionTitle({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2 className="text-3xl tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  );
}
