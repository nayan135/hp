"use client"
import { MagicalBackground } from "@/components/magical-background"
import { Sparkles } from "@/components/sparkles"
import { houses, type HouseName } from "@/lib/house"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ResultsPage() {
  const router = useRouter()
  const [house, setHouse] = useState<HouseName | null>(null)
  const [reasoning, setReasoning] = useState<string>("")
  const [isRevealing, setIsRevealing] = useState(true)

  useEffect(() => {
    // aab aayegaa aasli sach bahar
    const sortingResult = sessionStorage.getItem("sortingResult")
    
    if (!sortingResult) {
      router.push("/quiz")
      return
    }

    try {
      const result = JSON.parse(sortingResult)

      
      setTimeout(() => {
        setHouse(result.house)
        setReasoning(result.reasoning)
        setIsRevealing(false)
      }, 2000)
    } catch (error) {
      console.error("Error parsing sorting result:", error)
      router.push("/quiz")
    }
  }, [router])

  const handleRetake = () => {
    sessionStorage.removeItem("sortingResult")
    router.push("/quiz")
  }


  if (isRevealing || !house) {
    return (
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
        <MagicalBackground />
        <Sparkles />

        <div className="relative z-20 text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-amber-500/40 rounded-full blur-3xl animate-pulse" />
            <div className="relative text-8xl animate-bounce">🎩</div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-amber-100">
            The Sorting Hat is deciding...
          </h2>
          <p className="text-xl text-amber-200 italic animate-pulse">Better be...</p>
        </div>
      </main>
    )
  }

  const selectedHouse = houses[house]

  if (!selectedHouse) {
    router.push("/quiz")
    return null
  }


  
  return (
    <main className="relative min-h-screen p-6 overflow-hidden">
      <MagicalBackground />
      <Sparkles />
      <div className="absolute inset-0 bg-gradient-radial from-amber-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 py-12">
        {/* Animated entrance */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <HouseCard house={selectedHouse} reasoning={reasoning} />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 max-w-4xl mx-auto">
          <Button
            onClick={handleRetake}
            variant="outline"
            size="lg"
            className="border-2 hover:bg-secondary/50 bg-transparent"
          >
            Retake the Quiz
          </Button>
          <Link href="/">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-primary-foreground font-semibold"
            >
              Return to Start
            </Button>
          </Link>
        </div>

        {/* Share prompt */}
        <div className="text-center mt-8 text-muted-foreground">
          <p className="text-sm">Share your house with fellow witches and wizards!</p>
        </div>
      </div>
    </main>
  )
}