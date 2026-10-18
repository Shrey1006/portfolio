import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import { skillsData, skillCategories } from "../../data/skills"
import { SectionHeading } from "../layout/SectionHeading"

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === "all" || skill.category === activeCategory
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (skill.projectRef && skill.projectRef.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 03"
          tag="Technical Competence"
          title="Tools & technologies"
          highlight="proven in production."
          description="A transparent inventory of programming languages, machine learning frameworks, and systems engineering libraries utilized across real-world codebases."
        />

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#12151e] border border-white/10 w-full md:w-auto">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
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
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or framework..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#10141e] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#a3e635]/50 font-mono"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={skill.name}
                className="glass-panel rounded-2xl p-4 border border-white/5 hover:border-[#a3e635]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-semibold text-white text-base group-hover:text-[#a3e635] transition-colors">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] shadow-[0_0_6px_#a3e635]" title="Core Competency" />
                    )}
                  </div>

                  {skill.description && (
                    <p className="text-zinc-400 text-xs leading-relaxed mb-3 font-sans">
                      {skill.description}
                    </p>
                  )}
                </div>

                {/* Project association tag */}
                {skill.projectRef ? (
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
                    <span className="text-zinc-500">APPLIED IN:</span>
                    <span className="text-[#a3e635] bg-[#a3e635]/10 px-2 py-0.5 rounded-md border border-[#a3e635]/20 font-medium">
                      {skill.projectRef}
                    </span>
                  </div>
                ) : (
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
                    <span className="text-zinc-500">CATEGORY:</span>
                    <span className="text-zinc-400 uppercase">{skill.category}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl border border-white/10 font-mono text-zinc-500 text-xs">
            No matching skills found for "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  )
}
