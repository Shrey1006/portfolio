import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, CheckCircle, Cpu, Database, Server, Layout, ArrowRight } from "lucide-react"
import { GithubIcon } from "../common/Icons"
import type { Project } from "../../data/projects"

interface CaseStudyModalProps {
  project: Project | null
  onClose: () => void
  onSelectProject: (p: Project) => void
  allProjects: Project[]
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (project) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const currentIndex = allProjects.findIndex((p) => p.id === project.id)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/15 bg-[#090b10] p-6 sm:p-10 shadow-2xl custom-scroll"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="sticky top-0 float-right z-20 w-9 h-9 rounded-full bg-[#181d2a] border border-white/10 text-zinc-300 hover:text-white hover:border-[#a3e635] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="flex flex-col gap-2 mb-6 clear-left">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#a3e635] bg-[#a3e635]/10 px-2.5 py-0.5 rounded-full border border-[#a3e635]/30">
                CASE STUDY {project.number}
              </span>
              <span className="font-mono text-xs text-zinc-400">{project.category}</span>
              <span className="font-mono text-xs text-zinc-600">·</span>
              <span className="font-mono text-xs text-zinc-500">{project.dateRange}</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Quick Action Links & Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 mb-8">
            <div className="flex flex-wrap gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#a3e635] text-black font-semibold text-xs font-mono hover:bg-[#bef264] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verified Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#141824] border border-white/15 text-zinc-200 hover:text-white hover:border-[#a3e635]/50 text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            {project.metrics && (
              <div className="flex items-center gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-right">
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase">{m.label}</span>
                    <span className="font-display text-sm font-bold text-[#a3e635]">{m.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section: Problem & Technical Approach */}
          <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed mb-10">
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                The Problem & Motivation
              </h3>
              <p className="text-zinc-400">{project.problemStatement}</p>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                Technical Solution & Approach
              </h3>
              <p className="text-zinc-400">{project.technicalApproach}</p>
            </div>
          </div>

          {/* Architectural System Breakdown */}
          <div className="bg-[#0e121a] rounded-2xl p-6 border border-white/10 mb-10">
            <h3 className="font-display text-base font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#a3e635]" />
              System Architecture & Separation of Concerns
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-[#121622] p-4 rounded-xl border border-white/5 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-zinc-300 font-semibold">
                  <Layout className="w-4 h-4 text-[#38bdf8]" />
                  <span>Frontend Client</span>
                </div>
                <p className="text-zinc-400 font-sans">{project.architecture.frontend}</p>
              </div>

              <div className="bg-[#121622] p-4 rounded-xl border border-white/5 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-zinc-300 font-semibold">
                  <Server className="w-4 h-4 text-[#a3e635]" />
                  <span>Backend & Services</span>
                </div>
                <p className="text-zinc-400 font-sans">{project.architecture.backend}</p>
              </div>

              <div className="bg-[#121622] p-4 rounded-xl border border-white/5 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-zinc-300 font-semibold">
                  <Database className="w-4 h-4 text-[#f59e0b]" />
                  <span>Database Layer</span>
                </div>
                <p className="text-zinc-400 font-sans">{project.architecture.database}</p>
              </div>

              <div className="bg-[#121622] p-4 rounded-xl border border-white/5 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-zinc-300 font-semibold">
                  <CheckCircle className="w-4 h-4 text-[#ec4899]" />
                  <span>Critical Design Pattern</span>
                </div>
                <p className="text-zinc-400 font-sans">{project.architecture.keyPattern}</p>
              </div>
            </div>

            {/* Pipeline flowchart if present */}
            {project.architecture.pipeline && (
              <div className="mt-5 pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-3">
                  Sequential Data Pipeline:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {project.architecture.pipeline.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className="px-3 py-1.5 rounded-lg bg-[#161c28] border border-white/10 text-zinc-300 text-xs font-mono">
                        {step}
                      </span>
                      {idx < project.architecture.pipeline!.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#a3e635] flex-shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Key Features List */}
          <div className="mb-10">
            <h3 className="font-display text-lg font-bold text-white mb-4">
              Implementation Details & Features
            </h3>
            <div className="space-y-3">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-start gap-3 text-sm text-zinc-300 font-sans">
                  <CheckCircle className="w-4 h-4 text-[#a3e635] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actual Contribution */}
          <div className="glass-panel rounded-2xl p-5 border border-white/10 mb-8 bg-[#121622]/80">
            <span className="font-mono text-xs text-[#a3e635] font-semibold uppercase tracking-wider block mb-1">
              My Specific Contribution:
            </span>
            <p className="text-zinc-200 text-sm leading-relaxed">{project.myContribution}</p>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
              Technologies Utilized:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-[#181d2a] border border-white/10 font-mono text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer: Next Project CTA */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-mono text-zinc-400 hover:text-white"
            >
              Close Case Study
            </button>

            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#a3e635] hover:underline"
            >
              <span>Next Project: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
