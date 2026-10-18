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
      "A peer-to-peer knowledge trading platform enabling students to share video lessons, upload study notes, and exchange skills through an atomic credit-based economy.",
    problemStatement:
      "Traditional tutoring and skill acquisition platforms impose prohibitive subscription fees and lack reciprocal learning incentives. Students possess valuable skills they can barter, but need a secure, trusted medium with transactional integrity to prevent freeloading.",
    technicalApproach:
      "Built a robust MERN architecture with JWT authentication, custom role guards, and transactional credit accounting. Used MongoDB atomic $inc operations within Mongoose sessions to ensure concurrent credit transfers never enter an inconsistent state. Configured asynchronous file validation with Multer middleware for seamless note and video uploads.",
    features: [
      "Atomic Credit Ledger: Implemented $inc operations and ACID session transactions eliminating race conditions during credit transfers.",
      "Custom JWT Route Guards: Role-based authorization protecting administrative CRUD, user profiles, and media streaming endpoints.",
      "Asynchronous Media Handling: Express middleware with Multer for automated MIME-type validation, sanitization, and cloud-ready storage.",
      "Interactive Review & Verification: Peer rating mechanism and certificate issuance upon milestone completions.",
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
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Multer", "Tailwind CSS"],
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
      "A synchronized multi-role restaurant management platform connecting QR-based guest table ordering, waiter operations, kitchen dispatch, and admin analytics in real time.",
    problemStatement:
      "Dining venues experience significant floor friction and order dispatch delays when relying on manual waiter paper pads, especially during peak rushes. Disconnected communication between tables, service staff, and the kitchen leads to miscommunications, delayed orders, and uncoordinated billing.",
    technicalApproach:
      "Designed a four-sided synchronized architecture with event-scoped WebSocket channels via Socket.io. Tables are mapped using dynamic QR codes that automatically scope the customer session to their floor station. Orders stream instantly to waiter and kitchen display systems (KDS) with live status transitions (Pending -> Preparing -> Dispatched -> Paid).",
    features: [
      "Event-Scoped WebSocket Channels: Real-time room broadcasting that dropped live order delivery latency by 90 seconds.",
      "Quad-Interface Architecture: Tailored role-based interfaces for Customer (QR mobile menu), Waiter (table floor tracker), Kitchen (live queue display), and Admin (analytics).",
      "Persistent Real-Time Cart: Local-first state synchronization ensuring customers don't lose custom dish instructions on network dropouts.",
      "Live Floor Tracking: Instant visual occupancy status for managers and floor captains.",
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
    technologies: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "JWT", "Tailwind CSS"],
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
      "An NLP classification pipeline combining fine-tuned DeBERTa transformer representations with statistical stylometric feature extraction to distinguish human from AI-generated prose.",
    problemStatement:
      "As Large Language Models evolve, standard surface-level heuristics fail to detect synthetic text. Pure transformer classifiers can be overconfident, while statistical tests lack contextual semantics. A robust classifier requires blending semantic attention representations with syntactic variance markers.",
    technicalApproach:
      "Built an NLP detection engine leveraging fine-tuned DeBERTa (Decoding-enhanced BERT with Disentangled Attention) models alongside parallel stylometric pipelines. Extracted vocabulary richness, Shannon entropy, sentence burstiness, and punctuation density using spaCy, NumPy, and Scikit-learn. Deployed model weights behind a low-latency FastAPI microservice with tensor batching optimizations.",
    features: [
      "DeBERTa Transformer Classification: Leverages disentangled attention mechanisms to capture nuanced semantic syntax anomalies.",
      "Parallel Stylometric Pipelines: Measures lexical diversity (Type-Token Ratio), perplexity indicators, and sentence length variance via spaCy and NumPy.",
      "High Benchmark Accuracy: Achieved 98% accuracy on validated benchmark evaluation sets for synthetic text detection.",
      "Low-Latency FastAPI Microservice: Asynchronous model inference with dynamic batching and caching for rapid request turnaround.",
      "Confidence Scoring & Interpretability: Highlights specific suspicious sentences with statistical deviation metrics."
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
      "Implemented the data preprocessing pipelines, fine-tuned DeBERTa model heads, engineered stylometric feature extractors in spaCy/NumPy, and wrapped the inference engine into FastAPI.",
    metrics: [
      { label: "Accuracy", value: "98%" },
      { label: "Architecture", value: "DeBERTa + NLP" },
      { label: "Inference Engine", value: "FastAPI" }
    ],
    technologies: ["Python", "PyTorch", "Hugging Face", "DeBERTa", "FastAPI", "spaCy", "Scikit-learn", "NumPy", "React.js"],
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
      "A deep learning computer vision pipeline that upscales 10m multispectral satellite bands (B2, B3, B4, B8) to 2.5m ground sampling distance using FastSEN2SR and PyTorch.",
    problemStatement:
      "Freely available Sentinel-2 satellite imagery is limited to 10m spatial resolution on visible and near-infrared bands, obscuring fine urban infrastructure, agricultural plots, and coastline changes. Commercial sub-3m imagery is costly and inaccessible for academic and environmental monitoring.",
    technicalApproach:
      "Trained and implemented FastSEN2SR deep neural networks accepting four optical Sentinel-2 bands: Blue (B2), Green (B3), Red (B4), and Near-Infrared (B8). Performed 4x spatial super-resolution using PyTorch tensor operations and exported high-fidelity 4-band float32 GeoTIFF rasters with intact geospatial coordinates via Rasterio.",
    features: [
      "4x Spatial Upscaling: Enhances ground sampling distance from 10m down to 2.5m per pixel.",
      "Multispectral Preservation: Accurately retains spectral reflectance ratios across B2, B3, B4, and B8 bands.",
      "Geospatial Preservation: Reads and outputs intact GeoTIFF headers with EPSG projections using Rasterio.",
      "Interactive Comparison Interface: Web interface built with React, Vite, and Tailwind for analyzing before-and-after satellite tiles.",
      "Containerized Model Server: FastAPI inference backend ready for processing multi-gigabyte satellite footprints."
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
      "Implemented the band ingestion scripts with Rasterio, configured FastSEN2SR PyTorch model inference, handled geospatial coordinate projection preservation, and developed the React comparison viewer.",
    metrics: [
      { label: "Spatial Upscaling", value: "4x (10m -> 2.5m)" },
      { label: "Bands Processed", value: "B2, B3, B4, B8" },
      { label: "Output Format", value: "Float32 GeoTIFF" }
    ],
    technologies: ["PyTorch", "FastSEN2SR", "Rasterio", "FastAPI", "React", "TypeScript", "Tailwind CSS", "Vite"],
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
      "A voice-first charitable assistance platform concept enabling farmers and rural citizens with limited digital literacy to request relief in their native dialect through automated speech workflows.",
    problemStatement:
      "Conventional government and NGO assistance programs require navigating complex digital multi-step web forms, document uploads, and English-centric portals. Millions of smallholder farmers and marginalized individuals face literacy barriers that prevent them from accessing critical agricultural and disaster assistance.",
    technicalApproach:
      "Conceptualized a voice-driven intake architecture with native speech-to-text input and natural text-to-speech feedback. Separated user journeys into four dedicated stakeholders: rural applicants (voice portal), donors (transparent fund routing), field verifiers (GPS inspection app), and administrators (allocation dashboard).",
    features: [
      "Dialect-First Voice Intake: Allows applicants to describe crop loss or medical urgency in their native spoken tongue.",
      "Automated Speech Pipeline Concept: Speech-to-text transcribes requests into structured incident tickets with automated categorization.",
      "Four-Party Stakeholder Separation: Dedicated workflows for Applicants, Donors, Field Verifiers, and Program Admins.",
      "High-Contrast Accessible UI: Large tactile targets, auditory confirmations, and minimal text-heavy requirements.",
      "Civic Integrity & Audit Trail: Verification protocols to ensure transparent, accountable fund distribution."
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
      { label: "Design Focus", value: "Accessibility & Voice" },
      { label: "Workflow Roles", value: "4 Stakeholders" },
      { label: "Interaction Mode", value: "Dialect Audio" }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Web Speech API", "Tailwind CSS", "Accessibility (a11y)"],
    screenshotUrl: "/images/projects/sevavoice.png",
    isConceptualMockup: true,
    dateRange: "2026 Concept",
    featured: false,
    accentColor: "#ec4899"
  }
]
