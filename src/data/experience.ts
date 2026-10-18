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
      "Spearheading competitive programming initiatives and mentorship programs to elevate problem-solving rigor across the VJTI campus community.",
    highlights: [
      "Organized an intensive 45-day Summer Coding Challenge to evaluate, mentor, and onboard 100+ incoming junior and third-year (TY) engineering students.",
      "Designed algorithmic contest problem sets focusing on dynamic programming, graph theory, and greedy heuristics.",
      "Conducted post-contest editorial discussions analyzing time-space complexity trade-offs."
    ],
    tags: ["Competitive Programming", "DSA", "Problem Solving", "Mentorship", "C++"]
  },
  {
    id: "coc-vjti",
    role: "Instructor & Mentor",
    organization: "Community of Coders (COC) VJTI",
    subtitle: "Premier Student Coding Society of VJTI",
    period: "May 2026 – Present",
    type: "Mentoring",
    description:
      "Dedicated to demystifying foundational computing principles, algorithmic patterns, and software development practices for rising students.",
    highlights: [
      "Conducted 5+ in-depth technical workshops teaching fundamental Data Structures & Algorithms (DSA) to 80+ junior students.",
      "Mentored cohorts in debugging techniques, modular coding standards, and algorithmic intuition.",
      "Strengthened campus coding culture by building peer study groups and hands-on coding lab exercises."
    ],
    tags: ["Algorithms", "Data Structures", "Technical Workshops", "Peer Mentorship"]
  },
  {
    id: "agastya-jpmorgan",
    role: "Project Mentor",
    organization: "Agastya Foundation",
    subtitle: "Corporate Social Responsibility (CSR) initiative supported by JP Morgan",
    period: "Sept. 2025 – Mar. 2026",
    type: "Mentoring",
    description:
      "Guided collegiate engineering cohorts through end-to-end agile software lifecycle workflows, product wireframing, and production deployment.",
    highlights: [
      "Directed interdisciplinary student teams of 5–7 members in iterative wireframing and sprint planning across multiple sprints.",
      "Achieved 100% on-time deployment of minimum viable products across 3 client simulations.",
      "Coached student engineers on frontend-backend separation, Git collaboration conventions, and user testing."
    ],
    tags: ["Agile Sprints", "Product Architecture", "Team Leadership", "JP Morgan CSR", "Wireframing"]
  },
  {
    id: "osl-contributor",
    role: "Open Source Contributor",
    organization: "OpenScienceLabs (OSL)",
    subtitle: "Scientific Computing & Open Source Software Community",
    period: "Dec. 2025 – Feb. 2026",
    type: "Open Source",
    description:
      "Collaborated with international open-source maintainers to audit framework defects, resolve critical runtime bugs, and ship production-ready pull requests.",
    highlights: [
      "Resolved framework bugs and merged 3 production-ready PRs through rigorous peer code reviews.",
      "Reduced critical bugs across core open-source repositories by 30%.",
      "Collaborated via asynchronous GitHub discussions, contributing unit tests and patch documentation."
    ],
    tags: ["Open Source", "Bug Audits", "Git Workflows", "Peer Code Review", "Scientific Software"]
  }
]
