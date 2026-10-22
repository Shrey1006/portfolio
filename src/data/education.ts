export interface EducationItem {
  id: string
  institution: string
  degree: string
  minorOrStream?: string
  period: string
  location: string
  scoreBadge: string
  scoreDetails?: string[]
  coursework?: string[]
  description: string
  isPlaceholder?: boolean
}

export const educationData: EducationItem[] = [
  {
    id: "vjti-mumbai",
    institution: "Veermata Jijabai Technological Institute (VJTI)",
    degree: "B.Tech in Computer Engineering",
    minorOrStream: "Minor in Cybersecurity",
    period: "Aug. 2024 – Present (Expected July 2028)",
    location: "Mumbai, India",
    scoreBadge: "CGPA: 7.81 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Computer Networks & Security"
    ],
    description:
      "Undergraduate studies at one of India's premier engineering institutions, focusing on core computing systems, algorithm optimization, low-level OS fundamentals, and network security."
  },
  {
    id: "sv-joshi-college",
    institution: "S. V. Joshi Junior College",
    degree: "Higher Secondary Certificate (HSC) — Science (PCM)",
    period: "Aug. 2022 – May 2024",
    location: "Mumbai, India",
    scoreBadge: "MHT-CET: 99.87%ile (Rank 301)",
    scoreDetails: [
      "MHT-CET: 99.87 Percentile (State Rank: 301)",
      "HSC Maharashtra State Board: 88.67%",
      "JEE Main: 93.67 Percentile"
    ],
    description:
      "Rigorous pre-engineering foundation in analytical physics, advanced mathematics, and chemistry, earning top 0.13% rank statewide in the competitive engineering entrance examination."
  },
  {
    id: "secondary-school",
    institution: "SJM New Secondary High School",
    degree: "Secondary School Certificate (SSC / 10th Standard)",
    period: "Completed 2022",
    location: "Mumbai, India",
    scoreBadge: "10th Standard: 93.2%",
    scoreDetails: [
      "Class X Board Examination: 93.2%"
    ],
    description:
      "Secondary school education establishing strong academic fundamentals in mathematics, science, and analytical problem-solving.",
    isPlaceholder: true
  }
]
