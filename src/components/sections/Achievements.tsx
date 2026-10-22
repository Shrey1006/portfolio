import React, { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Trophy, ExternalLink, Users, Sparkles, CheckCircle2 } from "lucide-react"
import { achievementsData } from "../../data/achievements"
import { SectionHeading } from "../layout/SectionHeading"

export const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Subtle ambient parallax for the grid as visitor traverses the section
  const yGrid = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : 20, shouldReduceMotion ? 0 : -20])

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 06"
          tag="Milestones & Honors"
          title="Distinctions,"
          highlight="mentorship & credentials."
          description="A curated record of hackathon finalist recognition, philanthropic technical mentorship, and verified machine learning credentials."
        />

        <motion.div
          style={{ y: yGrid }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {achievementsData.map((item, idx) => {
            const isFinalist = item.category === "Hackathon"
            const isMentorship = item.category === "Mentorship"

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -3 }}
                className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between group ${
                  item.featured
                    ? isFinalist
                      ? "border-[#a3e635]/25 bg-gradient-to-b from-[#a3e635]/[0.03] to-transparent hover:border-[#a3e635]/50 hover:shadow-xl hover:shadow-[#a3e635]/5"
                      : "border-sky-500/25 bg-gradient-to-b from-sky-500/[0.03] to-transparent hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/5"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Top Bar: Badge & Category Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="font-mono text-xs font-semibold px-3 py-1 rounded-full border flex items-center gap-1.5"
                      style={{
                        color: item.badgeColor || "#a3e635",
                        borderColor: `${item.badgeColor || "#a3e635"}40`,
                        backgroundColor: `${item.badgeColor || "#a3e635"}15`
                      }}
                    >
                      {isFinalist && <Trophy className="w-3.5 h-3.5" />}
                      {isMentorship && <Users className="w-3.5 h-3.5" />}
                      {!isFinalist && !isMentorship && <Sparkles className="w-3.5 h-3.5" />}
                      <span>{item.badge}</span>
                    </span>

                    <span className="font-mono text-xs text-zinc-500 bg-[#121622] px-2.5 py-0.5 rounded-md border border-white/5">
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-1 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 mb-4">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Bullet Highlights if available */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-2 py-3 border-t border-white/5 mb-6">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635] flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Action / Verification Strip */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                    {item.category}
                  </span>

                  {item.link ? (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#a3e635] hover:text-[#bef264] hover:underline"
                    >
                      <span>{item.id === "dsa-competitive-programming" ? "Live Telemetry" : "Verify Credential"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  ) : (
                    <span className="font-mono text-[11px] text-zinc-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#a3e635]" />
                      Verified
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
