import Image from "next/image";
import { MagicalBackground } from "@/components/magical-background";
import { Sparkles } from "@/components/sparkles";
export default function Home() {
  return (
  <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MagicalBackground />
      <Sparkles />
      {/* effeeccttt */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* k rakham yrr*/}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 bg-gradient-to b from-amber-800 to-amber-950 rounder-full blur-xl opacity-50 glow-pulse"/>
            <div className="relative text-8xl candle-flicker">  
              

            </div>
          </div>
        </div>
        </div>
      </main>
  );
}
