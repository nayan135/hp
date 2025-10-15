import { Card } from "@/components/ui/card"
import { House, houses } from "@/lib/house"

interface HouseCardProps {
  house: House
  reasoning?: string
}

export function HouseCard({ house, reasoning }: HouseCardProps) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">


        <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm border-2 border-border shadow-2xl">
         <div className="text-center mb-8">
            <div className={`text-8xl mb-4 ${house.colors.primary}`}>{house.emoji}</div>
           <h1 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-6xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${house.colors.gradient} bg-clip-text text-transparent`}>
              {house.name}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground italic mb-6">{house.motto}</p>
           {reasoning && (
            <div className="bg-secondary/50 rounded-lg p-6 mb-6">
              <p className="text-base leading-relaxed">{reasoning}</p>
            </div>
           )}
           <p className="text-base leading-relaxed max-w-2xl mx-auto">{house.description}</p>

          </div>

          {/* ghar ki baatee */}
<div className="flex flex-wrap justify-center gap-3 mb-8">
          {house.traits.map((trait) => (
            <span key={trait} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium border border-border">
              {trait}
            </span>
          ))}
        </div>
      </Card>


      {/* kuch aur vii */}
       
    </div>

  )}
