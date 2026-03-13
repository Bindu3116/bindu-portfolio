import { site } from "@/lib/site";

export default function Contact() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6">
        <h3 className="text-base font-semibold text-zinc-100">Let’s connect</h3>
        <p className="mt-2 text-sm text-zinc-300">
          If you’re hiring for ML/AI roles or want to collaborate on a project, I’d
          love to talk.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-2xl bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950"
          >
            Email me
          </a>
          <a
            href={site.links.linkedin}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            className="rounded-2xl border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/40"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6">
        <h3 className="text-sm font-semibold text-zinc-100">Details</h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="space-y-1">
            <dt className="text-zinc-400">Email</dt>
            <dd className="text-zinc-200">{site.email}</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-zinc-400">Website</dt>
            <dd className="text-zinc-200">binduchandrashekarreddy.com</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
