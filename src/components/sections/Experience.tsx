import React, { useRef } from "react"
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion"
import { Calendar, CheckCircle2 } from "lucide-react"
import { experienceData } from "../../data/experience"
import { SectionHeading } from "../layout/SectionHeading"

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Scroll progress controlling the connecting timeline line
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
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 04"
          tag="Leadership & Mentoring"
          title="Sharing knowledge &"
          highlight="building engineering culture."
          description="Fostering algorithmic problem solving, leading sprint workshops, and guiding collegiate engineering teams through real-world software simulations."
        />

        {/* Scroll-Driven Connecting Timeline */}
        <div ref={containerRef} className="relative mt-12 sm:mt-16 pl-6 sm:pl-12">
          {/* Static Background Rail */}
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
            {experienceData.map((item, idx) => (
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

                {/* Progressive Milestone Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -2 }}
                  className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#a3e635]/30 hover:shadow-xl hover:shadow-[#a3e635]/5 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="font-mono text-xs font-semibold text-[#a3e635] bg-[#a3e635]/10 px-2.5 py-0.5 rounded-full border border-[#a3e635]/30 inline-block mb-1.5">
                        {item.type}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.role}{" "}
                        <span className="text-zinc-400 font-normal">· {item.organization}</span>
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs font-mono text-zinc-500 mt-0.5">{item.subtitle}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 bg-[#121622] px-3 py-1.5 rounded-xl border border-white/5 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-[#a3e635]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-[#a3e635] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#131722] border border-white/5 font-mono text-[11px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
