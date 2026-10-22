export interface SkillItem {
  name: string
  category: "languages" | "frontend" | "backend" | "aiml" | "database" | "tools"
  projectRef?: string
  highlight?: boolean
  description?: string
}

export interface SkillCategory {
  id: "all" | "languages" | "frontend" | "backend" | "aiml" | "database" | "tools"
  label: string
  count: number
}

export const skillCategories: SkillCategory[] = [
  { id: "all", label: "All", count: 24 },
  { id: "languages", label: "Languages", count: 5 },
  { id: "frontend", label: "Frontend", count: 4 },
  { id: "backend", label: "Backend", count: 5 },
  { id: "aiml", label: "AI & ML", count: 5 },
  { id: "database", label: "Databases", count: 2 },
  { id: "tools", label: "Tools", count: 3 }
]

export const skillsData: SkillItem[] = [
  // Languages
  { name: "C++", category: "languages", highlight: true, description: "STL & 550+ Competitive Programming Problems" },
  { name: "Python", category: "languages", highlight: true, description: "PyTorch, Transformers, FastAPI & Scientific Stack" },
  { name: "TypeScript", category: "languages", highlight: true, description: "Strictly Typed Interfaces & Full-Stack Contracts" },
  { name: "JavaScript", category: "languages", highlight: true, description: "ES6+, Asynchronous Node Runtimes & DOM" },
  { name: "SQL", category: "languages", description: "Relational Modeling, Query Optimization & Schemas" },

  // Frontend
  { name: "React.js", category: "frontend", projectRef: "SkillExchange & TabMenu", highlight: true, description: "Custom Hooks, Context & Dynamic SPA Layouts" },
  { name: "Tailwind CSS", category: "frontend", projectRef: "Production Projects", highlight: true, description: "Responsive Design Systems & Utility Tokens" },
  { name: "Vite", category: "frontend", projectRef: "Sentinel-2 & Portfolio", description: "Modern ESM Tooling & Bundle Optimization" },
  { name: "Framer Motion", category: "frontend", projectRef: "Portfolio", description: "Choreographed Gestures & Scroll Physics" },

  // Backend
  { name: "Node.js & Express", category: "backend", projectRef: "SkillExchange & TabMenu", highlight: true, description: "REST APIs, Route Middleware & Microservices" },
  { name: "Socket.io", category: "backend", projectRef: "TabMenu", highlight: true, description: "Event-Scoped Real-Time WebSocket Channels" },
  { name: "FastAPI", category: "backend", projectRef: "AI Detector & Sentinel-2", highlight: true, description: "Asynchronous Python Endpoints & Pydantic Validation" },
  { name: "JWT Auth & Route Guards", category: "backend", projectRef: "SkillExchange", description: "Role-Based Token Authentication & Session Security" },
  { name: "RESTful Architecture", category: "backend", projectRef: "All Web Platforms", description: "Clean API Contracts, CRUD & Error Standardization" },

  // AI & ML
  { name: "PyTorch", category: "aiml", projectRef: "Sentinel-2 & AI Detector", highlight: true, description: "Deep Neural Networks, Tensor Pipelines & Inference" },
  { name: "DeBERTa & Hugging Face", category: "aiml", projectRef: "AI Text Detector", highlight: true, description: "Disentangled Attention Transformers for NLP" },
  { name: "Computer Vision & Super-Res", category: "aiml", projectRef: "Sentinel-2", highlight: true, description: "FastSEN2SR Multispectral Satellite Upscaling" },
  { name: "Scikit-learn & spaCy", category: "aiml", projectRef: "AI Text Detector", description: "Stylometric Analysis & Statistical Classification" },
  { name: "NumPy & Pandas", category: "aiml", projectRef: "AI Pipelines", description: "Matrix Computations & Tabular Feature Engineering" },

  // Databases
  { name: "MongoDB & Mongoose", category: "database", projectRef: "SkillExchange & TabMenu", highlight: true, description: "Atomic $inc Operators, Document Schemas & ACID Sessions" },
  { name: "MySQL", category: "database", description: "Relational Queries, Foreign Keys & ACID Guarantees" },

  // Tools
  { name: "Git & GitHub", category: "tools", highlight: true, description: "Branching Workflows, Pull Requests & Code Reviews" },
  { name: "Linux / Bash", category: "tools", description: "Command-Line Environments & Shell Scripting" },
  { name: "Vercel", category: "tools", projectRef: "Live Projects", description: "Continuous Integration & Cloud Deployments" }
]
