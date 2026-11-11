import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 font-mono text-xs text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js + Docker
          + GitHub Actions.
        </p>
        <p>Deployed on my own Oracle Cloud VM · no Vercel, no shared hosting</p>
      </div>
    </footer>
  );
}
