import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, CheckCircle2, Trophy } from "lucide-react"
import { achievementsData } from "../../data/achievements"
import { SectionHeading } from "../layout/SectionHeading"

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 07"
          tag="Credentials & Rigor"
          title="Verified milestones &"
          highlight="certifications."
          description="Documented credentials from Stanford / DeepLearning.AI, algorithmic contest ratings, and academic entrance rankings."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#a3e635]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Badge Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] font-semibold text-[#a3e635] bg-[#a3e635]/10 px-2.5 py-0.5 rounded-full border border-[#a3e635]/30">
                    {item.badge}
                  </span>
                  <Trophy className="w-4 h-4 text-zinc-500 group-hover:text-[#a3e635] transition-colors" />
                </div>

                <h3 className="font-display text-lg font-bold text-white tracking-tight leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="font-mono text-xs text-zinc-400 mb-4">
                  {item.issuer}
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Sub metrics if present */}
                {item.metrics && (
                  <div className="space-y-2 py-3 border-t border-white/5 mb-4">
                    {item.metrics.map((m) => (
                      <div key={m.label} className="flex items-center justify-between font-mono text-xs">
                        <span className="text-zinc-500">{m.label}</span>
                        <span className="text-white font-semibold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Link if present */}
              {item.link ? (
                <div className="pt-4 border-t border-white/5">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#a3e635] hover:underline"
                  >
                    <span>{item.id === "dsa-milestone" ? "View Live Codolio Profile" : "View Credential"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635]" />
                  <span>Verified Public Standing</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
