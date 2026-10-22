import React, { useState, useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { ExternalLink, BookOpen, Sparkles } from "lucide-react"
import { GithubIcon } from "../common/Icons"
import { projectsData } from "../../data/projects"
import type { Project } from "../../data/projects"
import { SectionHeading } from "../layout/SectionHeading"
import { ImageComparisonSlider } from "../projects/ImageComparisonSlider"
import { AiDetectorSimulator } from "../projects/AiDetectorSimulator"
import { CaseStudyModal } from "../projects/CaseStudyModal"

// Scroll-linked project wrapper creating differential depth between text and preview
function ProjectScrollWrapper({
  children,
  className = ""
}: {
  children: (props: {
    yText: any
    yPreview: any
    imageScale: any
  }) => React.ReactNode
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Differential parallax between text and preview columns
  const yText = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : 20, shouldReduceMotion ? 0 : -20])
  const yPreview = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : -16, shouldReduceMotion ? 0 : 16])
  const cardScale = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [shouldReduceMotion ? 1 : 0.97, 1, 1, shouldReduceMotion ? 1 : 0.98])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [shouldReduceMotion ? 1 : 0.6, 1, 1, shouldReduceMotion ? 1 : 0.7])
  const imageScale = useTransform(scrollYProgress, [0.05, 0.45], [shouldReduceMotion ? 1 : 1.04, 1])

  return (
    <div ref={containerRef} className={className}>
      <motion.div style={{ scale: cardScale, opacity: cardOpacity }}>
        {children({ yText, yPreview, imageScale })}
      </motion.div>
    </div>
  )
}

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 02"
          tag="Engineering Showcase"
          title="Engineered systems,"
          highlight="built end-to-end."
          description="A curated catalog of full-stack production platforms, deep learning pipelines, and accessible digital products."
        />

        {/* Project 01: SkillExchange */}
        {(() => {
          const project = projectsData[0]
          return (
            <ProjectScrollWrapper className="mb-24 lg:mb-32">
              {({ yText, yPreview, imageScale }) => (
                <div
                  data-cursor-project="SKILLEXCHANGE"
                  className="glass-panel rounded-3xl border border-white/10 overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:border-sky-500/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Project Info Column */}
                    <motion.div style={{ y: yText }} className="lg:col-span-5 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/30">
                          PROJECT {project.number}
                        </span>
                        <span className="font-mono text-xs text-zinc-400">{project.category}</span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                        {project.title}
                      </h3>

                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Verified Metrics */}
                      <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 mb-6 font-mono text-xs">
                        <div>
                          <span className="text-zinc-500 block text-[10px]">LEARNER COST</span>
                          <span className="text-white font-bold text-sm text-sky-400">-25% Saved</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">LEDGER MODEL</span>
                          <span className="text-white font-bold text-sm">Atomic $inc</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">AUTH ACCESS</span>
                          <span className="text-white font-bold text-sm">JWT Guards</span>
                        </div>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-[#161c28] border border-white/5 font-mono text-[11px] text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-3">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-400 text-black font-semibold text-xs font-mono hover:bg-sky-300 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live App</span>
                          </motion.a>
                        )}

                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#141824] border border-white/15 text-zinc-200 hover:text-white text-xs font-mono transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Codebase</span>
                          </motion.a>
                        )}

                        <motion.button
                          type="button"
                          onClick={() => setSelectedCaseStudy(project)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#a3e635] hover:bg-[#a3e635]/10 text-xs font-mono transition-colors ml-auto"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Case Study</span>
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Browser Chrome Preview with Scroll Parallax */}
                    <motion.div style={{ y: yPreview }} className="lg:col-span-7">
                      <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0a0d14] shadow-2xl group">
                        {/* Fake Browser Window Header */}
                        <div className="bg-[#121622] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                          </div>
                          <div className="bg-[#090b10] px-4 py-1 rounded-full text-[11px] font-mono text-zinc-400 border border-white/5 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                            <span>skill-exchange-phi-three.vercel.app</span>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-500">MERN</span>
                        </div>

                        {/* Actual Screenshot from Live App with subtle scroll scale */}
                        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                          <motion.img
                            style={{ scale: imageScale }}
                            src={project.screenshotUrl}
                            alt="SkillExchange Application Interface"
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </ProjectScrollWrapper>
          )
        })()}

        {/* Project 02: TabMenu (Reversed Layout) */}
        {(() => {
          const project = projectsData[1]
          return (
            <ProjectScrollWrapper className="mb-24 lg:mb-32">
              {({ yText, yPreview, imageScale }) => (
                <div
                  data-cursor-project="TABMENU"
                  className="glass-panel rounded-3xl border border-white/10 overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:border-amber-500/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Browser Preview with Parallax */}
                    <motion.div style={{ y: yPreview }} className="lg:col-span-7 order-2 lg:order-1">
                      <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0a0d14] shadow-2xl group">
                        <div className="bg-[#121622] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                          </div>
                          <div className="bg-[#090b10] px-4 py-1 rounded-full text-[11px] font-mono text-zinc-400 border border-white/5 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span>ambikapureveg-two.vercel.app</span>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-500">SOCKET.IO</span>
                        </div>

                        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                          <motion.img
                            style={{ scale: imageScale }}
                            src={project.screenshotUrl}
                            alt="TabMenu - Ambika Pure Veg Restaurant Platform"
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Project Info */}
                    <motion.div style={{ y: yText }} className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                          PROJECT {project.number}
                        </span>
                        <span className="font-mono text-xs text-zinc-400">{project.category}</span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                        {project.title}
                      </h3>

                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 mb-6 font-mono text-xs">
                        <div>
                          <span className="text-zinc-500 block text-[10px]">ORDER SPEED</span>
                          <span className="text-white font-bold text-sm text-amber-400">90s Faster</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">SYSTEM ROLES</span>
                          <span className="text-white font-bold text-sm">4 Dashboards</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">SYNC PIPELINE</span>
                          <span className="text-white font-bold text-sm">Socket.IO</span>
                        </div>
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-[#161c28] border border-white/5 font-mono text-[11px] text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-3">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-black font-semibold text-xs font-mono hover:bg-amber-300 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Deployment</span>
                          </motion.a>
                        )}

                        <motion.button
                          type="button"
                          onClick={() => setSelectedCaseStudy(project)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#a3e635] hover:bg-[#a3e635]/10 text-xs font-mono transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Case Study</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </ProjectScrollWrapper>
          )
        })()}

        {/* Project 03: AI Text Detector with Interactive Simulator */}
        {(() => {
          const project = projectsData[2]
          return (
            <ProjectScrollWrapper className="mb-24 lg:mb-32">
              {({ yText, yPreview }) => (
                <div
                  data-cursor-project="AI DETECTOR"
                  className="glass-panel rounded-3xl border border-white/10 overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:border-[#a3e635]/40"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <motion.div style={{ y: yText }} className="lg:col-span-5 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-[#a3e635] bg-[#a3e635]/10 px-2.5 py-0.5 rounded-full border border-[#a3e635]/30">
                          PROJECT {project.number}
                        </span>
                        <span className="font-mono text-xs text-zinc-400">{project.category}</span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                        {project.title}
                      </h3>

                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 mb-6 font-mono text-xs">
                        <div>
                          <span className="text-zinc-500 block text-[10px]">ACCURACY</span>
                          <span className="text-white font-bold text-sm text-[#a3e635]">98% Bench</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">TRANSFORMER</span>
                          <span className="text-white font-bold text-sm">DeBERTa-v3</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">BACKEND</span>
                          <span className="text-white font-bold text-sm">FastAPI</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-[#161c28] border border-white/5 font-mono text-[11px] text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <motion.button
                          type="button"
                          onClick={() => setSelectedCaseStudy(project)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#a3e635] text-black font-semibold text-xs font-mono hover:bg-[#bef264] transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Detailed Architecture</span>
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Interactive Simulator Component with Scroll Parallax */}
                    <motion.div style={{ y: yPreview }} className="lg:col-span-7">
                      <AiDetectorSimulator />
                    </motion.div>
                  </div>
                </div>
              )}
            </ProjectScrollWrapper>
          )
        })()}

        {/* Project 04: Sentinel-2 Multispectral Super-Resolution with Slider */}
        {(() => {
          const project = projectsData[3]
          return (
            <ProjectScrollWrapper className="mb-24 lg:mb-32">
              {({ yText, yPreview }) => (
                <div
                  data-cursor-project="SENTINEL-2"
                  className="glass-panel rounded-3xl border border-white/10 overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:border-emerald-500/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Interactive Before/After Slider with Parallax */}
                    <motion.div style={{ y: yPreview }} className="lg:col-span-7 order-2 lg:order-1">
                      <ImageComparisonSlider />
                    </motion.div>

                    <motion.div style={{ y: yText }} className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                          PROJECT {project.number}
                        </span>
                        <span className="font-mono text-xs text-zinc-400">{project.category}</span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                        {project.title}
                      </h3>

                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 mb-6 font-mono text-xs">
                        <div>
                          <span className="text-zinc-500 block text-[10px]">UPSCALING</span>
                          <span className="text-white font-bold text-sm text-emerald-400">4x Factor</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">RESOLUTION</span>
                          <span className="text-white font-bold text-sm">10m → 2.5m</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">FORMAT</span>
                          <span className="text-white font-bold text-sm">Float32 GeoTIFF</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-[#161c28] border border-white/5 font-mono text-[11px] text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-400 text-black font-semibold text-xs font-mono hover:bg-emerald-300 transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>View Codebase</span>
                          </motion.a>
                        )}

                        <motion.button
                          type="button"
                          onClick={() => setSelectedCaseStudy(project)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#a3e635] hover:bg-[#a3e635]/10 text-xs font-mono transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Case Study</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </ProjectScrollWrapper>
          )
        })()}

        {/* Project 05: SevaVoice */}
        {(() => {
          const project = projectsData[4]
          return (
            <ProjectScrollWrapper>
              {({ yText, yPreview }) => (
                <div
                  data-cursor-project="SEVAVOICE"
                  className="glass-panel rounded-3xl border border-white/10 overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:border-pink-500/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <motion.div style={{ y: yText }} className="lg:col-span-6 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-mono text-xs font-bold text-pink-400 bg-pink-500/10 px-2.5 py-0.5 rounded-full border border-pink-500/30">
                          PROJECT {project.number} · CONCEPT
                        </span>
                        <span className="font-mono text-xs text-zinc-400">{project.category}</span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                        {project.title}
                      </h3>

                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 mb-6 font-mono text-xs">
                        <div>
                          <span className="text-zinc-500 block text-[10px]">INTAKE MODE</span>
                          <span className="text-white font-bold text-sm text-pink-400">Spoken Dialect</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">TARGET USERS</span>
                          <span className="text-white font-bold text-sm">Rural Citizens</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">AUDIT WORKFLOW</span>
                          <span className="text-white font-bold text-sm">4 Roles</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-[#161c28] border border-white/5 font-mono text-[11px] text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <motion.button
                          type="button"
                          onClick={() => setSelectedCaseStudy(project)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-pink-500 text-white font-semibold text-xs font-mono hover:bg-pink-400 transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Case Study & Workflow</span>
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Illustrative Architecture Diagram with Parallax */}
                    <motion.div style={{ y: yPreview }} className="lg:col-span-6 bg-[#0e121a] rounded-2xl border border-white/10 p-5 sm:p-6 flex flex-col gap-3.5 font-mono text-xs">
                      <span className="text-pink-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        Multimodal Workflow Concept
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="p-3 bg-[#131722] rounded-xl border border-white/5 flex flex-col gap-1">
                          <span className="text-[10px] text-pink-400 font-semibold">1. Dialect Intake</span>
                          <span className="text-zinc-300 text-xs">Speech-to-Text audio stream</span>
                        </div>
                        <div className="p-3 bg-[#131722] rounded-xl border border-white/5 flex flex-col gap-1">
                          <span className="text-[10px] text-emerald-400 font-semibold">2. Structuring</span>
                          <span className="text-zinc-300 text-xs">NLP incident categorization</span>
                        </div>
                        <div className="p-3 bg-[#131722] rounded-xl border border-white/5 flex flex-col gap-1">
                          <span className="text-[10px] text-sky-400 font-semibold">3. Field Dispatch</span>
                          <span className="text-zinc-300 text-xs">GPS geo-stamped audit</span>
                        </div>
                        <div className="p-3 bg-[#131722] rounded-xl border border-white/5 flex flex-col gap-1">
                          <span className="text-[10px] text-[#a3e635] font-semibold">4. Transparent Relief</span>
                          <span className="text-zinc-300 text-xs">Audit ledger routing</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-zinc-500 font-sans leading-relaxed pt-1">
                        Designed with WCAG AAA accessibility considerations to empower users across regional spoken dialects.
                      </p>
                    </motion.div>
                  </div>
                </div>
              )}
            </ProjectScrollWrapper>
          )
        })()}
      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProject={(p) => setSelectedCaseStudy(p)}
        allProjects={projectsData}
      />
    </section>
  )
}
