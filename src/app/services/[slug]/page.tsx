import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { services, siteConfig } from "@/config/site";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/json-ld";
import { getServiceIcon } from "@/lib/icons";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { ServiceCard } from "@/components/sections/service-card";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = getServiceIcon(service.icon);
  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service)) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="bg-primary text-primary-foreground">
        <Container className="section-padding">
          <FadeIn className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="text-sm text-white/50">
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">{service.title}</span>
            </nav>

            <span className="mt-6 flex h-14 w-14 items-center justify-center rounded-lg bg-white/10">
              <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
            </span>

            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-white/70">{service.description}</p>

            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="/contact">
                Request a Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </FadeIn>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="grid gap-16 md:grid-cols-2">
          <FadeIn>
            <h2 className="text-xl font-bold tracking-tight text-primary">
              What&apos;s included
            </h2>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/70">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-xl font-bold tracking-tight text-primary">
              How it works
            </h2>
            <ol className="mt-6 space-y-6">
              {service.process.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm leading-relaxed text-foreground/70">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </FadeIn>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/40">
          <Container className="section-padding">
            <FadeIn>
              <h2 className="text-xl font-bold tracking-tight text-primary">
                Related services
              </h2>
            </FadeIn>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <FadeIn key={s.slug} delay={i * 0.08}>
                  <ServiceCard service={s} />
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
