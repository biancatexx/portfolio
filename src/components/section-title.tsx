export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2 text-sm font-bold">
          <span className="h-3 w-3 rounded-sm bg-rosa" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  );
}
