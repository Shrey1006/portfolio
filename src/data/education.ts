export interface EducationItem {
  institution: string
  degree: string
  minorOrStream?: string
  period: string
  location: string
  scoreBadge: string
  scoreDetails?: string[]
  coursework?: string[]
  description: string
}

export const educationData: EducationItem[] = [
  {
    institution: "Veermata Jijabai Technological Institute (VJTI)",
    degree: "B.Tech in Computer Engineering",
    minorOrStream: "Minor in Cybersecurity",
    period: "Aug. 2024 – Present (Expected July 2028)",
    location: "Mumbai, India",
    scoreBadge: "CGPA: 7.81 / 10",
    coursework: [
      "Data Structures",
      "Design & Analysis of Algorithms",
      "Operating Systems",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Machine Learning Fundamentals"
    ],
    description:
      "One of India's premier and oldest engineering institutions. Engaging in rigorous coursework spanning core computational theory, low-level operating system internals, algorithm design, and cybersecurity protocols."
  },
  {
    institution: "S. V. Joshi Junior College",
    degree: "Higher Secondary Certificate (HSC) — Science (PCM)",
    period: "Aug. 2022 – May 2024",
    location: "Mumbai, India",
    scoreBadge: "MHT-CET: 99.87%ile (Rank 301)",
    scoreDetails: [
      "MHT-CET: 99.87 Percentile (State Rank: 301)",
      "JEE Main: 93.67 Percentile",
      "HSC Maharashtra State Board: 88.67%"
    ],
    description:
      "Intensive pre-engineering academics with deep focus on analytical physics, advanced mathematics, and chemistry, earning top 0.13% rank in the state competitive engineering entrance examination."
  }
]
