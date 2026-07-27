import { Award, Clock3, MapPinned, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";

const features = [
  {
    icon: Award,
    title: "Certified engineering standards",
    description:
      "Every installation follows TIA/EIA and manufacturer-certified practices — tested, documented, and signed off, not just wired and left.",
  },
  {
    icon: MapPinned,
    title: "Nationwide site coverage",
    description:
      "From single-site offices to multi-branch rollouts across states, our field teams deploy consistent standards wherever you operate.",
  },
  {
    icon: Clock3,
    title: "Maintenance that prevents downtime",
    description:
      "Scheduled preventive checks and rapid-response support contracts, so problems get caught before they become outages.",
  },
  {
    icon: ShieldCheck,
    title: "One vendor, full accountability",
    description:
      "Power, network, and security under a single team means no finger-pointing between contractors when systems need to talk to each other.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Why AMITOP
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Infrastructure decisions you don&apos;t have to revisit in a year.
          </h2>
          <p className="mt-4 max-w-md text-white/60">
            We&apos;ve built our reputation on installations that hold up —
            in Nigerian heat, on Nigerian power grids, under real daily load.
          </p>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <feature.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
