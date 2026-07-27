import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { ProjectsGrid } from "@/components/sections/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of AMITOP's solar, fiber, network, security, and data center deployments across logistics, manufacturing, finance, education, hospitality, and healthcare sites in Nigeria.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <Container className="section-padding">
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Projects
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Deployments across sectors and site types.
            </h1>
            <p className="mt-4 text-white/70">
              From single-building fit-outs to multi-branch rollouts, here&apos;s
              a sample of the work AMITOP has delivered.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <FadeIn>
            <ProjectsGrid />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
