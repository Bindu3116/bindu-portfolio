export default function Publications() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6">
      <h2 className="text-2xl font-semibold text-zinc-100">Publications</h2>

      <div className="mt-6 space-y-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
          <h3 className="text-lg font-semibold text-zinc-100">
            ML-based Medical Diagnostics System for Infectious Diseases
          </h3>

          <p className="mt-2 text-sm text-zinc-300">
            Published at IEEE International Systems Conference (SysCon 2026).
            Developed a machine learning-based diagnostic system using epidemiological data (263K+ samples).
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://doi.org/10.1109/SysCon66367.2026.11503514"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800"
            >
              View Publication
            </a>

            <a
              href="https://scholar.google.com/citations?user=k67nfawAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}