"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCw } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertTriangle className="h-7 w-7" aria-hidden="true" />
      </span>
      <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl">
        Something went wrong.
      </h1>
      <p className="mt-3 max-w-sm text-foreground/60">
        An unexpected error occurred while loading this page. You can try
        again, or head back to the homepage.
      </p>
      <Button variant="secondary" className="mt-8" onClick={() => reset()}>
        <RotateCw className="h-4 w-4" aria-hidden="true" />
        Try Again
      </Button>
    </Container>
  );
}
