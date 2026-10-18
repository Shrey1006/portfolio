import React from "react"
import { motion } from "framer-motion"
import { BookOpen, Award, CheckCircle } from "lucide-react"
import { educationData } from "../../data/education"
import { SectionHeading } from "../layout/SectionHeading"

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 06"
          tag="Academic Foundation"
          title="Rigorous training at"
          highlight="premier institutions."
          description="Combining high-percentile state competitive ranks with computer systems fundamentals, cybersecurity, and algorithmic engineering at VJTI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-[#a3e635]/30 transition-all duration-300"
            >
              <div>
                {/* Score Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-semibold text-[#a3e635] bg-[#a3e635]/10 px-3 py-1 rounded-full border border-[#a3e635]/30">
                    {item.scoreBadge}
                  </span>
                  <span className="font-mono text-xs text-zinc-400 bg-[#121622] px-3 py-1 rounded-lg border border-white/5">
                    {item.period}
                  </span>
                </div>

                {/* Institution & Degree */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                  {item.institution}
                </h3>
                <p className="font-mono text-xs text-zinc-400 mb-4">
                  {item.degree} {item.minorOrStream && <span className="text-[#38bdf8]">· {item.minorOrStream}</span>}
                </p>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Coursework if present */}
                {item.coursework && (
                  <div className="mb-6">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#a3e635]" />
                      Core Engineering Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-md bg-[#131722] border border-white/5 font-mono text-[11px] text-zinc-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specific Score Breakdown if present */}
                {item.scoreDetails && (
                  <div className="space-y-1.5 mb-6">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
                      Verified Percentiles:
                    </span>
                    {item.scoreDetails.map((score, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <CheckCircle className="w-3 h-3 text-[#a3e635]" />
                        <span>{score}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                <span>{item.location}</span>
                <span className="text-zinc-400">Accredited Academic Record</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
