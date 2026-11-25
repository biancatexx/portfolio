import { Link } from "react-router-dom";
import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-7xl font-extrabold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold">Página não encontrada</h1>
      <p className="mt-2 text-muted-foreground">O endereço que você procurou não existe ou foi movido.</p>
      <Button className="mt-8" asChild>
        <Link to="/">
          <Home /> Voltar ao início
        </Link>
      </Button>
    </section>
  );
}
