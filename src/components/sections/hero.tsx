import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroNetworkVisual } from "@/components/sections/hero-network-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern bg-[length:44px_44px] opacity-[0.15] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />
      <Container className="relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28 lg:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Certified engineers &middot; Nationwide deployment
          </div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Power and network infrastructure, engineered to Nigerian scale.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-white/70">
            AMITOP designs, installs, and maintains solar power, fiber optic,
            structured cabling, and IT infrastructure for businesses that
            can&apos;t afford downtime — from single sites to nationwide rollouts.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Request a Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto h-[320px] w-full max-w-[520px] md:h-[400px]" aria-hidden="true">
          <HeroNetworkVisual />
        </div>
      </Container>
    </section>
  );
}
