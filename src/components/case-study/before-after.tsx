import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

/**
 * Comparação antes/depois: arraste (ou use as setas do teclado) para revelar uma imagem sobre a outra.
 */
export function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative select-none overflow-hidden">
      <img src={after} alt={`${alt}, depois`} className="block w-full" loading="lazy" draggable={false} />
      <img
        src={before}
        alt={`${alt}, antes`}
        className="absolute inset-0 block h-full w-full object-cover object-top"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        loading="lazy"
        draggable={false}
      />

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-marinho px-2.5 py-1 text-xs font-bold text-white">
        Antes
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-rosa px-2.5 py-1 text-xs font-bold text-marinho">
        Depois
      </span>

      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden="true">
        <div className="absolute inset-y-0 -left-px w-0.5 bg-marinho" />
        <div className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-marinho text-white">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Comparar antes e depois: ${alt}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
