import React from "react"
import { Award, GraduationCap, ShieldCheck, Terminal, Compass, CheckCircle2 } from "lucide-react"
import { profileData } from "../../data/profile"
import { SectionHeading } from "../layout/SectionHeading"

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 01"
          tag="Editorial Profile"
          title="Curiosity grounded in"
          highlight="engineering fundamentals."
          description="Transforming conceptual logic into verified software through rigorous problem-solving, clean architecture, and continuous learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Credential Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Editorial Portrait Container */}
            <div className="relative group rounded-3xl overflow-hidden glass-panel border border-white/10 p-2">
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
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="glass-panel rounded-2xl p-4 border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <GraduationCap className="w-4 h-4 text-[#a3e635]" />
                  <span>Degree & VJTI</span>
                </div>
                <span className="text-white font-semibold font-display text-sm">B.Tech Comp Eng</span>
                <span className="text-[11px] text-zinc-500">CGPA: 7.81 / 10</span>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
                  <span>Academic Minor</span>
                </div>
                <span className="text-white font-semibold font-display text-sm">Cybersecurity</span>
                <span className="text-[11px] text-zinc-500">Network & System Security</span>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-white/5 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <Award className="w-4 h-4 text-[#f59e0b]" />
                  <span>State Rank</span>
                </div>
                <span className="text-white font-semibold font-display text-sm">Rank 301</span>
                <span className="text-[11px] text-zinc-500">MHT-CET: 99.87%ile</span>
              </div>

              <a
                href="#coding-stats"
                className="glass-panel rounded-2xl p-4 border border-white/5 hover:border-[#a3e635]/40 transition-all flex flex-col gap-1 group"
              >
                <div className="flex items-center justify-between text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-[#ec4899]" />
                    <span>DSA Solving</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] shadow-[0_0_4px_#a3e635] animate-pulse" />
                </div>
                <span className="text-white font-semibold font-display text-sm group-hover:text-[#a3e635] transition-colors">550+ Solved</span>
                <span className="text-[11px] text-zinc-500">Live via Codolio ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & How I Build */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="prose prose-invert max-w-none text-zinc-300 space-y-5 text-base sm:text-lg leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl text-white font-display font-medium leading-snug">
                "I enjoy turning ideas into working products while continuously improving my engineering foundations."
              </p>
              <p>
                I'm <span className="text-white font-medium">Shreyansh Mojidra</span>, a Computer Engineering student at Veermata Jijabai Technological Institute (VJTI), Mumbai. I enjoy building practical software, exploring full-stack web architectures, and experimenting with AI/ML to understand how algorithmic systems can solve real-world problems.
              </p>
              <p>
                From architecting multi-interface real-time dining platforms and atomic barter economies to engineering satellite super-resolution pipelines and NLP transformer classifiers, I prioritize genuine code quality, low-latency execution, and resilient design patterns over superficial shortcuts.
              </p>
              <p>
                Beyond individual engineering, I am passionate about sharing technical knowledge. As an organizer in the <strong className="text-white">VJTI CP Club</strong> and instructor at the <strong className="text-white">Community of Coders (COC)</strong>, I have conducted workshops on Data Structures & Algorithms and sprint-based mentoring through the Agastya Foundation / JP Morgan CSR initiative.
              </p>
            </div>

            {/* "How I Build" Section */}
            <div className="mt-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Compass className="w-4 h-4 text-[#a3e635]" />
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  How I Build — Engineering Principles
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileData.howIBuild.map((item) => (
                  <div
                    key={item.step}
                    className="glass-panel rounded-2xl p-5 border border-white/5 hover:border-[#a3e635]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-[#a3e635] bg-[#a3e635]/10 px-2 py-0.5 rounded">
                        {item.step}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-[#a3e635] transition-colors" />
                    </div>
                    <h4 className="font-display font-semibold text-white text-base mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
