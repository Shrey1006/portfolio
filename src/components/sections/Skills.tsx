import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Search } from "lucide-react"
import { skillsData, skillCategories } from "../../data/skills"
import { SectionHeading } from "../layout/SectionHeading"

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Subtle ambient parallax for the filter control bar
  const yControls = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : 15, shouldReduceMotion ? 0 : -15])

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (skill.projectRef && skill.projectRef.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 03"
          tag="Technical Competence"
          title="Tools & technologies"
          highlight="proven in production."
          description="A transparent inventory of programming languages, machine learning frameworks, and systems engineering libraries utilized across real-world codebases."
        />

        {/* Filter Controls Bar - Animated on scroll */}
        <motion.div
          style={{ y: yControls }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 mt-10"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#12151e] border border-white/10 w-full md:w-auto">
            {skillCategories.map((cat) => (
              <motion.button
                key={cat.id}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#a3e635] text-black font-semibold shadow-md shadow-[#a3e635]/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    activeCategory === cat.id ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400"
                  }`}
                >
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-60">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#10141e] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#a3e635]/50 font-mono"
            />
          </div>
        </motion.div>

        {/* Skills Cards Grid - Progressive Staggered Scroll Reveal */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.4,
                  delay: (idx % 6) * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -3 }}
                key={skill.name}
                className="glass-panel rounded-2xl p-4 border border-white/5 hover:border-[#a3e635]/30 hover:shadow-lg hover:shadow-[#a3e635]/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-display font-semibold text-white text-sm group-hover:text-[#a3e635] transition-colors">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] shadow-[0_0_6px_#a3e635]" title="Core Competency" />
                    )}
                  </div>

                  {skill.description && (
                    <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  )}
                </div>

                {skill.projectRef && (
                  <div className="pt-2 mt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
                    <span className="text-zinc-500">APPLIED IN:</span>
                    <span className="text-[#a3e635] font-medium">
                      {skill.projectRef}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-10 glass-panel rounded-2xl border border-white/10 font-mono text-zinc-500 text-xs">
            No matching skills found for "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  )
}
