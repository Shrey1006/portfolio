import { useEffect, useRef, useState, useCallback } from "react"
import { Sparkles, RefreshCw } from "lucide-react"

export interface HalftonePortraitProps {
  src?: string
  dotSpacing?: number
  maxRadius?: number
  contrast?: number
  brightnessThreshold?: number
  interactive?: boolean
  accentColor?: string
  dotColor?: string
  className?: string
}

interface Dot {
  origX: number
  origY: number
  currentX: number
  currentY: number
  vx: number
  vy: number
  baseRadius: number
  currentRadius: number
  brightness: number
  color: string
  revealDelay: number
  alpha: number
}

export const HalftonePortrait: React.FC<HalftonePortraitProps> = ({
  src = "/images/dotmake.png",
  dotSpacing = 4.8,
  maxRadius = 2.4,
  contrast = 1.35,
  brightnessThreshold = 0.05,
  interactive = true,
  accentColor = "#a3e635",
  dotColor = "rgba(244, 244, 245, 0.9)",
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [totalDots, setTotalDots] = useState(0)
  const [isRevealed, setIsRevealed] = useState(false)

  const imageRef = useRef<HTMLImageElement | null>(null)
  const dotsRef = useRef<Dot[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false
  })
  const isVisibleRef = useRef(true)
  const startTimeRef = useRef<number>(0)

  // Load source image
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = src

    img.onload = () => {
      imageRef.current = img
      setImageLoaded(true)
      setLoadError(false)
    }

    img.onerror = () => {
      // Fallback to jpg if png failed
      if (src.endsWith(".png")) {
        const fallback = new Image()
        fallback.crossOrigin = "anonymous"
        fallback.src = "/images/dotmake.jpg"
        fallback.onload = () => {
          imageRef.current = fallback
          setImageLoaded(true)
          setLoadError(false)
        }
        fallback.onerror = () => {
          setLoadError(true)
        }
      } else {
        setLoadError(true)
      }
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  // Build the halftone dot grid by sampling luminance from the loaded image
  const buildHalftoneGrid = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const img = imageRef.current
    if (!canvas || !container || !img) return

    const rect = container.getBoundingClientRect()
    const width = Math.floor(rect.width)
    const height = Math.floor(rect.height)
    if (width <= 0 || height <= 0) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.scale(dpr, dpr)

    // Offscreen canvas for sampling
    const sampleCanvas = document.createElement("canvas")
    sampleCanvas.width = width
    sampleCanvas.height = height
    const sampleCtx = sampleCanvas.getContext("2d")
    if (!sampleCtx) return

    // Center crop the source image (2752x1536) to cover the canvas container
    const imgAspect = img.naturalWidth / img.naturalHeight
    const containerAspect = width / height

    let drawW = width
    let drawH = height
    let offsetX = 0
    let offsetY = 0

    if (imgAspect > containerAspect) {
      // Source image is wider than container: crop sides to keep center subject
      drawH = height
      drawW = height * imgAspect
      offsetX = (width - drawW) / 2
    } else {
      // Container is taller: crop top/bottom
      drawW = width
      drawH = width / imgAspect
      offsetY = (height - drawH) / 2
    }

    sampleCtx.fillStyle = "#000000"
    sampleCtx.fillRect(0, 0, width, height)
    sampleCtx.drawImage(img, offsetX, offsetY, drawW, drawH)

    let imgData: ImageData
    try {
      imgData = sampleCtx.getImageData(0, 0, width, height)
    } catch {
      return
    }

    const data = imgData.data
    const dots: Dot[] = []

    // Adjust spacing dynamically on smaller viewports for crispness & performance
    const effectiveSpacing = width < 500 ? Math.max(3.8, dotSpacing * 0.85) : dotSpacing
    const effectiveMaxRadius = width < 500 ? Math.max(1.8, maxRadius * 0.9) : maxRadius

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const cols = Math.floor(width / effectiveSpacing)
    const rows = Math.floor(height / effectiveSpacing)

    const startX = (width - cols * effectiveSpacing) / 2 + effectiveSpacing / 2
    const startY = (height - rows * effectiveSpacing) / 2 + effectiveSpacing / 2

    const centerX = width / 2
    const centerY = height / 2
    const maxDistFromCenter = Math.sqrt(centerX * centerX + centerY * centerY)

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = Math.floor(startX + c * effectiveSpacing)
        const y = Math.floor(startY + r * effectiveSpacing)

        if (x < 0 || x >= width || y < 0 || y >= height) continue

        const pixelIndex = (y * width + x) * 4
        const red = data[pixelIndex]
        const green = data[pixelIndex + 1]
        const blue = data[pixelIndex + 2]

        // Relative luminance
        let luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255

        // Check if there is slight warm/amber tone in shirt highlights to tint subtly
        const isWarmTone = red > 80 && red > blue * 1.3 && green > 30

        // Apply contrast curve
        luminance = Math.pow(luminance, contrast)

        // Filter out pitch black background pixels
        if (luminance < brightnessThreshold) continue

        const baseRadius = Math.max(0.6, luminance * effectiveMaxRadius)

        // Radial reveal delay from center outward
        const distFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
        const revealDelay = prefersReducedMotion ? 0 : (distFromCenter / maxDistFromCenter) * 900

        // Scatter starting positions slightly for organic entrance
        const scatterOffset = prefersReducedMotion ? 0 : (Math.random() - 0.5) * 40

        dots.push({
          origX: x,
          origY: y,
          currentX: x + scatterOffset,
          currentY: y + scatterOffset,
          vx: 0,
          vy: 0,
          baseRadius,
          currentRadius: prefersReducedMotion ? baseRadius : 0,
          brightness: luminance,
          color: isWarmTone ? "rgba(251, 191, 36, 0.85)" : dotColor,
          revealDelay,
          alpha: prefersReducedMotion ? 1 : 0
        })
      }
    }

    dotsRef.current = dots
    setTotalDots(dots.length)
    startTimeRef.current = performance.now()
  }, [dotSpacing, maxRadius, contrast, brightnessThreshold, dotColor])

  // Canvas render animation loop
  useEffect(() => {
    if (!imageLoaded) return

    buildHalftoneGrid()

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Visibility observer to pause RAF when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting
    })
    if (containerRef.current) observer.observe(containerRef.current)

    // Handle mouse movement for interactive physics
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas || !interactive) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    canvas.addEventListener("mousemove", handleMouseMove, { passive: true })
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Handle resize
    let resizeTimer: number
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        buildHalftoneGrid()
      }, 150)
    }
    window.addEventListener("resize", handleResize)

    // Main animation frame loop
    const render = (time: number) => {
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(render)
        return
      }

      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      ctx.save()
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      // Solid deep charcoal background to ensure high contrast
      ctx.fillStyle = "#07080c"
      ctx.fillRect(0, 0, width, height)

      const dots = dotsRef.current
      const elapsed = time - startTimeRef.current
      const mouse = mouseRef.current
      const mouseInfluenceRadius = 75

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i]

        // 1. Progressive reveal stage
        if (elapsed > dot.revealDelay) {
          const progress = Math.min(1, (elapsed - dot.revealDelay) / 450)
          dot.alpha = progress
          dot.currentRadius = dot.baseRadius * progress
        }

        if (dot.alpha <= 0.02) continue

        // 2. Interactive mouse displacement & magnification
        if (interactive && mouse.active) {
          const dx = dot.currentX - mouse.x
          const dy = dot.currentY - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < mouseInfluenceRadius && dist > 0) {
            // Elastic push force
            const force = (1 - dist / mouseInfluenceRadius) * 12
            dot.vx += (dx / dist) * force * 0.25
            dot.vy += (dy / dist) * force * 0.25
          }
        }

        // 3. Spring physics returning to original position
        const k = 0.08 // spring stiffness
        const friction = 0.82 // damping
        const fx = (dot.origX - dot.currentX) * k
        const fy = (dot.origY - dot.currentY) * k

        dot.vx = (dot.vx + fx) * friction
        dot.vy = (dot.vy + fy) * friction

        dot.currentX += dot.vx
        dot.currentY += dot.vy

        // 4. Draw dot
        const dxFromMouse = mouse.active ? Math.abs(dot.currentX - mouse.x) : 999
        const dyFromMouse = mouse.active ? Math.abs(dot.currentY - mouse.y) : 999
        const isNearMouse = mouse.active && dxFromMouse < 35 && dyFromMouse < 35

        ctx.beginPath()
        ctx.arc(
          dot.currentX,
          dot.currentY,
          isNearMouse ? dot.currentRadius * 1.35 : dot.currentRadius,
          0,
          Math.PI * 2
        )

        if (isNearMouse) {
          ctx.fillStyle = accentColor
          ctx.shadowColor = accentColor
          ctx.shadowBlur = 6
        } else {
          ctx.fillStyle = dot.color
          ctx.shadowBlur = 0
        }

        ctx.globalAlpha = dot.alpha
        ctx.fill()
      }

      ctx.restore()

      if (elapsed > 1400 && !isRevealed) {
        setIsRevealed(true)
      }

      animationFrameRef.current = requestAnimationFrame(render)
    }

    animationFrameRef.current = requestAnimationFrame(render)

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", handleResize)
      observer.disconnect()
    }
  }, [imageLoaded, buildHalftoneGrid, interactive, accentColor, isRevealed])

  // Reset / Replay Animation
  const handleReplay = () => {
    buildHalftoneGrid()
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[440px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl bg-[#07080c] select-none ${className}`}
    >
      {/* Loading state indicator */}
      {!imageLoaded && !loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 font-mono text-xs text-zinc-400 bg-[#07080c]">
          <div className="w-8 h-8 rounded-full border-2 border-[#a3e635] border-t-transparent animate-spin" />
          <span>SAMPLING HALFTONE MATRIX...</span>
        </div>
      )}

      {/* Error state fallback */}
      {loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center font-mono text-xs text-rose-400 bg-[#07080c]">
          <span>SOURCE IMAGE COULD NOT BE LOADED</span>
          <span className="text-[11px] text-zinc-500 mt-2">
            Please ensure image is available at public/images/dotmake.png or public/images/dotmake.jpg
          </span>
        </div>
      )}

      {/* The visible Canvas halftone render */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
      />

      {/* Corner Engineering Reticles */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#a3e635]/80 pointer-events-none" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#a3e635]/80 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#a3e635]/80 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#a3e635]/80 pointer-events-none" />

      {/* Top HUD Telemetry */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-zinc-400 pointer-events-none">
        <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
          <span className="text-zinc-200 font-semibold tracking-wider">
            HALFTONE MATRIX SYNTHESIS
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
          <span className="text-zinc-500">RES:</span>
          <span className="text-[#a3e635] font-semibold">{totalDots} DOTS</span>
        </div>
      </div>

      {/* Bottom HUD Annotations & Replay Control */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-zinc-400">
        <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 pointer-events-none">
          <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
          <span className="text-zinc-200">SHREYANSH MOJIDRA // VJTI</span>
        </div>

        <button
          type="button"
          onClick={handleReplay}
          title="Replay progressive reveal"
          className="flex items-center gap-1.5 bg-black/70 hover:bg-[#a3e635] text-zinc-300 hover:text-black backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 transition-colors pointer-events-auto"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="hidden xs:inline">REPLAY</span>
        </button>
      </div>
    </div>
  )
}
