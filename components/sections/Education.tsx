import { education } from "@/lib/education";

export default function Education() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {education.map((ed) => (
        <div
          key={ed.degree}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6"
        >
          <h3 className="text-base font-semibold text-zinc-100">{ed.degree}</h3>
          <p className="mt-1 text-sm text-zinc-300">{ed.school}</p>
          <p className="mt-2 text-sm text-zinc-400">
            {ed.period}{ed.location ? ` · ${ed.location}` : ""}
          </p>
          {ed.highlights?.length ? (
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {ed.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
