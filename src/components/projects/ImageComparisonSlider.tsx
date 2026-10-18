import React, { useState, useRef, useCallback } from "react"
import { Layers, SlidersHorizontal } from "lucide-react"

export const ImageComparisonSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPos(percent)
    },
    []
  )

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Slider Visual Canvas */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={onMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={onTouchMove}
        className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 bg-[#0b0e14] shadow-2xl"
      >
        {/* RIGHT LAYER: Super-Resolved High Resolution (2.5m) */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0d1f18] via-[#091512] to-[#040908] flex items-center justify-center overflow-hidden">
          {/* Simulated High-Res GeoTIFF Graphic Representation */}
          <svg className="w-full h-full opacity-80" viewBox="0 0 800 500" preserveAspectRatio="none">
            <defs>
              <pattern id="highres-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#highres-grid)" />
            {/* Fine urban & agricultural terrain features at 2.5m */}
            <circle cx="280" cy="200" r="90" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1.5" />
            <path d="M 120 150 Q 240 80 420 190 T 700 240" fill="none" stroke="#34d399" strokeWidth="3" />
            <path d="M 160 380 L 320 280 L 520 340 L 680 180" fill="none" stroke="#059669" strokeWidth="2.5" />
            {/* Fine sub-pixel infrastructure lines */}
            <line x1="200" y1="50" x2="200" y2="450" stroke="rgba(52, 211, 153, 0.3)" strokeDasharray="3 3" />
            <line x1="450" y1="50" x2="450" y2="450" stroke="rgba(52, 211, 153, 0.3)" strokeDasharray="3 3" />
          </svg>

          {/* High-Res Tag */}
          <div className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 px-3 py-1.5 rounded-lg text-emerald-400 font-mono text-xs font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>2.5m FASTSEN2SR (SUPER-RESOLVED)</span>
          </div>
        </div>

        {/* LEFT LAYER: Low-Res Standard Sentinel-2 (10m) - Clipped by Slider */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full min-w-[320px] bg-gradient-to-br from-[#121820] to-[#0a0d12] flex items-center justify-center">
            {/* Simulated Pixelated / Blurred 10m Input */}
            <svg className="w-full h-full opacity-60 filter blur-[3px]" viewBox="0 0 800 500" preserveAspectRatio="none">
              <defs>
                <pattern id="lowres-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lowres-grid)" />
              <circle cx="280" cy="200" r="90" fill="rgba(100, 116, 139, 0.3)" />
              <path d="M 120 150 Q 240 80 420 190 T 700 240" fill="none" stroke="#64748b" strokeWidth="8" />
              <path d="M 160 380 L 320 280 L 520 340 L 680 180" fill="none" stroke="#475569" strokeWidth="7" />
            </svg>

            {/* Low-Res Tag */}
            <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-zinc-300 font-mono text-xs font-semibold">
              10m SENTINEL-2 (INPUT BANDS)
            </div>
          </div>
        </div>

        {/* Draggable Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#a3e635] shadow-[0_0_12px_#a3e635] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#a3e635] text-black flex items-center justify-center shadow-lg pointer-events-auto cursor-ew-resize">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Technical HUD & Band Legend */}
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-zinc-400 px-1">
        <div className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          <span>Bands: B2 (Blue), B3 (Green), B4 (Red), B8 (NIR)</span>
        </div>
        <div className="text-[11px] text-zinc-500">
          DRAG SLIDER TO COMPARE SPATIAL RECONSTRUCTION
        </div>
      </div>
    </div>
  )
}
