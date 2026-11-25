/**
 * Fundo decorativo do topo, inspirado na logo: o anel do "b" e o ponto.
 * Só cores de apoio da marca (céu, rosa, rosa claro), sem degradês de cor nem sombras.
 */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* grade de pontos, apagando nas bordas */}
      <svg className="hero-dots absolute inset-0 h-full w-full" style={{ color: "hsl(var(--marinho) / 0.12)" }}>
        <defs>
          <pattern id="hero-dot-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dot-grid)" />
      </svg>

      {/* anel grande (a "barriga" do b), à esquerda */}
      <svg
        viewBox="0 0 200 200"
        className="animate-float-slow absolute -bottom-40 -left-32 h-[26rem] w-[26rem] sm:h-[34rem] sm:w-[34rem]"
      >
        <circle cx="100" cy="100" r="84" fill="none" stroke="hsl(var(--ceu))" strokeWidth="14" />
      </svg>

      {/* traço vertical (a haste do b), à direita */}
      <span className="animate-float-slow absolute -right-6 top-24 hidden h-72 w-5 rounded-full bg-rosa-claro md:block" />

      {/* o ponto, em vários tamanhos */}
      <span className="animate-float absolute right-[14%] top-[18%] h-6 w-6 rounded-full bg-rosa" />
      <span className="animate-float-delayed absolute left-[12%] top-[22%] hidden h-3 w-3 rounded-full bg-rosa sm:block" />
      <span className="animate-float-delayed absolute bottom-[20%] right-[10%] h-10 w-10 rounded-full bg-ceu" />
      <span className="animate-float absolute bottom-[30%] left-[30%] hidden h-2.5 w-2.5 rounded-full lg:block" style={{ backgroundColor: "hsl(var(--marinho) / 0.3)" }} />
    </div>
  );
}
