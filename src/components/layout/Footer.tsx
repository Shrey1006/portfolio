import { useEffect, useState } from "react"
import { ArrowUp, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon, CodolioIcon } from "../common/Icons"
import { profileData } from "../../data/profile"

export const Footer = () => {
  const [mumbaiTime, setMumbaiTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
      })
      setMumbaiTime(timeStr)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#06070a] relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Monogram & Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#121622] border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-white">
            <span className="text-[#a3e635]">S</span>M
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold text-white">
              Shreyansh Mojidra
            </span>
            <span className="font-mono text-[11px] text-zinc-500">
              Computer Engineering · VJTI Mumbai
            </span>
          </div>
        </div>

        {/* Live Mumbai Time */}
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-[#0d1017] px-3.5 py-1.5 rounded-full border border-white/5">
          <span className="w-2 h-2 rounded-full bg-[#a3e635] shadow-[0_0_6px_#a3e635] animate-pulse" />
          <span>MUMBAI (IST):</span>
          <span className="text-white font-semibold">{mumbaiTime || "LIVE"}</span>
        </div>

        {/* Social Links & Back-to-Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#121622] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#a3e635] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#121622] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#a3e635] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="w-8 h-8 rounded-full bg-[#121622] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#a3e635] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={profileData.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#121622] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#ffa116] hover:border-[#ffa116] transition-colors"
              aria-label="LeetCode"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#121622] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#1f8acb] hover:border-[#1f8acb] transition-colors"
              aria-label="Codeforces"
            >
              <CodeforcesIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.codolio}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#121622] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#f57c06] hover:border-[#f57c06] transition-colors"
              aria-label="Codolio"
            >
              <CodolioIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141824] border border-white/10 font-mono text-xs text-zinc-300 hover:text-white hover:border-[#a3e635]/60 transition-colors"
            aria-label="Scroll back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#a3e635]" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2">
        <span>© {new Date().getFullYear()} Shreyansh Mojidra. All rights reserved.</span>
        <span>Crafted with React, TypeScript & Tailwind CSS.</span>
      </div>
    </footer>
  )
}
