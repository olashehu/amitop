import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";

const testimonials = [
  {
    quote:
      "AMITOP rewired our entire office network over a weekend with zero disruption to our Monday operations. The documentation alone put every previous contractor to shame.",
    name: "Operations Director",
    company: "Logistics firm, Lagos",
  },
  {
    quote:
      "Our solar installation has carried us through outages that used to shut down the whole floor. Support has been responsive every time we've called.",
    name: "Facilities Manager",
    company: "Manufacturing plant, Ogun State",
  },
  {
    quote:
      "They handled cabling, WiFi, and CCTV as one coordinated project instead of three separate headaches. That alone was worth the contract.",
    name: "IT Manager",
    company: "Financial services, Abuja",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-muted/40">
      <Container>
        <FadeIn className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            Client Feedback
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Trusted by teams who can&apos;t afford downtime.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
                <Quote className="h-6 w-6 text-secondary/50" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/50">{t.company}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
