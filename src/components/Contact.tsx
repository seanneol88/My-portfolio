import { FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Section from "@/components/Section";
import { site } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" kicker="// say hello" title="Let’s talk">
      <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-transparent px-8 py-14 text-center">
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-300">
          I am looking for internship and freelance opportunities — or just a
          good technical conversation about self-hosting. My inbox is open.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            <Mail size={16} /> Email me
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
          <a
            href={site.resumeUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <FileText size={16} /> Résumé
          </a>
        </div>
      </div>
    </Section>
  );
}
