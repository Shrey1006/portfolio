import React from "react"

interface SectionHeadingProps {
  number: string
  tag: string
  title: string
  highlight?: string
  description?: string
  align?: "left" | "center"
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  highlight,
  description,
  align = "left"
}) => {
  return (
    <div className={`mb-12 sm:mb-16 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {/* Category Tag & Technical Monogram */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141824] border border-white/10 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="font-mono text-xs text-[#a3e635] font-semibold">{number}</span>
        <span className="w-1 h-1 rounded-full bg-zinc-500" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">{tag}</span>
      </div>

      {/* Main Headline */}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-gradient-lime font-display">
            {highlight}
          </span>
        )}
      </h2>

      {/* Supporting Copy */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
