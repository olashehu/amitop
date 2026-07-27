import Link from "next/link";
import { ArrowRight, Building2, Factory, Landmark } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

const projects = [
  {
    icon: Building2,
    title: "Corporate HQ Network Overhaul",
    category: "Structured Cabling & WiFi",
    description:
      "Full structured cabling and enterprise WiFi redesign for a 6-floor headquarters, cutting reported connectivity issues to near zero.",
  },
  {
    icon: Factory,
    title: "Industrial Site Solar Deployment",
    category: "Solar Energy Systems",
    description:
      "Hybrid solar and battery installation for a manufacturing site, reducing generator dependency during grid outages.",
  },
  {
    icon: Landmark,
    title: "Multi-Branch Bank Security Upgrade",
    category: "CCTV & Network Design",
    description:
      "CCTV and network infrastructure standardized across branch locations under one monitored architecture.",
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <FadeIn className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Proven Work
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Recent deployments across sectors.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <article className="overflow-hidden rounded-lg border border-border">
                <div className="flex h-44 items-center justify-center bg-signal-gradient">
                  <project.icon className="h-10 w-10 text-white/90" aria-hidden="true" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-secondary">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {project.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
