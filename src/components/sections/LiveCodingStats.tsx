import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, TrendingUp, Zap, Trophy, Code2, BarChart3 } from "lucide-react"
import { LeetCodeIcon, CodeforcesIcon, CodeChefIcon } from "../common/Icons"
import { useLiveCodingStats, type PlatformStats } from "../../hooks/useLiveCodingStats"
import { SectionHeading } from "../layout/SectionHeading"

const PLATFORM_CONFIG: Record<string, {
  label: string
  color: string
  bgColor: string
  borderColor: string
  icon: React.FC<{ className?: string }>
  ratingLabel: string
}> = {
  leetcode: {
    label: "LeetCode",
    color: "text-[#ffa116]",
    bgColor: "bg-[#ffa116]/10",
    borderColor: "border-[#ffa116]/30",
    icon: LeetCodeIcon,
    ratingLabel: "Max Rating",
  },
  codeforces: {
    label: "Codeforces",
    color: "text-[#1f8acb]",
    bgColor: "bg-[#1f8acb]/10",
    borderColor: "border-[#1f8acb]/30",
    icon: CodeforcesIcon,
    ratingLabel: "Max Rating",
  },
  codechef: {
    label: "CodeChef",
    color: "text-[#5b4638]",
    bgColor: "bg-[#d4a373]/10",
    borderColor: "border-[#d4a373]/30",
    icon: CodeChefIcon,
    ratingLabel: "Max Rating",
  },
}

function PlatformCard({ platform, index }: { platform: PlatformStats; index: number }) {
  const config = PLATFORM_CONFIG[platform.platform]
  if (!config) return null

  const Icon = config.icon
  const displayRating = platform.maxRating ?? platform.currentRating
  const rankLabel =
    platform.rank
      ? platform.rank.charAt(0).toUpperCase() + platform.rank.slice(1)
      : platform.stars
        ? `${platform.stars} Star${platform.stars > 1 ? "s" : ""}`
        : null

  return (
    <motion.a
      href={platform.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`glass-panel rounded-2xl p-5 sm:p-6 border border-white/10 hover:${config.borderColor} transition-all duration-300 flex flex-col justify-between group cursor-pointer`}
    >
      {/* Header: Icon + Platform Name + Link */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg ${config.bgColor} flex items-center justify-center`}>
            <Icon className={`w-4 h-4 ${config.color}`} />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-display text-sm font-bold">{config.label}</span>
            <span className="font-mono text-[10px] text-zinc-500">@{platform.handle}</span>
          </div>
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
      </div>

      {/* Rating */}
      {displayRating && (
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {displayRating}
            </span>
            {rankLabel && (
              <span className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md ${config.bgColor} ${config.color} ${config.borderColor} border`}>
                {rankLabel}
              </span>
            )}
          </div>
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
            {config.ratingLabel}
          </span>
        </div>
      )}

      {/* Problems Solved Breakdown */}
      {platform.totalSolved !== null && (
        <div className="pt-3 border-t border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Problems Solved</span>
            <span className="font-display text-sm font-bold text-white">{platform.totalSolved}</span>
          </div>

          {/* Difficulty Breakdown Bar */}
          {platform.easySolved !== null && platform.mediumSolved !== null && platform.hardSolved !== null && (
            <div className="space-y-1.5">
              <div className="flex h-1.5 rounded-full overflow-hidden bg-white/5">
                {platform.easySolved > 0 && (
                  <div
                    className="bg-emerald-500 rounded-l-full"
                    style={{ width: `${(platform.easySolved / platform.totalSolved!) * 100}%` }}
                  />
                )}
                {platform.mediumSolved > 0 && (
                  <div
                    className="bg-amber-500"
                    style={{ width: `${(platform.mediumSolved / platform.totalSolved!) * 100}%` }}
                  />
                )}
                {platform.hardSolved > 0 && (
                  <div
                    className="bg-red-500 rounded-r-full"
                    style={{ width: `${(platform.hardSolved / platform.totalSolved!) * 100}%` }}
                  />
                )}
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px]">
                <span className="text-emerald-400">Easy {platform.easySolved}</span>
                <span className="text-amber-400">Med {platform.mediumSolved}</span>
                <span className="text-red-400">Hard {platform.hardSolved}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </motion.a>
  )
}

export const LiveCodingStats: React.FC = () => {
  const stats = useLiveCodingStats()

  const mainPlatforms = stats.platforms.filter(
    (p) => p.platform === "leetcode" || p.platform === "codeforces" || p.platform === "codechef"
  )

  return (
    <section id="coding-stats" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 06"
          tag="Competitive Programming"
          title="Live coding stats &"
          highlight="platform ratings."
          description="Real-time competitive programming progress fetched live from Codolio. Ratings, problems solved, and platform standings updated automatically."
        />

        {/* Top Summary Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8"
        >
          {/* Total Solved Badge */}
          <div className="flex items-center gap-3 glass-panel rounded-xl px-4 py-2.5 border border-white/10">
            <div className="w-9 h-9 rounded-lg bg-[#a3e635]/10 flex items-center justify-center">
              <Code2 className="w-4.5 h-4.5 text-[#a3e635]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-white">
                {stats.loading ? "—" : `${stats.totalSolved}+`}
              </span>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Total Solved</span>
            </div>
          </div>

          {/* Live Indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px]">
            {stats.loading ? (
              <span className="text-zinc-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Fetching live data…
              </span>
            ) : stats.error ? (
              <span className="text-zinc-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-600" />
                Showing cached stats
              </span>
            ) : (
              <a
                href="https://codolio.com/profile/Shreythecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#a3e635] hover:underline"
              >
                <span className="w-2 h-2 rounded-full bg-[#a3e635] shadow-[0_0_6px_#a3e635] animate-pulse" />
                LIVE VIA CODOLIO
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </motion.div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {mainPlatforms.map((platform, idx) => (
            <PlatformCard key={platform.platform} platform={platform} index={idx} />
          ))}
        </div>

        {/* Bottom Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          <div className="glass-panel rounded-xl p-4 border border-white/5 flex items-center gap-3">
            <TrendingUp className="w-4 h-4 text-[#ffa116]" />
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold text-white">
                {stats.platforms.find((p) => p.platform === "leetcode")?.maxRating ?? "—"}
              </span>
              <span className="font-mono text-[10px] text-zinc-500">LC Max Rating</span>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4 border border-white/5 flex items-center gap-3">
            <BarChart3 className="w-4 h-4 text-[#1f8acb]" />
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold text-white">
                {stats.platforms.find((p) => p.platform === "codeforces")?.maxRating ?? "—"}
              </span>
              <span className="font-mono text-[10px] text-zinc-500">CF Max Rating</span>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4 border border-white/5 flex items-center gap-3">
            <Trophy className="w-4 h-4 text-[#d4a373]" />
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold text-white">
                {(() => {
                  const cc = stats.platforms.find((p) => p.platform === "codechef")
                  return cc?.stars ? `${cc.stars} Star` : "—"
                })()}
              </span>
              <span className="font-mono text-[10px] text-zinc-500">CC Standing</span>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4 border border-white/5 flex items-center gap-3">
            <Zap className="w-4 h-4 text-[#a3e635]" />
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold text-white">4</span>
              <span className="font-mono text-[10px] text-zinc-500">Platforms Active</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
