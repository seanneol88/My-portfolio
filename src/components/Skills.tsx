import Section from "@/components/Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" kicker="// what I work with" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <h3 className="font-mono text-sm font-semibold text-emerald-400">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
