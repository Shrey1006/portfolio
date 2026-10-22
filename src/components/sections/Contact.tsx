import React, { useState, useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Mail, MapPin, Copy, Check, Send, Download, Sparkles, ArrowUpRight } from "lucide-react"
import confetti from "canvas-confetti"
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodolioIcon } from "../common/Icons"
import { profileData } from "../../data/profile"
import { SectionHeading } from "../layout/SectionHeading"

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const yLeft = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : 20, shouldReduceMotion ? 0 : -20])
  const yRight = useTransform(scrollYProgress, [0, 1], [shouldReduceMotion ? 0 : -15, shouldReduceMotion ? 0 : 15])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email)
    setCopied(true)
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#a3e635", "#38bdf8", "#f4f4f5"]
    })
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Trigger honest mailto composition
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    window.location.href = mailtoUrl

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }, 600)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 tech-dot-bg overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="// 07"
          tag="Initiate Dialogue"
          title="Let's build"
          highlight="something meaningful."
          description="I'm interested in building useful software, exploring new technologies, and collaborating on interesting engineering challenges."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Direct Contact & Social Cards with Sequential Entrance */}
          <motion.div
            style={{ y: yLeft }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Email Card with Copy-to-Clipboard */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#a3e635]/40 transition-all duration-300"
            >
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-2">
                PRIMARY EMAIL DISPATCH
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="font-display text-lg sm:text-xl font-bold text-white hover:text-[#a3e635] transition-colors block mb-4 break-all"
              >
                {profileData.email}
              </a>

              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  type="button"
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141824] border border-white/10 text-xs font-mono font-medium text-zinc-200 hover:text-white hover:border-[#a3e635]/60 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#a3e635]" />
                      <span className="text-[#a3e635]">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  href={`mailto:${profileData.email}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#a3e635] text-black text-xs font-mono font-semibold hover:bg-[#bef264] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Social Grid with Staggered Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-4 font-mono text-xs"
            >
              <motion.a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <GithubIcon className="w-5 h-5 text-white group-hover:text-[#a3e635] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white font-semibold">GitHub</span>
                <span className="text-[11px] text-zinc-500">@Shrey1006</span>
              </motion.a>

              <motion.a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <LinkedinIcon className="w-5 h-5 text-[#38bdf8] group-hover:text-[#38bdf8] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white font-semibold">LinkedIn</span>
                <span className="text-[11px] text-zinc-500">Shreyansh Mojidra</span>
              </motion.a>

              <motion.a
                href={profileData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel rounded-2xl p-4 border border-white/10 hover:border-[#ffa116]/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <LeetCodeIcon className="w-5 h-5 text-[#ffa116] group-hover:text-[#ffa116] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white font-semibold">LeetCode</span>
                <span className="text-[11px] text-zinc-500">@shreycodes1008</span>
              </motion.a>

              <motion.a
                href={profileData.codolio}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel rounded-2xl p-4 border border-white/10 hover:border-[#f57c06]/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <CodolioIcon className="w-5 h-5 text-[#f57c06] group-hover:text-[#f57c06] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white font-semibold">Codolio</span>
                <span className="text-[11px] text-zinc-500">@Shreythecoder</span>
              </motion.a>
            </motion.div>

            {/* Resume Download Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#141824] border border-white/10 flex items-center justify-center text-[#a3e635]">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-semibold text-white text-sm block">
                    Curriculum Vitae
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400">
                    Verified PDF · Shreyansh Mojidra
                  </span>
                </div>
              </div>

              <motion.a
                href={profileData.resumePath}
                download="Shreyansh_Mojidra_Resume.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#a3e635] hover:text-black font-mono text-xs font-semibold text-white transition-all duration-200"
              >
                Download
              </motion.a>
            </motion.div>

            {/* Location & Time Indicator */}
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 px-1">
              <MapPin className="w-4 h-4 text-[#a3e635]" />
              <span>Based in Mumbai, Maharashtra, India</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Direct Message Form with Scroll Depth */}
          <motion.div
            style={{ y: yRight }}
            className="lg:col-span-7"
          >
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 flex flex-col gap-5 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <Sparkles className="w-4 h-4 text-[#a3e635]" />
                  <span className="font-semibold uppercase tracking-wider">Direct Message Transmission</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">DISPATCHES VIA MAIL CLIENT</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="font-mono text-xs text-zinc-400">
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="e.g. Maya Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0b0e15] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#a3e635]/60 font-sans transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="font-mono text-xs text-zinc-400">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#0b0e15] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#a3e635]/60 font-sans transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-subject" className="font-mono text-xs text-zinc-400">
                  TOPIC / OPPORTUNITY
                </label>
                <input
                  id="contact-subject"
                  required
                  type="text"
                  placeholder="Software Engineering Internship / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-[#0b0e15] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#a3e635]/60 font-sans transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="font-mono text-xs text-zinc-400">
                  PROJECT SPECIFICATION OR NOTE
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Briefly describe the engineering challenge, team context, or conversation topic..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#0b0e15] border border-white/10 rounded-xl p-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#a3e635]/60 resize-none font-sans transition-colors"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#a3e635] text-black font-semibold text-xs font-mono hover:bg-[#bef264] transition-all disabled:opacity-50 shadow-md shadow-[#a3e635]/20 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "PREPARING DISPATCH..." : "DISPATCH MESSAGE"}</span>
                </motion.button>

                {submitted && (
                  <span className="text-xs font-mono text-[#a3e635] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    Mail client opened with your note!
                  </span>
                )}
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
