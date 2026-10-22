export interface ExperienceItem {
  id: string
  role: string
  organization: string
  subtitle?: string
  period: string
  type: "Leadership" | "Mentoring" | "Open Source" | "Technical"
  description: string
  highlights: string[]
  tags: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    id: "cp-club-vjti",
    role: "Organizer & Core Member",
    organization: "CP Club VJTI",
    subtitle: "Competitive Programming Club of VJTI",
    period: "May 2026 – Present",
    type: "Leadership",
    description:
      "Spearheading competitive programming initiatives and mentorship to elevate algorithmic problem-solving rigor across VJTI.",
    highlights: [
      "Organized a 45-day Summer Coding Challenge mentoring 100+ incoming engineering students.",
      "Curated contest problem sets covering dynamic programming, graph algorithms, and complexity analysis."
    ],
    tags: ["Competitive Programming", "DSA", "Problem Solving", "C++"]
  },
  {
    id: "coc-vjti",
    role: "Instructor & Mentor",
    organization: "Community of Coders (COC) VJTI",
    subtitle: "Premier Student Coding Society of VJTI",
    period: "May 2026 – Present",
    type: "Mentoring",
    description:
      "Demystifying fundamental computer science principles, algorithmic patterns, and clean software engineering for rising students.",
    highlights: [
      "Conducted 5+ in-depth technical workshops teaching Data Structures & Algorithms to 80+ junior students.",
      "Mentored cohorts in debugging techniques, modular coding standards, and algorithmic intuition."
    ],
    tags: ["Algorithms", "Data Structures", "Technical Workshops", "Mentorship"]
  },
  {
    id: "agastya-jpmorgan",
    role: "Project Mentor",
    organization: "Agastya Foundation",
    subtitle: "CSR initiative supported by JPMorgan",
    period: "Sept. 2025 – Mar. 2026",
    type: "Mentoring",
    description:
      "Guided collegiate engineering cohorts through agile sprint planning, technical communication, and iterative wireframing to deliver verified software solutions.",
    highlights: [
      "Directed interdisciplinary student teams in sprint planning and architectural decomposition.",
      "Achieved 100% on-time deployment of minimum viable products across client simulations."
    ],
    tags: ["Agile Sprints", "Product Architecture", "Team Leadership", "JPMorgan CSR"]
  }
]
