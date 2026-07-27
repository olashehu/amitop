"use client";

import * as React from "react";
import { projects, projectCategories } from "@/config/projects";
import { getServiceIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] =
    React.useState<(typeof projectCategories)[number]>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === category
                ? "border-secondary bg-secondary text-secondary-foreground"
                : "border-border bg-transparent text-foreground/60 hover:border-secondary/40 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => {
          const Icon = getServiceIcon(project.icon);
          return (
            <article
              key={project.slug}
              className="overflow-hidden rounded-lg border border-border"
            >
              <div className="flex h-40 items-center justify-center bg-signal-gradient">
                <Icon className="h-9 w-9 text-white/90" aria-hidden="true" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-secondary">
                    {project.category}
                  </p>
                  <p className="text-xs text-foreground/60">{project.location}</p>
                </div>
                <h3 className="mt-2 font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-foreground/50">{project.sector}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {project.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-foreground/50">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
