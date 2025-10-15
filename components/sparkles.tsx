"use client"
import { useEffect, useState } from "react"
interface Sparkle {
    id: number
    x: number
    y: number
    size: number
   delay: number
}
export function Sparkles() {
    const [sparkles, setSparkles] = useState<Sparkle[]>([])

    useEffect(() => {
        //get somee sparkleess
        const newSparkles: Sparkle[] = Array.from({ length: 20}, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random()* 5+3,
            delay: Math.random() * 2,
        }))
        setSparkles(newSparkles)
    }, [])
    return (
        <div className="fixed inser-0 pointer-events-none z-10 overflow-hidden" >
        {sparkles.map((sparkle) => (
            <div
              key= {sparkle.id}
            className="absolute rounded-full bg-amber-300/60 sparkle-effect"
            style={{
                left: '${sparkle.x}%',
                top: '${sparkle.y}%',
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                animationDelay: `${sparkle.delay}s`,
            }}
            />
        ))}
        </div>

        
        )}
