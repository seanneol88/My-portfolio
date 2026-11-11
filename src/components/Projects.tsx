import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Section from "@/components/Section";
import { projects, site, type ProjectStatus } from "@/data/portfolio";

const statusStyles: Record<
  ProjectStatus,
  { dot: string; badge: string; label: string }
> = {
  live: {
    dot: "bg-emerald-400",
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    label: "Live",
  },
  building: {
    dot: "bg-amber-400",
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    label: "Building",
  },
  planned: {
    dot: "bg-zinc-500",
    badge: "border-zinc-600/40 bg-zinc-700/20 text-zinc-400",
    label: "Planned",
  },
};

export default function Projects() {
  return (
    <Section id="projects" kicker="// selected work" title="Projects">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => {
          const status = statusStyles[project.status];
          return (
            <article
              key={project.name}
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-600"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug">
                  {project.name}
                </h3>
                <span
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs ${status.badge}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                  {status.label}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-zinc-800/70 px-2 py-1 font-mono text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.liveUrl || project.repoUrl) && (
                <div className="mt-6 flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
                    >
                      Live <ExternalLink size={13} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 px-3.5 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                    >
                      <GithubIcon size={13} /> Code
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      <p className="mt-8 font-mono text-sm text-zinc-500">
        More experiments on{" "}
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 hover:underline"
        >
          GitHub →
        </a>
      </p>
    </Section>
  );
}
