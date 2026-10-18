import React, { useEffect, useState } from "react"

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll <= 0) return
      const currentScroll = window.scrollY
      setProgress(Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100)))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-transparent via-[#a3e635] to-[#bef264] transition-[width] duration-75 ease-out shadow-[0_0_8px_#a3e635]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
