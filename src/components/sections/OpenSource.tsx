import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GitPullRequest, GitMerge, ExternalLink, Clock } from "lucide-react"
import { GithubIcon } from "../common/Icons"
import { contributionsData } from "../../data/contributions"
import { SectionHeading } from "../layout/SectionHeading"

export const OpenSource: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "merged" | "open">("all")

  const filteredPRs = contributionsData.filter((pr) => {
    if (filter === "all") return true
    return pr.status === filter
  })

  return (
    <section id="opensource" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 05"
          tag="Community & Codebases"
          title="Open source contributions &"
          highlight="upstream pull requests."
          description="Auditing runtime bottlenecks, patching edge cases, and submitting verified pull requests to developer ecosystems."
        />

        {/* Filter Bar & Profile CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Status Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#12151e] border border-white/10 font-mono text-xs">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filter === "all" ? "bg-[#a3e635] text-black font-semibold" : "text-zinc-400 hover:text-white"
              }`}
            >
              All Pull Requests ({contributionsData.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("merged")}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                filter === "merged" ? "bg-purple-500 text-white font-semibold" : "text-zinc-400 hover:text-white"
              }`}
            >
              <GitMerge className="w-3.5 h-3.5" />
              <span>Merged (3)</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter("open")}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                filter === "open" ? "bg-emerald-500 text-black font-semibold" : "text-zinc-400 hover:text-white"
              }`}
            >
              <GitPullRequest className="w-3.5 h-3.5" />
              <span>In Review / Open (3)</span>
            </button>
          </div>

          <a
            href="https://github.com/Shrey1006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-300 hover:text-[#a3e635] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>github.com/Shrey1006</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>

        {/* PR Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {filteredPRs.map((pr) => (
              <motion.div
                layout
                key={pr.prNumber}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass-panel rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Repo & Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-zinc-400 font-medium truncate">
                      {pr.repository}
                    </span>

                    {pr.status === "merged" ? (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-purple-300 bg-purple-500/15 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                        <GitMerge className="w-3 h-3 text-purple-400" />
                        PR #{pr.prNumber} · Merged
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        <Clock className="w-3 h-3 text-emerald-400" />
                        PR #{pr.prNumber} · Open
                      </span>
                    )}
                  </div>

                  {/* PR Title */}
                  <h4 className="font-display font-semibold text-white text-base leading-snug mb-2 group-hover:text-[#a3e635] transition-colors">
                    {pr.title}
                  </h4>

                  {/* PR Explanation */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 font-sans">
                    {pr.description}
                  </p>
                </div>

                {/* Footer: Category & Diff Metrics */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                  <span className="text-[10px] uppercase text-zinc-500 bg-[#121622] px-2 py-0.5 rounded border border-white/5">
                    {pr.category}
                  </span>

                  <div className="flex items-center gap-3">
                    {pr.linesAdded && (
                      <span className="text-emerald-400 text-[11px]">+{pr.linesAdded}</span>
                    )}
                    {pr.linesRemoved && (
                      <span className="text-rose-400 text-[11px]">-{pr.linesRemoved}</span>
                    )}
                    <a
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      aria-label={`View PR #${pr.prNumber}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
