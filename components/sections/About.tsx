import { site } from "@/lib/site";

export default function About() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <p className="text-zinc-200">
          I’m a Master’s student in Computer Science at California State University,
          Sacramento, focused on Machine Learning, Deep Learning, and
          transformer-based multimodal systems.
        </p>
        <p className="mt-4 text-zinc-300">
          I build practical AI solutions across health monitoring, medical
          diagnostics, and computer vision—combining strong modeling skills with
          full-stack engineering to ship end-to-end systems.
        </p>
        <p className="mt-4 text-zinc-300">
          Currently, I’m working on <span className="text-zinc-100">NeuroFusionGPT</span>,
          a multimodal transformer framework that fuses EEG + ECG signals for stress
          detection and generates human-friendly feedback.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
        <h3 className="text-sm font-semibold text-zinc-100">Quick info</h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-zinc-400">Location</dt>
            <dd className="text-zinc-200">{site.location}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-zinc-400">Focus</dt>
            <dd className="text-zinc-200">ML, Transformers</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-zinc-400">Open to</dt>
            <dd className="text-zinc-200">Intern / Full-time</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
