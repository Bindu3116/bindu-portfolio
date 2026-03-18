export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Web Developer",
    org: "Teleindia Networks Pvt. Ltd.",
    period: "Jun 2023 – Jul 2024",
    location: "Bengaluru, India",
    bullets: [
      "Built and maintained full-stack web applications using React, PHP/Node.js, Java, REST APIs, and MySQL.",
      "Implemented backend services and optimized database queries to improve performance and reliability.",
      "Collaborated with cross-functional stakeholders to deliver production features on schedule."
    ]
  },
  {
    role: "Machine Learning Intern",
    org: "Nanorobotics Embed Technologies",
    period: "Sep 2021 – Oct 2021",
    location: "Bengaluru, India",
    bullets: [
      "Developed ANN models and ML inference pipelines in Python for embedded use cases.",
      "Supported model evaluation and iterative improvements to meet project requirements."
    ]
  },
  {
    role: "Teaching Assistant / Instructional Student Assistant",
    org: "California State University, Sacramento",
    period: "",
    location: "",
    bullets: [
      "Supported Java and object-oriented programming instruction through labs, grading, and student mentoring.",
      "Helped students debug projects and strengthen fundamentals in data structures and software design."
    ]
  }
];
