"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

const items: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

export default function Nav() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full border-b border-zinc-900/60 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-sm font-semibold">
            B
          </span>
          <span className="text-sm font-medium tracking-tight text-zinc-100">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm text-zinc-300 hover:text-zinc-100"
            >
              {it.label}
            </a>
          ))}
          <a
            href={site.links.resume}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-900"
          >
            Resume
          </a>
        </nav>

        <motion.a
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="rounded-2xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950"
        >
          Let’s talk
        </motion.a>
      </div>
    </div>
  );
}
