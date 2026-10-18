import React, { useState } from "react"
import { Play, RefreshCw, Cpu } from "lucide-react"

const SAMPLES = [
  {
    type: "AI-Generated",
    text: "In conclusion, the paradigm of modern distributed systems fundamentally underscores the imperative necessity of scalable fault tolerance. Consequently, microservice architectures meticulously orchestrate disparate communication protocols to maximize operational throughput."
  },
  {
    type: "Human-Authored",
    text: "We ran into this weird race condition last Tuesday when two users clicked buy at the exact same millisecond. I spent four hours debugging Redis locks before realizing our worker threads weren't syncing sessions properly."
  }
]

export const AiDetectorSimulator: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState(0)
  const [inputText, setInputText] = useState(SAMPLES[0].text)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<{
    aiConfidence: number
    humanConfidence: number
    lexicalDiversity: number
    burstiness: number
    perplexityRating: string
    prediction: "Likely Synthetic / AI-Generated" | "Likely Human-Written"
  } | null>({
    aiConfidence: 96.4,
    humanConfidence: 3.6,
    lexicalDiversity: 0.48,
    burstiness: 0.22,
    perplexityRating: "Uniform / Low Variance",
    prediction: "Likely Synthetic / AI-Generated"
  })

  const runAnalysis = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      // Deterministic simulation based on stylometric traits
      const isAI =
        inputText.toLowerCase().includes("paradigm") ||
        inputText.toLowerCase().includes("consequently") ||
        (inputText.length > 180 && !inputText.includes("weird"))

      if (isAI) {
        setResult({
          aiConfidence: 94.8,
          humanConfidence: 5.2,
          lexicalDiversity: 0.45,
          burstiness: 0.19,
          perplexityRating: "Monotonic / Low Variance",
          prediction: "Likely Synthetic / AI-Generated"
        })
      } else {
        setResult({
          aiConfidence: 8.3,
          humanConfidence: 91.7,
          lexicalDiversity: 0.82,
          burstiness: 0.74,
          perplexityRating: "High Variance / Conversational",
          prediction: "Likely Human-Written"
        })
      }
      setIsAnalyzing(false)
    }, 600)
  }

  const handleSelectSample = (idx: number) => {
    setSelectedSample(idx)
    setInputText(SAMPLES[idx].text)
  }

  return (
    <div className="w-full glass-panel rounded-2xl border border-white/10 p-5 sm:p-6 flex flex-col gap-5 tech-dot-bg">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-white">
          <Cpu className="w-4 h-4 text-[#a3e635]" />
          <span className="font-semibold uppercase tracking-wider">NLP Pipeline Simulation</span>
        </div>

        {/* Sample Selectors */}
        <div className="flex items-center gap-2">
          {SAMPLES.map((sample, idx) => (
            <button
              key={sample.type}
              type="button"
              onClick={() => handleSelectSample(idx)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                selectedSample === idx
                  ? "bg-[#a3e635]/20 text-[#a3e635] border border-[#a3e635]/40"
                  : "bg-white/5 text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              {sample.type}
            </button>
          ))}
        </div>
      </div>

      {/* Textarea Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ai-input" className="text-xs font-mono text-zinc-400 flex items-center justify-between">
          <span>INPUT PROSE FOR FEATURE EXTRACTION:</span>
          <span className="text-[10px] text-zinc-500">{inputText.length} CHARS</span>
        </label>
        <textarea
          id="ai-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={3}
          className="w-full bg-[#0a0d14] rounded-xl border border-white/10 p-3.5 text-xs sm:text-sm font-sans text-zinc-200 focus:outline-none focus:border-[#a3e635]/50 resize-none font-mono"
        />
      </div>

      {/* Run Button */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={runAnalysis}
          disabled={isAnalyzing}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#a3e635] text-black font-semibold text-xs font-mono hover:bg-[#bef264] transition-all disabled:opacity-50"
        >
          {isAnalyzing ? (
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current" />
          )}
          <span>{isAnalyzing ? "EXTRACTING FEATURES..." : "RUN CLASSIFIER"}</span>
        </button>

        <span className="text-[11px] font-mono text-zinc-500">
          MODEL: DeBERTa-v3 + spaCy Stylometry
        </span>
      </div>

      {/* Results View */}
      {result && (
        <div className="mt-2 pt-4 border-t border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">CLASSIFICATION OUTCOME:</span>
            <span
              className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${
                result.prediction.includes("Synthetic")
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                  : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
              }`}
            >
              {result.prediction}
            </span>
          </div>

          {/* Probability Bar */}
          <div className="flex flex-col gap-1.5 font-mono text-xs">
            <div className="flex justify-between text-zinc-400 text-[11px]">
              <span>AI PROBABILITY: {result.aiConfidence}%</span>
              <span>HUMAN PROBABILITY: {result.humanConfidence}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden flex">
              <div
                className="bg-amber-400 transition-all duration-500"
                style={{ width: `${result.aiConfidence}%` }}
              />
              <div
                className="bg-emerald-400 transition-all duration-500"
                style={{ width: `${result.humanConfidence}%` }}
              />
            </div>
          </div>

          {/* Stylometric Breakdown */}
          <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-zinc-400">
            <div className="bg-[#0c0f17] p-2.5 rounded-lg border border-white/5">
              <span className="text-zinc-500 block">TYPE-TOKEN RATIO</span>
              <span className="text-white font-semibold text-xs">{result.lexicalDiversity}</span>
            </div>
            <div className="bg-[#0c0f17] p-2.5 rounded-lg border border-white/5">
              <span className="text-zinc-500 block">BURSTINESS INDEX</span>
              <span className="text-white font-semibold text-xs">{result.burstiness}</span>
            </div>
            <div className="bg-[#0c0f17] p-2.5 rounded-lg border border-white/5">
              <span className="text-zinc-500 block">PERPLEXITY VARIANCE</span>
              <span className="text-white font-semibold text-xs truncate">{result.perplexityRating}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
