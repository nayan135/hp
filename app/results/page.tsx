//rewritng result page for now hehe
"use client"
import { MagicalBackground } from "@/components/magical-background"
import { Sparkles } from "@/components/sparkles"
import { House } from "@/lib/house"
import { use, useState } from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { HouseCard } from "@/components/housecard"
import { houses } from "@/lib/house"
import Link from "next/link"
import { useAudio } from "@/hooks/audio"

export default function ResultsPage() {
  const router = useRouter()
  const [house, setHouse] = useState<House | null>(null)
  const [reasoning, setReasoning] = useState<string>("")

  const [isRevealing, setIsRevealing] = useState(false)
  const {play: sortingHatReveal} = useAudio("/sound/sortinghatreveal.mp3", false)

  useEffect(() => {
    const resultStr = sessionStorage.getItem("sortingResult")

    if(!resultStr){
      router.push("/quiz")
      return
    }
    try{
      const result = JSON.parse(resultStr)
      sortingHatReveal()

      setTimeout( ()=> {
        const houseName = result.house as keyof typeof houses
        setHouse(houses[houseName])
        setReasoning(result.reasoning)
        setIsRevealing(false)
      },2000)
    } catch (error) {
      console.error("Error parsing sorting result:", error)
      router.push("/quiz")
    }
  }, [router, sortingHatReveal])

  const handleRetake =() => {
    sessionStorage.removeItem("sortingResult")
    router.push("/quiz")
  }

  if(isRevealing || !house){
    return (
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <MagicalBackground />
        <Sparkles />
        <div className="absolute inset-0 bg-gradient-radial from-amber-900/20 via-transparent to-transparent pointer-events-none" />
<div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-amber-500/40 rounded-full blur-3xl animate-pulse" />
          <div className="relative text-8xl animate-bounce">🎩</div>
        </div>
        <h2 className="font-[family-name:var(--font-cinzel)] text-4xl font-bold mb-4 text-balance">
          The Sorting Hat has decided...
        </h2>
        <p className="text-xl text-gray-400 italic animate-pulse">
          Better be...
        </p>
      </main>
    )
  }

  return(
    <main className="relative min-h-screen p-6 overflow-hidden pt-20">
      <MagicalBackground />
      <Sparkles />
           <div className="absolute inset-0 bg-gradient-radial from-amber-900/20 via-transparent to-transparent pointer-events-none" />
           <div className="relative z-10 py-12">


            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <HouseCard house={house} reasoning={reasoning} />

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 max-w-4xl mx-auto">
                <button onClick={handleRetake} className="px-8 py-3 bg-gradient-to-b from-amber-100 to-amber-50 border-2 border-amber-900 font-[family-name:var(--font-cinzel)] font-semibold rounded hover:from-amber-200 hover:to-amber-100 transition-all hover:shadow-lg hover:border-amber-900/50"
          >
            Retake The Quiz</button>
            <Link href="/" >
            <button className="w-full px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 text-amber-50 rounded shadow-lg hover:shadow-xl transition-all">
              Return to Home
            </button>
            </Link>
              </div>
            </div>  
           </div>
             </main>
  )}
  