import Image from "next/image";
import Link from "next/link";
import { MagicalBackground } from "@/components/magical-background";
import { Sparkles } from "@/components/sparkles";
import { GreatHallNavbar } from "@/components/great-hall-navbar";
import { MaraudersMapFooter } from "@/components/marauders-map-footer";
export default function Home() {
  return (
  <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MagicalBackground />
      <Sparkles />
      <GreatHallNavbar />
    
      {/* effeeccttt */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* k rakham yrr*/}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500/40 rounded-full blur-3xl animate-pulse" />
            <div className="relative text-8xl animate-bounce">🎩</div>
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-6xl font-bold mb-6 text-amber-50 drop-shadow-lg">
          Welcome To The Sorting Hat Experience
        </h1>
        
        <Link href="/quiz" 
          className="inline-block px-8 py-4 bg-gradient-to-b from-amber-100 to-amber-50 border-2 border-amber-900 font-[family-name:var(--font-cinzel)] text-xl font-semibold rounded-lg hover:from-amber-200 hover:to-amber-100 transition-all hover:shadow-2xl hover:scale-105 text-amber-900">
          Know Your House
        </Link>
      </div>

 
    </main>
  );
}
