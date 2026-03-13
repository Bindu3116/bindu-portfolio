"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-950/40 p-10">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-zinc-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-zinc-600/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-zinc-100/10 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-zinc-100/10 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-2">
          <Pill>{site.location}</Pill>
          <Pill>Open to ML/AI roles</Pill>
          <Pill>Multimodal Transformers</Pill>
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          {site.name}
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300">{site.headline}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="rounded-2xl bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950"
          >
            View projects
          </motion.a>
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href={site.links.resume}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            Download resume
          </motion.a>
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="rounded-2xl border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/40"
          >
            Contact
          </motion.a>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
          <a className="hover:text-zinc-200" href={site.links.linkedin}>
            LinkedIn
          </a>
          <span className="text-zinc-700">•</span>
          <a className="hover:text-zinc-200" href={site.links.github}>
            GitHub
          </a>
          <span className="text-zinc-700">•</span>
          <a className="hover:text-zinc-200" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
