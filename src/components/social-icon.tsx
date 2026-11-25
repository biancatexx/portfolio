import { Github, Linkedin, Mail, type LucideProps } from "lucide-react";

import type { SocialLink } from "@/data/profile";

const icons = { linkedin: Linkedin, github: Github, mail: Mail };

export function SocialIcon({ icon, ...props }: { icon: SocialLink["icon"] } & LucideProps) {
  const Icon = icons[icon];
  return <Icon {...props} />;
}
