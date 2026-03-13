const groups: { title: string; items: string[] }[] = [
  {
    title: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Transformers",
      "CNNs",
      "NLP",
      "Feature Engineering",
      "Model Evaluation"
    ]
  },
  {
    title: "Tools",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Git", "Docker"]
  },
  {
    title: "Web / Backend",
    items: ["React", "Node.js", "PHP", "Java", "REST APIs", "MySQL"]
  },
  {
    title: "Cloud",
    items: ["AWS", "GCP", "Kubernetes (GKE)"]
  }
];

function Chip({ t }: { t: string }) {
  return (
    <span className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-3 py-1.5 text-sm text-zinc-200">
      {t}
    </span>
  );
}

export default function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {groups.map((g) => (
        <div
          key={g.title}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6"
        >
          <h3 className="text-sm font-semibold text-zinc-100">{g.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {g.items.map((t) => (
              <Chip key={t} t={t} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
