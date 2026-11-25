import { SocialIcon } from "@/components/social-icon";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="transition-colors hover:text-foreground"
            >
              <SocialIcon icon={s.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
