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
  description: string
}

export const skillCategories: SkillCategory[] = [
  { id: "all", label: "All Technologies", count: 32, description: "Full engineering toolbox utilized across production apps and AI models." },
  { id: "languages", label: "Languages", count: 7, description: "Core programming and algorithmic implementation languages." },
  { id: "frontend", label: "Frontend", count: 5, description: "Component-driven, accessible, and reactive user interfaces." },
  { id: "backend", label: "Backend & Systems", count: 7, description: "RESTful microservices, WebSockets, route guards, and media pipelines." },
  { id: "aiml", label: "AI & Machine Learning", count: 7, description: "Transformers, computer vision, geospatial super-resolution, and NLP." },
  { id: "database", label: "Databases & Storage", count: 3, description: "Document and relational models with transactional consistency." },
  { id: "tools", label: "Developer Tools", count: 6, description: "Version control, containerized deployment, and scientific environments." }
]

export const skillsData: SkillItem[] = [
  // Languages
  { name: "C++", category: "languages", highlight: true, description: "DSA problem solving, STL, competitive programming (500+ problems)." },
  { name: "Python", category: "languages", highlight: true, description: "Machine learning, PyTorch models, data analysis, FastAPI services." },
  { name: "JavaScript (ES6+)", category: "languages", highlight: true, description: "Full-stack web applications, asynchronous node runtimes." },
  { name: "TypeScript", category: "languages", highlight: true, description: "Strictly-typed React components, interface schemas, and APIs." },
  { name: "Java", category: "languages", description: "Core OOP paradigms, inheritance hierarchies, and design patterns." },
  { name: "SQL", category: "languages", description: "Relational queries, table normalization, and schema design." },
  { name: "HTML5 & CSS3", category: "languages", description: "Semantic markup, modern layout models, and responsive design." },

  // Frontend
  { name: "React.js", category: "frontend", projectRef: "SkillExchange & TabMenu", highlight: true, description: "State hooks, context providers, custom hooks, dynamic routing." },
  { name: "Vite", category: "frontend", projectRef: "Sentinel-2 & Portfolio", highlight: true, description: "Lightning-fast HMR, optimized bundle splitting, modern ESM." },
  { name: "Tailwind CSS", category: "frontend", projectRef: "TabMenu & Portfolio", highlight: true, description: "Utility-first design systems, custom color tokens, responsive classes." },
  { name: "Next.js", category: "frontend", projectRef: "AI Text Detector", description: "SSR rendering, file-system routing, and server components." },
  { name: "Framer Motion", category: "frontend", projectRef: "Portfolio", description: "Choreographed layout animations, gestures, and scroll triggers." },

  // Backend
  { name: "Node.js", category: "backend", projectRef: "SkillExchange & TabMenu", highlight: true, description: "Event loop concurrency, modular services, file streams." },
  { name: "Express.js", category: "backend", projectRef: "SkillExchange & TabMenu", highlight: true, description: "REST routing, middleware error handlers, route protection." },
  { name: "Socket.io", category: "backend", projectRef: "TabMenu", highlight: true, description: "Event-scoped WebSocket rooms cutting live order latency by 90s." },
  { name: "FastAPI", category: "backend", projectRef: "AI Detector & Sentinel-2", highlight: true, description: "Asynchronous Python ASGI endpoints with Pydantic schemas." },
  { name: "JWT Auth", category: "backend", projectRef: "SkillExchange", description: "Token signing, cryptographic verification, and role-based guards." },
  { name: "Multer", category: "backend", projectRef: "SkillExchange", description: "Asynchronous multipart file uploads with MIME-type validation." },
  { name: "REST APIs", category: "backend", projectRef: "All Web Projects", description: "Contract design, status code standardization, and payload validation." },

  // AI & ML
  { name: "PyTorch", category: "aiml", projectRef: "AI Detector & Sentinel-2", highlight: true, description: "Deep neural network inference, tensor manipulations, and backprop." },
  { name: "Hugging Face & DeBERTa", category: "aiml", projectRef: "AI Text Detector", highlight: true, description: "Pretrained transformer heads with disentangled attention for NLP." },
  { name: "Scikit-learn", category: "aiml", projectRef: "AI Text Detector", description: "Classification pipelines, cross-validation, feature scalers." },
  { name: "NumPy & Pandas", category: "aiml", projectRef: "AI Text Detector", highlight: true, description: "Vectorized mathematics, matrix operations, and tabular data." },
  { name: "spaCy & NLP", category: "aiml", projectRef: "AI Text Detector", description: "Tokenization, POS tagging, and stylometric burstiness analysis." },
  { name: "FastSEN2SR & Vision", category: "aiml", projectRef: "Sentinel-2 Super-Res", highlight: true, description: "Super-resolution convolutional architectures for satellite imagery." },
  { name: "Rasterio", category: "aiml", projectRef: "Sentinel-2 Super-Res", description: "Reading and georeferencing multi-band GeoTIFF rasters with EPSG." },

  // Databases
  { name: "MongoDB", category: "database", projectRef: "SkillExchange & TabMenu", highlight: true, description: "Document schemas, atomic $inc operators, and aggregation pipelines." },
  { name: "Mongoose ODM", category: "database", projectRef: "SkillExchange", highlight: true, description: "Schema hooks, validation rules, and ACID transaction sessions." },
  { name: "MySQL", category: "database", description: "Relational queries, primary/foreign constraints, and ACID transactions." },

  // Tools
  { name: "Git & GitHub", category: "tools", highlight: true, description: "Collaborative branch workflows, code reviews, and merged PRs." },
  { name: "VS Code", category: "tools", description: "Primary development workspace with linting and debugger tools." },
  { name: "Linux / Bash", category: "tools", description: "Terminal operations, shell scripting, and environment configuration." },
  { name: "Jupyter & Colab", category: "tools", description: "Interactive model training, data exploratory analysis, and visualization." },
  { name: "Vercel", category: "tools", projectRef: "Live Projects", description: "Continuous integration, edge deployments, and preview environments." }
]
