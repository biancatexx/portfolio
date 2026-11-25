import { LogoMark } from "@/components/logo";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-marinho text-white">
      <div className="container flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm sm:flex-row">
        <div className="flex items-center gap-3">
          <LogoMark className="h-6" />
          <span className="text-white/80">{profile.tagline}</span>
        </div>
        <p className="text-white/70">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
