"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

export function GreatHallNavbar() {
    const[scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll =() => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const scrollProgess=Math.min(scrollY/300,1)

    return(
        <nav className="fixed top-0 left-0 right-0 z-50 ponter-event-none">
            <motion.div className="relative h-20 pointer-events-auto" style={{transform: 'scaleY(${1-scrollProgress*0.3}}', tranformOrigin: "top",}}
            >
                <div className="absolute inset-0 bg-gradient-tp-b form-amber-100 to-amber50 border-b-2 border-amber-900/39 shadow-lg">
                
                <div className="absolute inset-0 opacity-20 mix-blend-multiplyblend-" style={{backgroundImage: 'url(/images/great-hall-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(8px) brightness(0.8)'}}/>
</div>


<div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
    <div className="text-9xl">🦅</div>
</div>
<div className="relative h-full flex items-center justify-between px-8 max-w-7xl mx-auto">
 <Link href="/" className="pointer-events-auto">
            <div className="flex items-center gap-3 hover:opacity-80 transition-opacity">

 <span className="text-2xl">🎩</span>
              <span className="font-[family-name:var(--font-cinzel)] text-lg font-bold text-amber-900">
                Sorting Hat
              </span>
</div>
</Link>
 <div className="flex items-center gap-8">
            <Link href="/" className="pointer-events-auto">
              <span className="font-[family-name:var(--font-cinzel)] text-amber-900 hover:text-amber-700 transition-colors">
                Home
              </span>
            </Link>
            <Link href="/quiz" className="pointer-events-auto">
              <span className="font-[family-name:var(--font-cinzel)] text-amber-900 hover:text-amber-700 transition-colors">
                Begin Quiz
              </span>
            </Link>
          </div>
        </div>
            </motion.div>
        </nav>
    )
}