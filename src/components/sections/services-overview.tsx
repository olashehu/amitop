import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { ServiceCard } from "@/components/sections/service-card";

export function ServicesOverview() {
  return (
    <section className="section-padding scroll-mt-20" id="services">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <FadeIn className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              What We Do
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Every layer of your infrastructure, handled by one team.
            </h2>
            <p className="mt-4 text-foreground/60">
              From the power that keeps your site running to the network that
              connects it, AMITOP plans, installs, and supports it all —
              engineered to enterprise standards.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/services">
                View All Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.slug} delay={Math.min(i * 0.05, 0.3)}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
