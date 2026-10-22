import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const GREETINGS = [
  { text: "Hello", lang: "English" },
  { text: "નમસ્તે", lang: "Gujarati" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "नमस्कार", lang: "Marathi" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "こんにちは", lang: "Japanese" },
]

export const MultilingualIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false
    const hasSeenIntro = sessionStorage.getItem("portfolio_intro_seen")
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    return !hasSeenIntro && !prefersReducedMotion
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    document.body.style.overflow = "hidden"

    // Interval to cycle through greetings (~280ms per greeting)
    const intervalTime = 280
    const totalCycleTime = intervalTime * GREETINGS.length

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < GREETINGS.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, intervalTime)

    // Trigger exit animation after cycling through greetings
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, totalCycleTime)

    // Complete intro, restore scroll and persist session flag
    const finishTimer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = ""
      sessionStorage.setItem("portfolio_intro_seen", "true")
    }, totalCycleTime + 650)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false)
        document.body.style.overflow = ""
        sessionStorage.setItem("portfolio_intro_seen", "true")
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      clearInterval(interval)
      clearTimeout(exitTimer)
      clearTimeout(finishTimer)
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isVisible])

  const handleSkip = () => {
    setIsVisible(false)
    document.body.style.overflow = ""
    sessionStorage.setItem("portfolio_intro_seen", "true")
  }

  if (!isVisible) return null

  const current = GREETINGS[currentIndex]

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-curtain"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-[#07080b] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle noise/grid ambient texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

          {/* Centered Greeting with Framer Motion AnimatePresence */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <div className="h-28 sm:h-36 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.text}
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center"
                >
                  <span className="font-serif-display italic text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight leading-none">
                    {current.text}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] ml-3 sm:ml-4 flex-shrink-0 animate-pulse" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Language Tag */}
            <AnimatePresence mode="wait">
              <motion.span
                key={current.lang}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-zinc-500 uppercase mt-2"
              >
                {current.lang}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Subtle Skip CTA in bottom right */}
          <button
            type="button"
            onClick={handleSkip}
            className="absolute bottom-6 right-6 font-mono text-[11px] text-zinc-600 hover:text-zinc-300 transition-colors uppercase tracking-widest cursor-pointer px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/10"
          >
            Skip [ESC]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
