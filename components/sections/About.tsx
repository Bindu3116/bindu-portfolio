import { site } from "@/lib/site";

export default function About() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <p className="text-zinc-200">
          Machine Learning Engineer and Software Developer with experience delivering scalable AI systems and full-stack applications.
        </p>

        <p className="mt-4 text-zinc-300">
          Designed and deployed an end-to-end healthcare AI pipeline presented at IEEE SysCon, and developed transformer-based multimodal models for stress detection using EEG and ECG signals.
        </p>

        <p className="mt-4 text-zinc-300">
          I specialize in deep learning, multimodal fusion, real-time inference pipelines, and cloud-native ML systems. My goal is to build intelligent AI products that combine strong machine learning foundations with scalable software engineering.
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
            <dd className="text-zinc-200">ML/AI & Full-Stack Roles</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
