"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

function Tag({ t }: { t: string }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
      {t}
    </span>
  );
}

export default function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p) => (
        <motion.article
          key={p.title}
          whileHover={{ y: -3 }}
          className="group rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 shadow-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold tracking-tight text-zinc-100">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{p.period}</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-zinc-300">{p.summary}</p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {p.bullets.slice(0, 3).map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.slice(0, 6).map((t) => (
              <Tag key={t} t={t} />
            ))}
          </div>

          {p.links?.length ? (
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
}
