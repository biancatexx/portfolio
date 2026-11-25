import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const navLinks = [
  { to: "/#sobre", label: "Sobre" },
  { to: "/#experiencia", label: "Experiência" },
  { to: "/projetos", label: "Projetos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" aria-label="Bianca Teixeira, início" className="text-marinho">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-rosa after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link to="/#contato">Fale comigo</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="font-display">Menu</SheetTitle>
            <nav className="mt-6 flex flex-col gap-1">
              {[...navLinks, { to: "/#contato", label: "Contato" }].map((l) => (
                <SheetClose asChild key={l.to}>
                  <Link to={l.to} className="rounded-md px-3 py-2 text-base hover:bg-accent">
                    {l.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
