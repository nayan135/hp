"use client"

import { useEffect, useState } from "react"


interface Footprint {
  id: number
  left: number
  delay: number
}

export function MaraudersMapFooter() {
  const [footprints, setFootprints] = useState<Footprint[]>([])

  useEffect(() => {
    // Generate random footprints
    const newFootprints = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setFootprints(newFootprints)
  }, [])


    return (
        <footer className="relative bg-gradient-to-b from-amber-50 to-amber-100 border-t-2 border-amber-900/30 py-12 overflow-hidden">

        <div className="absolute inset-0 opacity-30 mix-blend-multiply" style={{backgroundImage: 'url(/images/great-hall-bg.jpg)',}}/>
        <div className="absolute inset-0 overflow-hidden">
        {footprints.map((footprint) => (
            <div
            key={footprint.id}
            className="absolute text-amber-900/20 text-2xl animated-pulse"
            style={{
                left: '${footprint.left}%',
                top: '${20+ (footprint.id % 3)*25}%',
                animation: 'footstep 4s ease-in-out infinite',
                animationDelay: '${footprint.delay}s',

            }}
            >👣</div>
        ))}
        </div>
         <div className="relative z-10 max-w-7xl mx-auto px-6">
               <div className="text-center mb-8">

                <p className="text-sm text-amber-900/70">
                Built by <span className="font-semibold">Not a Muggle</span>
                 | INspired by The Magical World of Hogwarts</p>
               </div>


               <div className="flex justify-center gap-8 flex-wrap">
                {[
                    {name: "Gryffindor", emoji: "🦁", color: "text-red-700"},
                    {name: "Hufflepuff", emoji: "🦡", color: "text-yellow-700"},
                    {name: "Ravenclaw", emoji: "🦅", color: "text-blue-700"},
                    {name: "Slytherin", emoji: "🐍", color: "text-green-700"},
                    
                ].map ((house)=> (
                    <div key={house.name} className={'text-3xl opacity-40 hover:opacity-100 transition-all duration-300 cursor-ponter transform hover:scale-110 ${house.color}'} title={house.name}>
                        {house.emoji}
                        </div>
                  
                ))}
               </div>
         </div>
   <style jsx>{`
        @keyframes footstep {
          0% {
            transform: translateX(-100px) opacity(0);
          }
          10% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateX(100vw) opacity(0);
          }
        }
      `}</style>
      </footer>
    )
    }


