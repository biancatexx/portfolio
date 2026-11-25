import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { projects } from "@/data/profile";

const links = [
  { to: "/#servicos", label: "Serviços" },
  ...(projects.length > 0 ? [{ to: "/projetos", label: "Projetos" }] : []),
  { to: "/#trajetoria", label: "Trajetória" },
  { to: "/#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-background/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" aria-label="Bianca Teixeira, início" className="text-marinho">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm transition-opacity hover:opacity-70">
              {l.label}
            </Link>
          ))}
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
              {links.map((l) => (
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
