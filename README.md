# Shreyansh Mojidra — Developer Portfolio

A cinematic, editorial, and interactive personal developer portfolio for **Shreyansh Mojidra**, Computer Engineering student at **Veermata Jijabai Technological Institute (VJTI)**, Mumbai.

Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌟 Highlights & Signature Interactions

- **Interactive Constellation & Neural HUD Hero**: An interactive canvas-based algorithmic network that responds elastically to cursor physics with traveling data pulses and live HUD telemetry.
- **Custom Interactive Project Cursor**: Smooth 60fps trailing cursor via `requestAnimationFrame` with magnetic hover labels (`VIEW PROJECT`, `EXPLORE`), disabled on mobile touch devices.
- **Satellite Super-Resolution Draggable Slider**: Interactive Before/After slider comparing 10m raw Sentinel-2 satellite optical bands with 2.5m super-resolved GeoTIFF rasters via `FastSEN2SR`.
- **AI Text Detector Interactive Simulator**: Live NLP pipeline workbench extracting stylometric features (Type-Token Ratio, Burstiness, Perplexity) paired with DeBERTa transformer confidence scoring.
- **Deep-Dive Case Study Modals**: Complete system architectures, backend/frontend separation, key design patterns, and verified engineering metrics for every project.
- **Integrated PDF Resume**: Real PDF resume wired to `/resume/Shreyansh_Mojidra_Resume.pdf` with download CTAs in Navbar, Hero, and Contact sections.
- **Live Mumbai Time Ticker (IST)**: Real-time clock formatted for Mumbai (UTC+5:30).

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg                           # Custom SM Monogram SVG favicon
│   ├── images/
│   │   ├── shreyansh-mojidra.jpg             # High-res profile photograph
│   │   └── projects/
│   │       ├── skillexchange.png             # Live application screenshot
│   │       └── tabmenu.png                   # Live Ambika Pure Veg screenshot
│   └── resume/
│       └── Shreyansh_Mojidra_Resume.pdf      # Verified PDF resume asset
├── src/
│   ├── assets/                               # Internal asset copies
│   ├── components/
│   │   ├── animation/
│   │   │   ├── CustomCursor.tsx              # Smooth requestAnimationFrame cursor
│   │   │   └── ScrollProgress.tsx            # Top reading depth indicator
│   │   ├── common/
│   │   │   └── Icons.tsx                     # Custom GitHub & LinkedIn SVG icons
│   │   ├── hero/
│   │   │   └── HeroVisual.tsx                # Interactive canvas neural constellation
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                    # Glassmorphism floating pill navbar
│   │   │   ├── Footer.tsx                    # Editorial footer with live Mumbai time
│   │   │   └── SectionHeading.tsx            # Editorial section headers
│   │   ├── projects/
│   │   │   ├── CaseStudyModal.tsx            # In-depth architectural case studies
│   │   │   ├── ImageComparisonSlider.tsx     # Sentinel-2 Before/After slider
│   │   │   └── AiDetectorSimulator.tsx       # DeBERTa NLP feature simulation
│   │   └── sections/
│   │       ├── Hero.tsx                      # Signature first viewport
│   │       ├── About.tsx                     # Editorial story & "How I Build"
│   │       ├── Projects.tsx                  # Showcase with asymmetric layouts
│   │       ├── Skills.tsx                    # Categorized matrix & search
│   │       ├── Experience.tsx                # Mentoring & leadership timeline
│   │       ├── OpenSource.tsx                # Upstream PR cards (#793, #919, etc.)
│   │       ├── Education.tsx                 # VJTI & competitive exam ranks
│   │       ├── Achievements.tsx              # Stanford/Andrew Ng ML, 500+ DSA
│   │       └── Contact.tsx                   # Interactive message dispatch & mailto
│   ├── data/
│   │   ├── profile.ts                        # Personal data & "How I Build" principles
│   │   ├── projects.ts                       # All 5 projects with verified architectures
│   │   ├── skills.ts                         # Skills matrix with verified project links
│   │   ├── experience.ts                     # Mentorship, VJTI CP Club & COC roles
│   │   ├── contributions.ts                  # Merged & open PR specifications
│   │   ├── education.ts                      # VJTI B.Tech, MHT-CET Rank 301, JEE
│   │   └── achievements.ts                   # DeepLearning.AI ML Specialization
│   ├── lib/
│   │   └── utils.ts                          # Classnames & Tailwind merge utility
│   ├── App.tsx                               # Primary application orchestrator
│   ├── main.tsx                              # React DOM root entry
│   └── index.css                             # Tailwind CSS v4 styling & design tokens
```

---

## 🛠️ Commands to Run & Build

### Development Server
```bash
npm run dev
```
Starts local development server at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Compiles TypeScript via `tsc -b` and bundles with Vite into `dist/`.

### Preview Production Build
```bash
npm run preview
```
Serves the production distribution at `http://localhost:4173`.

---

## 📄 Verified Resume Asset
- **Asset path**: `public/resume/Shreyansh_Mojidra_Resume.pdf`
- Direct browser download URL: `/resume/Shreyansh_Mojidra_Resume.pdf`
