import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";

const stats = [
  { value: "10+", label: "Years deploying infrastructure" },
  { value: "200+", label: "Projects completed" },
  { value: "99.9%", label: "Network uptime delivered" },
  { value: "24/7", label: "Technical support coverage" },
];

export function StatsStrip() {
  return (
    <section className="border-b border-border bg-muted/40">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-foreground/60">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
