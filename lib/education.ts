export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  location?: string;
  highlights?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "M.S. in Computer Science",
    school: "California State University, Sacramento",
    period: "Aug 2024 – May 2026",
    location: "Sacramento, CA"
  },
  {
    degree: "B.E. in Computer Science and Engineering",
    school: "KNS Institute of Technology (VTU)",
    period: "Aug 2018 – Jun 2022",
    location: "Bengaluru, India"
  }
];
