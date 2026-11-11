import { Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { site } from "@/data/portfolio";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm text-emerald-400"
        >
          <Terminal size={18} />
          <span className="hidden sm:inline">{site.handle}</span>
          <span className="sm:hidden">~</span>
        </a>
        <div className="flex items-center gap-4 overflow-x-auto text-sm text-zinc-400 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="transition-colors hover:text-white"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
