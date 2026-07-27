import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { ServiceCard } from "@/components/sections/service-card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Solar energy, fiber optic, structured cabling, wireless networks, CCTV, PABX, data centers, and IT infrastructure consulting — engineered to enterprise standards across Nigeria.",
  alternates: { canonical: "/services" },
};

const categories = ["Power", "Network", "Security", "IT Services"] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <Container className="section-padding">
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Services
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Every system your site depends on, under one team.
            </h1>
            <p className="mt-4 text-white/70">
              {siteConfig.description} Browse the full catalog below, or get
              in touch and we&apos;ll help you figure out exactly what you need.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="space-y-16">
          {categories.map((category) => {
            const items = services.filter((s) => s.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <FadeIn>
                  <h2 className="text-xl font-bold tracking-tight text-primary">
                    {category}
                  </h2>
                </FadeIn>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((service, i) => (
                    <FadeIn key={service.slug} delay={Math.min(i * 0.05, 0.3)}>
                      <ServiceCard service={service} />
                    </FadeIn>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="border-t border-border bg-muted/40">
        <Container className="flex flex-col items-center gap-4 py-16 text-center">
          <FadeIn>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-primary md:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mt-3 max-w-md text-foreground/60">
              Tell us about your site and challenges — we&apos;ll recommend
              the right scope, not the biggest one.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-6">
              <Link href="/contact">
                Talk to an Engineer
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
