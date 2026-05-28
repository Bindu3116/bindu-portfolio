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
    title: "NeuroFusionGPT – Multimodal Stress Detection System",
    period: "2025 - 2026",
    summary:
      "Transformer-based multimodal deep learning system for EEG + ECG stress prediction.",
    bullets: [
      "Built a multimodal deep learning model that predicts 5 stress levels by fusing EEG and ECG signals using feature-level neural fusion.",
      "Implemented Transformer-based EEG modeling (16 features) and MLP-based ECG analysis (188 features) using 95K+ physiological signal samples.",
      "Developed an end-to-end ML pipeline including preprocessing, feature scaling, multimodal fusion, inference, and evaluation using accuracy, precision, recall, F1-score and confusion matrix.",
      "Integrated an AI wellness feedback module that generates personalized stress-management guidance based on predicted stress levels."
    ],
    tags: [
      "Python",
      "Transformers",
      "TensorFlow",
      "PyTorch",
      "Cross-Attention",
      "Deep Learning",
      "Multimodal AI",
      "Google Colab"
    ]
  },
  {
    title: "ML-based Medical Diagnostics for Infectious Diseases",
    period: "Aug 2025 – Dec 2025",
    
    summary:
      "IEEE SysCon 2026 published ML diagnostic system for infectious disease prediction.",
    bullets: [
      "Published at IEEE International Systems Conference (SysCon 2026).",
      "Developed a supervised ML pipeline using epidemiological data (263K+ samples) for COVID-19 prediction.",
      "Engineered clinical and temporal features such as comorbidity count and symptom-to-admission interval.",
      "Built and optimized an XGBoost model achieving 0.80 ROC-AUC and 0.73 Recall for high-risk case detection.",
      "Designed a robust preprocessing pipeline to handle noisy, imbalanced healthcare data."
    ],
    tags: [
      "Python",
      "XGBoost",
      "Scikit-learn",
      "Healthcare AI",
      "Feature Engineering",
      "IEEE SysCon"
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
