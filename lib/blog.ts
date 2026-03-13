import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
  tags?: string[];
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  readingMinutes: number;
};

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);
      return {
        slug,
        frontmatter: data as BlogFrontmatter,
        readingMinutes: Math.max(1, Math.round(rt.minutes))
      };
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  return posts;
}

export async function getPostHtml(slug: string): Promise<{
  frontmatter: BlogFrontmatter;
  html: string;
  readingMinutes: number;
}> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);
  const html = processed.toString();
  const rt = readingTime(content);
  return {
    frontmatter: data as BlogFrontmatter,
    html,
    readingMinutes: Math.max(1, Math.round(rt.minutes))
  };
}
