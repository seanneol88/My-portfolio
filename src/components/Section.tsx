import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, kicker, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <p className="font-mono text-sm text-emerald-400">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
