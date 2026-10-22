import React, { useState, useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"

export const HeroPortrait: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track scroll position for smooth hero parallax and fade
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = Math.max(window.innerHeight * 0.85, 500)
      const progress = Math.min(1, Math.max(0, scrollY / heroHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePos({ x: 0, y: 0 })
  }

  const yOffset = shouldReduceMotion ? 0 : -scrollProgress * 20

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-center select-none"
    >
      {/* Colorful High-Fidelity Portrait with Upward Parallax & Mouse Response */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          transform: isHovered
            ? `perspective(1000px) translateY(${yOffset}px) rotateY(${mousePos.x * 0.016}deg) rotateX(${-mousePos.y * 0.016}deg)`
            : `perspective(1000px) translateY(${yOffset}px) rotateY(0deg) rotateX(0deg)`,
          opacity: Math.max(0.05, 1 - scrollProgress * 1.3),
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease-out"
        }}
        className="relative w-full h-[300px] sm:h-[380px] md:h-[430px] lg:h-[480px] flex items-center justify-center"
      >
        {/* Subtle Warm Amber Ambient Glow behind head matching the rim light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-amber-500/15 rounded-full blur-[100px] -z-10"
        />

        {/* High-Resolution Full-Color Portrait with Original Tones */}
        <img
          src="/images/dotmake.png?v=3"
          alt="Shreyansh Mojidra"
          className="w-auto h-full max-w-none object-contain object-top filter contrast-[1.06] brightness-[1.02] drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          loading="eager"
        />

        {/* Interactive Cursor Spotlight Glow Effect */}
        {isHovered && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 mix-blend-screen opacity-25 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 200px at ${mousePos.x + 280}px ${mousePos.y + 240}px, rgba(251, 191, 36, 0.35), transparent 70%)`
            }}
          />
        )}

        {/* Smooth Bottom Dissolve Gradient melting into pitch-black background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-48 bg-gradient-to-t from-black via-black/85 to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black via-black/40 to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black via-black/40 to-transparent z-10"
        />
      </motion.div>
    </div>
  )
}
