export type Project = {
  title: string;
  period: string;
  tags: string[];
  summary: string;
  bullets: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "NeuroFusionGPT — Multimodal Transformer for EEG + ECG Stress Detection",
    period: "Master’s Project",
    tags: [
      "Multimodal Learning",
      "Transformers",
      "EEG",
      "ECG",
      "LLM Feedback",
      "Python"
    ],
    summary:
      "A multimodal framework that fuses EEG and ECG signals to detect stress and generate human-friendly feedback.",
    bullets: [
      "Designing an end-to-end pipeline for multimodal fusion (EEG + ECG) with robust preprocessing and representation learning.",
      "Experimenting with transformer-based encoders and fusion strategies to improve generalization across subjects.",
      "Adding an LLM-based layer to translate predictions into user-facing insights and actionable recommendations.",
      "Targeting a deployable, real-world workflow for wellness monitoring and reporting."
    ]
  },
  {
    title: "Team Project — ML-based Medical Diagnostics for Infectious Diseases",
    period: "Aug 2025 – Dec 2025",
    tags: [
      "XGBoost",
      "Supervised ML",
      "Feature Engineering",
      "Public Health",
      "Model Evaluation"
    ],
    summary:
      "A supervised ML system to predict infection status from epidemiological surveillance data in high-noise, resource-limited settings.",
    bullets: [
      "Selected for presentation at IEEE SysCon (Systems Conference) for scalability and real-world diagnostic relevance.",
      "Built a supervised ML pipeline using the Mexico National Epidemiological Surveillance dataset, focusing on noisy clinical records.",
      "Optimized an XGBoost classifier to achieve 0.80 ROC-AUC and 0.73 recall, prioritizing reduced false negatives for public health safety.",
      "Engineered informative features (e.g., comorbidity counts, symptom-to-admission intervals) to strengthen predictive signals.",
      "Designed for resource-limited environments as a data-driven alternative when lab testing is constrained during surge periods."
    ]
  },
  {
    title: "Plant Leaf Disease Detection (CNN + Transfer Learning)",
    period: "Academic Project",
    tags: ["CNN", "Transfer Learning", "VGG16", "ResNet50", "Computer Vision"],
    summary:
      "Image-based plant disease classification using transfer learning with ~95% accuracy.",
    bullets: [
      "Trained transfer-learning models (VGG16, ResNet50) and achieved ~95% classification accuracy.",
      "Implemented preprocessing, augmentation, and evaluation with Python tooling.",
      "Delivered a real-time prediction workflow suitable for early detection and prevention."
    ]
  },
  {
    title: "IoT-Based Real-Time Health Monitoring with Edge Computing",
    period: "Academic Project",
    tags: ["IoT", "Edge Computing", "Docker", "Kubernetes (GKE)", "iOS"],
    summary:
      "A real-time health monitoring system with low-latency edge processing and scalable cloud deployment.",
    bullets: [
      "Built an iOS interface for real-time health tracking using IoT devices.",
      "Introduced edge processing to reduce latency and improve responsiveness.",
      "Containerized backend services and deployed on Google Kubernetes Engine (GKE)."
    ]
  },
  {
    title: "Verilog ALU Simulation Tool",
    period: "Academic Project",
    tags: ["Verilog", "Digital Logic", "Testing"],
    summary:
      "A behavioral Verilog ALU with comprehensive testbench validation.",
    bullets: [
      "Implemented a behavioral Verilog ALU supporting multiple operations and select logic.",
      "Validated correctness using systematic testbenches across edge cases."
    ]
  }
];
