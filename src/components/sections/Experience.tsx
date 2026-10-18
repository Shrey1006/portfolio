import React from "react"
import { motion } from "framer-motion"
import { Calendar, CheckCircle2 } from "lucide-react"
import { experienceData } from "../../data/experience"
import { SectionHeading } from "../layout/SectionHeading"

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 04"
          tag="Leadership & Mentoring"
          title="Sharing knowledge &"
          highlight="building engineering culture."
          description="Fostering algorithmic problem solving, leading sprint workshops, and guiding collegiate engineering teams through real-world software simulations."
        />

        <div className="relative border-l border-white/10 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#08090d] border-2 border-[#a3e635] shadow-[0_0_8px_#a3e635] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#a3e635]/30 transition-all duration-300">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
