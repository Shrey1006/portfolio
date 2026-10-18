import { useState, useEffect } from "react"

export interface PlatformStats {
  platform: string
  handle: string
  currentRating: number | null
  maxRating: number | null
  rank: string | null
  stars: number | null
  totalSolved: number | null
  easySolved: number | null
  mediumSolved: number | null
  hardSolved: number | null
  profileUrl: string
  avatarUrl: string | null
}

export interface LiveCodingStats {
  totalSolved: number
  platforms: PlatformStats[]
  loading: boolean
  error: string | null
  lastUpdated: Date | null
}

const CODOLIO_API = "https://api.codolio.com/profile?userKey=Shreythecoder"

// Baseline fallback values from verified resume data
const FALLBACK: Omit<LiveCodingStats, "loading" | "error" | "lastUpdated"> = {
  totalSolved: 556,
  platforms: [
    {
      platform: "leetcode",
      handle: "shreycodes1008",
      currentRating: null,
      maxRating: 1500,
      rank: null,
      stars: null,
      totalSolved: 418,
      easySolved: 149,
      mediumSolved: 216,
      hardSolved: 53,
      profileUrl: "https://leetcode.com/u/shreycodes1008/",
      avatarUrl: null,
    },
    {
      platform: "codeforces",
      handle: "shreythecoder",
      currentRating: 1216,
      maxRating: 1315,
      rank: "pupil",
      stars: null,
      totalSolved: 82,
      easySolved: null,
      mediumSolved: null,
      hardSolved: null,
      profileUrl: "https://codeforces.com/profile/shreythecoder",
      avatarUrl: null,
    },
    {
      platform: "codechef",
      handle: "shreycoder_10",
      currentRating: 1430,
      maxRating: 1430,
      rank: null,
      stars: 2,
      totalSolved: 16,
      easySolved: null,
      mediumSolved: null,
      hardSolved: null,
      profileUrl: "https://www.codechef.com/users/shreycoder_10",
      avatarUrl: null,
    },
    {
      platform: "geeksforgeeks",
      handle: "shreymojtsfq",
      currentRating: null,
      maxRating: null,
      rank: null,
      stars: null,
      totalSolved: 40,
      easySolved: 14,
      mediumSolved: 23,
      hardSolved: 3,
      profileUrl: "https://www.geeksforgeeks.org/user/shreymojtsfq/",
      avatarUrl: null,
    },
  ],
}

const PLATFORM_URLS: Record<string, string> = {
  leetcode: "https://leetcode.com/u/shreycodes1008/",
  codeforces: "https://codeforces.com/profile/shreythecoder",
  codechef: "https://www.codechef.com/users/shreycoder_10",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/shreymojtsfq/",
}

export function useLiveCodingStats(): LiveCodingStats {
  const [stats, setStats] = useState<LiveCodingStats>({
    ...FALLBACK,
    loading: true,
    error: null,
    lastUpdated: null,
  })

  useEffect(() => {
    let cancelled = false

    async function fetchStats() {
      try {
        const res = await fetch(CODOLIO_API)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        const data = json.data

        if (!data?.platformProfiles?.platformProfiles) {
          throw new Error("Unexpected API response structure")
        }

        const platforms: PlatformStats[] = data.platformProfiles.platformProfiles.map(
          (p: any) => ({
            platform: p.platform,
            handle: p.userStats?.handle ?? "",
            currentRating: p.userStats?.currentRating ?? null,
            maxRating: p.userStats?.maxRating ?? null,
            rank: p.userStats?.rank ?? null,
            stars: p.userStats?.stars ?? null,
            totalSolved: p.totalQuestionStats?.totalQuestionCounts ?? null,
            easySolved: p.totalQuestionStats?.easyQuestionCounts ?? null,
            mediumSolved: p.totalQuestionStats?.mediumQuestionCounts ?? null,
            hardSolved: p.totalQuestionStats?.hardQuestionCounts ?? null,
            profileUrl: PLATFORM_URLS[p.platform] ?? "#",
            avatarUrl: p.userStats?.titlePhoto ?? null,
          })
        )

        const totalSolved = platforms.reduce(
          (sum, p) => sum + (p.totalSolved ?? 0),
          0
        )

        if (!cancelled) {
          setStats({
            totalSolved,
            platforms,
            loading: false,
            error: null,
            lastUpdated: new Date(),
          })
        }
      } catch (err: any) {
        if (!cancelled) {
          setStats({
            ...FALLBACK,
            loading: false,
            error: err.message ?? "Failed to fetch stats",
            lastUpdated: null,
          })
        }
      }
    }

    fetchStats()
    return () => { cancelled = true }
  }, [])

  return stats
}
