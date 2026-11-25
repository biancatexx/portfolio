import { cn } from "@/lib/utils";

/**
 * Símbolo: um "b" de traço contínuo com o ponto.
 * Regra da marca: sempre uma só cor (currentColor) — marinho em fundo claro, branco em fundo escuro.
 * Tamanho mínimo: 24 px.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 40" fill="none" aria-hidden="true" className={cn("h-8 w-auto", className)}>
      <path d="M6 4v23" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="15.5" cy="27" r="9.5" stroke="currentColor" strokeWidth="3.2" />
      <circle cx="27" cy="8" r="3.2" fill="currentColor" />
    </svg>
  );
}

/** Logo completo: símbolo + nome + descritor. Tamanho mínimo: 160 px de largura. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className="h-8" />
      <span className="leading-tight">
        <span className="block text-[17px] font-medium lowercase tracking-tight">bianca teixeira</span>
        <span className="block text-[11px] opacity-80">UX/UI Designer · Front-end</span>
      </span>
    </span>
  );
}
