import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { CustomCursor } from "./components/animation/CustomCursor"
import { ScrollProgress } from "./components/animation/ScrollProgress"
import { MultilingualIntro } from "./components/animation/MultilingualIntro"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills"
import { Experience } from "./components/sections/Experience"
import { LiveCodingStats } from "./components/sections/LiveCodingStats"
import { Education } from "./components/sections/Education"
import { Achievements } from "./components/sections/Achievements"
import { Contact } from "./components/sections/Contact"

export function App() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // Subtle atmospheric lighting drifting with continuous scroll
  const backgroundY1 = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -150])
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 180])

  return (
    <div className="relative min-h-screen bg-[#08090d] text-[#f4f4f5] overflow-x-hidden selection:bg-[#a3e635] selection:text-black">
      {/* Short, Cinematic Multilingual Greeting Intro */}
      <MultilingualIntro />

      {/* Interactive Cursor for Desktop */}
      <CustomCursor />

      {/* Top Scroll Depth Progress Line */}
      <ScrollProgress />

      {/* Atmospheric Ambient Lighting Layers */}
      <motion.div
        aria-hidden="true"
        style={{ y: backgroundY1 }}
        className="fixed top-1/4 -left-48 w-[500px] h-[500px] bg-[#a3e635]/[0.025] rounded-full blur-[160px] pointer-events-none -z-10"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: backgroundY2 }}
        className="fixed top-2/3 -right-48 w-[600px] h-[600px] bg-[#38bdf8]/[0.02] rounded-full blur-[180px] pointer-events-none -z-10"
      />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <LiveCodingStats />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  )
}

export default App
