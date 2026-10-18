import React, { useState } from "react"
import { ExternalLink, BookOpen, Sparkles } from "lucide-react"
import { GithubIcon } from "../common/Icons"
import { projectsData } from "../../data/projects"
import type { Project } from "../../data/projects"
import { SectionHeading } from "../layout/SectionHeading"
import { ImageComparisonSlider } from "../projects/ImageComparisonSlider"
import { AiDetectorSimulator } from "../projects/AiDetectorSimulator"
import { CaseStudyModal } from "../projects/CaseStudyModal"

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 02"
          tag="Engineering Showcase"
          title="Engineered systems,"
          highlight="built end-to-end."
          description="A curated catalog of full-stack production platforms, deep learning pipelines, and accessible digital products."
        />

        {/* Project 01: SkillExchange (Full-Width Asymmetrical Editorial) */}
        {(() => {
          const project = projectsData[0]
          return (
            <div className="mb-24 lg:mb-32">
              <div
                data-cursor-project="SKILLEXCHANGE"
                className="glass-panel rounded-3xl border border-white/10 overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:border-sky-500/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Project Info */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
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
                      {project.technologies.slice(0, 6).map((t) => (
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
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-400 text-black font-semibold text-xs font-mono hover:bg-sky-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live App</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#141824] border border-white/15 text-zinc-200 hover:text-white text-xs font-mono transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Codebase</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#a3e635] hover:bg-[#a3e635]/10 text-xs font-mono transition-colors ml-auto"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>
                    </div>
                  </div>

                  {/* Browser Chrome Preview with Real Screenshot */}
                  <div className="lg:col-span-7">
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

                      {/* Actual Screenshot from Live App */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                        <img
                          src={project.screenshotUrl}
                          alt="SkillExchange Application Interface"
                          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Project 02: TabMenu (Reversed Layout) */}
        {(() => {
          const project = projectsData[1]
          return (
            <div className="mb-24 lg:mb-32">
              <div
                data-cursor-project="TABMENU"
                className="glass-panel rounded-3xl border border-white/10 overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:border-amber-500/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Browser Chrome Preview with Real Screenshot */}
                  <div className="lg:col-span-7 order-2 lg:order-1">
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
                        <img
                          src={project.screenshotUrl}
                          alt="TabMenu - Ambika Pure Veg Restaurant Platform"
                          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
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
                      {project.technologies.slice(0, 6).map((t) => (
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
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-black font-semibold text-xs font-mono hover:bg-amber-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Deployment</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#a3e635] hover:bg-[#a3e635]/10 text-xs font-mono transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Project 03: AI Text Detector with Interactive Simulator */}
        {(() => {
          const project = projectsData[2]
          return (
            <div className="mb-24 lg:mb-32">
              <div
                data-cursor-project="AI DETECTOR"
                className="glass-panel rounded-3xl border border-white/10 overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:border-[#a3e635]/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-5 flex flex-col justify-center">
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
                      {project.technologies.slice(0, 6).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-[#161c28] border border-white/5 font-mono text-[11px] text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#a3e635] text-black font-semibold text-xs font-mono hover:bg-[#bef264] transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Detailed Architecture</span>
                      </button>
                    </div>
                  </div>

                  {/* Interactive Simulator Component */}
                  <div className="lg:col-span-7">
                    <AiDetectorSimulator />
                  </div>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Project 04: Sentinel-2 Multispectral Super-Resolution with Slider */}
        {(() => {
          const project = projectsData[3]
          return (
            <div className="mb-24 lg:mb-32">
              <div
                data-cursor-project="SENTINEL-2"
                className="glass-panel rounded-3xl border border-white/10 overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:border-emerald-500/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Interactive Before/After Slider */}
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <ImageComparisonSlider />
                  </div>

                  <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
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
                      {project.technologies.slice(0, 6).map((t) => (
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
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-400 text-black font-semibold text-xs font-mono hover:bg-emerald-300 transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>View Codebase</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#a3e635] hover:bg-[#a3e635]/10 text-xs font-mono transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Project 05: SevaVoice (Social Impact & Accessible Voice Platform) */}
        {(() => {
          const project = projectsData[4]
          return (
            <div>
              <div
                data-cursor-project="SEVAVOICE"
                className="glass-panel rounded-3xl border border-white/10 overflow-hidden p-6 sm:p-10 transition-all duration-300 hover:border-pink-500/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-6 flex flex-col justify-center">
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
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-[#161c28] border border-white/5 font-mono text-[11px] text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-pink-500 text-white font-semibold text-xs font-mono hover:bg-pink-400 transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study & Workflow</span>
                      </button>
                    </div>
                  </div>

                  {/* Illustrative Architecture Diagram */}
                  <div className="lg:col-span-6 bg-[#0e121a] rounded-2xl border border-white/10 p-6 flex flex-col gap-4 font-mono text-xs">
                    <span className="text-pink-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Multimodal Charitable Workflow Architecture
                    </span>

                    <div className="space-y-3">
                      <div className="p-3 bg-[#131722] rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="text-zinc-300">1. Smallholder Farmer (Native Voice)</span>
                        <span className="text-[10px] text-pink-400 font-semibold">Speech-to-Text</span>
                      </div>
                      <div className="p-3 bg-[#131722] rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="text-zinc-300">2. Incident Structuring & Geostamping</span>
                        <span className="text-[10px] text-emerald-400 font-semibold">NLP Classification</span>
                      </div>
                      <div className="p-3 bg-[#131722] rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="text-zinc-300">3. Field Verifier Dispatch</span>
                        <span className="text-[10px] text-sky-400 font-semibold">Mobile GPS Audit</span>
                      </div>
                      <div className="p-3 bg-[#131722] rounded-xl border border-white/5 flex items-center justify-between">
                        <span className="text-zinc-300">4. Transparent Relief Distribution</span>
                        <span className="text-[10px] text-[#a3e635] font-semibold">Audit Ledger</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-zinc-500 font-sans leading-relaxed pt-2">
                      Designed with WCAG AAA high-contrast considerations to empower individuals facing digital literacy hurdles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
