import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
