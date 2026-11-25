import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Moldura simples de janela/celular para screenshots (sem sombra, só borda). */
export function BrowserFrame({
  children,
  mobile = false,
  className,
}: {
  children: ReactNode;
  mobile?: boolean;
  className?: string;
}) {
  if (mobile) {
    return (
      <div className={cn("mx-auto w-full max-w-[280px] rounded-[2rem] border-[6px] border-marinho bg-marinho", className)}>
        <div className="overflow-hidden rounded-[1.5rem] bg-white">{children}</div>
      </div>
    );
  }
  return (
    <div className={cn("overflow-hidden rounded-lg border bg-white", className)}>
      <div className="flex h-8 items-center gap-1.5 border-b bg-papel px-3" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-rosa" />
        <span className="h-2.5 w-2.5 rounded-full bg-ceu" />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "hsl(var(--marinho) / 0.2)" }} />
      </div>
      {children}
    </div>
  );
}
