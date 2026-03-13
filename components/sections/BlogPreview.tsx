import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6">
      <p className="text-sm text-zinc-300">
        Short research notes and build logs from projects.
      </p>

      <div className="mt-5 grid gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 hover:bg-zinc-950"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-zinc-100 group-hover:underline group-hover:decoration-zinc-700 group-hover:underline-offset-4">
                {p.frontmatter.title}
              </h3>
              <p className="text-xs text-zinc-500">
                {p.frontmatter.date} · {p.readingMinutes} min
              </p>
            </div>
            <p className="mt-2 text-sm text-zinc-300">{p.frontmatter.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/blog"
          className="text-sm text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
        >
          View all posts
        </Link>
      </div>
    </div>
  );
}
