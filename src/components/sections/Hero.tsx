import React, { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { HeroPortrait } from "../hero/HeroPortrait"
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon, CodolioIcon } from "../common/Icons"
import { profileData } from "../../data/profile"

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Natural upward parallax & smooth fade-out as visitor scrolls into content
  const yText = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -35])
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -20])
  const opacityHero = useTransform(scrollYProgress, [0, 0.75], [1, shouldReduceMotion ? 1 : 0.05])
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 0.97])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen bg-black text-white flex flex-col justify-between pt-20 sm:pt-24 pb-6 px-4 sm:px-8 lg:px-12 overflow-hidden select-none"
    >
      {/* Ambient background glow responding subtly to scroll */}
      <motion.div
        aria-hidden="true"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.8], [0.6, 0])
        }}
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#a3e635]/10 via-[#38bdf8]/5 to-transparent blur-[140px] -z-10"
      />

      {/* Top Meta Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-7xl w-full mx-auto flex items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-zinc-500 uppercase pt-2"
      >
        <span>ENGINEER. BUILDER.</span>
        <span>BASED IN INDIA</span>
      </motion.div>

      {/* Main Center Stage: Dotted Portrait & Layered Typography */}
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center my-auto py-2 relative">
        {/* The Dotted Portrait with subtle scroll-linked vertical movement */}
        <motion.div
          style={{ y: yPortrait }}
          className="relative w-full flex justify-center -mb-16 sm:-mb-24 md:-mb-28 z-0"
        >
          <HeroPortrait />
        </motion.div>

        {/* Overlapping Content Container with Upward Parallax & Scroll Fade */}
        <motion.div
          style={{ y: yText, opacity: opacityHero, scale: scaleHero }}
          className="relative z-20 flex flex-col items-center text-center px-4"
        >
          {/* Small Tagline right over lower portrait collar */}
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[10px] sm:text-xs tracking-[0.28em] text-zinc-400 uppercase mb-2 sm:mb-3 drop-shadow-md"
          >
            A HUMAN PERSPECTIVE ON TECHNOLOGY
          </motion.span>

          {/* Monumental Italic Serif Display Name */}
          <motion.h1
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-display italic text-6xl sm:text-8xl md:text-9xl lg:text-[124px] font-normal tracking-tight text-white leading-[0.92] mb-4 sm:mb-5 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
          >
            Shreyansh Mojidra
          </motion.h1>

          {/* Subtitle Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-sans font-normal leading-relaxed mb-6 sm:mb-7"
          >
            I build products, explore intelligent systems, and craft resilient full-stack software.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <motion.a
              href="#projects"
              data-cursor-hover
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#14151b] border border-white/20 text-white font-sans text-xs sm:text-sm hover:border-white hover:bg-[#1d1f27] transition-all duration-200 shadow-xl group"
            >
              <span>Explore my work</span>
              <ArrowDown className="w-3.5 h-3.5 text-zinc-300 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              data-cursor-hover
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-medium text-zinc-300 hover:text-white underline underline-offset-8 decoration-zinc-600 hover:decoration-white transition-all group"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Quick Platform Links Strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="flex flex-wrap items-center justify-center gap-2.5 mt-5 sm:mt-6 pt-4 border-t border-white/10"
          >
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white font-mono text-[11px] transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#38bdf8]/40 text-zinc-400 hover:text-[#38bdf8] font-mono text-[11px] transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#ffa116]/40 text-zinc-400 hover:text-[#ffa116] font-mono text-[11px] transition-all"
            >
              <LeetCodeIcon className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </a>
            <a
              href={profileData.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#1f8acb]/40 text-zinc-400 hover:text-[#1f8acb] font-mono text-[11px] transition-all"
            >
              <CodeforcesIcon className="w-3.5 h-3.5" />
              <span>Codeforces</span>
            </a>
            <a
              href={profileData.codolio}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f57c06]/10 border border-[#f57c06]/30 text-[#f57c06] hover:bg-[#f57c06]/20 font-mono text-[11px] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f57c06] shadow-[0_0_6px_#f57c06] animate-pulse" />
              <CodolioIcon className="w-3.5 h-3.5" />
              <span>Codolio Live</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Metadata & Scroll Indicator - Connected to opacityHero to fade in sync */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity: opacityHero }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="max-w-7xl w-full mx-auto flex items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-zinc-500 uppercase pt-4 pb-2"
      >
        <span className="text-zinc-600 animate-bounce">↓</span>
        <span>BUILDING & SHIPPING SINCE 2024 · VJTI MUMBAI</span>
        <span className="text-zinc-600 animate-bounce">↓</span>
      </motion.div>
    </section>
  )
}
