import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section className="section-padding">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-signal-gradient px-8 py-16 text-center text-white md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid-pattern bg-[length:36px_36px] opacity-10"
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Ready to build infrastructure that holds up?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                Tell us about your site and we&apos;ll put together a scoped
                recommendation — no obligation, no generic quote.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact">
                    Request a Consultation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 text-white hover:bg-white/10"
                >
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                    <PhoneCall className="h-4 w-4" aria-hidden="true" />
                    {siteConfig.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
