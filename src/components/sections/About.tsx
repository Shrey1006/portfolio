import React, { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { GraduationCap, ShieldCheck, Terminal, Compass, CheckCircle2 } from "lucide-react"
import { profileData } from "../../data/profile"
import { SectionHeading } from "../layout/SectionHeading"

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Subtle differential parallax for portrait vs content
  const yPortrait = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : -25, shouldReduceMotion ? 0 : 25])
  const yContent = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : 20, shouldReduceMotion ? 0 : -20])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 01"
          tag="Editorial Profile"
          title="Curiosity grounded in"
          highlight="engineering fundamentals."
          description="Transforming conceptual logic into verified software through rigorous problem-solving, clean architecture, and continuous learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-12">
          {/* Left Column: Portrait & Focused Credential Highlights with Scroll Parallax */}
          <motion.div
            style={{ y: yPortrait }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Editorial Portrait Container with reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-3xl overflow-hidden glass-panel border border-white/10 p-2"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#121622]">
                <img
                  src="/images/shreyansh-mojidra.jpg"
                  alt="Shreyansh Mojidra — Computer Engineering Student at VJTI Mumbai"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />

                {/* Subtle tech crosshairs & corner brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#a3e635]/80 pointer-events-none" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#a3e635]/80 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#a3e635]/80 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#a3e635]/80 pointer-events-none" />

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl px-3.5 py-2.5 flex items-center justify-between border border-white/15">
                  <div className="flex flex-col">
                    <span className="font-display text-xs font-bold text-white">Shreyansh Mojidra</span>
                    <span className="font-mono text-[10px] text-zinc-400">VJTI Mumbai · 2024–2028</span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#a3e635] bg-[#a3e635]/10 px-2 py-0.5 rounded-md border border-[#a3e635]/30">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Focused Highlights - Sequenced on Scroll */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-panel rounded-2xl p-4 border border-white/5 flex flex-col gap-1"
              >
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <GraduationCap className="w-4 h-4 text-[#a3e635]" />
                  <span>Institution</span>
                </div>
                <span className="text-white font-semibold font-display text-sm">VJTI Mumbai</span>
                <span className="text-[11px] text-zinc-500">B.Tech Comp Eng · 7.81 CGPA</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-panel rounded-2xl p-4 border border-white/5 flex flex-col gap-1"
              >
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
                  <span>Academic Minor</span>
                </div>
                <span className="text-white font-semibold font-display text-sm">Cybersecurity</span>
                <span className="text-[11px] text-zinc-500">Systems & Networks</span>
              </motion.div>

              <motion.a
                href="#coding-stats"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.01 }}
                className="col-span-2 glass-panel rounded-2xl p-3.5 border border-white/5 hover:border-[#a3e635]/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-[#ec4899]" />
                  <span className="text-white font-semibold font-display text-sm group-hover:text-[#a3e635] transition-colors">
                    550+ Problems Solved
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] shadow-[0_0_4px_#a3e635] animate-pulse" />
                  <span className="text-[11px] text-zinc-400 font-mono">Codolio Live Telemetry ↗</span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Progressive Text Reveal as User Scrolls */}
          <motion.div
            style={{ y: yContent }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              {/* Highlight Quote */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl sm:text-2xl text-white font-display font-medium leading-snug pl-4 border-l-2 border-[#a3e635]"
              >
                "I enjoy turning ideas into resilient working software while continuously sharpening my engineering fundamentals."
              </motion.p>

              {/* Progressive Paragraph 1 */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                I'm <span className="text-white font-medium">Shreyansh Mojidra</span>, a Computer Engineering student at Veermata Jijabai Technological Institute (VJTI), Mumbai. I build practical software, full-stack web platforms, and intelligent machine learning systems designed to solve real-world problems with high reliability.
              </motion.p>

              {/* Progressive Paragraph 2 */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                I prioritize clean architecture, low-latency execution, and resilient design patterns over superficial shortcuts. Beyond engineering individual systems, I enjoy sharing knowledge as an organizer in the <strong className="text-white font-medium">VJTI CP Club</strong>, conducting technical workshops, and mentoring student cohorts through agile sprints.
              </motion.p>
            </div>

            {/* "How I Build" Section - Progressive Staggered Card Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="pt-6 border-t border-white/10"
            >
              <div className="flex items-center gap-2 mb-5">
                <Compass className="w-4 h-4 text-[#a3e635]" />
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                  Engineering Principles
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {profileData.howIBuild.map((item, idx) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -2 }}
                    className="glass-panel rounded-2xl p-4 border border-white/5 hover:border-[#a3e635]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs font-bold text-[#a3e635] bg-[#a3e635]/10 px-2 py-0.5 rounded">
                        {item.step}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-[#a3e635] transition-colors" />
                    </div>
                    <h4 className="font-display font-semibold text-white text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
