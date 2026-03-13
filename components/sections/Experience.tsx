import { experience } from "@/lib/experience";

export default function Experience() {
  return (
    <div className="space-y-6">
      {experience.map((e) => (
        <div
          key={e.role + e.org}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-zinc-100">
                {e.role} · {e.org}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                {e.period}{e.location ? ` · ${e.location}` : ""}
              </p>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {e.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
