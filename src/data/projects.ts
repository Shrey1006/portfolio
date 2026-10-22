export interface Project {
  id: string
  slug: string
  number: string
  title: string
  category: string
  shortDescription: string
  problemStatement: string
  technicalApproach: string
  features: string[]
  architecture: {
    frontend: string
    backend: string
    database: string
    keyPattern: string
    pipeline?: string[]
  }
  myContribution: string
  metrics?: { label: string; value: string }[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  screenshotUrl: string
  isConceptualMockup?: boolean
  dateRange: string
  featured: boolean
  accentColor: string
}

export const projectsData: Project[] = [
  {
    id: "skillexchange",
    slug: "skillexchange",
    number: "01",
    title: "SkillExchange",
    category: "Full-Stack Web Development",
    shortDescription:
      "A peer-to-peer knowledge trading platform where students exchange skills and learning materials through an atomic credit-based economy. Built with MongoDB atomic operations to eliminate race conditions, paired with JWT route guards and asynchronous media processing.",
    problemStatement:
      "Traditional tutoring platforms impose costly subscription fees and lack reciprocal learning incentives. Students possess valuable skills to barter, but need transactional integrity to prevent balance inconsistency and freeloading.",
    technicalApproach:
      "Architected a MERN application with JWT authentication, custom role guards, and transactional credit accounting. Used MongoDB atomic $inc operators within Mongoose sessions to guarantee concurrency safety during peer credit exchanges.",
    features: [
      "Atomic Credit Ledger: Implemented $inc operations and ACID transactions eliminating race conditions during credit transfers.",
      "Custom JWT Route Guards: Role-based authorization protecting administrative CRUD, user profiles, and media streaming endpoints.",
      "Asynchronous Media Handling: Express middleware with Multer for automated MIME-type validation and storage.",
      "Learner Cost Optimization: Reduced peer-learning costs by 25% by shifting tutoring to an incentive-driven barter model."
    ],
    architecture: {
      frontend: "React SPA with componentized layout, responsive navigation, and stateful credit balances.",
      backend: "Node.js & Express RESTful API with modular controllers, centralized error handling, and JWT authentication.",
      database: "MongoDB with Mongoose schemas, indexed query paths, and transaction sessions.",
      keyPattern: "Atomic credit incrementing ($inc) under transactional isolation to guarantee zero balance corruption."
    },
    myContribution:
      "Architected the full backend REST API, designed MongoDB transactional credit models, integrated JWT route guards, and crafted responsive React dashboard components.",
    metrics: [
      { label: "Cost Reduction", value: "25%" },
      { label: "Transaction Safety", value: "100% Atomic" },
      { label: "Auth Model", value: "JWT Guards" }
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    githubUrl: "https://github.com/Shrey1006/SkillExchange",
    liveUrl: "https://skill-exchange-phi-three.vercel.app/",
    screenshotUrl: "/images/projects/skillexchange.png",
    dateRange: "Dec. 2025 – Feb. 2026",
    featured: true,
    accentColor: "#38bdf8"
  },
  {
    id: "tabmenu",
    slug: "tabmenu",
    number: "02",
    title: "TabMenu (Ambika Pure Veg)",
    category: "Full-Stack Product Engineering",
    shortDescription:
      "A synchronized multi-role restaurant management platform connecting guest QR ordering, waiter operations, kitchen dispatch, and admin analytics in real time. Deployed live in production at Ambika Pure Veg with event-scoped WebSocket channels.",
    problemStatement:
      "Dining venues experience significant floor friction and order dispatch delays when relying on manual waiter pads. Disconnected communication between tables, service staff, and the kitchen leads to delayed orders and uncoordinated billing.",
    technicalApproach:
      "Designed a four-sided synchronized architecture with event-scoped WebSocket channels via Socket.io. Tables are mapped using dynamic QR codes that automatically scope the customer session to their floor station, streaming updates directly to staff and kitchen screens.",
    features: [
      "Event-Scoped WebSocket Channels: Real-time room broadcasting that dropped live order delivery latency by 90 seconds.",
      "Quad-Interface Architecture: Tailored role-based interfaces for Customer (QR mobile menu), Waiter (floor tracker), Kitchen (live queue), and Admin (analytics).",
      "Persistent Real-Time Cart: Local-first state synchronization ensuring customers never lose dish custom instructions on network dropouts.",
      "Verified Live Production Deployment: Successfully running as the live digital system for Ambika Pure Veg restaurant."
    ],
    architecture: {
      frontend: "React.js dynamic client with modular views for QR mobile ordering, staff boards, and admin dashboards.",
      backend: "Node.js / Express microservices orchestrating Socket.io rooms, order state machines, and authentication.",
      database: "MongoDB storing table graphs, menu catalogs, and order audit histories.",
      keyPattern: "Event-scoped WebSocket rooms minimizing pub/sub chatter while ensuring instant kitchen dispatch."
    },
    myContribution:
      "Engineered WebSocket room pipelines, implemented live order state synchronization, built the responsive QR mobile ordering flow, and deployed the production system.",
    metrics: [
      { label: "Latency Cut", value: "90s Faster" },
      { label: "User Roles", value: "4 Dashboards" },
      { label: "Floor Tracking", value: "Real-time" }
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"],
    liveUrl: "https://ambikapureveg-two.vercel.app/",
    screenshotUrl: "/images/projects/tabmenu.png",
    dateRange: "May. 2026 – Aug. 2026",
    featured: true,
    accentColor: "#f59e0b"
  },
  {
    id: "ai-text-detector",
    slug: "ai-text-detector",
    number: "03",
    title: "AI Text Detector",
    category: "AI / Machine Learning",
    shortDescription:
      "An NLP classification pipeline combining fine-tuned DeBERTa transformer representations with statistical stylometric feature extraction to distinguish human from synthetic text with 98% benchmark accuracy.",
    problemStatement:
      "Standard surface-level heuristics fail to detect modern LLM-generated text. Pure transformer classifiers can be overconfident, while statistical tests lack contextual semantics, requiring a blend of attention representations with syntactic variance markers.",
    technicalApproach:
      "Built an NLP detection engine leveraging fine-tuned DeBERTa models alongside parallel stylometric pipelines. Extracted vocabulary richness, Shannon entropy, sentence burstiness, and punctuation density using spaCy, NumPy, and Scikit-learn, served via FastAPI.",
    features: [
      "DeBERTa Transformer Classification: Leverages disentangled attention mechanisms to capture nuanced semantic anomalies.",
      "Parallel Stylometric Pipelines: Measures lexical diversity (Type-Token Ratio) and sentence length variance via spaCy and NumPy.",
      "High Benchmark Accuracy: Achieved 98% accuracy on validated benchmark evaluation sets for synthetic text detection.",
      "Low-Latency FastAPI Microservice: Asynchronous model inference with dynamic batching for rapid request turnaround."
    ],
    architecture: {
      frontend: "Next.js / React interactive analysis workbench with sentence-level probability highlighting.",
      backend: "FastAPI microservice in Python with Torch inference runtime and thread pool workers.",
      database: "In-memory evaluation cache and serialized model weight repository.",
      keyPattern: "Parallel feature fusion: Dense transformer embeddings combined with sparse stylometric statistical vectors.",
      pipeline: [
        "Raw Input Text",
        "NLP Tokenization & Cleaning",
        "Dual Path: DeBERTa Embeddings + spaCy Stylometric Features",
        "Ensemble Classifier & Softmax Probability",
        "Sentence-level Anomaly Heatmap"
      ]
    },
    myContribution:
      "Implemented data preprocessing pipelines, fine-tuned DeBERTa model heads, engineered stylometric extractors in spaCy/NumPy, and wrapped the inference engine into FastAPI.",
    metrics: [
      { label: "Accuracy", value: "98%" },
      { label: "Transformer", value: "DeBERTa-v3" },
      { label: "Microservice", value: "FastAPI" }
    ],
    technologies: ["Python", "PyTorch", "DeBERTa", "FastAPI", "spaCy"],
    screenshotUrl: "/images/projects/ai-detector.png",
    isConceptualMockup: true,
    dateRange: "Sept. 2025 – Nov. 2025",
    featured: true,
    accentColor: "#a3e635"
  },
  {
    id: "sentinel-super-resolution",
    slug: "sentinel-super-resolution",
    number: "04",
    title: "Sentinel-2 2.5m Multispectral Super-Resolution",
    category: "Computer Vision / Geospatial AI",
    shortDescription:
      "A deep learning computer vision pipeline that upscales 10m multispectral satellite bands (B2, B3, B4, B8) to 2.5m ground sampling distance using FastSEN2SR and PyTorch, exporting float32 GeoTIFF rasters with intact georeferencing.",
    problemStatement:
      "Public Sentinel-2 satellite imagery is limited to 10m spatial resolution on visible and NIR bands, obscuring fine urban infrastructure and coastline changes, while commercial sub-3m imagery is costly and inaccessible.",
    technicalApproach:
      "Trained and implemented FastSEN2SR deep neural networks accepting four optical Sentinel-2 bands. Performed 4x spatial super-resolution using PyTorch tensor operations and exported high-fidelity GeoTIFF rasters with intact EPSG coordinates via Rasterio.",
    features: [
      "4x Spatial Upscaling: Enhances ground sampling distance from 10m down to 2.5m per pixel.",
      "Multispectral Preservation: Accurately retains spectral reflectance ratios across B2, B3, B4, and B8 bands.",
      "Geospatial Preservation: Reads and outputs intact GeoTIFF headers with EPSG projections using Rasterio.",
      "Interactive Comparison Interface: Web interface built with React and Vite for analyzing before-and-after satellite tiles."
    ],
    architecture: {
      frontend: "React + TypeScript + Vite interactive map viewer with side-by-side comparison slider and band selector.",
      backend: "FastAPI server running PyTorch model inference on tiled rasters.",
      database: "GeoTIFF tile repository and cloud raster storage.",
      keyPattern: "Convolutional residual feature distillation with multispectral band cross-attention.",
      pipeline: [
        "Sentinel-2 L2A Bands (B2, B3, B4, B8)",
        "Rasterio Tiling & Radiometric Normalization",
        "FastSEN2SR Neural Inference (PyTorch)",
        "Denormalization & Georeferencing",
        "2.5m Float32 GeoTIFF Output"
      ]
    },
    myContribution:
      "Implemented band ingestion scripts with Rasterio, configured FastSEN2SR PyTorch model inference, handled geospatial coordinate preservation, and developed the React comparison viewer.",
    metrics: [
      { label: "Upscaling", value: "4x Factor" },
      { label: "Resolution", value: "10m → 2.5m" },
      { label: "Output Format", value: "GeoTIFF" }
    ],
    technologies: ["PyTorch", "FastSEN2SR", "Rasterio", "FastAPI", "React"],
    githubUrl: "https://github.com/Shrey1006/Sentinel-2-2.5m-Multispectral-Super-Resolution",
    screenshotUrl: "/images/projects/sentinel.png",
    isConceptualMockup: true,
    dateRange: "2026",
    featured: true,
    accentColor: "#10b981"
  },
  {
    id: "sevavoice",
    slug: "sevavoice",
    number: "05",
    title: "SevaVoice",
    category: "Accessible Technology / Social Impact",
    shortDescription:
      "A voice-first charitable assistance platform concept enabling farmers and rural citizens to request relief in their native dialect through automated speech-to-text workflows and transparent four-party relief tracking.",
    problemStatement:
      "Conventional government and NGO assistance portals require navigating complex English forms and document uploads, creating barriers for millions of smallholder farmers and marginalized individuals who face digital literacy hurdles.",
    technicalApproach:
      "Conceptualized a voice-driven intake architecture with native speech-to-text input and natural text-to-speech feedback, separating workflows for rural applicants, donors, field verifiers, and program administrators.",
    features: [
      "Dialect-First Voice Intake: Allows applicants to describe crop loss or medical urgency in their native spoken tongue.",
      "Automated Speech Pipeline Concept: Transcribes spoken requests into structured incident tickets with automated categorization.",
      "Four-Party Stakeholder Separation: Dedicated workflows for Applicants, Donors, Field Verifiers, and Program Admins.",
      "High-Contrast Accessible UI: Large tactile targets, auditory confirmations, and WCAG AAA compliance."
    ],
    architecture: {
      frontend: "Accessible mobile-first web app with high-contrast audio UI controls and visual status cues.",
      backend: "Node.js / Express microservice orchestrating audio transcription pipelines and multi-role ticket workflows.",
      database: "MongoDB storing case files, audio manifests, and verifier geostamps.",
      keyPattern: "Speech-to-Structured-Action: Transforming unstructured voice descriptions into validated relief tickets."
    },
    myContribution:
      "Designed the multi-role operational workflow, defined the voice intake interaction paradigm, and architected the accessible frontend interfaces.",
    metrics: [
      { label: "Interface", value: "Voice-First" },
      { label: "User Roles", value: "4 Stakeholders" },
      { label: "Standard", value: "WCAG AAA" }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Web Speech API"],
    screenshotUrl: "/images/projects/sevavoice.png",
    isConceptualMockup: true,
    dateRange: "2026 Concept",
    featured: false,
    accentColor: "#ec4899"
  }
]
