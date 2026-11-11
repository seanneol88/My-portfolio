import { Fragment } from "react";
import { ArrowDown, Server } from "lucide-react";
import Section from "@/components/Section";
import { homelabServices, infraPoints, pipelineSteps } from "@/data/portfolio";

export default function Infrastructure() {
  return (
    <Section
      id="infrastructure"
      kicker="// how this site ships"
      title="The pipeline behind this page"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-start">
        <div>
          <p className="leading-relaxed text-zinc-400">
            This site is not just a page — it is a working CI/CD system. Every
            push to <code className="font-mono text-emerald-400">main</code> is
            linted, type-checked, built into a Docker image, pushed to a
            registry, and deployed to my Oracle Cloud VM over SSH. Heavier
            services live on my homelab, reached securely over WireGuard.
          </p>

          <ul className="mt-6 space-y-3">
            {infraPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-zinc-400">
                <span className="mt-1 font-mono text-emerald-400">▸</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="flex items-center gap-2 font-mono text-sm text-zinc-400">
              <Server size={14} className="text-emerald-400" />
              also running in the homelab
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {homelabServices.map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* pipeline diagram */}
        <ol className="flex flex-col items-stretch gap-3">
          {pipelineSteps.map((step, index) => (
            <Fragment key={step.title}>
              <li className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4">
                <p className="font-mono text-xs text-emerald-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 font-semibold">{step.title}</p>
                <p className="mt-1 text-sm text-zinc-500">{step.detail}</p>
              </li>
              {index < pipelineSteps.length - 1 && (
                <li aria-hidden className="flex justify-center">
                  <ArrowDown size={16} className="text-zinc-600" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </Section>
  );
}
