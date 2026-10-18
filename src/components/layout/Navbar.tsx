import React, { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

const NAV_ITEMS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Open Source", href: "#opensource" },
]

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = ["projects", "about", "experience", "skills", "opensource", "contact"]
      const scrollPosition = window.scrollY + 250

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-5 sm:px-7 py-3 sm:py-3.5 pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? "bg-[#101115]/95 shadow-2xl shadow-black/80 border border-white/12 backdrop-blur-xl"
            : "bg-[#14151a]/90 shadow-xl shadow-black/50 border border-white/10 backdrop-blur-md"
        }`}
      >
        {/* Brand Name in elegant serif display matching reference */}
        <a
          href="#hero"
          className="font-serif-display text-xl sm:text-2xl font-normal text-white tracking-wide hover:opacity-80 transition-opacity"
          aria-label="Shreyansh Mojidra Home"
        >
          Shreyansh Mojidra
        </a>

        {/* Center / Right Links matching demo layout */}
        <div className="flex items-center gap-6 sm:gap-8">
          <nav className="hidden md:flex items-center gap-7 text-xs font-sans font-normal tracking-normal text-zinc-300">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-white ${
                    isActive ? "text-white font-medium" : "text-zinc-300"
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* "Let's talk ↗" Pill Button exactly matching demo */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs font-sans font-medium text-white bg-[#1e2027]/90 border border-white/15 hover:border-white/40 hover:bg-[#252833] transition-all duration-200 shadow-sm"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-zinc-300 hover:text-white bg-[#1c1d24] border border-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl border border-white/10 bg-[#0d0e12]/95 backdrop-blur-2xl p-4 shadow-2xl pointer-events-auto">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-sans text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-zinc-600">→</span>
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between px-4">
              <a
                href="/resume/Shreyansh_Mojidra_Resume.pdf"
                download="Shreyansh_Mojidra_Resume.pdf"
                className="text-xs text-zinc-400 hover:text-white font-mono"
              >
                Download Resume PDF
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-white font-sans font-medium flex items-center gap-1"
              >
                Let's talk <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
