export interface AchievementItem {
  id: string
  title: string
  organization: string
  period: string
  category: "Mentorship" | "Hackathon" | "Certification" | "Competitive Programming"
  badge: string
  badgeColor?: string
  description: string
  highlights?: string[]
  link?: string
  featured?: boolean
}

export const achievementsData: AchievementItem[] = [
  {
    id: "mumbai-hacks-finalist",
    title: "Mumbai Hacks — Finalist",
    organization: "Mumbai Hacks Hackathon",
    period: "Hackathon Finalist",
    category: "Hackathon",
    badge: "Finalist",
    badgeColor: "#a3e635",
    description:
      "Selected as an official Finalist at Mumbai Hacks, advancing through competitive evaluation rounds by architecting, prototyping, and pitching an innovative solution to industry judges.",
    highlights: [
      "Official Finalist recognition among top builder teams",
      "Demonstrated rapid end-to-end prototyping and technical architecture under tight constraints"
    ],
    featured: true
  },
  {
    id: "agastya-jpmorgan-mentorship",
    title: "Project Mentor — Agastya Foundation",
    organization: "CSR Initiative supported by JPMorgan",
    period: "Sept. 2025 – Mar. 2026",
    category: "Mentorship",
    badge: "JPMorgan CSR Initiative",
    badgeColor: "#38bdf8",
    description:
      "Guided collegiate student engineering cohorts in iterative sprint planning, collaborative communication, and product wireframing, helping learners grasp complex technical concepts and successfully deliver client simulations.",
    highlights: [
      "Mentored interdisciplinary student cohorts in agile workflows and frontend-backend architecture",
      "Achieved 100% on-time deployment of minimum viable products across client simulations"
    ],
    featured: true
  },
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    organization: "DeepLearning.AI & Stanford University (Andrew Ng)",
    period: "Verified Credential",
    category: "Certification",
    badge: "Stanford / DeepLearning.AI",
    badgeColor: "#f59e0b",
    description:
      "Completed rigorous coursework covering supervised learning (regression, classification), deep learning architectures, unsupervised learning, recommender systems, and reinforcement learning.",
    link: "https://www.coursera.org/specializations/machine-learning-introduction"
  },
  {
    id: "dsa-competitive-programming",
    title: "550+ Algorithmic Problems Solved",
    organization: "LeetCode · Codeforces (Pupil) · CodeChef (2 Stars)",
    period: "Active Practice",
    category: "Competitive Programming",
    badge: "Pupil · 2 Stars",
    badgeColor: "#ec4899",
    description:
      "Demonstrated strong problem-solving rigor across data structures, graph theory, tree traversals, and dynamic programming, maintaining active multi-platform telemetry on Codolio.",
    highlights: [
      "Codeforces: Pupil rating (Max 1315)",
      "LeetCode: 1500 rating with consistent problem solving",
      "CodeChef: 2 Stars (Max 1430)"
    ],
    link: "https://codolio.com/profile/Shreythecoder"
  }
]
