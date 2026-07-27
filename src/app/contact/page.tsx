import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AMITOP for solar, fiber optic, network, and IT infrastructure projects across Nigeria. Request a consultation and we'll respond within one business day.",
  alternates: { canonical: "/contact" },
};

const contactDetails = [
  { icon: MapPin, label: "Office", value: siteConfig.address },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 8:00am – 6:00pm WAT" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <Container className="section-padding">
          <FadeIn className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Contact
            </p>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Let&apos;s talk about your site.
            </h1>
            <p className="mt-4 text-white/70">
              Tell us what you&apos;re working with and what you need, and
              we&apos;ll come back with a scoped recommendation — not a
              generic quote.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <FadeIn>
            <h2 className="text-lg font-semibold text-foreground">
              Contact details
            </h2>
            <ul className="mt-6 space-y-6">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/5 text-primary">
                    <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-foreground/60">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm text-foreground/80">
                      {item.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <ContactForm />
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
