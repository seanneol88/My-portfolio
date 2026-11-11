import { ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site, stats, terminalLines } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {site.availability}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m {site.name}.
            <span className="mt-2 block text-zinc-400">
              {site.role} building real things on real infrastructure.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
            >
              View my work <ArrowRight size={16} />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 font-mono text-sm text-zinc-500">
            <MapPin size={14} /> {site.location}
          </p>
        </div>

        {/* terminal card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-2xl shadow-emerald-500/5">
          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-zinc-500">
              {site.handle}: ~
            </span>
          </div>
          <div className="space-y-5 px-5 py-6 font-mono text-sm">
            {terminalLines.map((line) => (
              <div key={line.prompt}>
                <p className="text-zinc-300">
                  <span className="text-emerald-400">$</span> {line.prompt}
                </p>
                <p className="mt-1 whitespace-pre-wrap text-zinc-500">
                  {line.output}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-6 py-5"
            >
              <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                {stat.label}
              </dt>
              <dd className="mt-1 text-2xl font-bold text-emerald-400">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
