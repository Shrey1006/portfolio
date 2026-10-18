export interface PullRequestItem {
  prNumber: number
  title: string
  repository: string
  status: "merged" | "open"
  description: string
  category: "Framework Fix" | "Performance" | "Feature" | "Documentation" | "Refactor"
  url: string
  linesAdded?: number
  linesRemoved?: number
}

export const contributionsData: PullRequestItem[] = [
  {
    prNumber: 793,
    title: "Fix state mutation edge case in reactive pipeline handler",
    repository: "AlphaOneLabs / core-engine",
    status: "merged",
    description: "Identified and patched an unhandled object mutation in the event subscription loop, preventing race conditions during asynchronous dispatch.",
    category: "Framework Fix",
    url: "https://github.com/AlphaOneLabs",
    linesAdded: 38,
    linesRemoved: 14
  },
  {
    prNumber: 919,
    title: "Refactor async stream buffer handling for high-throughput batching",
    repository: "AlphaOneLabs / streaming-toolkit",
    status: "merged",
    description: "Replaced unbounded queue accumulation with backpressure-aware batch slices, decreasing peak memory overhead by 22% during burst operations.",
    category: "Performance",
    url: "https://github.com/AlphaOneLabs",
    linesAdded: 64,
    linesRemoved: 41
  },
  {
    prNumber: 951,
    title: "Implement sanitization middleware for multipart payload validation",
    repository: "AlphaOneLabs / api-gateway",
    status: "merged",
    description: "Added strict MIME-type inspection and payload size guards before routing to internal storage workers, resolving vulnerability in upload endpoints.",
    category: "Framework Fix",
    url: "https://github.com/AlphaOneLabs",
    linesAdded: 52,
    linesRemoved: 9
  },
  {
    prNumber: 895,
    title: "Support configurable tensor precision quantization flags",
    repository: "OpenScienceLabs / ml-inference-bench",
    status: "open",
    description: "Proposes runtime configuration parameter to toggle INT8 vs FP16 weight quantization during automated benchmark evaluations.",
    category: "Feature",
    url: "https://github.com/OpenScienceLabs",
    linesAdded: 88,
    linesRemoved: 12
  },
  {
    prNumber: 948,
    title: "Enhance cross-platform file path resolution in build runner",
    repository: "AlphaOneLabs / devtools-cli",
    status: "open",
    description: "Standardizes POSIX and Windows backslash path normalization in automated artifact bundling routines.",
    category: "Refactor",
    url: "https://github.com/AlphaOneLabs",
    linesAdded: 27,
    linesRemoved: 19
  },
  {
    prNumber: 998,
    title: "Add comprehensive integration test suites for WebSocket reconnect logic",
    repository: "AlphaOneLabs / client-sdk",
    status: "open",
    description: "Introduces mock connection drop simulations and verifies exponential backoff retry algorithms under flaky network conditions.",
    category: "Feature",
    url: "https://github.com/AlphaOneLabs",
    linesAdded: 114,
    linesRemoved: 6
  }
]
