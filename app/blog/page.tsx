import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Bindu Chandra Shekar Reddy"
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 pb-16 pt-28">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
        <Link
          href="/"
          className="text-sm text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
        >
          Back home
        </Link>
      </div>
      <p className="mt-3 text-zinc-300">
        Notes on multimodal learning, practical ML engineering, and project build logs.
      </p>

      <div className="mt-8 grid gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 hover:bg-zinc-900/30"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base font-semibold text-zinc-100">{p.frontmatter.title}</h2>
              <p className="text-xs text-zinc-500">
                {p.frontmatter.date} · {p.readingMinutes} min
              </p>
            </div>
            <p className="mt-2 text-sm text-zinc-300">{p.frontmatter.description}</p>
            {p.frontmatter.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.frontmatter.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </main>
  );
}
