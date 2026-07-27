import type { Metadata } from "next";
import { Award, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { StatsStrip } from "@/components/sections/stats-strip";

export const metadata: Metadata = {
  title: "About",
  description:
    "AMITOP is a Nigerian technology company specializing in solar power, network infrastructure, and IT systems — built on certified engineering standards and nationwide reach.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Standards over shortcuts",
    description:
      "We install to TIA/EIA and manufacturer-certified standards even when it takes longer, because rework costs more than doing it right once.",
  },
  {
    icon: Compass,
    title: "Right-sized recommendations",
    description:
      "We scope projects to what a site actually needs, not the largest quote we can justify. Trust is worth more than a bigger invoice.",
  },
  {
    icon: HeartHandshake,
    title: "Accountability after handover",
    description:
      "Our relationship with a site doesn't end at commissioning. Maintenance and support are part of how we think about every install.",
  },
  {
    icon: Award,
    title: "Engineers, not just installers",
    description:
      "Our field teams are trained to diagnose and design, not just run cable — so problems get solved at the root, not patched over.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <Container className="section-padding grid gap-12 md:grid-cols-2 md:items-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              About AMITOP
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Built for infrastructure that can&apos;t fail quietly.
            </h1>
            <p className="mt-4 text-white/70">
              AMITOP is a Nigerian technology company specializing in network
              infrastructure and electrical systems — from the power that
              keeps a site running to the network that connects it. We work
              with businesses that treat downtime as a real cost, not an
              inconvenience.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8">
              <p className="text-lg leading-relaxed text-white/80">
                &ldquo;We don&apos;t think of ourselves as a cabling company
                or a solar company. We think of ourselves as the team that
                makes sure your infrastructure is the last thing you have to
                worry about.&rdquo;
              </p>
              <p className="mt-6 text-sm font-medium text-white/50">
                — AMITOP Engineering Team
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <StatsStrip />

      <section className="section-padding">
        <Container>
          <FadeIn className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              How We Work
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Four things every project runs on.
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/5 text-primary">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
                      {value.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
