import React, { useRef } from "react"
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion"
import { GraduationCap, BookOpen, Award, CheckCircle2, Calendar, MapPin, Sparkles } from "lucide-react"
import { educationData } from "../../data/education"
import { SectionHeading } from "../layout/SectionHeading"

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Scroll-driven timeline progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 65%"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          number="// 05"
          tag="Academic Journey"
          title="Foundational rigor &"
          highlight="engineering training."
          description="A progressive academic trajectory spanning secondary fundamentals, top-percentile state competitive ranks, and computer systems engineering at VJTI."
        />

        {/* Scroll-Driven Journey Timeline */}
        <div ref={containerRef} className="relative mt-12 sm:mt-16 pl-6 sm:pl-12">
          {/* Static Track Line */}
          <div className="absolute left-[11px] sm:left-[23px] top-6 bottom-6 w-0.5 bg-white/10 rounded-full" />

          {/* Animated Connecting Progress Line */}
          <motion.div
            style={{
              scaleY: shouldReduceMotion ? 1 : scaleY,
              transformOrigin: "top"
            }}
            className="absolute left-[11px] sm:left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#a3e635] via-[#38bdf8] to-[#a3e635] shadow-[0_0_10px_#a3e635] rounded-full"
          />

          <div className="space-y-12 sm:space-y-16">
            {educationData.map((item, idx) => {
              const Icon = idx === 0 ? GraduationCap : idx === 1 ? Award : BookOpen

              return (
                <div key={item.id} className="relative group">
                  {/* Timeline Node Marker */}
                  <div className="absolute -left-[30px] sm:-left-[42px] top-5 z-10">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: idx * 0.15 }}
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#08090d] border-2 border-[#a3e635] shadow-[0_0_12px_rgba(163,230,53,0.5)] flex items-center justify-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#a3e635]" />
                    </motion.div>
                  </div>

                  {/* Horizontal Connector Branch (Desktop) */}
                  <div className="hidden sm:block absolute top-[33px] -left-[14px] w-6 h-px bg-white/10 group-hover:bg-[#a3e635]/40 transition-colors" />

                  {/* Progressive Timeline Milestone Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -20, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -2 }}
                    className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                      item.isPlaceholder
                        ? "border-amber-500/20 bg-amber-500/[0.02] hover:border-amber-500/40"
                        : "border-white/10 hover:border-[#a3e635]/30 hover:shadow-xl hover:shadow-[#a3e635]/5"
                    }`}
                  >
                    {/* Period and Score Badge Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-[#a3e635] bg-[#a3e635]/10 px-3 py-1 rounded-full border border-[#a3e635]/30">
                          {item.scoreBadge}
                        </span>
                        {item.isPlaceholder && (
                          <span className="font-mono text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Awaiting User Input
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 bg-[#121622] px-3 py-1 rounded-lg border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Institution Name & Icon */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {item.institution}
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-zinc-300 mt-1">
                          {item.degree}{" "}
                          {item.minorOrStream && (
                            <span className="text-[#38bdf8]">· {item.minorOrStream}</span>
                          )}
                        </p>
                      </div>

                      <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 text-[#a3e635]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Concise Narrative */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-5 font-normal">
                      {item.description}
                    </p>

                    {/* Score Breakdown if present */}
                    {item.scoreDetails && item.scoreDetails.length > 0 && (
                      <div className="pt-4 border-t border-white/5 space-y-1.5 mb-4">
                        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
                          Academic Credentials:
                        </span>
                        {item.scoreDetails.map((score, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635] flex-shrink-0" />
                            <span>{score}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Coursework Pills if present */}
                    {item.coursework && item.coursework.length > 0 && (
                      <div className="pt-3 border-t border-white/5">
                        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[#38bdf8]" />
                          Key Technical Coursework:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2.5 py-0.5 rounded-md bg-[#131722] border border-white/5 font-mono text-[11px] text-zinc-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer Location Strip */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-zinc-500">
                      <div className="flex items-center gap-1 text-zinc-400">
                        <MapPin className="w-3 h-3 text-zinc-500" />
                        <span>{item.location}</span>
                      </div>
                      <span className="text-zinc-500">Milestone // 0{idx + 1}</span>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
