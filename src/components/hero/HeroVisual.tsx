import React, { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseX: number
  baseY: number
  pulse: number
}

interface PulseSignal {
  fromNode: number
  toNode: number
  progress: number
  speed: number
}

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let isVisible = true

    // Handle high DPI
    const resize = () => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)

    // Visibility observer to pause animation when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    if (containerRef.current) observer.observe(containerRef.current)

    // Initialize network nodes
    const nodeCount = 38
    const nodes: Node[] = []
    const width = () => canvas.getBoundingClientRect().width
    const height = () => canvas.getBoundingClientRect().height

    const w = width()
    const h = height()

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * (w || 500)
      const y = Math.random() * (h || 500)
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI * 2
      })
    }

    // Active traveling data pulses
    const pulses: PulseSignal[] = [
      { fromNode: 0, toNode: 5, progress: 0, speed: 0.015 },
      { fromNode: 3, toNode: 12, progress: 0.3, speed: 0.02 },
      { fromNode: 8, toNode: 18, progress: 0.7, speed: 0.012 }
    ]

    // Track mouse over canvas
    const handleMouseMove = (e: MouseEvent) => {
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

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Main animation loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      const rect = canvas.getBoundingClientRect()
      const cw = rect.width
      const ch = rect.height

      ctx.clearRect(0, 0, cw, ch)

      // Draw subtle circular target reticle in background
      const centerX = cw * 0.55
      const centerY = ch * 0.5
      ctx.save()
      ctx.strokeStyle = "rgba(163, 230, 53, 0.06)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(centerX, centerY, 140, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(centerX, centerY, 240, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Drift
        node.x += node.vx
        node.y += node.vy
        node.pulse += 0.03

        // Bounce within canvas
        if (node.x < 10 || node.x > cw - 10) node.vx *= -1
        if (node.y < 10 || node.y > ch - 10) node.vy *= -1

        // Mouse elastic repulsion
        if (mouseRef.current.active) {
          const dx = node.x - mouseRef.current.x
          const dy = node.y - mouseRef.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 120
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 3
            node.x += (dx / dist) * force
            node.y += (dy / dist) * force
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j]
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const connectionLimit = 110

          if (dist < connectionLimit) {
            const alpha = (1 - dist / connectionLimit) * 0.28
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(163, 230, 53, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Draw node dot
        const glow = Math.sin(node.pulse) * 0.5 + 0.5
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius + glow * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = i % 4 === 0 ? "#a3e635" : i % 3 === 0 ? "#38bdf8" : "rgba(255,255,255,0.7)"
        ctx.shadowColor = "#a3e635"
        ctx.shadowBlur = i % 4 === 0 ? 8 : 0
        ctx.fill()
        ctx.shadowBlur = 0
      }

      // Update and draw traveling data pulses
      for (const pulse of pulses) {
        pulse.progress += pulse.speed
        if (pulse.progress >= 1) {
          pulse.progress = 0
          pulse.fromNode = Math.floor(Math.random() * nodes.length)
          pulse.toNode = (pulse.fromNode + Math.floor(Math.random() * 5) + 1) % nodes.length
        }

        const n1 = nodes[pulse.fromNode]
        const n2 = nodes[pulse.toNode]
        if (n1 && n2) {
          const px = n1.x + (n2.x - n1.x) * pulse.progress
          const py = n1.y + (n2.y - n1.y) * pulse.progress

          ctx.beginPath()
          ctx.arc(px, py, 2.8, 0, Math.PI * 2)
          ctx.fillStyle = "#bef264"
          ctx.shadowColor = "#a3e635"
          ctx.shadowBlur = 10
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden glass-panel border border-white/10 tech-grid-bg"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair block"
      />

      {/* Floating HUD Annotations */}
      <div className="absolute top-4 left-4 flex flex-col gap-1 font-mono text-[10px] sm:text-xs text-zinc-400 bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
          <span className="text-zinc-200 font-semibold tracking-wider">INTELLIGENT SYSTEMS HUD</span>
        </div>
        <span className="text-zinc-500">SYS::DEBERTA · FASTSEN2SR · MERN</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-zinc-400 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 pointer-events-none">
        <span className="text-zinc-300">
          NODE DYNAMICS: <span className="text-[#a3e635]">CONVERGED</span>
        </span>
        <span className="hidden sm:inline text-zinc-500">VJTI COMP_ENG / 2028</span>
        <span className="text-zinc-400">FPS: 60 · LOW_LATENCY</span>
      </div>
    </div>
  )
}
