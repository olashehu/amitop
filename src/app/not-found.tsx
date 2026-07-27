import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
        <SearchX className="h-7 w-7" aria-hidden="true" />
      </span>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-secondary">
        404
      </p>
      <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-3 max-w-sm text-foreground/60">
        The page you&apos;re looking for may have moved or no longer exists.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="secondary">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/services">Browse Services</Link>
        </Button>
      </div>
    </Container>
  );
}
