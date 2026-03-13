import Link from "next/link";
import { getAllPosts, getPostHtml } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params
}: {
  params: { slug: string };
}) {
  const { frontmatter, html, readingMinutes } = await getPostHtml(params.slug);

  return (
    <main className="mx-auto max-w-3xl px-6 pb-16 pt-28">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/blog"
          className="text-sm text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
        >
          ← All posts
        </Link>
        <p className="text-xs text-zinc-500">{frontmatter.date} · {readingMinutes} min</p>
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-100">
        {frontmatter.title}
      </h1>
      <p className="mt-3 text-zinc-300">{frontmatter.description}</p>

      <article
        className="prose prose-invert mt-8 max-w-none prose-zinc"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6">
        <p className="text-sm text-zinc-300">
          Want to discuss this? Reach me on{" "}
          <a className="text-zinc-100 underline decoration-zinc-700 underline-offset-4" href="#contact">
            email
          </a>
          .
        </p>
      </div>
    </main>
  );
}
