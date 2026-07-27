import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServiceIcon } from "@/lib/icons";
import type { Service } from "@/config/site";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  const Icon = getServiceIcon(service.icon);

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/5 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="h-4 w-4 text-foreground/45 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-5 text-base font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/60">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-block w-fit rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground/60">
        {service.category}
      </span>
    </Link>
  );
}
