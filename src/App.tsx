import { CustomCursor } from "./components/animation/CustomCursor"
import { ScrollProgress } from "./components/animation/ScrollProgress"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Skills } from "./components/sections/Skills"
import { Experience } from "./components/sections/Experience"
import { OpenSource } from "./components/sections/OpenSource"
import { Education } from "./components/sections/Education"
import { LiveCodingStats } from "./components/sections/LiveCodingStats"
import { Achievements } from "./components/sections/Achievements"
import { Contact } from "./components/sections/Contact"

export function App() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-[#f4f4f5] overflow-x-hidden selection:bg-[#a3e635] selection:text-black">
      {/* Interactive Cursor for Desktop */}
      <CustomCursor />

      {/* Top Scroll Depth Progress Line */}
      <ScrollProgress />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <OpenSource />
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
