export interface AchievementItem {
  id: string
  title: string
  issuer: string
  date: string
  category: "Certification" | "Competitive Programming" | "Academic"
  badge: string
  description: string
  metrics?: { label: string; value: string }[]
  link?: string
}

export const achievementsData: AchievementItem[] = [
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University (Andrew Ng)",
    date: "Verified Credential",
    category: "Certification",
    badge: "Stanford / DeepLearning.AI",
    description:
      "Comprehensive certification covering supervised machine learning (regression, classification), advanced learning algorithms (neural networks, decision trees), and unsupervised learning, recommender systems, and reinforcement learning.",
    link: "https://www.coursera.org/specializations/machine-learning-introduction"
  },
  {
    id: "dsa-milestone",
    title: "550+ Algorithmic Problems Solved",
    issuer: "LeetCode, Codeforces, CodeChef & Codolio",
    date: "Live Tracing Active",
    category: "Competitive Programming",
    badge: "550+ Live Solved",
    description:
      "Consistent competitive programming practice honing algorithmic design, graph theory, tree structures, dynamic programming, and amortized complexity analysis with live cross-platform telemetry via Codolio.",
    metrics: [
      { label: "Codeforces", value: "Pupil (Max 1315)" },
      { label: "LeetCode", value: "Max Rating 1500" },
      { label: "CodeChef", value: "2 Stars (Max 1430)" },
      { label: "Live Telemetry", value: "codolio.com/profile/Shreythecoder" }
    ],
    link: "https://codolio.com/profile/Shreythecoder"
  },
  {
    id: "mht-cet-rank",
    title: "Top 0.13% in State Engineering Entrance (Rank 301)",
    issuer: "State CET Cell, Maharashtra",
    date: "2024",
    category: "Academic",
    badge: "99.87%ile | Rank 301",
    description:
      "Secured State Rank 301 among hundreds of thousands of aspirants with a 99.87 percentile in MHT-CET, securing admission to VJTI Mumbai's premier Computer Engineering program."
  }
]
