import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-900/70 pt-8 text-sm text-zinc-500">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {site.name}</p>
        {/* /*<p className="text-zinc-600">Built with Next.js · Tailwind · Framer Motion</p> */}
      </div>
    </footer>
  );
}
