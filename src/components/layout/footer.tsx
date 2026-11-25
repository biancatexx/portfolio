import { Link } from "react-router-dom";

import { Logo } from "@/components/logo";
import { SocialIcon } from "@/components/social-icon";
import { profile } from "@/data/profile";
import { navLinks } from "./header";

export function Footer() {
  return (
    <footer className="bg-marinho text-white">
      <div className="container border-t border-white/15 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm text-white/75">{profile.tagline} UX/UI Design, front-end e design systems.</p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <p className="font-bold">Navegação</p>
            {[...navLinks, { to: "/#contato", label: "Contato" }].map((l) => (
              <Link key={l.to} to={l.to} className="text-white/75 transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <p className="font-bold">Redes</p>
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white"
              >
                <SocialIcon icon={s.icon} className="h-4 w-4" /> {s.label}
              </a>
            ))}
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="text-white/75 transition-colors hover:text-white">
                {profile.email}
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
          </p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
