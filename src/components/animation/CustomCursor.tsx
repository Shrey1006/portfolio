import React, { useEffect, useState, useRef } from "react"

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mousePos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const isMoving = useRef(false)

  useEffect(() => {
    // Only enable on desktop pointer devices with hover capability
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!hasPointer || prefersReducedMotion) {
      setEnabled(false)
      return
    }

    setEnabled(true)

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
      isMoving.current = true

      if (!isVisible) setIsVisible(true)

      // Direct, zero-lag pinpoint central dot placement
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      isMoving.current = false
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Fast, responsive hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      const projectCard = target.closest("[data-cursor-project]")
      const interactive = target.closest("a, button, input, textarea, select, [data-cursor-hover]")

      if (projectCard) {
        setIsHovered(true)
        setCursorText(projectCard.getAttribute("data-cursor-project") || "VIEW")
      } else if (interactive) {
        setIsHovered(true)
        setCursorText("")
      } else {
        setIsHovered(false)
        setCursorText("")
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseover", handleMouseOver, { passive: true })

    // High-responsiveness animation loop with fast spring-lerp (ease 0.48)
    let animationFrameId: number

    const render = () => {
      const dx = mousePos.current.x - ringPos.current.x
      const dy = mousePos.current.y - ringPos.current.y

      // Fast tracking ease factor: 0.48 provides snappy, instant tracking without sluggish floating
      const ease = 0.48

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        ringPos.current.x += dx * ease
        ringPos.current.y += dy * ease

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`
        }
      } else {
        isMoving.current = false
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseover", handleMouseOver)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible])

  if (!enabled) return null

  return (
    <>
      {/* Central pinpoint dot — instant tracking, zero latency */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#a3e635] shadow-[0_0_8px_#a3e635] transition-opacity duration-150 ${
          isVisible ? (cursorText ? "opacity-0" : "opacity-100") : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Outer following ring — snappy responsiveness, fast hover expansion */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full transition-all duration-150 ease-out ${
          cursorText
            ? "-ml-9 -mt-9 h-18 w-18 bg-[#a3e635] text-black shadow-lg shadow-[#a3e635]/30 font-bold tracking-wider text-[10px]"
            : isHovered
            ? "-ml-6 -mt-6 h-12 w-12 border-2 border-[#a3e635] bg-[#a3e635]/15 backdrop-blur-[1px]"
            : "-ml-4 -mt-4 h-8 w-8 border border-white/40 bg-white/5"
        } ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span className="font-mono uppercase font-semibold">{cursorText}</span>
        )}
      </div>
    </>
  )
}
