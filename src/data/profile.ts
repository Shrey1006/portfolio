export interface ProfileData {
  name: string
  preferredName: string
  headline: string
  roleSubtitle: string
  institution: string
  degree: string
  specializationMinor: string
  cgpa: string
  expectedGraduation: string
  location: string
  email: string
  github: string
  linkedin: string
  leetcode: string
  codeforces: string
  codechef: string
  codolio: string
  resumePath: string
  summary: string
  howIBuild: Array<{
    step: string
    title: string
    description: string
  }>
}

export const profileData: ProfileData = {
  name: "Shreyansh Mojidra",
  preferredName: "Shreyansh",
  headline: "Building ideas into digital experiences.",
  roleSubtitle: "COMPUTER ENGINEERING · VJTI MUMBAI",
  institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
  degree: "B.Tech in Computer Engineering",
  specializationMinor: "Minor in Cybersecurity",
  cgpa: "7.81 / 10",
  expectedGraduation: "July 2028",
  location: "Mumbai, India",
  email: "shreymojidra06@gmail.com",
  github: "https://github.com/Shrey1006",
  linkedin: "https://www.linkedin.com/in/shreyansh-mojidra-8b2119252/",
  leetcode: "https://leetcode.com/u/shreycodes1008/",
  codeforces: "https://codeforces.com/profile/shreythecoder",
  codechef: "https://www.codechef.com/users/shreycoder_10",
  codolio: "https://codolio.com/profile/Shreythecoder",
  resumePath: "/resume/Shreyansh_Mojidra_Resume.pdf",
  summary:
    "I'm Shreyansh Mojidra, a Computer Engineering student at VJTI, Mumbai. I enjoy building practical software, exploring full-stack development, and experimenting with AI/ML to understand how technology can solve real-world problems. From web applications to machine learning experiments and open-source contributions, I like turning ideas into working products while continuously improving my engineering skills.",
  howIBuild: [
    {
      step: "01",
      title: "Deconstruct the Problem",
      description: "Analyze the core bottlenecks, user constraints, and data flows before touching code. Establish clear requirements and metrics."
    },
    {
      step: "02",
      title: "Architect for Resilience",
      description: "Design modular schemas, secure authentication boundaries, and responsive interfaces with clean separation of concerns."
    },
    {
      step: "03",
      title: "Iterative Implementation",
      description: "Ship incremental, testable milestones with typed contracts, atomic transactions, and optimized asset pipelines."
    },
    {
      step: "04",
      title: "Benchmark & Refine",
      description: "Profile runtime latency, eliminate race conditions, audit accessibility, and polish micro-interactions."
    }
  ]
}
